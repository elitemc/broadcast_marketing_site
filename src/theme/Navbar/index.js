/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useState, useEffect } from 'react';
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
import { Button } from 'antd';

import styles from './styles.module.css';

function NavLink({ to, href, label, position, ...props }) {
  const toUrl = useBaseUrl(to);
  useEffect(() => {
    const SLS = new (window.Tracker || function () { })(
      'cn-shenzhen.log.aliyuncs.com',
      'yingliboke-dev',
      'frontend',
    )

    SLS.fillZero = num => (num < 10 ? `0${num}` : num);
    SLS.pushLog = function (data = {}) {
      let now = new Date();
      Object.assign(data, {
        user: 0,
        'user-agent': navigator.userAgent,
        asctime: `${this.fillZero(now.getFullYear())}-${this.fillZero(
          now.getMonth() + 1,
        )}-${this.fillZero(now.getDate())} ${this.fillZero(
          now.getHours(),
        )}:${this.fillZero(now.getMinutes())}:${this.fillZero(
          now.getSeconds(),
        )},${(now.getMilliseconds() + '').padStart(3, 0)}`,
        platform: 'MKT',
        level: data.level || 'ERROR',
        //此处写固定且动态的参数
      });

      // DEBUG
      // let str = '';
      Object.entries(data).forEach(([key, value]) => {
        // str +=
        //   (/method|payload|url/.test(key) ? `request-${key}` : key) +
        //   '=' +
        //   value +
        //   '&';
        this.push(
          /method|payload|url/.test(key) ? `request-${key}` : key,
          key === 'payload' ? JSON.stringify(value) : value,
        );
      });
      this.logger();
      // console.log('测试提交的log', str);
    };

    // 防止 对象 被修改，对 sls 进行冻结
    window.sls = Object.freeze(SLS);

    // 页面奔溃上传
    window.onerror = function (
      errorMessage,
      scriptURI,
      lineNumber,
      columnNumber,
      errorObj,
    ) {
      let errDetail = `
    错误信息：${errorMessage}
    出错文件：${scriptURI}
    lineNumber:${lineNumber}
    出错列号：${columnNumber}
    错误详情：${errorObj}
    报错路径：${window.location.href}`;
      // 日志上报，此时无法得知请求的路由，方法和参数，因此如果页面在奔溃时机的情况下我们只需要上传 message 即可，但是数据越详细越好
      // console.log(errDetail);
      this.sls.pushLog({
        message: errDetail,
      });
    };
  }, []);

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
            label === '立即体验' ? styles.navbarBtn : styles.navbarLogin
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
  const { siteConfig = {} } = context;
  const { baseUrl, themeConfig = {} } = siteConfig;
  const { navbar = {}, disableDarkMode = false } = themeConfig;
  const { title, logo = {}, links = [], hideOnScroll = false } = navbar;

  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useLockBodyScroll(sidebarShown);
  const handler = () => {
    const banner = document.getElementById('homeBanner');
    if (isHomePage) {
      const { left, right, top, bottom } = banner.getBoundingClientRect();
      // console.log({left, right, top, bottom});
      const innerHeight = window.innerHeight,
        innerWidth = window.innerWidth;
      setShowBanner(
        state =>
          (top >= 0 && top <= innerHeight && left >= 0 && left <= innerWidth) ||
          (bottom >= 100 &&
            bottom <= innerHeight &&
            right >= 0 &&
            right <= innerWidth) ||
          (top <= 0 &&
            left <= 0 &&
            right >= innerWidth &&
            bottom >= innerHeight),
      );
    }
  };
  const asyncHandler = () => {
    const timer = setTimeout(() => {
      handler();
      clearTimeout(timer);
    }, 1000 / 60);
  };

  function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }
  useEffect(() => {
    if (window !== undefined) {
      var _hmt = _hmt || [];

      var hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?580947b073cee1cc9b9e7532c32440e2';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
    }

    var _hmt1 = _hmt1 || [];

    var hm1 = document.createElement('script');
    hm1.src =
      'https://goutong.baidu.com/site/839/580947b073cee1cc9b9e7532c32440e2/b.js?siteId=14911792';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm1, s);
    setIsHomePage(state => !!document.getElementById('homeBanner'));
    let timer = setInterval(() => {
      let nb_icon_wrap = document.getElementById('nb_icon_wrap');
      if (nb_icon_wrap) {
        nb_icon_wrap.style.display = 'none';
        clearInterval(timer);
      }
    }, 800);
    handler();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    window.onhashchange = handler;
    // window.addEventListener('hashchange', () => {
    //   console.log(68687);
    // });
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);

      // window.removeEventListener('hashchange', handler);
    };
  });

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
      style={{
        padding: '0 9.2vw',
        fontFamily: 'PingFangSC-Regular',
      }}>
      <MySEO />
      <div
        className="navbar__inner"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
        }}>
        <div className="navbar__items">
          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            onClick={showSidebar}
            onKeyDown={showSidebar}>
            <svg
              style={isHomePage && showBanner ? { color: '#FFFFFF' } : {}}
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
                  className={classnames('navbar__logo', styles.logoImg)}
                  src={useBaseUrl('img/albedo_ logo.png')}
                  alt={logo.alt}
                  onClick={asyncHandler}
                />
              ) : (
                  <img
                    className={classnames('navbar__logo', styles.logoImg)}
                    src={logoImageUrl}
                    alt={logo.alt}
                    onClick={asyncHandler}
                  />
                ))}
            {title != null && (
              <strong
                className={isSearchBarExpanded ? styles.hideLogoText : ''}>
                {title}
              </strong>
            )}
          </Link>
          <div className={styles.blue_item}>
            {links
              .filter(linkItem => linkItem.position !== 'right')
              .map((linkItem, i) => (
                <NavLink
                  onClick={asyncHandler}
                  {...linkItem}
                  key={i}
                  style={{ padding: '18px 0', margin: '0 20px', height: '60px' }}
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
              <NavLink
                {...linkItem}
                key={i}
                style={{ marginLeft: '50px', padding: '0' }}
              />
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
              <img
                className="navbar__logo"
                src={logoImageUrl}
                alt={logo.alt}
                onClick={asyncHandler}
              />
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
                <li className="menu__list-item" key={i} onClick={asyncHandler}>
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
