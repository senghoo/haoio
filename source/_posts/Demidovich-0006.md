---
title: 吉米多维奇0006
category: math
timeline: math
tags:
  - 吉米多维奇
  - 数学分析
  - 数学归纳法
date: 2025-02-18 21:54:02
---

# 题干

证明博努力不等式：
$$
(1+x_1)(1+x_2)\dots(1+x_n)\ge1+x_1+x_2+\dots+x_n
$$
$x_1,x_2,\dots,x_n$ 符号相等且大于$-1$.


# 解答

## 基例

$n=1$时$(1+x_1)=1+x_1$,因此条件成立

## 归纳假设

假设$n=k$时成立
$$
(1+x_1)(1+x_2)\dots(1+x_k)\ge1+x_1+x_2+\dots+x_k
$$

## 归纳推理

设$y:=(1+x_1)(1+x_2)\dots(1+x_k)$, 
$$
\begin{aligned}
(1+x_1)(1+x_2)\dots(1+x_k)(1+x_{k+1}) &= y(1+x_{k+1})\\
&=y+x_{k+1}y\\
&\ge1+x_1+x_2+\dots+x_k+x_{k+1}y
\end{aligned}
$$
因此要证明$x_{k+1}y\ge x_{k+1}$即可证明$n=k+1$的情况下成立.

当$x_n\ge0$时，$y\ge 1$ ，因此$x_{k+1}y\ge x_{k+1}$

当$-1<x_n<0$时，$1>y>0$, 因此$x_{k+1}y\ge x_{k+1}$

得证.

## 更简单的方法

因为$x_n >-1$ 因此$1+x_{n+1}> 0$.在归纳假设两边乘以$1+x_{n+1}$
$$
\begin{aligned}
(1+x_1)(1+x_2)\dots(1+x_k)(1+x_{n+1})&\ge(1+x_1+x_2+\dots+x_k)(1+x_{n+1})\\
&=(1+x_1+x_2+\dots+x_k)+(x_{n+1}+x_1x_{n+1}+x_2x_{n+1}+\dots+x_kx_{n+1})\\
&\ge1+x_1+x_2+\dots+x_k+x_{n+1}\text{//所有乘积项大于等于0}
\end{aligned}
$$
得证.
