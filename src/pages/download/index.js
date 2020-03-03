import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import {} from 'antd';

class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout
        title={`下载`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.download}>
          <div className={styles.downloadHeader}>
            <h4>立即下载</h4>
            <small>享受流畅、灵活、高效的直播培训体验</small>
          </div>
          <div className={styles.downloadContainer}>
            <div className={styles.audience}>
              <h5>观众端</h5>
              <div className={styles.downList}>
                <div className={styles.downItem}>
                  <div className={styles.downCode}>
                    <div className={styles.downIcon}></div>
                    <small>点击或扫描二维码下载</small>
                  </div>
                  <div className={styles.iconContain}>
                    <div className={styles.icon}></div>
                    <small>Android</small>
                  </div>
                </div>

                <div className={styles.downItem}>
                  <div className={styles.downCode}>
                    <div className={styles.downIcon}></div>
                    <small>点击或扫描二维码下载</small>
                  </div>
                  <div className={styles.iconContain}>
                    <div className={styles.icon}></div>
                    <small>IOS</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.teacher}>
              <h5>讲师端</h5>
              <div className={styles.downList}>
                <div className={styles.downItem}>
                  <div className={styles.downCode}>
                    <div className={styles.downIcon}></div>
                    <small>点击或扫描二维码下载</small>
                  </div>
                  <div className={styles.iconContain}>
                    <div className={styles.icon}></div>
                    <small>macOS</small>
                  </div>
                </div>

                <div className={styles.downItem}>
                  <div className={styles.downCode}>
                    <div className={styles.downIcon}></div>
                    <small>点击或扫描二维码下载</small>
                  </div>
                  <div className={styles.iconContain}>
                    <div className={styles.icon}></div>
                    <small>Windows</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Download;
