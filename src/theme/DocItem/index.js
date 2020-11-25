/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocPaginator from '@theme/DocPaginator';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import {Button} from 'antd';
import classnames from 'classnames';
import styles from './styles.module.css';

const LINK_CLASS_NAME = 'contents__link';
const ACTIVE_LINK_CLASS_NAME = 'contents__link--active';
const TOP_OFFSET = 100;

function DocTOC({headings, path}) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return (
    <div className="col col--3">
      <div className={styles.tableOfContents}>
        {path.includes('/Student') && (
          <div className={styles.watchPlatform}>
            &#x3000;
            <a href="https://www.yingliboke.cn/docs/StudentApp">
              <Button
                style={{width: '95px', backgroundColor: '#0d6fde'}}
                type="primary"
                ghost={!path.includes('/StudentApp')}>
                App 端
              </Button>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.yingliboke.cn/docs/StudentDesk">
              <Button
                style={{width: '95px', backgroundColor: '#0d6fde'}}
                type="primary"
                ghost={!path.includes('/StudentDesk')}>
                客户端
              </Button>
            </a>
          </div>
        )}
        <Headings headings={headings} />
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({headings, isChild}) {
  if (!headings.length) {
    return null;
  }
  return (
    <ul className={isChild ? '' : 'contents contents__left-border'}>
      {headings.map(heading => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function DocItem(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {url: siteUrl, title: siteTitle} = siteConfig;
  const {
    content: DocContent,
    route: {path},
  } = props;
  const {metadata} = DocContent;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    version,
  } = metadata;
  const {
    frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent;

  const metaImageUrl = siteUrl + useBaseUrl(metaImage);

  console.log('path', path);
  return (
    <>
      <Head>
        {title && (
          <title>
            {title} | {siteTitle}
          </title>
        )}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        <meta name="referrer" content="no-referrer" />
      </Head>
      <div className={styles.headNavbar}>
        <a href="/">
          <img
            src={useBaseUrl('img/homepage_logo.png')}
            style={{width: '105px', height: '53.4%'}}
            alt=""
          />
        </a>
      </div>
      <div className="padding-vert--lg" style={{marginTop: '60px'}}>
        <div className="container">
          <div className="row">
            {!hideTableOfContents && DocContent.rightToc && (
              <DocTOC headings={DocContent.rightToc} path={path} />
            )}
            <div className={classnames('col', styles.docItemCol)}>
              <div className={styles.docItemContainer}>
                <article>
                  {version && (
                    <span
                      style={{verticalAlign: 'top'}}
                      className="badge badge--info">
                      Version: {version}
                    </span>
                  )}
                  {!hideTitle && (
                    <header>
                      <h1 className={styles.docTitle}>{title}</h1>
                    </header>
                  )}

                  <div className="markdown">
                    <DocContent />
                  </div>
                </article>
                {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                  <div className="margin-vert--xl">
                    <div className="row">
                      <div className="col">
                        {editUrl && (
                          <a
                            href={editUrl}
                            target="_blank"
                            rel="noreferrer noopener">
                            <svg
                              fill="currentColor"
                              height="1.2em"
                              width="1.2em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 40 40"
                              style={{
                                marginRight: '0.3em',
                                verticalAlign: 'sub',
                              }}>
                              <g>
                                <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
                              </g>
                            </svg>
                            Edit this page
                          </a>
                        )}
                      </div>
                      {(lastUpdatedAt || lastUpdatedBy) && (
                        <div className="col text--right">
                          <em>
                            <small>
                              Last updated{' '}
                              {lastUpdatedAt && (
                                <>
                                  on{' '}
                                  <time
                                    dateTime={new Date(
                                      lastUpdatedAt * 1000,
                                    ).toISOString()}
                                    className={styles.docLastUpdatedAt}>
                                    {new Date(
                                      lastUpdatedAt * 1000,
                                    ).toLocaleDateString()}
                                  </time>
                                  {lastUpdatedBy && ' '}
                                </>
                              )}
                              {lastUpdatedBy && (
                                <>
                                  by <strong>{lastUpdatedBy}</strong>
                                </>
                              )}
                              {process.env.NODE_ENV === 'development' && (
                                <div>
                                  <small>
                                    {' '}
                                    (Simulated during dev for better perf)
                                  </small>
                                </div>
                              )}
                            </small>
                          </em>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="margin-vert--lg">
                  <DocPaginator metadata={metadata} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fotterRemark}>
        Copyright © 2018-{new Date().getFullYear()} 广东英荔国际教育科技有限公司
        <a
          href="http://beian.miit.gov.cn/"
          target="_blank"
          className={styles.footLink}>
          {' '}
          粤ICP备13044168号
        </a>
      </div>
    </>
  );
}

export default DocItem;
