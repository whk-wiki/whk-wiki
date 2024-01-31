---
sidebar_position: 4
description: 了解数列中的不等式问题的做题技巧．
---

# 数列中的不等式

## 不等式恒成立 / 存在解求参

不等式恒成立 / 存在解求参问题有两个方向：

- 解含参不等式．
- 参变分离．

数列中尽可能贴近后者，一般参变分离都更好做（得益于数列下标 $n > 0$，两边除以 $n$ 时不必分类讨论）．

:::info 例题 1.1

已知数列 $a_n = -8n^2 - 4n$，若 $a_n \ge t \cdot n^2$ 对任意 $n \in \N^\ast$ 恒成立，求 $t$ 取值范围．

:::

:::tip 例题 1.1 解答

即

$$
-8n^2 - 4n\ge t \cdot n^2, \quad n \in \N^\ast
$$

参变分离得

$$
-8 - \dfrac 4 n \ge t, \quad n \in \N^\ast
$$

前者最小值（记得是 $n \in \N^\ast$ 的最小值）为 $n = 1$ 的 $-12$，因此 $t \le -12$．

:::

:::info 例题 1.2

已知数列 $a_n = n(n + 2)$，$b_n = \dfrac 1 {a_n}$，$b$ 的前缀和为 $S_n$，若 $S_n < b$ 对任意 $n \in \N^\ast$ 恒成立，求 $b$ 的取值范围．

:::

:::tip 例题 1.2 解答

$S$ 就是个裂项求和，速通一下：

$$
S_n = \dfrac 3 4 - \dfrac 1 2 \left(\dfrac 1 {n + 1} + \dfrac 1 {n + 2}\right) < b
$$

到这里不要再继续算了，算到这里容易看出左侧是递增且渐近 $\dfrac 3 4$ 的，因此 $b \ge \dfrac 3 4$．

:::

:::info 例题 1.3

已知 $a_n = 2n + 1$，$b_n = 1 + \dfrac 1 {a_n}$，$b$ 前缀积为 $T_n$．若对任意 $n \in \N^\ast$，不等式

$$
\dfrac{k^{n + 1}}{T_n} - \dfrac{k^n}{\sqrt{a_n + 2}} \le 0
$$

恒成立，求正数 $k$ 的范围．

:::

:::tip 例题 1.3 解答

参变分离得

$$
k \le \dfrac{T_n}{\sqrt{a_n + 2}}, \quad n \in \N^\ast
$$

令其恒成立，需求不等式右侧的最小值．将不等式右侧看作一个新数列 $c_n = \dfrac{T_n}{\sqrt{a_n + 2}}$，我们要分析的就是 $c$ 的最小值．

先试一下能不能直接分析增减性．

当 $n$ 从 $1$ 增大时，分子和分母均递增，从这个角度看不出增减性．

再尝试展开 $T_n$ 与 $a_n$，结果是这样的：

$$
\dfrac{\dfrac 4 3 \times \dfrac 6 5 \times \cdots \times \dfrac {2n + 2}{2n + 1}}{\sqrt{2n + 3}}
$$

分子若干分数连乘，但分子全是偶数，分母全是奇数，没有一个能消的，增减性仍然完全看不出．

那不妨试一下定义法求增减性．这里显然作商法优于作差法：

$$
\begin{aligned}
\dfrac{c_{n + 1}}{c_n} & = \dfrac{T_{n + 1}}{\sqrt{2n + 5}} \cdot \dfrac{\sqrt{2n + 3}}{T_n} \\[1em]
& = \dfrac{b_n\sqrt{2n + 5}}{\sqrt{2n + 3}} \\[1em]
& = \dfrac{\dfrac{2n + 4}{2n + 3} \cdot \sqrt{2n + 3}}{\sqrt{2n + 5}} \\[1em]
& = \dfrac{2n + 4}{\sqrt{2n + 3}\sqrt{2n + 5}} \\[1em]
& = \sqrt{\dfrac{(2n + 4)^2}{(2n + 3)(2n + 5)}}
\end{aligned}
$$

根据和相同差小积大，可以看出这个式子 $> 1$，结合 $c$ 恒正，可得 $c$ 递增．

因此最小值在 $c_1 = \dfrac{4\sqrt 5}{15}$ 取到，$k$ 的范围为 $\left(0, \dfrac {4\sqrt 5} {15} \right]$．

:::

