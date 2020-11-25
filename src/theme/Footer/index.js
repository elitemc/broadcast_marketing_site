/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLink({to, href, label, ...props}) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className={styles.footerLi}
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img style={{width: 115}} alt={alt} src={url} className={styles.footLogo} />
);

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}
      style={{
        backgroundColor: '#ffffff',
        border: 'solid 1px #f3f3f3',
        padding: '1vw 10vw',
        fontFamily: 'PingFangSC-Regular',
      }}>
      <div style={{maxWidth: '1440px', margin: '0 auto'}}>
        <div
          style={{
            display: 'flex',
            borderBottom: 'solid 1px #eaf0f7',
            padding: '2vw 0',
          }}>
          {logo && (
            <div>
              {logo && logo.src && (
                <div className="margin-bottom--sm">
                  {logo.href ? (
                    <a
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerLogoLink}>
                      <FooterLogo alt={logo.alt} url={logoUrl} />
                    </a>
                  ) : (
                    <Link to={logo.to}>
                      <FooterLogo alt={logo.alt} url={logoUrl} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="container">
            {links && links.length > 0 && (
              <div className="row footer__links" style={{paddingLeft: '10vw'}}>
                {links.map((linkItem, i) => (
                  <div key={i} className="col footer__col">
                    {linkItem.title != null ? (
                      <h4
                        className="footer__title"
                        style={{color: '#2e313c', fontSize: '14px'}}>
                        {linkItem.title}
                      </h4>
                    ) : null}
                    {linkItem.items != null &&
                    Array.isArray(linkItem.items) &&
                    linkItem.items.length > 0 ? (
                      <ul className="footer__items">
                        {linkItem.items.map((item, key) =>
                          item.html ? (
                            <li
                              key={key}
                              className={styles.footerLi}
                              dangerouslySetInnerHTML={{
                                __html: item.html,
                              }}
                              style={{margin: '0.8vw 0'}}
                            />
                          ) : (
                            <li
                              key={item.href || item.to}
                              style={{margin: '0.8vw 0'}}>
                              <FooterLink {...item} />
                            </li>
                          ),
                        )}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {copyright && (
          <div
            style={{color: '#8494a6', paddingTop: '1vw', textAlign: 'center'}}>
            {copyright}
            <a
              href="http://beian.miit.gov.cn/"
              target="_blank"
              className={styles.footLink}>
              {' '}
              粤ICP备13044168号
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
