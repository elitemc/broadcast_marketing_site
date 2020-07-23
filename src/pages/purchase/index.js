import React, {useCallback} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Purchase = () => {
  const context = useDocusaurusContext();
  const {siteConfig} = context;

  let version_arr = [
    {
      name: '体验版',
      num: '0',
      mark: '免费体验英荔播课功能',
      li_child: [
        '1 个月免费体验',
        '最多支持 5 人参与直播',
        '直播视频 7 天内可回放',
        '单场直播时长 45 分钟',
      ],
      btn: '立即体验',
    },
    {
      name: '标准版',
      num: '83',
      mark: '单场最低价格',
      li_child: [
        '体验版全部功能',
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

  const pushLog = useCallback(type => {
    // return console.log(type);
    let log = [
      'The user clicked free use',
      'The user clicked on the standard package',
      'User clicks to submit request',
    ];
    // 日志埋点
    window.sls.pushLog({
      level: 'INFO',
      message: log[type],
    });
  });

  return (
    <Layout
      title={`购买`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.context_Package}>
        <div className={styles.purchase_main}>
          <p className={styles.page_title}>选择适合您的套餐</p>
          <div className={styles.version_box}>
            {version_arr.map((list, index) => (
              <div className={styles.little_box} key={index}>
                <p className={styles.title}>{list.name}</p>
                <div className={styles.price}>
                  {index === 2 ? (
                    <p className={styles.callme}>
                      <img src={useBaseUrl('img/phone.png')} alt="" />
                      <span>{list.num}</span>
                    </p>
                  ) : (
                    <p className={styles.money}>
                      ¥
                      <span style={{fontSize: 64, marginLeft: '4px'}}>
                        {list.num}
                      </span>
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
                  {(() => {
                    if (index === 0) {
                      return (
                        <a
                          href={`${siteConfig.url}/user/register`}
                          target="_blank">
                          <Button
                            size="large"
                            className={styles.btn}
                            onClick={() => pushLog(index)}>
                            {list.btn}
                          </Button>
                        </a>
                      );
                    } else {
                      return (
                        <Link
                          to={
                            index === 1 ? '/standardPackage' : '/customPackage'
                          }>
                          <Button
                            size="large"
                            className={
                              styles.btn +
                              ' ' +
                              (index === 1 ? '' : styles.customPackage)
                            }
                            style={{
                              backgroundColor: index === 1 ? '#0d6fde' : '#fff',
                              color: index === 1 ? '#fff' : '#0d6fde',
                            }}
                            onClick={() => pushLog(index)}>
                            {list.btn}
                          </Button>
                        </Link>
                      );
                    }
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Purchase;
