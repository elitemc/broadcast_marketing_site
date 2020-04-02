import React, {Component} from 'react';
import {Form, Row, Col, Button} from 'antd';
import styles from './styles.module.css';

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.con_top}>
        <div className={styles.main}>
          <Row className={styles.logo}>{/* <img src={logo} alt="" /> */}</Row>
          <div className={styles.context}>
            <Row className={styles.title}>关于我们</Row>
            <div className={styles.listBox}>
              <p>英荔播课（BroadClass），专注解决企业培训需求的直播工具。</p>
              <p>
                英荔播课是广东英荔国际教育科技有限公司旗下的企业培训工具，致力为用户提供稳定、安全、快速的企业级直播培训服务，一台联网电脑即可开展全球培训，让跨区域培训降本增效。
              </p>
              <p>
                凭借多年企业学习平台及直播平台研发技术，英荔播课具备高并发、低延迟、高安全性的优势。适用于各行业业务培训、企业会议、产品培训、新员工培训、产品营销、品牌活动、客户培训及大型峰会等多种场景，满足用户对于在线培训、数据安全、资源整合、权限分级管理等需求。
              </p>
              <p>
                强大的技术支持辅以即时响应的服务理念，助力企业客户高效学习，加速数字化转型。
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.con_footer}>
        {`Copyright © 2018-${new Date().getFullYear()} 广东英荔国际教育科技有限公司 粤 ICP 备 13044168 号 - 7 增值电信业务经营许可证：B2-20191904`}
      </div> */}
    </div>
  );
}

export default AboutUs;
