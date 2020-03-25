/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';

import classnames from 'classnames';

import useThemeContext from '@theme/hooks/useThemeContext';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import 'antd/dist/antd.css';
import {Button} from 'antd';

import styles from './styles.module.css';

function NavLink({to, href, label, position, ...props}) {
  const toUrl = useBaseUrl(to);

  return (
    <Link
      className="navbar__item navbar__link"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            activeClassName:
              to === '#solution' || to === '#case' ? '' : styles.activeLink,
            to: toUrl,
          })}
      {...props}>
      {position === 'right' ? (
        <div
          className={
            label === '免费使用' ? styles.navbarBtn : styles.navbarLogin
          }>
          {label}
        </div>
      ) : (
        label
      )}
    </Link>
  );
}

function Navbar() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl, themeConfig = {}} = siteConfig;
  const {navbar = {}, disableDarkMode = false} = themeConfig;
  const {title, logo = {}, links = [], hideOnScroll = false} = navbar;

  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  useLockBodyScroll(sidebarShown);
  useEffect(() => {
    const handler = () => {
      const banner = document.getElementById('homeBanner');
      if (isHomePage) {
        const {left, right, top, bottom} = banner.getBoundingClientRect();
        // const {innerHeight, innerWidth} = this;
        const innerHeight = window.innerHeight,
          innerWidth = window.innerWidth;
        // console.log(window);
        setShowBanner(
          state =>
            (top >= 0 &&
              top <= innerHeight &&
              left >= 0 &&
              left <= innerWidth) ||
            (bottom > 80 &&
              bottom <= innerHeight &&
              right >= 0 &&
              right <= innerWidth) ||
            (top <= 0 &&
              left <= 0 &&
              right >= innerWidth &&
              bottom > innerHeight),
        );
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });

  useEffect(() => {
    var _hmt = _hmt || [];
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?e9ace3c27da1d62a7b4905e016047fe5';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
    console.log('百度商桥嵌入完毕');
    setIsHomePage(!!document.getElementById('homeBanner'));
    let timer = setInterval(() => {
      let nb_icon_wrap = document.getElementById('nb_icon_wrap');
      if (nb_icon_wrap) {
        nb_icon_wrap.style.display = 'none';
        clearInterval(timer);
      }
    }, 800);
  }, []);

  const MySEO = () => (
    <>
      <Head>
        <meta name="referrer" content="no-referrer" />
        <meta charSet="utf-8" />
      </Head>
    </>
  );
  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  const onToggleChange = useCallback(
    e => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme],
  );

  const logoLink = logo.href || baseUrl;
  const isExternalLogoLink = /http/.test(logoLink);
  const logoLinkProps = isExternalLogoLink
    ? {
        rel: 'noopener noreferrer',
        target: '_blank',
      }
    : null;
  const logoSrc = logo.srcDark && isDarkTheme ? logo.srcDark : logo.src;
  const logoImageUrl = useBaseUrl(logoSrc);
  return (
    <nav
      ref={navbarRef}
      className={classnames(
        'navbar',
        'navbar--light',
        'navbar--fixed-top',
        styles.nav,
        {
          'navbar-sidebar--show': sidebarShown,
          [styles.navbarHideable]: hideOnScroll,
          [styles.navbarHidden]: !isNavbarVisible,
          [styles.blue]: isHomePage && showBanner,
        },
      )}
      style={{padding: '0 9.2vw', fontFamily: 'PingFangSC-Regular'}}>
      <MySEO />
      <div className="navbar__inner">
        <div className="navbar__items">
          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            onClick={showSidebar}
            onKeyDown={showSidebar}>
            <svg
              style={isHomePage && showBanner ? {color: '#FFFFFF'} : {}}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false">
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </div>
          <Link className="navbar__brand" to={logoLink} {...logoLinkProps}>
            {logo != null &&
              (isHomePage && showBanner ? (
                <img
                  className="navbar__logo"
                  src={useBaseUrl('img/albedo_ logo.png')}
                  alt={logo.alt}
                />
              ) : (
                <img
                  style={{maxWidth: '98%'}}
                  className="navbar__logo"
                  src={logoImageUrl}
                  alt={logo.alt}
                />
              ))}
            {title != null && (
              <strong
                className={isSearchBarExpanded ? styles.hideLogoText : ''}>
                {title}
              </strong>
            )}
          </Link>
          <div
            style={{position: 'relative', left: '8%', width: '50vw'}}
            className={styles.blue_item}>
            {links
              .filter(linkItem => linkItem.position !== 'right')
              .map((linkItem, i) => (
                <NavLink
                  {...linkItem}
                  key={i}
                  style={{padding: '18px 0', margin: '0 20px'}}
                />
              ))}
          </div>
        </div>
        <div
          className={classnames('navbar__items', 'navbar__items--right', {
            [styles.nav_right]: showBanner && isHomePage,
          })}>
          {links
            .filter(linkItem => linkItem.position === 'right')
            .map((linkItem, i) => (
              <NavLink {...linkItem} key={i} style={{marginLeft: '25px'}} />
            ))}
          {!disableDarkMode && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              aria-label="Dark mode toggle"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Link
            className="navbar__brand"
            onClick={hideSidebar}
            to={logoLink}
            {...logoLinkProps}>
            {logo != null && (
              <img className="navbar__logo" src={logoImageUrl} alt={logo.alt} />
            )}
            {title != null && <strong>{title}</strong>}
          </Link>
          {!disableDarkMode && sidebarShown && (
            <Toggle
              aria-label="Dark mode toggle in sidebar"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {links.map((linkItem, i) => (
                <li className="menu__list-item" key={i}>
                  <NavLink
                    className="menu__link"
                    {...linkItem}
                    onClick={hideSidebar}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
