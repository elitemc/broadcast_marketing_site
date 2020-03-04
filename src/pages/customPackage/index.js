import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import 'antd/dist/antd.css';
import {Form, Input, Button, Icon} from 'antd';
import styles from './styles.module.css';

const {TextArea} = Input;

class CustomPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  titleClear() {
    this.props.form.setFieldsValue({
      name: '',
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        sm: {span: 3},
      },
      wrapperCol: {
        sm: {span: 21},
      },
    };

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
                      maxLength={30}
                      style={{paddingRight: '60px'}}
                    />,
                  )}
                  <Icon
                    onClick={this.titleClear}
                    className={styles.titleClear}
                    type="close-circle"
                    theme="filled"
                  />
                  <span className={styles.titleLen}>0/10</span>
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
                    ],
                  })(
                    <Input
                      placeholder="请输入您的电话"
                      maxLength={30}
                      style={{paddingRight: '60px'}}
                    />,
                  )}
                  <Icon
                    onClick={this.titleClear}
                    className={styles.titleClear}
                    type="close-circle"
                    theme="filled"
                  />
                  <span className={styles.titleLen}>0/30</span>
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
                  <Icon
                    onClick={this.titleClear}
                    className={styles.titleClear}
                    type="close-circle"
                    theme="filled"
                  />
                  <span className={styles.titleLen}>0/30</span>
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
                      placeholder="请详细地描述您的需求，方便我们为您制定个性化服务"
                    />,
                  )}
                  <Icon
                    onClick={this.titleClear}
                    className={styles.titleClear}
                    type="close-circle"
                    theme="filled"
                  />
                  <span className={styles.titleLen} style={{bottom: -16}}>
                    0/150
                  </span>
                </Form.Item>
              </Form>
            </div>
            <p>
              <Button
                size="large"
                type="primary"
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
      </Layout>
    );
  }
}

export default Form.create({name: 'basic'})(CustomPackage);
