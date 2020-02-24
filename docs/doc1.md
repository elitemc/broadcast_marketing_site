---
id: doc1
title: 样式指南
sidebar_label: 我是第一个侧边栏的标签
---

您可以使用 [GitHub-flavored 编辑器语法](https://www.baidu.com).

## 编辑器语法

在设计基于Docusaurus站点的样式时用作示例页面。

## 头部

# H1 - 创建最好的文档

## H2 - 创建最好的文档

### H3 - 创建最好的文档

#### H4 - 创建最好的文档

##### H5 - 创建最好的文档

###### H6 - 创建最好的文档

---

## 强调

强调, 斜体, 用 *用星号* 或 _下划线_ 包裹，并用空格隔开.

强烈强调, 粗体, 用 **两个星号** 或 __两个下划线__ 包裹，并用空格隔开.

结合强调 用 **双星号 和 _下划线_** 进行包裹.

删除线 用 两个波浪字符 ~~划掉这句话.~~

---

## 列表

1. 有序列表第一项
1. Another item ⋅⋅\* Unordered sub-list 
1. 实际的数字并不重要，重要的是它是一个数字。 ⋅⋅1. Ordered sub-list
1. And another item.

⋅⋅⋅可以在列表项中正确地缩进段落。请注意上面的空白行和前导空格(至少一个，但是我们将在这里使用三个来对齐原始标记)。.

⋅⋅⋅要获得没有段落的换行符，需要使用两个尾随空格.⋅⋅ ⋅⋅⋅注意这一行是分开的，但是在同一段中.⋅⋅ ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

- Unordered list can use asterisks

* Or minuses

- Or pluses

---

## 链接

[我是一个谷歌链接](https://www.google.com)

[我是一个带标题的内联样式的链接](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[路由跳转](../blob/master/LICENSE)

[您可以使用数字来定义引用样式的链接][1]

或者空着用 [link text itself].

URL和尖括号包裹的URL会自动转换成链接. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).

一些文本显示参考链接可以在后面跟随。

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---

## 图片

这是我们的标志(悬停查看标题文本):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

---

## 代码

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## 表格

冒号可以用来对齐列。

 Tables         |      Are      |   Cool 
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

每个标题单元格之间必须至少有3个破折号。外部管道(|)是可选的，您不需要将原始标记排列得很漂亮。你也可以使用内联标记。

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Bloc引用kquotes

>块引用是非常方便的电子邮件模拟回复文本。这行是同一引语的一部分。.

Quote break.

> 这是一个很长的行，当它包装时仍然会被适当地引用。哦，孩子，让我们继续写，以确保这是足够长，实际上为每个人结束。哦，你可以把**Markdown**_放到_ blockquote中.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## 警告模块

:::note
这是一个提示
:::

:::tip
这是一个信息
:::

:::important
这是一个重要的提示
:::

:::caution
这是一个通知
:::

:::warning
这是一个错误
:::

