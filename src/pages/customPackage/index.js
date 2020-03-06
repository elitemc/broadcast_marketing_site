import React from 'react';
import Layout from '@theme/Layout';
import 'antd/dist/antd.css';
import {Form, Input, Button, Modal} from 'antd';
import styles from './styles.module.css';
import request from '../../utils/request';

const {TextArea} = Input;

class CustomPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Visible: false,
      time: 3,
      key: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModal2Visible = this.setModal2Visible.bind(this);
  }

  setModal2Visible(modal2Visible) {
    this.setState({modal2Visible});
  }

  handleSubmit(e) {
    e.preventDefault();
    //邮箱注册
    this.props.form.validateFields((err, values) => {
      // console.log('values=====', values);
      if (!err) {
        request({
          url: '/api/mkt/packagerecord/',
          method: 'POST',
          data: values,
        })
          .then(response => {
            console.log(response);
            if (response.data.code === 20000) {
              this.setState({key: 1});
              this.setModal2Visible(true);
              this.timer = setInterval(() => {
                const time = this.state.time - 1;
                this.setState({
                  time,
                });

                if (time < 0) {
                  this.setModal2Visible(false);
                  clearInterval(this.timer);
                  this.setState({
                    time: 3,
                  });
                }
              }, 1000);
            } else {
              this.setState({key: 0});
              this.setModal2Visible(true);
              this.timer = setInterval(() => {
                const time = this.state.time - 1;
                this.setState({
                  time,
                });

                if (time < 0) {
                  this.setModal2Visible(false);
                  clearInterval(this.timer);
                  this.setState({
                    time: 3,
                  });
                }
              }, 1000);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form;

    const formItemLayout = {
      labelCol: {
        sm: {span: 3},
      },
      wrapperCol: {
        sm: {span: 21},
      },
    };

    const name = getFieldValue('name') || '';
    const phone = getFieldValue('phone') || '';
    const company = getFieldValue('company') || '';
    const demand = getFieldValue('demand') || '';

    return (
      <Layout
        title={`购买`}
        description="Description will go into a meta tag in <head />">
        <div className={styles.context_Package}>
          <div className={styles.main}>
            <h1 style={{fontSize: 30}}>提交需求</h1>
            <p style={{color: '#8494a6', margin: '20px 0 40px'}}>
              请填写您的资料并描述具体需求，我们将第一时间安排专人为您服务。
              或直接致电 400-931-8118 与我们联系。
            </p>
            <div className={styles.form_box}>
              <Form name="basic">
                <Form.Item
                  label="姓名"
                  {...formItemLayout}
                  className={styles.textInput}>
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: '姓名不能为空',
                      },
                    ],
                  })(
                    <Input
                      placeholder="请输入您的姓名"
                      maxLength={10}
                      style={{paddingRight: '60px'}}
                    />,
                  )}
                  <span className={styles.titleLen}>{name.length}/10</span>
                </Form.Item>
                <Form.Item
                  label="电话"
                  {...formItemLayout}
                  className={styles.textInput}>
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        message: '电话不能为空',
                      },
                      {pattern: /([0-9-]+)$/, message: '请输入正确的电话号码'},
                    ],
                  })(
                    <Input
                      placeholder="请输入您的电话"
                      maxLength={30}
                      style={{paddingRight: '60px'}}
                    />,
                  )}
                  <span className={styles.titleLen}>{phone.length}/30</span>
                </Form.Item>
                <Form.Item
                  label="公司"
                  {...formItemLayout}
                  className={styles.textInput}>
                  {getFieldDecorator('company', {
                    rules: [
                      {
                        required: true,
                        message: '公司名不能为空',
                      },
                    ],
                  })(
                    <Input
                      placeholder="请输入您的公司名称"
                      maxLength={30}
                      style={{paddingRight: '60px'}}
                    />,
                  )}
                  <span className={styles.titleLen}>{company.length}/30</span>
                </Form.Item>
                <Form.Item
                  label="需求"
                  {...formItemLayout}
                  className={styles.textInput}>
                  {getFieldDecorator('demand', {
                    rules: [],
                  })(
                    <TextArea
                      rows={6}
                      maxLength={150}
                      placeholder="请详细地描述您的需求，方便我们为您制定个性化服务"
                    />,
                  )}
                  <span className={styles.titleLen} style={{bottom: -16}}>
                    {demand.length}/150
                  </span>
                </Form.Item>
              </Form>
            </div>
            <p>
              <Button
                size="large"
                type="primary"
                onClick={this.handleSubmit}
                style={{
                  width: 120,
                  backgroundColor: '#0d6fde',
                  fontSize: 14,
                }}>
                立即提交
              </Button>
            </p>
          </div>
        </div>

        <Modal
          centered
          width={300}
          maskClosable={false}
          closable={false}
          footer={null}
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}>
          <div style={{textAlign: 'center'}}>
            <p></p>
            <p style={{margin: '20px 0 45px'}}>
              {this.state.key
                ? '提交成功，我们将尽快与您联系'
                : '提交失败，请重试'}
            </p>
            <p>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#0d6fde',
                  fontSize: 14,
                }}>
                确定 ({this.state.time})
              </Button>
            </p>
          </div>
        </Modal>
      </Layout>
    );
  }
}

export default Form.create({name: 'basic'})(CustomPackage);
