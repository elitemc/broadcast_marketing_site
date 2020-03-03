import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let version_arr = [
      {
        name: '免费版',
        num: '0',
        mark: '免费体验英荔播课功能',
        li_child: [
          '不限次数使用',
          '最高可达 50 人参与直播',
          '单场直播时长 45 分钟',
        ],
        btn: '免费使用',
      },
      {
        name: '标准版',
        num: '83',
        mark: '单场最低价格',
        li_child: [
          '免费版全部功能',
          '最高可达 2,000 人参与直播',
          '直播视频 30 天内可回放',
          '一对一专属客户服务',
        ],
        btn: '立即购买',
      },
      {
        name: '定制版',
        num: '400 - 931 - 8118',
        mark: '详情请咨询销售',
        li_child: ['根据您的需求定制个性化服务'],
        btn: '提交需求',
      },
    ];

    return (
      <Layout
        title={`购买`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.purchase_main}>
          <p style={{fontSize: 30, color: '#2e313c', paddingBottom: 10}}>
            选择适合您的套餐
          </p>
          <div className={styles.version_box}>
            {version_arr.map((list, index) => (
              <div className={styles.little_box} key={index}>
                <p className={styles.title}>{list.name}</p>
                <div className={styles.price}>
                  {index === 2 ? (
                    <p
                      style={{
                        fontSize: 26,
                        color: '#0d6fde',
                        height: 96,
                        lineHeight: '96px',
                      }}>
                      <span>{list.num}</span>
                    </p>
                  ) : (
                    <p style={{fontSize: 20, color: '#0d6fde'}}>
                      ¥<span style={{fontSize: 64}}>{list.num}</span>
                    </p>
                  )}
                  <p style={{color: '#8494a6'}}>{list.mark}</p>
                </div>
                <ul className={styles.li_box}>
                  {list.li_child.map((item, idx) => (
                    <li key={idx}>
                      <span></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.btn_box}>
                  {/* 1、【免费使用】：跳转到“BMS 注册页”
                      2、【立即购买】：跳转到“购买标准套餐页面”
                      3、【提交需求】：跳转到“定制套餐页面” */}
                  {index === 1 ? (
                    <Link to="">
                      <Button
                        size="large"
                        type="primary"
                        style={{
                          width: 120,
                          backgroundColor: '#0d6fde',
                          fontSize: 14,
                        }}>
                        {list.btn}
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      to={
                        index === 0
                          ? 'http://beta.yingliboke.cn/user/register'
                          : ''
                      }>
                      <Button
                        size="large"
                        style={{
                          width: 120,
                          borderColor: '#0d6fde',
                          color: '#0d6fde',
                          fontSize: 14,
                        }}>
                        {list.btn}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Purchase;
