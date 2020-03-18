import React, {useEffect, useRef} from 'react';
import {BackTop} from 'antd';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Sidebar(props) {
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     let nb_icon_wrap = document.getElementById('nb_icon_wrap');
  //     if (nb_icon_wrap) {
  //       nb_icon_wrap.style.display = 'none';
  //       clearInterval(timer);
  //     }
  //   }, 800);
  // }, []);

  return (
    <div className={styles.sideBar}>
      <ul className={styles.sideList}>
        <li>
          <div
            className={
              styles.icon + ' ' + styles.iconfont + ' ' + styles.iconCustomer
            }
            onClick={() => {
              let nb_icon_wrap = document.getElementById('nb_icon_wrap');
              if (nb_icon_wrap) {
                nb_icon_wrap.click();
              }
            }}></div>
          <div className={styles.detail}>
            <span>在线咨询</span>
          </div>
        </li>
        <li>
          <div
            className={
              styles.icon + ' ' + styles.iconfont + ' ' + styles.iconphone
            }>
            <a
              href="tel:400-931-8118"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}></a>
          </div>
          <div className={styles.detail}>
            <span>
              <a href="tel:400-931-8118" style={{color: 'inherit'}}>
                400-931-8118
              </a>{' '}
            </span>
          </div>
        </li>
        <li>
          <div
            className={
              styles.icon + ' ' + styles.iconfont + ' ' + styles.iconQrcode
            }></div>
          <div className={styles.detail}>
            <div
              style={{
                width: 120,
                height: 120,
                margin: '6px 0',
              }}>
              <img src={useBaseUrl('img/qrcode_for英荔播课.jpg')} alt="" />
            </div>
          </div>
        </li>
        <BackTop style={{position: 'static'}}>
          <li>
            <div
              className={
                styles.icon + ' ' + styles.iconfont + ' ' + styles.iconupward
              }></div>
          </li>
        </BackTop>
      </ul>
    </div>
  );
}

export default Sidebar;
