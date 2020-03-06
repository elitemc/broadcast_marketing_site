import React from 'react';
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';

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
          <p></p>
          <p style={{margin: '20px 0 45px'}}>{value}</p>
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
