
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


class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <Layout
        title={`购买`}
        description="Description will go into a meta tag in <head />"
      >
        <div>
          购买
        </div>
      </Layout>

    )
  }
}

export default Purchase;