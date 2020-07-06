/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, {useEffect, useRef, useCallback} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SideBar from './sidebar';
import axios from 'axios';
import 'antd/dist/antd.css';
import {Button} from 'antd';
function scrollNotice(container, props, time) {
  let initTime = Date.now();

  function scroll() {
    let bili = (Date.now() - initTime) / time;
    if (bili >= 1) {
      bili = 1;
      initTime = Date.now();
    }
    for (let key in props) {
      container.style[key] = props[key] * bili + 'px';
    }
    requestAnimationFrame(scroll);
  }
  scroll();
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const clientList = useRef();
  const clientLi = useRef();
  useEffect(() => {
    let listWidth = clientList.current.clientWidth;
    let liWidth = clientLi.current.clientWidth;
    // console.log(listWidth, liWidth);
    scrollNotice(clientList.current, {marginLeft: -liWidth}, 60000);
  }, []);

  const toBmsSite = useCallback(() => {
    // 日志埋点
    window.sls.pushLog({
      level: 'INFO',
      message: 'The user clicked free use',
    });
  });

  return (
    <Layout
      title={`首页`}
      description="Description will go into a meta tag in <head />">
      <div>
        <div className={styles.homeContainer} id="homeBanner">
          <div className={styles.homeSplashFade}>
            <div className={styles.bannerContain}>
              <div className={styles.homeTitle}>
                <h2>让每一场直播培训真正有效</h2>
                <p>高效、安全、简单，打造企业直播培训高质量体验</p>
                <div className={styles.function}>
                  <p className={styles.funList}>
                    1 分钟内快速发起培训，省时省成本
                  </p>
                  <p className={styles.funList}>
                    多种互动方式，多维度数据统计，培训卓有成效
                  </p>
                  <p className={styles.funList}>
                    专业团队提供技术支持，安全可靠
                  </p>
                </div>

                <Button
                  className={styles.freeUse}
                  style={{border: 'none'}}
                  onClick={toBmsSite}>
                  <a href={siteConfig.url + '/user/register'} target="_blank">
                    免费使用
                  </a>
                </Button>
              </div>
              <div className={styles.banner}>
                <img src={useBaseUrl('img/banner.png')} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="solution" className={styles.solution}></div>
        <div className={styles.container}>
          <div className={styles.detailCar}>
            <ul>
              <li>
                <div className={styles.carImg}>
                  <img src={useBaseUrl('img/主题1.png')} alt="" />
                </div>
                <div className={styles.carDetail}>
                  <div className={styles.detail}>
                    <b>高质量低付费，大幅节省培训成本</b>
                    <p style={{marginBottom: 10}}>
                      轻松组织异地多人远程培训，单场节省超过 *80%
                      培训费用。价格优势明显，收费模式灵活，50
                      人内「免费使用」，全面体验高性价比直播服务，快速实现培训数字化转型。
                    </p>
                    <span>*数据源自英荔播课的医药行业客户使用调研。</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.carImg}>
                  <img src={useBaseUrl('img/主题2.png')} alt="" />
                </div>
                <div className={styles.carDetail}>
                  <div className={styles.detail}>
                    <b>多样直播互动，更专注、更积极</b>
                    <p>
                      直播过程中随时使用签到、抽奖、答题、聊天评论、文字问答、连麦发言等实时互动功能，有效提高专注度，调动学习积极性，还原线下培训场景。
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.carImg}>
                  <img src={useBaseUrl('img/主题3.png')} alt="" />
                </div>
                <div className={styles.carDetail}>
                  <div className={styles.detail}>
                    <b>直播工具齐全，知识理解更到位</b>
                    <p>
                      基于低延迟、高质量的视频直播服务，英荔播课提供文档分享、文档标注、白板演示、直播录制、视频上传等直播工具，协助教师高效教学。培训视频支持回放，帮助学员巩固所学。
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.carImg}>
                  <img src={useBaseUrl('img/主题4.png')} alt="" />
                </div>
                <div className={styles.carDetail}>
                  <div className={styles.detail}>
                    <b>可视化数据统计，科学提高培训质量</b>
                    <p>
                      培训中实时查看直播数据，支持一键导出精简版/详细版「直播报告」及「数据报表」，无需二次整理。数据细化到每个人，直观了解培训效果，方便科学地优化培训内容，提高培训质量。
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.functionCar}>
            <h2 className={styles.title}>全功能 多场景</h2>
            <ul className={styles.functionCarList}>
              <li>
                <div className={styles.functionCarIcon}>
                  <img src={useBaseUrl('img/首-全-icon1.png')} alt="" />
                </div>
                <div className={styles.functionItem}>
                  <b>多方式呈现，满足多样化场景</b>
                  <ul>
                    <li>网页版开播</li>
                    <li>客户端直播</li>
                    <li>App 观看</li>
                    <br />
                    <li>开播提醒</li>
                    <li>私密直播间</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.functionCarIcon}>
                  <img src={useBaseUrl('img/首-全-icon2.png')} alt="" />
                </div>
                <div className={styles.functionItem}>
                  <b>个性化设置，权限管理自定义</b>
                  <ul>
                    <li>直播预告</li>
                    <li>视频资料库</li>
                    <li>白名单管理</li>
                    <br />
                    <li>观看权限</li>
                    <li>直播封面图</li>
                    <li>自定义 Logo</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.functionCarIcon}>
                  <img src={useBaseUrl('img/首-全-icon3.png')} alt="" />
                </div>
                <div className={styles.functionItem}>
                  <b>演示工具辅助，表达更清晰明了</b>
                  <ul>
                    <li>PPT 演示</li>
                    <li>白板演示</li>
                    <li>视频播放</li>
                    <br />
                    <li>本地录制</li>
                    <li>支持标注</li>
                    <li>课件下载</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.functionCarIcon}>
                  <img src={useBaseUrl('img/首-全-icon4.png')} alt="" />
                </div>
                <div className={styles.functionItem}>
                  <b>多维互动，调动培训积极性</b>
                  <ul>
                    <li>即时签到</li>
                    <li>习题考核</li>
                    <li>问答评论</li>
                    <br />
                    <li>实时抽奖</li>
                    <li>在线投票</li>
                    <li>连麦发言</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.functionCarIcon}>
                  <img src={useBaseUrl('img/首-全-icon5.png')} alt="" />
                </div>
                <div className={styles.functionItem}>
                  <b>数据直观呈现，免于繁琐统计</b>
                  <ul>
                    <li>观看行为分析</li>
                    <li>直播报告</li>
                    <li>数据报表</li>
                    <br />
                    <li>考试结果统计</li>
                    <li>问答记录</li>
                    <li>聊天记录</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.functionCarIcon}>
                  <img src={useBaseUrl('img/首-全-icon6.png')} alt="" />
                </div>
                <div className={styles.functionItem}>
                  <b>支持直播回看，高安全性云端存储</b>
                  <ul>
                    <li>云端录制</li>
                    <li>App 端回放</li>
                    <li>文档视频化</li>
                    <br />
                    <li>资料存储</li>
                    <li>直播复用</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.support}>
            <h2 className={styles.title}>强大的技术支持</h2>

            <ul className={styles.supportList}>
              <li>
                <div className="card-demo">
                  <div className="card" style={{borderRadius: '10px'}}>
                    <div className="card__image">
                      <img src={useBaseUrl('img/首-强-picture1.png')} alt="" />
                    </div>
                    <div className="card__body" style={{height: 174}}>
                      <h4>全球服务，高速传输</h4>
                      <small>
                        网络节点覆盖 200
                        多个国家，全球范围内高质量传输，端到端低至 300ms 延迟。
                      </small>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card-demo">
                  <div className="card" style={{borderRadius: '0 0 10px 10px'}}>
                    <div className="card__image">
                      <img src={useBaseUrl('img/首-强-picture2.png')} alt="" />
                    </div>
                    <div className="card__body" style={{height: 174}}>
                      <h4>数据安全稳定</h4>
                      <small>
                        多元区存储，异地容灾，文件就近上传，有效提升拉取速度。
                        DRM 算法加密，企业资料安心上传。
                      </small>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card-demo">
                  <div className="card" style={{borderRadius: '0 0 10px 10px'}}>
                    <div className="card__image">
                      <img src={useBaseUrl('img/首-强-picture3.png')} alt="" />
                    </div>
                    <div className="card__body" style={{height: 174}}>
                      <h4>省流量，高质量</h4>
                      <small>
                        课件转码后演示，视频格式云转换，码率自定义，保障在各种网络环境下均可流畅直播。
                      </small>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.client}>
            <h2 className={styles.title}>英荔的客户</h2>

            <div className={styles.clientContainer}>
              <ul className={styles.clientList} ref={clientList}>
                <li ref={clientLi}>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/合生元.png')} alt="合生元" />
                    </div>
                    <small>合生元</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/国大药房.png')}
                        alt="国大药房"
                      />
                    </div>
                    <small>国大药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/大参林.png')} alt="大参林" />
                    </div>
                    <small>大参林</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/东莞国药.png')}
                        alt="东莞国药"
                      />
                    </div>
                    <small>东莞国药</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/swiss.png')} alt="Swisse" />
                    </div>
                    <small>Swisse</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/UCAR.png')}
                        alt="神州优车集团"
                      />
                    </div>
                    <small>神州优车集团</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/广东工业大学华立学院.png')}
                        alt="广东工业大学华立学院"
                      />
                    </div>
                    <small>广东工业大学华立学院</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/Zambon.png')} alt="Zambon" />
                    </div>
                    <small>Zambon</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/健合集团.png')}
                        alt="健合集团"
                      />
                    </div>
                    <small>健合集团</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/吉首大学张家界学院.png')}
                        alt="吉首大学张家界学院"
                      />
                    </div>
                    <small>吉首大学张家界学院</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/益丰大药房.png')}
                        alt="益丰大药房"
                      />
                    </div>
                    <small>益丰大药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/桂中大药房.png')}
                        alt="桂中大药房"
                      />
                    </div>
                    <small>桂中大药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/百康药房.png')}
                        alt="百康药房"
                      />
                    </div>
                    <small>百康药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/康佰家.png')} alt="康佰家" />
                    </div>
                    <small>康佰家</small>
                  </div>
                </li>
                <li>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/合生元.png')} alt="合生元" />
                    </div>
                    <small>合生元</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/国大药房.png')}
                        alt="国大药房"
                      />
                    </div>
                    <small>国大药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/大参林.png')} alt="大参林" />
                    </div>
                    <small>大参林</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/东莞国药.png')}
                        alt="东莞国药"
                      />
                    </div>
                    <small>东莞国药</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/swiss.png')} alt="Swisse" />
                    </div>
                    <small>Swisse</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/UCAR.png')}
                        alt="神州优车集团"
                      />
                    </div>
                    <small>神州优车集团</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/广东工业大学华立学院.png')}
                        alt="广东工业大学华立学院"
                      />
                    </div>
                    <small>广东工业大学华立学院</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/Zambon.png')} alt="Zambon" />
                    </div>
                    <small>Zambon</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/健合集团.png')}
                        alt="健合集团"
                      />
                    </div>
                    <small>健合集团</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/吉首大学张家界学院.png')}
                        alt="吉首大学张家界学院"
                      />
                    </div>
                    <small>吉首大学张家界学院</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/益丰大药房.png')}
                        alt="益丰大药房"
                      />
                    </div>
                    <small>益丰大药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/桂中大药房.png')}
                        alt="桂中大药房"
                      />
                    </div>
                    <small>桂中大药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img
                        src={useBaseUrl('img/百康药房.png')}
                        alt="百康药房"
                      />
                    </div>
                    <small>百康药房</small>
                  </div>
                  <div className={styles.clientItem}>
                    <div className={styles.avatar}>
                      <img src={useBaseUrl('img/康佰家.png')} alt="康佰家" />
                    </div>
                    <small>康佰家</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            id="case"
            className={styles.case}
            style={{marginBottom: '14%'}}></div>
          <div className={styles.clientComment}>
            <h2 className={styles.title} style={{marginTop: '0'}}>
              客户评价
            </h2>
            <ul className={styles.commentList}>
              <li className={styles.commentItem}>
                <div className={styles.clientMsg}>
                  <i>
                    <img src={useBaseUrl('img/东莞国药.png')} alt="东莞国药" />
                  </i>
                  <span>东莞国药</span>
                </div>
                <p>
                  合作一年多以来，英荔播课为我们解决了跨区域培训的大难题。以往一个大区举行线下培训需要讲师来回奔波，耗费时间且费用高昂。利用英荔播课进行直播培训，举办一场两三千名员工参与的大型培训毫无压力，省时又高效，各店一线员工迅速掌握产品知识点，帮助销售额提升。
                </p>
              </li>
              <li className={styles.commentItem}>
                <div className={styles.clientMsg}>
                  <i>
                    <img src={useBaseUrl('img/合生元.png')} alt="合生元" />
                  </i>
                  <span>合生元</span>
                </div>
                <p>
                  之前试用其他直播产品，不少员工反馈直播时延迟严重，画音不同步且无法接收签到提示，导致效率低下。而英荔播课正好解决这一痛点，即使是
                  2,000
                  多人的直播时也几乎感受不到延迟，效果令人满意。综合各方面，在功能、界面、流畅度、性价比等方面，我们最终选择英荔播课，它更符合我们对直播培训的预期，是值得推荐的企业培训直播产品。
                </p>
              </li>
              <li className={styles.commentItem}>
                <div className={styles.clientMsg}>
                  <i>
                    <img src={useBaseUrl('img/国大药房.png')} alt="国大药房" />
                  </i>
                  <span>国大药房</span>
                </div>
                <p>
                  英荔播课功能齐全，设计了开课签到、随堂签到、随堂答题等功能，能够有效监督学员在线的时间，课后测试能及时检验学员对知识的掌握情况。同时，直播功能稳定，学员端画质、声音都很清晰，是值得推荐的平台。
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.useLive}>
            <h3>零门槛搭建企业专属直播间</h3>
            <p>
              立即拨打服务热线：
              <a href="tel:400-931-8118" style={{color: 'inherit'}}>
                {' '}
                400-931-8118
              </a>
            </p>
            <p>一对一专属客户服务</p>
            <div className={styles.linkBtn}>
              <Button style={{border: 'none'}} onClick={toBmsSite}>
                <a href={siteConfig.url + '/user/register'} target="_blank">
                  免费使用
                </a>
              </Button>
              <Button style={{backgroundColor: '#0d6fde', color: '#fff'}}>
                <Link to="/purchase">报价查询</Link>
              </Button>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </Layout>
  );
}

export default Home;
