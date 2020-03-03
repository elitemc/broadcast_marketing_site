import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import {} from 'antd';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout
        title={`联系我们`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.connectMe}>
          <div className={styles.callWe}>
            <h1>英荔播课</h1>
            <small>为互联网时代企业培训变革赋能</small>
          </div>
          <div className={styles.callTit}>
            <h4>联系我们</h4>
            <div class={styles.row + ' row'}>
              <div class="col col--5">
                <div className={styles.linkItem}>
                  <b>广东英荔国际教育科技有限公司</b>
                  <p>地址：广州市天河区天河北路 233 号中信广场写字楼 1005 室</p>
                  <p>电话：400-931-8118（周一至周五 9:00 - 18:00）</p>
                </div>
              </div>

              <div class="col col--5">
                <div className={styles.linkItem}>
                  <b>商务合作</b>
                  <p className={styles.cooperate}>
                    <span class={styles.cooperateItem}>
                      黄小姐：156 261 02305
                    </span>
                    <span class={styles.cooperateItem}>
                      廖小姐：139 289 68545
                    </span>
                    <span class={styles.cooperateItem}>
                      孙小姐：153 188 61202
                    </span>
                  </p>
                </div>
              </div>
              <div class="col col--5">
                <div className={styles.linkItem}>
                  <b>邮箱</b>
                  <p>support@yingliboke.cn</p>
                </div>
              </div>
              <div class="col col--5">
                <div className={styles.linkItem}>
                  <b>邮编</b>
                  <p>510620</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
