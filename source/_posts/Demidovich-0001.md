---
title: 吉米多维奇0001
date: 2025-02-17 15:37:46
category: math
timeline: math
tags:
  - 吉米多维奇
  - 数学分析
---

# 题干

使用数学归纳法证明如下不等式：

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}
$$

# 解答

## 1. 验证基例

当 $n=1$ 时, 左边为 $1$ , 右边为$\frac{1(1+1)}{2} = \frac{2}{2} = 1$.

$\therefore n=1$时成立.

## 2. 归纳假设

假设$n=k\ge 1$时等式成立.

$$
1 + 2 + \cdots + k = \frac{k(k+1)}{2}\\
$$

## 3. 归纳证明

$$
\begin{aligned}
1 + 2 + \cdots + k &= \frac{k(k+1)}{2}\\
1 + 2 + \cdots + k +(k+1) &= \frac{k(k+1)}{2}+(k+1)\\
&=\frac{k(k+1)}{2} + \frac{2(k+1)}{2} \\
&= \frac{(k+2)(k+1)}{2}\\
&= \frac{((k+1)+1)(k+1)}{2}\\
\end{aligned}
$$

右侧最后表达式为$n=k+1$时的右侧表达式.

得证.
