
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import {

} from 'antd';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <Layout
        title={`关于我们`}
        description="Description will go into a meta tag in <head />"
      >
        <div>
          关于我们
        </div>
      </Layout>

    )
  }
}

export default Contact;