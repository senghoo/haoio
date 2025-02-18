---
title: 吉米多维奇0005
category: math
timeline: math
tags:
  - 吉米多维奇
  - 数学分析
  - 数学归纳法
date: 2025-02-18 19:29:01
---

# 题干

设$a^{[n]}=a(a-h)\dots(a-(n-1)h)$ 及$a^{[0]}=1$ 证明：
$$
(a+b)^{[n]}=\sum_{m=0}^nC_n^ma^{[n-m]}b^{[m]}
$$
并由此推出牛顿二项式公式.




# 解答

## 基础公式

根据公式$a^{[n]}=a(a-h)\dots(a-(n-1)h)$
$$
a^{[n+1]}=a^{[n]}(a-nh)
$$
Pascal 恒等式
$$
C_{n+1}^m=C_n^{m-1}+C_n^m
$$


## 基例

$n=0$时，1=1.

## 归纳假设

设$n=k$时成立：
$$
(a+b)^{[k]}=\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}
$$

## 归纳推理

$$
\begin{aligned}
(a+b)^{[k+1]}&=(a+b)^{[k]}(a-kh)\\
&=\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)((a+b)-kh)\\
&=a\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)+b\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)-kh\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)
\end{aligned}
$$

其中
$$
\begin{aligned}
a\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)&=\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}a\\
&=\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m]})a-(k-m)h(C_k^m a^{[k-m]}b^{[m]})+(k-m)h(C_k^m a^{[k-m]}b^{[m]})\right)\\
&=\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m]}(a-(k-m)h)\right) + \sum_{m=0}^k\left((k-m)h(C_k^m a^{[k-m]}b^{[m]})\right)\\
&=\sum_{m=0}^k\left((C_k^m a^{[k-m+1]}b^{[m]})\right) + \sum_{m=0}^k\left((k-m)h(C_k^m a^{[k-m]}b^{[m]})\right)\\
\end{aligned}
$$

$$
\begin{aligned}
b\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)&=\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}b\\
&=\sum_{m=0}^k\left((C_k^m a^{[k-m]}b^{[m]})b-mh(C_k^m a^{[k-m]}b^{[m]})+mh(C_k^m a^{[k-m]}b^{[m]})\right)\\
&=\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m]}(b-mh)\right)+\sum_{m=0}^k\left(mh(C_k^m a^{[k-m]}b^{[m]})\right)\\
&=\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m+1]}\right)+\sum_{m=0}^k\left(mh(C_k^m a^{[k-m]}b^{[m]})\right)\\
\end{aligned}
$$

因此原式
$$
\begin{aligned}
(a+b)^{[k+1]}&=a\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)+b\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)-kh\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)\\
&=\sum_{m=0}^k\left((C_k^m a^{[k-m+1]}b^{[m]})\right) + \sum_{m=0}^k\left((k-m)h(C_k^m a^{[k-m]}b^{[m]})\right)+\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m+1]}\right)+\sum_{m=0}^k\left(mh(C_k^m a^{[k-m]}b^{[m]})\right)-kh\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)\\
&=\sum_{m=0}^k\left((C_k^m a^{[k-m+1]}b^{[m]})\right)+\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m+1]}\right)\text{//合并2，4，5项消除}\\
&=C_k^0a^{[k+1]}b^{[0]}+C_k^1a^{[k]}b^{[1]}+\dots+C_k^ka^{[1]}b^{[k]}+C_k^0a^{[k]}b^{[1]}+C_k^1a^{[k-1]}b^{[2]}+\dots+C_k^ka^{[0]}b^{[k+1]}\\
&=C_k^0a^{[k+1]}b^{[0]}+(C_k^1+C_k^0)a^{[k]}b^{[1]}+(C_k^2+C_k^1)a^{[k-1]}b^{[2]}+\dots+(C_k^k+C_k^{k-1})a^{[1]}b^{[k]}+C_k^ka^{[0]}b^{[k+1]}\\
&=C_{k+1}^0a^{[k+1]}b^{[0]}+C_{k+1}^1a^{[k]}b^{[1]}+C_{k+1}^2a^{[k-1]}b^{[2]}+\dots+C_{k+1}a^{[1]}b^{[k]}+C_{k+1}^{k+1}a^{[0]}b^{[k+1]}\\
&=\sum_{m=0}^{k+1}C_{k+1}^ma^{[k+1-m]}b^{[m]}
\end{aligned}
$$
得证.

### 更简洁的写法

思路一样，但是写法更简洁.
$$
\begin{aligned}
(a+b)^{[k+1]}&=(a+b)^{[k]}(a-kh)\\
&=\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\right)(a+b-kh)\\
&=\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\left(a+b-kh\right)\right)\\
&=\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\left(\left(a-(k-m)h\right)+\left(b-mh\right)\right)\right)\text{//拆分}\\
&=\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\left(a-(k-m)h\right)\right)+\left(\sum_{m=0}^kC_k^ma^{[k-m]}b^{[m]}\left(b-mh\right)\right)\\
&=\sum_{m=0}^k\left((C_k^m a^{[k-m+1]}b^{[m]})\right)+\sum_{m=0}^k\left(C_k^m a^{[k-m]}b^{[m+1]}\right)
\end{aligned}
$$


## 推理牛顿二项公式

当$h=0$时，公式特化为牛顿而项公式.
