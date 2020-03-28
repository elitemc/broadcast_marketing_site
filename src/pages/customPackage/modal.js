import React, {useContext} from 'react';
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

const Countdown = (props, ref) => {
  // console.log('props====', props);
  const {visible, onOk, onCancel, value, time} = props;
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
      <div style={{textAlign: 'center', padding: '30px 0'}}>
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
          <Link to={value ? '/purchase' : ''}>
            <Button
              type="primary"
              style={{
                backgroundColor: '#0d6fde',
                fontSize: 14,
              }}
              onClick={onCancel}>
              确定 ({time})
            </Button>
          </Link>
        </p>
      </div>
    </Modal>
  );
};

export default Countdown;
