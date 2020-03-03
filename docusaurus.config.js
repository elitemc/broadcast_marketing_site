/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: '英荔教育',
  tagline: '英荔教育',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/yingliLogo.jpg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Facebook Project Logo',
        src: 'img/loginTitle.png',
      },
      links: [
        {to: '#solution', label: '解决方案'},
        {to: '#case', label: '客户案例'},
        {to: '/usehelp', label: '使用帮助'},
        {to: '/purchase', label: '购买'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://www.yingliboke.cn/user/login',
          label: '登录',
          position: 'right',
        },
        {
          href: 'https://www.yingliboke.cn/user/register',
          label: '免费使用',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'highlight',
      links: [
        {
          title: '产品',
          items: [
            {
              label: '价格',
              to: '/purchase',
            },
            {
              label: '下载',
              to: '/download',
            },
            {
              label: 'E-ducation',
              href: 'https://www.e-ducation.cn/',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: '使用帮助',
              to: '/usehelp',
            },
            {
              label: '解决方案',
              to: '#solution',
            },
            {
              label: '客户案例',
              to: '#case',
            },
          ],
        },
        {
          title: '公司',
          items: [
            {
              label: '关于我们',
              to: '/about',
            },
            {
              label: '联系我们',
              to: '/contact',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} 广东英荔国际教育科技有限公司 粤ICP备13044168号-3`,
    },
    disableDarkMode: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
