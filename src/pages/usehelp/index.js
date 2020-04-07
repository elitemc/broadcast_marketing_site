import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function UseHelp() {
  // let defaultUrl = 'http://mktbeta.yingliboke.cn/docs';
  let defaultUrl = 'http://yingliboke.cn/docs';

  return (
    <Layout
      title={`使用帮助`}
    // description="Description will go into a meta tag in <head />"
    >
      <div className={styles.helpContainer}>
        <div className={styles.helpTitle}>
          <h2 className={styles.useHelpTitle}>使用帮助</h2>
          <div style={{ textAlign: 'center', color: '#8494a6' }}>
            按照不同身份阅读指南，帮助您快速对功能操作了如指掌
          </div>
        </div>
        <div className={styles.help_container}>
          <div className={styles.identity}>
            <div className={styles.identityLi}>
              <a href={defaultUrl + '/Admin'} target="_blank">
                <img width={80} src={useBaseUrl('/img/usinghelp_Adm.png')} />
              </a>
              <a
                href={defaultUrl + '/Admin'}
                target="_blank"
                style={{ marginTop: '35px' }}>
                <div className={styles.identityBtn} type="primary">
                  我是管理员
                </div>
              </a>
            </div>
            <div className={styles.identityLi}>
              <a href={defaultUrl + '/Teacher'} target="_blank">
                <img width={80} src={useBaseUrl('/img/teacher_Adm.png')} />
              </a>
              <a
                href={defaultUrl + '/Teacher'}
                style={{ marginTop: '35px' }}
                target="_blank">
                <div className={styles.identityBtn} type="primary">
                  我是老师
                </div>
              </a>
            </div>
            <div className={styles.identityLi}>
              <a href={defaultUrl + '/Student'} target="_blank">
                <img width={80} src={useBaseUrl('/img/students_Adm.png')} />
              </a>
              <a
                href={defaultUrl + '/Student'}
                style={{ marginTop: '35px' }}
                target="_blank">
                <div className={styles.identityBtn} type="primary">
                  我是学员
                </div>
              </a>
            </div>
          </div>
          <div
            style={{
              color: '#8494a6',
              width: '100%',
              textAlign: 'center',
              paddingTop: '2vw',
            }}>
            需要更多帮助？请致电 400-931-8118 联系我们。
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default UseHelp;
