import React from 'react';
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';
import useBaseUrl from '@docusaurus/useBaseUrl';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {visible, onOk, onCancel, value, time} = this.props;

    return (
      <Modal
        centered
        width={300}
        maskClosable={false}
        closable={false}
        footer={null}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}>
        <div style={{textAlign: 'center'}}>
          <p>
            <img
              src={useBaseUrl(value ? 'img/success.png' : 'img/fail.png')}
              alt=""
              style={{width: '60px', height: '60px'}}
            />
          </p>
          <p style={{margin: '20px 0 45px'}}>
            {value ? '提交成功，我们将尽快与您联系' : '提交失败，请重试'}
          </p>
          <p>
            <Button
              type="primary"
              style={{
                backgroundColor: '#0d6fde',
                fontSize: 14,
              }}>
              确定 ({time})
            </Button>
          </p>
        </div>
      </Modal>
    );
  }
}

export default Countdown;
