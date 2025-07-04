---
sidebar_position: 7
description: 斐波那契数列的一些常考的性质及证明．
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 斐波那契数列

在模考中，斐波那契（Fibonacci）数列常常作为一种新定义的题型出现．下面整理了一些斐波那契数列的性质，并给出相对易于在考场上推导出来的证明．

## 定义

定义数列 $\{F_n\}$ 满足
$$
F_n=\begin{cases}
    1,&n=1\operatorname{or}n=2,\\
    F_{n-1}+F_{n-2},&n\ge3.
\end{cases}
$$
称此数列为 **斐波那契数列** 或 **兔子数列**，它的前几项为
$$
1,1,2,3,5,8,13,21,34,55,\cdots
$$

## 性质

以下 $n\in\N_+$．

### 直接推论

递推式 $F_n=F_{n-1}+F_{n-2}$（$n\ge3$）是推导斐波那契数列绝大部分性质的根本．

:::info[性质 1.1]

$F_{n+1}+F_{n-2}=2F_n$，$n\ge3$．

:::

:::tip[证明]

$\mathrm{LHS}=F_n+F_{n-1}+F_{n-2}=F_n+F_n=2F_n$．（$\mathrm{LHS}$ 是左式（Left hand side）的意思．）

:::

:::info[性质 1.2]

$F_{n+2}+F_{n-2}=3F_n$，$n\ge3$．

:::

:::tip[证明]

$\mathrm{LHS}=F_{n+1}+F_n+F_{n-2}=F_n+F_{n-1}+F_n+F_{n-2}=3F_n$．

:::

:::info[性质 1.3]

$F_{n+1}F_n-F_nF_{n-1}=F_n^2$，$n\ge2$．

:::

:::tip[证明]

整理得 $F_n(F_{n+1}-F_n-F_{n-1})=0$，显然成立．

:::

### 有关求和的性质

一般可通过 **数学归纳法** 证明．

:::info[性质 2.1]

$F_1+F_2+\dots+F_n=F_{n+2}-1$．

:::

:::tip[证明]

当 $n=1$ 时，$F_1=1,F_3=2$，则 $F_1=F_3-1$ 成立．假设命题对 $n=k$（$k\in\N_+$）成立，则
$$
    F_1+F_2+\dots+F_k+F_{k+1}=F_{k+2}-1+F_{k+1}=F_{k+3}-1,
$$
故命题对 $n=k+1$ 也成立．因此，由数学归纳法知，$\forall n\in\N_+$ 命题成立．

:::

:::info[性质 2.2]

$F_1+F_3+\dots+F_{2n-1}=F_{2n}$．

:::

:::tip[证明]

<Tabs>
  <TabItem value="induction" label="数学归纳法">
    当 $n=1$ 时，$F_1=F_2$ 显然成立．假设命题对 $n=k$（$k\in\N_+$）命题成立，则
    $$
        F_1+F_3+\dots+F_{2k-1}+F_{2k+1}=F_{2k}+F_{2k+1}=F_{2k+2},
    $$
    即 $F_1+\dots+F_{2(k+1)-1}=F_{2(k-1)}$，故命题对 $n=k+1$ 成立．因此，由数学归纳法知，$\forall n\in\N_+$ 命题成立．
  </TabItem>
  <TabItem value="direct" label="直接证明">
    由于 $F_{2k-1}=F_{2k}-F_{2k-2}$，$k=1,2,\cdots,n$（规定 $F_0=0$），相加得
    $$
        F_1+F_3+\dots+F_{2n-1}=(F_2-F_0)+(F_4-F_2)+\dots+(F_{2n}-F_{2n-2})=F_{2n}-F_0=F_{2n}.
    $$
  </TabItem>
</Tabs>

:::

:::info[性质 2.3]

$F_2+F_4+\dots+F_{2n}=F_{2n+1}-1$．

:::

证法与性质 2.2 类似，可以自行推导一下．

:::info[性质 2.4]

$F_1^2+F_2^2+\dots+F_n^2=F_nF_{n+1}$．

:::

数学归纳法，$F_1^2+F_2^2+\dots+F_k^2+F_{k+1}^2=F_kF_{k+1}+F_{k+1}^2=F_{k+1}(F_k+F_{k+1})=F_{k+1}F_{k+2}$，不再赘述．

:::info[性质 2.5]

$F_3+F_6+\dots+F_{3n}=\dfrac12(F_{3n+2}-1)$．

:::

:::tip[证明]

数学归纳法．$n=1$ 时，由于 $F_3=2,F_5=5$，故 $F_3=\dfrac12(F_5-1)$ 成立．假设命题对 $n=k$ 成立，则
$$
\begin{aligned}
  F_3+F_6+\dots+F_{3k}+F_{3k+3}&=\frac12(F_{3k+2}-1)+F_{3k+3}=\frac12(F_{3k+2}+2F_{3k+3}-1)\\
  &=\frac12{F_{3k+4}+F_{3k+3}-1}=\frac12{F_{3k+5}-1}.
\end{aligned}
$$
故 $n=k+1$ 时命题也成立．因此，命题对 $\forall n\in\N_+$ 成立．

:::

