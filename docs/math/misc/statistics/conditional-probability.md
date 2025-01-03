---
sidebar_position: 1
description: 介绍条件概率、乘法公式、全概率公式、*贝叶斯公式．
slug: /conditional-probability
---

# 条件概率

## 条件概率　乘法公式

在实际问题中，除了要考虑事件 $A$ 的概率 $P(A)$ 之外，还要考虑事件 $A$ 在「某事件 $B$ 已经发生」这一附加条件下的概率，这样的概率称为 **条件概率**，记作 $P(A\mid B)$，读作「事件 $A$ 在事件 $B$ 发生的条件下的条件概率」．相应地，将 $P(A)$ 称为无条件概率．严格说来，概率都是有条件的，因为试验都是在一组固定条件下进行的．这里说的条件，无非是指在原有的一组固定条件中再增加一个附加条件：$B$ 发生．

**定义**　设 $A,B$ 为两个随机事件，且 $P(A)>0$，我们称
$$
P(B\mid A)=\df{P(AB)}{P(A)}
$$
为在事件 $A$ 发生的条件下，事件 $B$ 发生的 **条件概率**．

竖线右侧表示前提条件，左侧表示在该前提条件下所研究的事件，注意不要混淆．

由条件概率的定义可立即得到：对任意两个事件 $A$ 与 $B$，若 $P(A)>0$，则
$$
P(AB)=P(A)P(B\mid A).
$$
我们称上式为概率的 **乘法公式**，也叫 **乘法定理**．

## 全概率公式

TO DO: 此处应有事例．

一般地，设一组事件 $A_1,A_2,\dots,A_n$ 两两互斥，满足 $A_1\cup A_2\cup\dots\cup A_n=\mathit\Omega$，且 $P(A_i)>0(i=1,2,\dots,n)$，则对任意事件 $B\subseteq\mathit\Omega$，有
$$
P(B)=\sum_{i=1}^nP(A_i)P(B\mid A_i).
$$

称上面的公式为 **全概率公式**．

## 贝叶斯公式

