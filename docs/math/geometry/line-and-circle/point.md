---
description: 简单了解两个点和点之间的公式．
sidebar_position: 1
---

# 从点出发

在开始最简单的曲线——直线之前，我们先从平面中更简单的一个元素：点出发，了解两个点和点之间的公式．**下面的公式在考试中都可以直接使用**．

## 两点间距离公式

对于两个点 $(x_1, y_1)$ 和 $(x_2, y_2)$，它们之间的距离是 $\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$．勾股定理或向量模长公式均可证明．

## 中点坐标公式

对于两个点 $(x_1, y_1)$ 和 $(x_2, y_2)$，两点连线的中点为 $(\df{x_1 + x_2}2, \df{y_1 + y_2}2)$．平面向量的定比分点公式即得．

## 点绕点旋转公式

求点 $A(x, y)$ 沿着坐标原点 $O$ 逆时针旋转 $\theta$ 后旋转到的点 $A'$ 的坐标．

设以 $x$ 轴正半轴为始边，$OA$ 为终边的角为 $\alpha$，$|OA| = r$，根据三角函数的定义，有 $x = r\cos \alpha$，$y = r\sin \alpha$．

因为 $OA'$ 是 $OA$ 逆时针旋转 $\theta$ 得到的，因此以 $x$ 轴正半轴为始边，$OA'$ 为终边的角为 $\alpha + \theta$，所以有

$$
\bal
\overrightarrow{OA'} &= (r\cos(\alpha + \theta), r\sin(\alpha + \theta)) \\
&= (r\cos\alpha\cos\theta - r\sin\alpha\sin\theta, r\cos\alpha\sin\theta + r\sin\alpha\cos\theta) \\
&= (x \cos\theta - y \sin \theta, x \sin\theta + y\cos\theta)
\eal
$$

因此，$A'$ 的坐标为 $(x \cos\theta - y \sin \theta, x \sin\theta + y\cos\theta)$．
