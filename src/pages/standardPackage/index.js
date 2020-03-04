import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import styles from './styles.module.css';

class StandardPackage extends React.Component {
  render() {
    return (
      <Layout
        title={`购买`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.context_Package}>
          <div className={styles.main}>
            <h1 style={{fontSize: 30}}>购买套餐</h1>
            <p style={{color: '#8494a6', margin: '20px 0 40px'}}>
              请选择适合您的套餐规格
            </p>
            <div style={{height: 80}}>
              <h3 className={styles.subTitle}>单场人数</h3>
              <ul style={{paddingLeft: 8}}>
                <li>100 人</li>
                <li>300 人</li>
                <li>600 人</li>
                <li>1,000 人</li>
                <li>1,500 人</li>
                <li>2,000 人</li>
              </ul>
            </div>
            <div style={{marginTop: 40, height: 80}}>
              <h3 className={styles.subTitle}>总场次数</h3>
              <ul style={{paddingLeft: 8}}>
                <li>1 场</li>
                <li>24 场</li>
                <li>36 场</li>
                <li>48 场</li>
                <li>72 场</li>
              </ul>
            </div>
            <div className={styles.settlement}>
              <p style={{marginBottom: 22}}>
                套餐：<span>100 人 1 场</span>
              </p>
              <p>
                金额：
                <span style={{color: '#ff4d66'}}>
                  <b style={{fontSize: 20, fontWeight: 500}}>83</b> 元
                </span>
                &nbsp;&nbsp;
                <span
                  style={{color: '#8494a6', textDecoration: 'line-through'}}>
                  84 元
                </span>
              </p>
            </div>
            <p>
              <Button
                size="large"
                type="primary"
                style={{
                  width: 120,
                  backgroundColor: '#0d6fde',
                  fontSize: 14,
                }}>
                立即购买
              </Button>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default StandardPackage;
