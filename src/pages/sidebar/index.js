import React, {useEffect, useRef} from 'react';
import {BackTop} from 'antd';
import styles from './styles.module.css';

function Sidebar(props) {
  useEffect(() => {
    let timer = setInterval(() => {
      let nb_icon_wrap = document.getElementById('nb_icon_wrap');
      if (nb_icon_wrap) {
        nb_icon_wrap.style.display = 'none';
        clearInterval(timer);
      }
    }, 800);
  }, []);

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
            }></div>
          <div className={styles.detail}>
            <span>400-931-8118</span>
          </div>
        </li>
        <li>
          <div
            className={
              styles.icon + ' ' + styles.iconfont + ' ' + styles.iconCustomer
            }></div>
          <div className={styles.detail}>
            <div style={{width: 126, height: 126, background: 'red'}}></div>
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
