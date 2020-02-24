/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import axios from 'axios';
import 'antd/dist/antd.css';
import {
  Button
} from 'antd';


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`首页`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.container}>
        <div className={styles.headerImg}>
          <Link to={'https://www.yingliboke.cn/user/register'} target='_blank'>
            <Button type="primary" className={styles.freeUseBtn}>免费使用</Button>
          </Link>
          <img src="../../static/img/yingliLogo.jpg" alt="" />
        </div>
        <div className={styles.headerImg} style={{ marginTop: '50px' }}>
          <div id="solution" style={{ height: 60 }} ></div>
          <div style={{ height: "300px" }}>
            1. 跳转至解决方案，利用ID（#）跳转至具体位置，了解完可以把这个DIV消除
          </div>
        </div>
        <div className={styles.headerImg} style={{ marginTop: '50px' }}>
          <div id="case" style={{ height: 60 }}></div>
          <div style={{ height: "800px" }}>
            2. 跳转至客户案例，利用ID（#）跳转至具体位置，了解完可以把这个DIV消除
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Home;
