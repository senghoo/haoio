---
title: 吉米多维奇0008
category: math
timeline: math
tags:
  - 吉米多维奇
  - 数学分析
  - 数学归纳法
  - 算数平均
  - 几何平均
date: 2025-02-18 23:21:23
---

# 题干

证明不等式：
$$
n!<
\left(
	\frac
	{n+1}
	{2}
\right)^n\quad (n>1)
$$



# 解答

## 基例

$n=2$时，$2<2.25$

## 归纳假设

设$n=k$时成立
$$
k!<
\left(
	\frac
	{k+1}
	{2}
\right)^k
$$


## 归纳推理

$$
\begin{aligned}
\left(
	\frac
	{(k+1)+1}
	{2}
\right)^{(k+1)} 
&=\left(
	\frac
	{k+2}
	{2}
\right)^k+\left(
	\frac
	{k+2}
	{2}
\right)\\
&>\left(
	\frac
	{k+2}
	{2}
\right)^k+\left(
	\frac
	{k+2}
	{\left(\frac{k+2}{k+1}\right)^{k+1}}
\right)\\
&=
	\frac
	{(k+2)^k}
	{2^k}
	\frac
	{\left(k+1\right)^{k+1}}
	{\left(k+2\right)^{k}}
\\
&=	\left(\frac
	{k+1}
	{2}\right)^k
	\left(k+1\right)\\
&> (k+1)k!=(k+1)!
\end{aligned}
$$

得证.

## 非数学归纳法方法(AM-GM不等式)

如果使用AM-GM不等式：若干正数的算术平均值不小于其几何平均.则可以更容易求解.
$$
\sqrt[n]{x_1\cdot x_2\cdots x_n} \le \frac{x_1+x_2+\cdots+x_n}{n}
$$


根据求和公式
$$
\begin{aligned}
1+2+\cdots+n &= \frac{n(n+1)}{2}\\
\frac{1+2+\cdots+n}{n} &= \frac{n+1}{2}.
\end{aligned}
$$


左侧为算数平均因此小于几何平均数.
$$
\sqrt[n]{1\cdot2\cdots n}\le \frac{1+2+\cdots+n}{n}=\frac{n+1}{2}.
$$
最左边与最右边取n次幂.
$$
n!\le\left(
	\frac
	{n+1}
	{2}
\right)^n
$$
AM-GM不等式取等号的条件为所有数相等，因此当且仅当$n=1$时取等号.