同理可证
$$
\begin{aligned}
    &F_1+F_4+\dots+F_{3n-2}=\frac12F_{3n},\\
    &F_2+f_5+\dots+F_{3n-1}=\frac12(F_{3n+1}-1).
\end{aligned}
$$

:::info[性质 2.6]

$(n+1)F_{n+2}-F_{n+4}+2$．

:::

:::tip[证明]

数学归纳法．$n=1$ 时，由于 $F_1=1,F_3=2,F_5=5$，故 $F_1=2F_3-F_5+2$ 成立．假设命题对 $n=k$ 成立，则
$$
\begin{aligned}
    F_1+2F_2+\dots+kF_k+(k+1)F_{k+1}&=(k+1)F_{k+2}-F_{k+4}+2+(k+1)F_{k+1}\\
    &=(k+1)F_{k+3}-(F_{k+5}-F_{k+3})+2\\
    &=(k+2)F_{k+3}-F_{k+5}+2.
\end{aligned}
$$
故命题对 $n=k+1$ 也成立．因此，命题对 $\forall n\in\N_+$ 成立．

:::

### 下标有数量关系的性质

以下 $m,n\in\N_+$．

:::info[性质 3.1]

$F_{m-1}F_{n-1}+F_mF_n=F_{m+n-1}$，$m,n\ge2$．

:::

:::tip[证明]

假设 $n$ 为常数，$m$ 为变量（主元法）．则
$$
\begin{aligned}
    F_{m-1}F_{n-1}+F_mF_n&=F_{m-1}F_{n-1}+(F_{m-2}+F_{m-1})F_n\\
    &=F_{m-1}(F_{n-1}+F_n)+F_{m-2}F_n\\
    &=F_{m-2}F_n+F_{m-1}F_{n+1}.
\end{aligned}
$$
一直递推下去可得
$$
\begin{aligned}
    F_{m-1}F_{n-1}+F_mF_n&=F_{m-2}F_n+F_{m-1}F_{n+1}\\
    &=F_{m-3}F_{n+1}+F_{m-2}F_{n+2}\\
    &=\dots=F_{1}F_{m+n-3}+F_{2}F_{m+n-2}\\
    &=F_{m+n-3}+F_{m+n-2}=F_{m+n-1}.
\end{aligned}
$$

:::

:::info[性质 3.1']

$F_mF_n+F_{m+1}F_{n+1}=F_{m+n+1}$．

:::

性质 3.2 至 3.5 是性质 3.1 和性质 3.1' 的推论．

:::info[性质 3.2]

$F_n^2+F_{n+1}^2=F_{2n+1}$．

:::

:::info[性质 3.3]

$F_{n+1}^2+F_{n-1}^2=F_{2n}$，$n\ge2$．

:::

:::info[性质 3.4]

$\dfrac{F_{2n}}{F_n}=F_{n+1}+F_{n-1}$，$n\ge2$．

:::

:::info[性质 3.5]

$F_{2n}=F_n^2+2F_nF_{n-1}$，$n\ge2$．

:::

:::info[性质 3.6]

$F_{n+1}F_{n-1}-F_n^2=(-1)^n$，$n\ge2$．

:::

:::tip[证明]

数学归纳法．$n=2$ 时有 $F_3F_1-F_2^2=1=(-1)^2$ 成立．假设命题对 $n=k$ 成立，则对 $n=k+1$ 有
$$
\begin{aligned}
    F_{k+2}F_k-F_{k+1}^2&=(F_{k+1}+F_k)F_k-F_{k+1}^2\\
    &=F_k^2+F_{k+1}(F_k-F_{k+1})\\
    &=F_k^2-F_{k+1}F_{k-1}\\
    &=-(-1)^k=(-1)^{k+1}.
\end{aligned}
$$
故命题对 $n=k+1$ 成立，进而 $\forall n\in\N_+,n\ge2$，命题成立．

:::

:::info[性质 3.7]

$F_n^2+F_{n+3}^2=2(F_{n+1}^2+F_{n+2}^2)$．

:::

:::tip[证明]

由性质 3.6 知
$$
\begin{gathered}
    F_{n+2}F_n-F_{n+1}^2=(-1)^{n+1},\\
    F_{n+3}F_{n+1}-F_{n+2}^2=(-1)^{n+2},
\end{gathered}
$$
两式相加得
$$
    F_{n+2}F_n+F_{n+3}F_{n+1}-F_{n+1}^2-F_{n+2}^2=0,
$$
即
$$
\begin{aligned}
    2(F_{n+1}^2+F_{n+2}^2)&=2(F_{n+2}F_n+F_{n+3}F_{n+1})\\
    &=2[(F_n+F_{n+1})F_n+(F_n+2F_{n+1})F_{n+1}]\\
    &=4F_{n+1}^2+4F_{n+1}F_n+2F_n^2\\
    &=F_n^2+(2F_{n+1}+F_n)^2\\
    &=F_n^2+F_{n+3}^2.
\end{aligned}
$$

:::

## 参考资料

- [[常考]：斐波那契数列的性质及证明 - 知乎](https://zhuanlan.zhihu.com/p/711388877)
- [新教材中的数列新定义系列1——斐波那契数列与36恒等式](https://mp.weixin.qq.com/s/7XcXlAXwHIqfXMaPHbV4Ug)