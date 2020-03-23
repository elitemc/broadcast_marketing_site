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
  return (
    <Layout
      title={`使用帮助`}
    // description="Description will go into a meta tag in <head />"
    >
      <div className={styles.helpContainer}>
        <div className={styles.helpTitle}>
          <div
            style={{ fontSize: '30px', color: '#2e313c', marginBottom: '3vh' }}>
            使用帮助
          </div>
          <div style={{ textAlign: 'center', color: '#8494a6', }}>
            按照不同身份阅读指南，帮助您快速对功能操作了如指掌
          </div>
        </div>
        <div
          style={{
            width: '80%',
            margin: '0 auto',
            border: 'solid 1px #eff2f6',
            padding: '3vw 1vw',
          }}
        >
          <div className={styles.identity}>
            <div
              className={`${styles.identityLi} col col--4`}
            >
              <Link to="/docs/Admin">
                <img
                  width={80}
                  src={useBaseUrl('/img/usinghelp_Adm.png')}
                />
              </Link>
              <Link to="/docs/Admin" style={{ marginTop: '35px' }}>
                <Button type="primary" style={{ width: 120 }}>
                  我是管理员
                </Button>
              </Link>
            </div>
            <div className={styles.identityLi}>
              <Link to="/docs/Teacher">
                <img width={80} src={useBaseUrl('/img/teacher_Adm.png')} />
              </Link>
              <Link to="/docs/Teacher" style={{ marginTop: '35px' }}>
                <Button type="primary" style={{ width: 120 }}>
                  我是老师
                </Button>
              </Link>
            </div>
            <div className={styles.identityLi}>
              <Link to="/docs/Student">
                <img
                  width={80}
                  src={useBaseUrl('/img/students_Adm.png')}
                />
              </Link>
              <Link to="/docs/Student" style={{ marginTop: '35px' }}>
                <Button type="primary" style={{ width: 120 }}>
                  我是学员
                </Button>
              </Link>
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
