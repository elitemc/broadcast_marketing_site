---
id: mdx
title: 基于MDX
---
你能写jsx和react组件多亏了[MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
      textAlign:'center'
    }}> {children} </span> );

<Highlight color="#25c2a0">绿色</Highlight> 和 <Highlight color="#1877F2">蓝色</Highlight> 都是我最爱的颜色.

I can write **Markdown** alongside my _JSX_!
