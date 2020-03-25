import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import styles from './styles.module.css';
import request from '../../utils/request';

class StandardPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people_arr: [],
      number_arr: [],
      people_active: 0,
      number_active: 0,
      people_value: null,
      number_value: null,
    };

    this.getQianNumber = this.getQianNumber.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  componentDidMount() {
    let people_value = null;
    let number_value = null;

    // 人数列表
    request({
      url: '/api/mkt/package/people/',
      method: 'GET',
    })
      .then(res1 => {
        // console.log('res111===', res1);
        if (res1.code === 20000) {
          people_value = res1.data[0];
          this.setState({people_arr: res1.data, people_value: res1.data[0]});
        }
      })
      .catch(err1 => {
        console.log('err11111===', err1);
      });

    // 场次列表
    request({
      url: '/api/mkt/package/number/',
      method: 'GET',
    })
      .then(res => {
        // console.log('res22222===', res);
        if (res.code === 20000) {
          number_value = res.data[0];
          this.setState({number_arr: res.data, number_value: res.data[0]});
          this.handleCalculate(people_value, number_value);
        }
      })
      .catch(err => {
        console.log('err22222===', err);
      });
  }

  // 转换成千分位数字
  getQianNumber(num) {
    return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  }

  select_active(key, index, value) {
    if (key === 'people') {
      this.setState({people_active: index, people_value: value}, () => {
        this.handleCalculate(this.state.people_value, this.state.number_value);
      });
    } else {
      this.setState({number_active: index, number_value: value}, () => {
        this.handleCalculate(this.state.people_value, this.state.number_value);
      });
    }
  }

  // 计算价钱
  handleCalculate(people_value, number_value) {
    // 计算价钱
    request({
      url: `/api/mkt/package/package/?people=${people_value}&number=${number_value}`,
      method: 'GET',
    })
      .then(res => {
        console.log('res===', res);
        if (res.code === 20000) {
          let {suggested_price, selling_price} = res.data;
          this.setState({suggested_price, selling_price});
        }
      })
      .catch(err => {
        console.log('err===', err);
      });
  }

  render() {
    const {
      number_arr,
      people_arr,
      people_active,
      number_active,
      people_value,
      number_value,
    } = this.state;

    return (
      <Layout
        title={`购买`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.context_Package}>
          <div className={styles.main}>
            <h1 style={{fontSize: 30, fontFamily: 'PingFangSC-Medium'}}>
              购买套餐
            </h1>
            <p style={{color: '#8494a6', margin: '20px 0 40px'}}>
              请选择适合您的套餐规格
            </p>
            <div>
              <h3 className={styles.subTitle}>单场人数</h3>
              <ul>
                {people_arr &&
                  people_arr.map((item, index) => (
                    <li
                      key={index}
                      onClick={this.select_active.bind(
                        this,
                        'people',
                        index,
                        item,
                      )}
                      className={
                        people_active === index ? styles.active_style : ''
                      }>
                      {this.getQianNumber(item)} 人
                    </li>
                  ))}
              </ul>
            </div>
            <div style={{marginTop: 40}}>
              <h3 className={styles.subTitle}>总场次数</h3>
              <ul>
                {number_arr &&
                  number_arr.map((item, index) => (
                    <li
                      key={index}
                      onClick={this.select_active.bind(
                        this,
                        'number',
                        index,
                        item,
                      )}
                      className={
                        number_active === index ? styles.active_style : ''
                      }>
                      {item} 场
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.settlement}>
              <p style={{marginBottom: 22}}>
                套餐：
                <span>
                  {this.getQianNumber(people_value)} 人 {number_value} 场
                </span>
              </p>
              <p>
                金额：
                <span style={{color: '#ff4d66'}}>
                  <b style={{fontSize: 20, fontWeight: 500}}>
                    {this.state.selling_price
                      ? this.getQianNumber(this.state.selling_price)
                      : null}
                  </b>{' '}
                  元
                </span>
                &nbsp;&nbsp;
                <span
                  style={{color: '#8494a6', textDecoration: 'line-through'}}>
                  {this.state.suggested_price
                    ? this.getQianNumber(this.state.suggested_price)
                    : null}{' '}
                  元
                </span>
              </p>
            </div>
            <p>
              <Link to="http://dockermkt.yingliboke.cn/user/login">
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
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default StandardPackage;
