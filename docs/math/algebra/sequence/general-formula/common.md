---
sidebar_position: 1
description: 了解求递推公式的最基本，最常见的做题策略．
---

# 基本求通项问题

## 先猜后证（数学归纳法）

:::info 例题 1

已知数列 $\{a_n\}$ 满足 $a_1 = 1$，$a_n = \sqrt{na_n} + \df n {a_n}$，求 $a_n$．

:::

乍一看什么思路都没有，不妨算几个数．$a_1 = 1$，$a_2 = 2$，$a_3 = 3$……因此可以猜测 $a_n = n$．

**证明一个通项公式成立，一般采用数学归纳法**．

:::tip 例题 1 解答

证明 $a_n = n$ 对任意正整数 $n$ 都成立：

$n = 1$ 时 $a_1 = 1$，成立．

对任意 $k \in \N^\ast$，若 $a_k = k$，则 $a_{k + 1} = \sqrt{ka_k} + \df k {a_k} = k + 1$．成立．

因此对所有 $n$ 均有 $a_n = n$，$a_n = n$ 为 $\{a_n\}$ 的通项公式，证毕．

:::

## 算术结构相同

如果题目给出的式子中，**数列每一项在式子中出现的结构相同**，可以考虑将这个结构本身 **设成新数列**．

:::caution 思想重要性提示

不局限于求通项，做各种数列问题时，这个思想都是 **非常常用，非常重要的**，请读者 **务必对算术结构相同敏感**．

:::

:::info 例题 2.1

已知 $a_1 = 2$，$\sqrt{2a_n} - \sqrt{2a_{n - 1}} = 1$，求 $a_n$．

:::

:::tip 例题 2.1 解答

设 $b_n = \sqrt{2a_n}$，则 $b_n - b_{n - 1} = 1$，$\{b_n\}$ 为公差为 $1$ 的等差数列．

$a_1 = 2$ 可知 $b_1 = 2$，因此 $b_n = n + 1$．

$a_n = \df{{b_n}^2} 2$，即 $a_n = \df{n^2 + 2n + 1}2$．

:::

:::info 例题 2.2

已知数列 $\{a_n\}$ 满足 $a_1 + 3a_2 + 5a_3 + \cdots + (2n - 1)a_n = 4n$，求 $a_n$．

:::

:::tip 例题 2.2 解答

设 $b_n = (2n - 1)a_n$，则题目相当于给出 $\{b_n\}$ 的前缀和 $S_n = 4n$．

差分可得 $b_n = 4$．因此 $a_n = \df 4 {2n - 1}$．

:::

:::info 例题 2.3

已知正项数列 $\{a_n\}$ 满足 $2{a_n}^2 = {a_{n - 1}}^2 + {a_{n + 1}}^2$ 对任意 $n \in \N^\ast, n \ge 2$ 成立，$a_1 = 1$，$a_2 = 2$，求 $a_{34}$ 的值．

:::

:::tip 例题 2.3 解答

令 $b_n = {a_n}^2$，则有 $2b_n = b_{n - 1} + b_{n + 1}$，因此 $\{b_n\}$ 是等差数列．

而 $b_1 = {a_1}^2 = 1$，$b_2 = {a_2}^2 = 4$，可知 $b_n = 3n - 2$．

由于 $\{a_n\}$ 为正项数列，因此 $a_{34} = \sqrt{b_{34}} = \sqrt{100} = 10$．

:::

## 累加法 / 累乘法

### 普通方法

如果题目给出的 $\{a_n\}$ 的递推公式 **形如** 或 **可以变形为**：

$$
\* a_n - a_{n - 1} = f(n)
$$

则相当于给出了 $\{a_n\}$ 的 **差分** $\{D_n\}$ 从 **第二项起** 的通项：

$$
D_n = a_n - a_{n - 1} = f(n), n \ge 2
$$

$D_1 = a_1$ 一般 **单独给出**，此时如果 $\{D_n\}$ 可以求前缀和（**等差数列**、**等比数列**、**等差乘等比数列**、**裂项**……），对 $\{D_n\}$ 做前缀和即可得到 $\{a_n\}$ 的通项，这个方法称作 **累加法**．

同理，如果 $\{a_n\}$ 递推公式形如或可变形为

$$
\df{a_n}{a_{n - 1}} = f(n)
$$

则相当于给出 **$\{a_n\}$ 的「比分」$\{R_n\}$ 从第二项起的通项**，$R_1 = a_1$ 单独给出．如果 $\{R_n\}$ 可以求前缀积（**等比数列**、**可约分多项的**（见例题 3.2）），对 $\{R_n\}$ 做前缀积可得 $\{a_n\}$ 的通项，称作 **累乘法**．

**累加法** 与 **累乘法** 的写题过程较为固定，以累加法为例，一般写成

$$
a_n = a_1 + (a_2 - a_1) + (a_3 - a_2) + \cdots + (a_n - a_{n - 1})
$$

$a_1$ 特别计算（一般题目给出），后面的括号按照条件代入，做求和即可．

:::info 例题 3.1

已知数列 $\{a_n\}$ 满足 $a_1 = 2$ 且 $a_{n + 1} = a_n + n + 1$，求 $a_n$．

:::

:::tip 例题 3.1 解答

条件变形得 $a_{n + 1} - a_n = n + 1$．

当 $n \ge 2$ 时，

$$
\begin{aligned}
a_n &= a_1 + (a_2 - a_1) + (a_3 - a_2) + \cdots + (a_n - a_{n - 1}) \\
&= 2 + 2 + 3 + \cdots + n \\
& = 2 + \df{n^2 + n - 2} 2 \\
& = \df{n^2 + n + 2} 2
\end{aligned}
$$

当 $n = 1$ 时，$a_1 = 2$ 符合上式．

因此 $a_n = \df{n^2 + n + 2}2$．

:::

还记得这里为什么特别讨论 $n = 1$ 吗？其实是在[基础](../basics.md)讲过的内容，这里回顾一下：

> 这里分开算一下的目的是，$n = 1$ 时后面那个 $2 + \cdots + n$ 的 **数列为空**，数列为空的情形习惯上分类讨论一下，因为各种求和公式理论上都是在数列存在时推导的．
>
> 然而事实上，**等差数列和等比数列的求和公式在代入项数 $= 0$ 时计算出来的和均为 $0$**，是符合期望的，因此两种情况往往可以合并．

刚才又讲了个 **裂项求和**，题目也可以把数列的差分设计为可以裂项求和的分式．裂项和代入项数 $= 0$ 结果也一般为 $0$，所以两种情况也一般可合并．

**写过程时需要讨论首项**，但 **讨论结果一般都能合并** 是 **累加法 / 累乘法** 的一个重要特点．

:::info 例题 3.2

已知数列 $\{a_n\}$ 满足 $a_1 = 1$，$(n + 2)a_n = na_{n - 1}$，求 $a_n$．

:::

:::tip 例题 3.2 解答

容易看出 $\{a_n\}$ 不包含零，因此条件变形

$$
\df{a_n}{a_{n - 1}} = \df{n}{n + 2}
$$

当 $n \ge 2$ 时，

$$
\begin{aligned}
a_n &= a_1 \cdot (\df{a_2}{a_1}) \cdot (\df{a_3}{a_2}) \cdots (\df{a_n}{a_{n - 1}}) \\[1em]
&= \df 2 4 \times \df 3 5 \times \cdots \times \df{n}{n + 2} \\[1em]
&= \df{2 \times 3 \times \cdots \times n}{4 \times 5 \times \cdots \times (n + 2)} \\[1em]
&= \df 6 {n^2 + 3n + 2}
\end{aligned}
$$

$n = 1$ 时 $a_1 = 1$，符合上式．

因此 $a_n = \df 6{n^2 + 3n + 2}$．

:::

最后再次注意 **算术结构相同** 思想的广泛性：如这种式子

$$
\df 1 {a_n} - \df 1 {a_{n - 1}} = n + 1
$$

应立刻注意到设 $b_n = \df 1 {a_n}$，则 $b_n$ 差分可知，通项可求，进而 $a_n$ 通项也可求．

### 构造常数列

**构造常数列** 是一种 **替代累加法 / 累乘法** 的思路，以 **累加法** 为例：

对于

$$
a_{n + 1} - a_n = f(n)
$$

将 $f(n)$ 视作数列 **求前缀和**，令其为 $g(n)$，则有

$$
a_{n + 1} - a_n = g(n) - g(n - 1), \* \quad n \ge 2
$$

由于 $f$ 通常 **不分段**，因此 $g(0) = 0$，有

$$
a_{n + 1} - a_n = g(n) - g(n - 1), \* \quad n \in \N^\ast
$$

移项

$$
a_{n + 1} - g(n) = a_n - g(n - 1)
$$

可以发现 $\{a_n - g(n - 1)\}$ 是一个 **常数列**，其通项 $a_n - g(n - 1) = a_1 - g(0) = a_1$，因此 $a_n = a_1 + g(n - 1)$．

如果是 $a_n - a_{n - 1} = f(n)$，也可以转为 $a_n - f(n) = a_{n - 1} - f(n - 1)$．

值得注意的是，这种做法 **规避了分类讨论**，小细节是这里的 $g$ 不要写成数列，而要写成函数，否则 $g_0$ 就无定义了，又要分类讨论．

:::info 例题 3.1

已知数列 $\{a_n\}$ 满足 $a_1 = 2$ 且 $a_{n + 1} = a_n + n + 1$，求 $a_n$．

:::

:::tip 例题 3.1 解答（构造常数列）

令 $f(n) = \df 1 2 n^2 + \df 3 2 n$，条件变形得

$$
a_{n + 1} - a_n = n + 1 = (\df 1 2 n^2 + \df 3 2 n) - [\df 1 2 (n - 1)^2 + \df 3 2 (n - 1)] = f(n) - f(n - 1)
$$

因此有

$$
a_{n + 1} - f(n) = a_n - f(n - 1)
$$

即 $\{a_n - f(n - 1)\}$ 是一个常数列，$a_n - f(n - 1) = a_1 - f(0) = 2$．

因此 $a_n = 2 + f(n - 1) = \df{n^2 + n + 2} 2$．

:::

同理，对于

$$
\df {a_{n + 1}}{a_n} = f(n)
$$

也可以计算 $f$ 的前缀积 $g$，转为

$$
\df{a_{n + 1}}{a_n} = \df{g(n)}{g(n - 1)}
$$

从而转成

$$
\df{a_{n + 1}}{g(n)} = \df{a_n}{g(n - 1)}
$$

证得 $\{\df{a_n}{g(n)}\}$ 是常数列．

不难看出，构造常数列可以 **完全替代** 累加法 / 累乘法，读者自行选用一种喜欢的方法将它用熟练即可．

### $n = 1$ 时无意义

以

$$
\df{a_n}{a_{n - 1}} = \df{n}{n - 1}
$$

为例，求 $\{a_n\}$ 的通项．

$f(n) = \df{n}{n - 1}$ 在 $n = 1$ 时无意义，使用构造常数列法要找到 $f$ 的前缀积，而 $f(1)$ 无意义，似乎前缀积也是无意义的．

此时就要改一下，设 $g(n) = f(2) \cdot f(3) \cdots f(n)$，即 **从第二项起的前缀积**，这里可以计算一下：

$$
g(n) = \df 2 1 \times \df 3 2 \times \cdots \times \df n {n - 1} = n
$$

> 这里由于 $f$ 从第二项起不分段，一定有 $g(1) = 1$，这里确实吻合．

因此在 $n \ge 2$ 时，仍然有

$$
\df{a_n}{a_{n - 1}} = \df{g(n)}{g(n - 1)} = \df{n}{n - 1}
$$

整理即得 $\{\df{a_n}n\}$ 为常数列．

### 更灵活的构造常数列

从 $a_n - a_{n - 1} = f(n)$ 和 $\df{a_n}{a_{n - 1}} = f(n)$，最精华的一步是将 $f$ 分别转为 $g(n) - g(n - 1)$ 和 $\df{g(n)}{g(n - 1)}$，令 $g$ 是 $f$ 的前缀和 / 前缀积是一种 **万能方法**，但如果 $g$ 经过观察很容易凑出来，就不必非得用万能方法了．

比如已知

$$
a_n - a_{n - 1} = \df 1 {n + 1} - \df 1 n
$$

求 $a_n$．这里 $f(n)$ 都自动表示成 $g(n + 1) - g(n)$ 的形式了，因此直接移项

$$
a_n - \df 1 {n + 1} = a_{n - 1} - \df 1 n
$$

就能构造常数列了．换句话说，如果 $a_n - a_{n - 1} = f(n)$ 中的 $f$ 是一个 **能裂项的式子**，裂项后直接使用 **构造常数列** 即可．

再如

$$
\df{a_n}{a_{n - 1}} = \df{n + 1}{n - 1}
$$

观察可知

$$
\df{a_n}{a_{n - 1}} = \df{n(n + 1)}{(n - 1)n}
$$

这就直接凑成 $\df{g(n)}{g(n - 1)}$ 的形式了．

最后读者可以再看一下上一节的这个例子：

$$
\df{a_n}{a_{n - 1}} = \df{n}{n - 1}
$$

可以发现试图去找后边式子的前缀积其实是比较搞笑的，因为都已经写成最基本的 $\df{g(n)}{g(n - 1)}$ 的形式了．总之，使用构造常数列法的核心就是将 $f$ 裂项，**前缀和 / 前缀积** 是一种万能的裂项方式，但可能存在更简单的裂项方法，需要观察式子结构灵活判断．

## 有提示构造

:::info 例题 4.1

数列 $\{a_n\}$ 满足 $a_1 = -\df 1 2$，$2a_n = a_{n - 1} - n - 1$．

- （1）求证：$\{a_n + n\}$ 是等比数列．
- （2）求 $a_n$．

:::

如果没有第一问，直接求 $\{a_n\}$ 的通项，在不了解方法之前是比较困难的．而本题出题人通过设第一小问的方式，提示我们 **$\{a_n + n\}$ 是等比数列**．那么很明显．设 $b_n = a_n + n$，只要我们知道 $\{b_n\}$ 的首项与公比，则 $\{b_n\}$ 的通项可解；而 $\{b_n\}$ 的通项减去 $n$ 就是 $\{a_n\}$ 的通项了．

对于未知通项的 $\{a_n\}$，通过 **构造并证明** $\{a_n\}$ 衍生（换元）出的另一数列 $\{b_n\}$ 为 **可解通项数列** 的方式，从而获取 $\{b_n\}$ 的通项，反推 $\{a_n\}$ 的通项的方式称作 **构造法**．而上述题目通过设小问的方式，**直接提示了构造方向**．因此只需按部就班操作．

提示：读者需要对证明等比数列的操作异常熟悉，对此不熟悉的请见[判定等比数列](../gp.md#作比成常数判定等比数列)．

:::tip 例题 4.1 解答

（1）令 $b_n = a_n + n$，将条件向目标变形：

$$
2a_n = a_{n - 1} - n - 1 \iff 2a_n + 2n = a_{n - 1} + n - 1 \iff 2b_n = b_{n - 1} \iff b_n = \df 1 2 b_{n - 1}
$$

而首项 $b_1 = -\df 1 2 + 1 = \df 1 2 \ne 0$，公比 $\df 1 2 \ne 0$，

因此 $\{b_n\}$ 为首项 $\df 1 2$，公比 $\df 1 2$ 的等比数列．

（2）由（1）可知 $b_n = \df 1 {2^n}$．

$b_n = a_n + n$，可知 $a_n = b_n - n = \df 1 {2^n} - n$．

:::

:::info 例题 4.2

已知数列 $\{a_n\}$ 满足 $a_1 = 4$，$na_{n + 1} - (n + 1)a_n = 2n^2 + 2n$．

- （1）求证：数列 $\{\df{a_n} n\}$ 是等差数列．
- （2）求 $a_n$．

:::

:::tip 例题 4.2 解答

（1）令 $b_n = \df{a_n}n$，对条件同时除以 $n(n + 1)$ 可得

$$
\df{a_{n + 1}}{n + 1} - \df{a_n}n = 2
$$

即

$$
b_{n + 1} - b_n = 2
$$

可知 $\{b_n\}$ 为公差为 $2$ 的等差数列，证毕．

（2）$b_1 = \df{a_1}1 = 4$，因此 $b_n = 2n + 2$．

$b_n = \df{a_n}n$，可知 $a_n = nb_n = n(2n + 2) = 2n^2 + 2n$．

:::

:::info 例题 4.3

$x_{n + 1} = \df{{x_n}^2 - 3}{2x_n - 4}$，$a_n = \lg \df{x_n - 3}{x_n - 1}$，$a_1 = -3$，$x_n > 3$，求 $a_n$．

:::

:::tip 例题 4.3 解答

这个题的关键是读懂出题人的意图：出题人绝对不是让求出 $\{x_n\}$ 的通项，然后暴力代入解出 $\{a_n\}$．出题人真正的意图是 **提示要求 $\{x_n\}$ 的通项，构造方向是 $\{a_n\}$**，即 $\{x_n\}$ 的通项可能难求，但 $\{a_n\}$ 的通项会比较好求．

之前我们构造都是靠 **直接在递推式的基础上变形得到另一个数列的递推式**，这里提供另一个思路：**将递推式代入换元式**：

$$
\bal
a_{n + 1} &= \lg \df{x_{n + 1} - 3}{x_{n + 1} - 1} \\[1em]
&= \lg \df{\fr{{x_n}^2 - 3}{2x_n - 4} - 3}{\fr{{x_n}^2 - 3}{2x_n - 4} - 1} \\[1em]
&= \lg \df{{x_n}^2 - 6x_n + 9}{{x_n}^2 - 2x_n + 1}\\[1em]
&= \lg(\df{x_n - 3}{x_n - 1})^2\\[1em]
&= 2 \lg \lv \df {x_n - 3}{x_n - 1} \rv \\[1em]
&\xlongequal{x_n > 3} 2 \lg \df{x_n - 3}{x_n - 1} \\[1em]
&= 2a_n
\eal
$$

得到 $\{a_n\}$ 是公比为 $2$，首项为 $-3$ 的等比数列，$a_n = -3 \cdot 2^{n - 1}$．

题目并没有问 $\{x_n\}$ 的通项是什么，但仍然能看出：$\{a_n\}$ 就是要求 $\{x_n\}$ 的通项的一个良好构造．

:::

### 阅读顺序建议

**本页后面的例题会用到[下一页](./constructive.md)的内容，建议读者先阅读下一页，再回看本页剩余部分**！

## 隔项递推求奇偶项数列通项

### 隔项递推求通项操作步骤

#### 认识隔项递推

当一个数列的 **邻项之间** 没有明显递推关系，但 **隔项之间** 有明显递推关系，如

> $a_1 = 1$，$a_2 = 2$，$a_{n + 2} = a_n + 3$．

这种数列称作 **隔项递推数列**．

**隔项递推数列** 求出的通项基本都满足 **奇偶项数列** 的特征，经常搭配 **求和问题** 一起考．

:::note

有关 **奇偶项数列的求和** 以及很重要的 **奇偶下标变换**，请读者回顾[奇偶项求和](../sum/basics.md#奇偶项求和)，这里不再重复介绍．

:::

#### 第一步 - 求出奇项数列与偶项数列的通项

对于 **隔项递推数列** 而言，数列的 **奇项数列** 与 **偶项数列** 的通项是容易求得的，如

> $a_1 = 1$，$a_2 = 2$，$a_{n + 2} = a_n + 3$．

容易看出：

- 该数列的奇项数列 $\{a_{2n - 1}\}$ 是一个首项为 $a_1 = 1$，公差为 $3$ 的等差数列．
- 该数列的偶项数列 $\{a_{2n}\}$ 是一个首项为 $a_2 = 2$，公差为 $3$ 的等差数列．

因此，$a_{2n - 1} = 1 + 3(n - 1) = 3n - 2$，$a_{2n} = 2 + 3(n - 1) = 3n - 1$．

更具体地，递推式 $a_{n + 2} = f(a_n, n)$ 描述了原数列的 **隔项之间的递推关系**，但在进行奇偶拆分后，对于奇项数列与偶项数列，递推式描述的都是 **邻项之间的递推关系**．

比如，当 $a_{n + 2} = f(a_n, n)$ 时，设 $\{a_n\}$ 的奇项数列为 $\{p_n\}$，有 $p_n = a_{2n - 1}$，且

$$
p_{n + 1} = f(p_n, 2n - 1)
$$

只要递推关系 $f$ 是一个 **可求通项的递推**（**朴素等差、等比**、**累加法 / 累乘法**、**构造法** 等可解），那么 $\{a_{2n - 1}\}$ 与 $\{a_{2n}\}$ 的关系的通项都可以解出．

#### 第二步（若询问 $S_n$、$S_{2n}$、$S_{2n - 1}$）

如果题目只对 $\{a_n\}$ 的前缀和 $\{S_n\}$ 进行询问，那么我们没必要求出 $\{a_n\}$ 的通项，因为

> **奇偶项数列** 的求和，应该考虑 **奇偶数列通项**，而不是 **奇偶分段通项**．

利用[奇偶项求和](../sum/basics.md#奇偶项求和)的知识求和即可．

#### 第二步（若询问 $a_n$）

直接将求得的 $a_{2n - 1}$ 与 $a_{2n}$ **奇偶下标变换** 即得．

### 隔项递推形态一 - 邻项和 / 邻项积

在真正的题目中，隔项递推很少直接以 $a_{n + 2} = f(a_n, n)$ 的形式给出，其更常见的形态有两种：**邻项和 / 邻项积**、**分段递推**．

先介绍 **邻项和 / 邻项积**：

- 数列 $\{a_n\}$ 中，如果对于任意 $n \in \N^\ast$ 有 $a_n + a_{n + 1} = f(n)$，则 $a_{n + 2} - a_n = f(n + 1) - f(n)$．
- 非零数列 $\{a_n\}$ 中，如果对于任意 $n \in \N^\ast$ 有 $a_na_{n + 1} = f(n)$，则 $\df{a_{n + 2}}{a_n} = \df{f(n + 1)}{f(n)}$．

以第一条为例说明：将 $a_{n + 1} + a_{n + 2} = f(n + 1)$ 与 $a_n + a_{n + 1} = f(n)$ 作差即得．

这两个套路说明：**邻项和** 可以转化为 **隔项差**，**邻项积** 可以转化为 **隔项商**．**隔项差** 或 **隔项商** 一般是 **可求通项的隔项递推关系**，这就转化完成了．

:::note 注意非等价性

这个转化是不等价的（即隔项差不能反推邻项和），因此处理成 **隔项差** 或 **隔项商** 后，**邻项和** 与 **邻项积** 的条件一般仍然必要用到，不能直接撇开．

:::

注意识别邻项和的变形条件，如 $2a_n = f(n) - 2a_{n + 1}$．

:::info 例题 5.1

已知 $a_1 = 1$，$a_{n + 1} = 2n - a_n$，求 $a_n$．

:::

::::tip 例题 5.1 解答

$$
a_n + a_{n + 1} = 2n
$$

$$
a_{n + 1} + a_{n + 2} = 2(n + 1) = 2n + 2
$$

下式减上式得

$$
a_{n + 2} - a_n = 2
$$

可知对任意 $n \in \N^\ast$，有

$$
a_{2(n + 1)} - a_{2n} = 2
$$

（这个式子是由上面那个式子 $n \to 2n$ 得到的，目的是直接构造出 **偶项数列** 的 **邻项差**）．

即 $\{a_{2n}\}$ 是首项为 $a_2 = 1$，公差为 $2$ 的等差数列，有 $a_{2n} = 1 + 2(n - 1) = 2n - 1$．

:::note 简便方法提示

到这里求出了 **偶项数列** 的通项，按理来说应该对称地照着这个思路求 **奇项数列** 通项了．但事实上有更简便的方法．

题目给定了 **邻项和 / 邻项积** 条件，因此有

$$
a_{2n - 1} + a_{2n} = 2(2n - 1) = 4n - 2
$$

由于 $2n$ 为偶数，$a_{2n} = 2n - 1$，因此 $a_{2n - 1} = 4n - 2 - (2n - 1) = 2n - 1$．这就直接求出了奇项数列的通项．

:::

奇偶下标变换得：

- $n$ 为奇数时，$a_n = 2 \cdot \df{n + 1} 2 - 1 = n$．
- $n$ 为偶数时，$a_n = 2 \cdot \df n 2 - 1 = n - 1$．

因此

$$
a_n = \begin{cases}
n, & n 为奇数 \\
n - 1, & n 为偶数
\end{cases}
$$

::::

重理一遍思路：对于邻项和问题：

- 先转化为 **原数列** 的 **隔项差**．
- 再用 $n \to 2n$ 的换元，将 **原数列** 的 **隔项差** 转化为 **偶项数列** 的 **邻项差**．
- 变成已知 **邻项差** 求 **数列通项** 的问题，**等差数列**（差为 **常数**） / **累加法**（差为 **可求和式**），求出 **偶项数列** 的通项．
- 用 **邻项和** 条件，求出 **奇项数列** 的通项．
- 通过 **奇偶下标变换** 得到原数列的通项．

如果题目没要求 $a_n$ 通项只要求 $S_n$，**第五步不用做**，因为要求和，知道 **奇偶数列通项** 就足够了．

:::info 例题 5.2

已知 $a_1 = 1$，$a_n + a_{n + 1} = 2^n$，求 $a_n$．

:::

请读者先自己在纸上写一遍过程（按照上面的最简策略），然后再对照．

::::tip 例题 5.2 解答

因为对任意 $n \in \N^\ast$，有

$$
a_n + a_{n + 1} = 2^n
$$

所以

$$
a_{n + 1} + a_{n + 2} = 2^{n + 1}
$$

下式减上式得 $a_{n + 2} - a_n = 2^n$．

可知对任意 $n \in \N^\ast$，有

$$
a_{2(n + 1)} - a_{2n} = 2^{\red{2n}} = 4^n
$$

$4^n$ 前缀和可解，使用 **累加法**（这里使用构造常数列）．

令 $f(n) = \df{4(4^n - 1)}3$，则 $4^n = f(n) - f(n - 1)$，因此

$$
a_{2(n + 1)} - a_{2n} = f(n) - f(n - 1)
$$

即

$$
a_{2(n + 1)} - f(n) = a_{2n} - f(n - 1)
$$

即 $\{a_{2n} - f(n - 1)\}$ 为常数列，$a_{2n} - f(n - 1) = a_2 - f(0) = (a_1 + a_2) - a_1 = 2 - 1 = 1$．

则 $a_{2n} = 1 + f(n - 1) = 1 + \df{4^n - 4}3 = \df{4^n - 1} 3$．

$n$ 为偶数时，$a_n = \df{4^{\fr n 2} - 1} 3 = \df{2^n - 1} 3$．

$n$ 为奇数时，$n \red + 1$ 为偶数，可知 $a_{n + 1} = \df{2^{n + 1} - 1}3$．

因此 $a_n = (a_n + a_{n + 1}) - a_{n + 1} = 2^n - \df{2^{n + 1} - 1}3 = \df{2^n + 1} 3$．

:::note 提示

注意：$n$ 为奇数时，凭借对象应该是 $n + 1$ 为偶数，而不是 $n - 1$．否则 $n = 1$ 的时候 $a_{n - 1}$ 不存在，还要特别讨论．

:::

综合两种情况，

$$
a_n = \begin{cases}
\df{2^n + 1} 3, & n 为奇数 \\[1em]
\df{2^n - 1} 3, & n 为偶数
\end{cases}
$$

::::

本题在例题 5.1 的思路上做了一些调整：

- 先转化为 **原数列** 的 **隔项差**．
- 再用 $n \to 2n$ 的换元，将 **原数列** 的 **隔项差** 转化为 **偶项数列** 的 **邻项差**．
- 变成已知 **邻项差** 求 **数列通项** 的问题，**等差数列**（差为 **常数**） / **累加法**（差为 **可求和式**），求出 **偶项数列** 的通项．

上面三步和之前完全一致，但接下来有微调：

- 通过 **奇偶下标变换** 得到原数列在 $n$ 为偶数时的通项．
- 根据 **邻项和** 条件，求出原数列在 $n$ 为奇数时的通项（细节是凭借 $n + 1$ 为偶数，而不是 $n - 1$）．

事实上，

- 对于 **只求 $a_n$ 通项** 的问题，例题 5.2 思路比例题 5.1 思路少做了一些步骤，更为简单．
- 对于 **要求 $S_n$ 通项** 的问题，例题 5.1 思路可以直接求出 $\{a_n\}$ 的奇项数列通项与偶项数列通项，从而直接拼凑出 $S_n$，更为简单．

这些细节不需要死记硬背，最好的理解方式是 **做相关习题**，只需做五六道设问不同方向的这类问题，就明白哪种思路最简单了．

:::info 例题 5.3

$a_1 = 1$，$a_na_{n + 1} = 2^{2n - 1}$，求 $a_n$．

:::

邻项积转隔项商．

:::tip 例题 5.3 解答

因为对任意 $n \in \N^\ast$，有

$$
a_na_{n + 1} = 2^{2n - 1}
$$

因此

$$
a_{n + 1}a_{n + 2} = 2^{2n + 1}
$$

下式除以上式得（显然 $a_n \ne 0$）：

$$
\df{a_{n + 2}}{a_n} = 4
$$

因此偶数项是公比为 $4$，首项为 $a_2 = \df{a_1a_2}{a_1} = 2$ 的等比数列．

$a_{2n} = 2 \cdot 4^{n - 1}$，$a_n = 2 \cdot 4^{\fr n 2 - 1} = 2^{n - 1}$．

而 $n$ 为奇数时，$n + 1$ 为偶数，有 $a_{n + 1} = 2^n$，因此 $a_n = \df{a_na_{n + 1}}{a_{n + 1}} = \df{2^{2n - 1}}{2^n} = 2^{n - 1}$．

因此，$a_n = 2^{n - 1}$．

:::

### 隔项递推形态二 - 递推式分段

:::info 例题 5.4

已知 $a_1 = 1$，$a_{n + 1} = \begin{cases} a_n + 1, & n 为奇数 \\ 2a_n, & n 为偶数 \end{cases}$，求 $a_n$．

:::

先前的例子中，我们的操作是：

- **求出偶数项的递推式**．
- **求出偶数项的通项**．
- 以已知通项的 **偶数项** 为媒介，用 **邻项和 / 邻项积** 求出 **奇数项** 通项．

这个题其实也一样，只不过：

- 先前我们 **邻项 $\to$ 隔项** 地求出偶数项的递推式，这里需要换一种方法——**递推两次**．
- 先前我们用 **邻项和 / 邻项积** 求出奇数项通项，现在则是直接用递推式求解．

::::tip 例题 5.4 解答

$n$ 为偶数时，有 $a_{n + 2} = a_{n + 1} + 1 = 2a_n + 1$，因此 $n$ 为偶数时有

$$
a_{n + 2} = 2a_n + 1
$$

:::note 操作提示

上面这个操作就是 **分段递推** 转 **隔项递推** 的方式：按照递推关系 **递推两次**．

:::

可以发现这个递推的通项可以用 **不动点法** 解出，两侧同时减去 $-1$：

$$
a_{n + 2} + 1 = 2a_n + 2 = 2(a_n + 1)
$$

而首项 $a_2 + 1 = a_1 + 1 + 1 = 3 \ne 0$，公比 $2 \ne 0$，

可知 $\{a_{2n} + 1\}$ 为首项 $3$，公比为 $2$ 的等比数列，$a_{2n} + 1 = 3 \cdot 2^{n - 1}$，$a_{2n} = 3 \cdot 2^{n - 1} - 1$．

因此 $n$ 为偶数时，$a_n = 3 \cdot 2^{\frac n 2 - 1} - 1$．

$n$ 为奇数时，$n + 1$ 为偶数，即 $a_{n + 1} = 3 \cdot 2^{\frac{n + 1} 2 - 1} - 1 = 3 \cdot 2^{\frac{n - 1} 2} - 1$，而 $a_{n + 1} = a_n + 1$，因此 $a_n = 3 \cdot 2^{\frac{n - 1} 2} - 2$．

因此

$$
a_n = \begin{cases}
3 \cdot 2^{\frac{n - 1} 2} - 2, & n 为奇数 \\
3 \cdot 2^{\frac n 2 - 1} - 1, & n 为偶数
\end{cases}
$$

::::

:::info 例题 2.5

已知数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$，满足 $a_1 = 1$，$a_{n + 1} = \bcs 2a_n + 1, & n 为奇数 \\ 3a_n + 2, & n 为偶数 \ecs$．

- （1）若数列 $\{b_n\}$ 满足 $b_n = a_{2n - 1}$，求 $b_n$．
- （2）求 $a_n$，$S_{2n}$．

:::

:::tip 例题 2.5 解答

（1）当 $n$ 为奇数时，$a_{n + 2} = 3a_{n + 1} + 2 = 3(2a_n + 1) + 2 = 6a_n + 5$，$a_{n + 2} + 1 = 6(a_n + 1)$．

对任意 $n \in \N^\ast$，有 $a_{2(n + 1) - 1} + 1 = 6(a_{2n - 1} + 1)$，而 $a_1 + 1 = 2 \ne 0$，公比 $6 \ne 0$，

因此 $b_n + 1 = a_{2n - 1} + 1 = 2 \cdot 6^{n - 1}$，$b_n = 2 \cdot 6^{n - 1} - 1$．

（2）$n$ 为奇数时，$a_n = 2 \cdot 6^{\fr{n + 1} 2 - 1} - 1 = 2 \cdot 6^{\fr {n - 1} 2} - 1$．

$n$ 为偶数时，$n - 1$ 为奇数，$a_n = 2a_{n - 1} + 1 = 4 \cdot 6^{\fr n 2 - 1} - 1$．

因此

$$
a_n = \bcs
2 \cdot 6^{\fr {n - 1} 2} - 1, & n 为奇数 \\
4 \cdot 6^{\fr n 2 - 1} - 1, & n 为偶数
\ecs
$$

$a_{2n} = 4 \cdot 6^{n - 1} - 1$，设 $c_n = a_{2n - 1} + a_{2n} = 6^n - 2$．

则

$$
\bal
S_{2n} &= a_1 + a_2 + a_3 + a_4 + \cdots + a_{2n} \\[1em]
&= c_1 + c_2 + \cdots + c_n \\[1em]
&= \df {6^{n + 1} - 6}5 - 2n
\eal
$$

:::

## 给 $S$ 求 $a$

### $\{S_n\}$ 通项给定

在[基础](../basics.md)页面我们就已经了解到给 $\{S_n\}$ 求 $\{a_n\}$ 只需对 $\{S_n\}$ 做差分，即

$$
a_n = \begin{cases}
S_1, & n = 1 \\
S_n - S_{n - 1}, & n \ge 2
\end{cases}
$$

有的 $\{S_n\}$ 算出的 $\{a_n\}$ 可以合并，如 $S_n = 2^n - 1$ 对应 $a_n = 2^{n - 1}$；

有的 $\{S_n\}$ 算出的 $\{a_n\}$ 不能合并，如 $S_n = n^2 - 3n + 1$ 对应 $a_n = \begin{cases} -1, & n = 1 \\ 2n - 4, & n \ge 2 \end{cases}$．

在算 $\{a_n\}$ 的时候，应该按照 $n = 1$ 与 $n \ge 2$ 分类讨论，最后来看是否能合并．给出一个在[基础](../basics.md#前缀和与差分)页面已经讲过的例题：

:::info 例题 6.1

已知数列 $\{a_n\}$ 的前 $n$ 项和为 $\{S_n\}$，且 $\log_2(S_n + 1) = n + 1(n \in \N^\ast)$，求 $a_n$．

:::

:::tip 例题 6.1 解答

条件变形得 $S_n = 2^{n + 1} - 1$．

当 $n = 1$ 时，$a_1 = S_1 = 3$．

当 $n \ge 2$ 时，$a_n = S_n - S_{n - 1} = 2^n$．

因此

$$
a_n = \begin{cases}
3, & n = 1 \\
2^n & n \ge 2
\end{cases}
$$

:::

事实上，我们有另一个方法（**大题中不能使用**）可以直接通过看 $\{S_n\}$ 的方式判断最后的 $\{a_n\}$ 是否能合并：

- 如果 $S(0) = 0$，则最后的两种情况 **可以合并**．
- 如果 $S(0) \ne 0$，则最后的两种情况 **不能合并**．

这个结论从何而来？事实上只需观察 $\{S_n\}$ 的表达式：

$$
a_n = \begin{cases}
S_1, & n = 1 \\
S_n - S_{n - 1}, & n \ge 2
\end{cases}
$$

两种情况可以合并，当且仅当 $n = 1$ 适合 $n \ge 2$ 的式子，即 $S_1 - S(0) = S_1$，等价 $S(0) = 0$．

这个东西在大题中不能直接使用，然而：

- 遇到给 $\{S_n\}$ 求 $\{a_n\}$ 的题，就可以在心里算一下 $S(0)$，判断 $\{a_n\}$ 是否分段可以更加「心中有数」一些．
- 在填选中如果 $S(0) = 0$，也意味着不用验证 $n = 1$，直接 $a_n = S_n - S_{n - 1}$ 即可．

因此读者可以尝试养成看到 $\{S_n\}$ 就尝试计算 $S(0)$ 的好习惯．

### $\{S_n\}$ 通项给定中的算术结构相同

:::info 例题 6.2

已知 $a_1 + 2a_2 + 3a_3 + \cdots + na_n = (2n - 1) \cdot 3^n$，求 $a_n$．

:::

:::tip 例题 6.2 解答

令 $b_n = na_n$，则条件给出 $\{b_n\}$ 的前缀和 $S_n = (2n - 1) \cdot 3^n$．

（这一步在草稿纸上写或在心里想：$S(0) = -1 \cdot 3^0 = -1$，最终结果应当不能合并．）

$n = 1$ 时，$b_1 = S_1 = 1 \times 3 = 3$，$a_1 = b_1 = 3$．

$n \ge 2$ 时，$b_n = S_n - S_{n - 1} = 4n \cdot 3^{n - 1}$，$a_n = \df{b_n}n = 4 \cdot 3^{n - 1}$．

因此

$$
a_n = \begin{cases}
3, & n = 1 \\
4 \cdot 3^{n - 1}, & n \ge 2
\end{cases}
$$

（因为刚才算出 $S(0) \ne 0$，这里就不用再判断是否可以合并了，一定是不能．当然也可以验证一下．）

:::

除此之外：

- $a_1 + \df 1 2 a_2 + \df 1 3 a_3 + \cdots + \df 1 n a_n$ 给出了 $\{\df{a_n}n\}$ 的前缀和．
- $2a_1 + 2^2 a_2 + \cdots + 2^n a_n$ 给出了 $\{2^na_n\}$ 的前缀和．

这里换元思想本质仍然是注意到式子中所有的 $a_n$ 出现的 **算术结构相同**．因此 **算术结构相同** 的换元确实是非常重要的一个思想．

### $S$、$a$ 混杂式 - 消 $S$

给定 $\{S_n\}$ 的通项，无论通项如何，$\{a_n\}$ 的通项总能通过作差直接得到．

接下来的题目中，$\{S_n\}$ 的通项均是未知的，而只给出有关 $\{S_n\}$ 与 $\{a_n\}$ 的一个混杂式．这类题有两个比较固定的解题策略：**消 $S$** 和 **消 $a$**．先来看 **消 $S$**．

:::info 例题 6.3.1

$\{a_n\}$ 前缀和为 $\{S_n\}$，若 $S_n = 2a_n + 1$，求 $a_n$．

:::

:::tip 例题 6.3.1 解答

当 $n = 1$ 时，$S_1 = 2a_1 + 1$，即 $a_1 = 2a_1 + 1$，可知 $a_1 = -1$．

当 $n \ge 2$ 时，

$$
S_n = 2a_n + 1
$$

$$
S_{n - 1} = 2a_{n - 1} + 1
$$

两式相减得 $a_n = 2a_n - 2a_{n - 1}$，即 $a_n = 2a_{n - 1}$．

因此，$\{a_n\}$ 是一个首项 $a_1 = -1$，公比 $2$ 的等比数列，$a_n = -2^{n - 1}$．

:::

消 $S$ 的基本策略就是：

- 先讨论 $n = 1$（更准确地说，是使得式中 $S_n$ 的下标出现 $1$ 的 $n$，如 $S_{n - 1} + S_{n + 1} = 2S_n$ 应该讨论 $n = 2$），将 $S_n$ 暴力展开为 $a_n$，解 $a_n$ 的方程．
- 再讨论 $n \ge 1$，三步走：
	- 将 **$S_n$ 与 $a_n$ 的关系式向前递推一项**，凑出 $S_{n - 1}$．
	- 将 **两个关系式相减**，消去 $S_n$，得到 $\{a_n\}$ 的一个 **递推式**．
	- 根据 $\{a_n\}$ 的递推式求出 $\{a_n\}$ 的 **通项**．

:::info 例题 6.3.2

$\{a_n\}$ 前缀和为 $\{S_n\}$，已知 $a_1 = - \df 9 4$，$4S_{n + 1} = 3S_n - 9$，求 $a_n$．

:::

:::tip 例题 6.3.2 解答

$n = 1$ 时，$4S_2 = 3S_1 - 9$，即 $4(a_1 + a_2) = 3a_1 - 9$，可知 $a_2 = -\df{27}{16}$．

$n \ge 2$ 时，

$$
4S_{n + 1} = 3S_n - 9
$$

$$
4S_n = 3S_{n - 1} - 9
$$

作差得

$$
4a_{n + 1} = 3a_n
$$

即 $a_{n + 1} = \df 3 4 a_n$．

注意这里的前提是 $n \ge 2$，因此这个条件只给出 $\{a_n\}$ 从 **第 $2$ 项起** 为公比 $\df 3 4$ 的等比数列．

> 注意目前为止 **不能说 $\{a_n\}$ 是等比数列**！

注意到 $a_2 = \df 3 4 a_1$，因此 $\{a_n\}$ 为首项 $a_1 = -\df 9 4$，公比 $\df 3 4$ 的等比数列．

因此 $a_n = - \df{3^{n + 1}}{4^n}$．

:::

:::warning 坑点

$n \ge 2$ 时：

- $a_n = 2a_{n - 1}$ 可以给出 **整个数列** $\{a_n\}$ 为等比数列（即例题 6.3.1）．
- $a_{n + 1} = \df 3 4 a_n$．只能给出 **第 $2$ 项起** 为等比数列（即例题 6.3.2）．

因此做这种问题时，递推公式一定要联系 $n$ 的范围一起看．

上面这个题 $a_1$ 与 $a_2$ 凑巧满足了比例关系．如果不满足的话，只能得到 $\{a_n\}$ 从第二项起为等比数列，可写出 $a_n$（$n \ge 2$）的递推式，然后结合 $n = 1$ 的情况分段写．

:::

另外，本题 **还有一种做法**，注意条件

$$
4S_{n + 1} = 3S_n - 9
$$

是一个 **只含 $S_n$** 的式子．对于这类式子，**还可以考虑求出 $\{S_n\}$ 的通项，然后再用 $\{S_n\}$ 的通项反算 $\{a_n\}$**．上式中 $\{S_n\}$ 的通项可用不动点法解出．

:::info 例题 6.3.3

设正项数列 $\{a_n\}$ 及其前缀和 $\{S_n\}$，$a_3 = 7$，${a_{n + 1}}^2 = 6S_n + 9n + 1$，求 $a_n$．

:::

:::tip 例题 6.3.3 解答

$n = 1$ 时，${a_2}^2 = 6a_1 + 10$．

$n \ge 2$ 时，

$$
{a_{n + 1}}^2 = 6S_n + 9n + 1
$$

$$
{a_n}^2 = 6S_{n - 1} + 9(n - 1) + 1 = 6S_{n - 1} + 9n - 8
$$

作差得

$$
{a_{n + 1}}^2 - {a_n}^2 = 6a_n + 9
$$

基本代数素养：**遇到这种多项多次多项式优先考虑因式分解**，而 **因式分解的第一步是将等号一侧置空为零**．

$$
\begin{aligned}
{a_{n + 1}}^2 - {a_n}^2 - 6a_n - 9 &= 0 \\
{a_{n + 1}}^2 - (a_n + 3)^2 &= 0 \\
(a_n + a_{n + 1} + 3)(a_{n + 1} - a_n - 3) &= 0
\end{aligned}
$$

由 $a_n > 0$（题目给的条件）可知 $a_n + a_{n + 1} + 3 > 0$，因此 $a_{n + 1} - a_n - 3 = 0$．

即 $a_{n + 1} - a_n = 3$．这说明 $\{a_n\}$ 从 **第 $2$ 项起** 是公差为 $3$ 的等差数列．

已知 $a_3 = 3$，则对任意 $n \ge 2$，$n \in \N^\ast$，有 $a_n = a_3 + (n - 3) \times 3 = 3n - 2$．

因此 $a_2 = 4$，由 ${a_2}^2 = 6a_1 + 10$ 可知 $a_1 = 1$．

注意到 $a_1$ 适合式子 $3n - 2$，因此 $a_n = 3n - 2$．

:::

### $S$、$a$ 混杂式 - 消 $a$

在 $n \ge 2$ 时，上面的例题中给出的所有式子，都能通过 **再向前递推一项**，然后 **作差** 将 $S_n$ 直接消去．然而并不是所有的式子的 $S_n$ 都能通过作差消去，如

$$
a_n = \df{2{S_n}^2}{2S_n - 1}
$$

这个式子就无法通过作差消去 $S_n$．

此时就要换一种策略：**消 $a$**．考虑到 $n \ge 2$ 时，$a_n = S_n - S_{n - 1}$，有

$$
S_n - S_{n - 1} = \df{2{S_n}^2}{2S_n - 1}
$$

这是一个 **纯 $\{S_n\}$ 式**，因此可考虑直接从这个递推式算出 $\{S_n\}$ 的通项．

:::info 例题 6.4

已知 $\{a_n\}$ 及其前缀和 $\{S_n\}$，$a_n = \df{2{S_n}^2}{2S_n - 1}, \quad n \in \N^\ast, n \ge 2$，若 $a_1 = 1$，求 $a_n$．

:::

首先注意到本题的递推式本身就不保证对 $n = 1$ 成立，因此直接讨论 $n \ge 2$ 即可．

:::tip 例题 6.4 解答

$n \ge 2$ 时，

$$
S_n - S_{n - 1} = \df{2{S_n}^2}{2S_n - 1}
$$

这里可以去分母，但笔者会选择 **移项**，将 $S_n$ 移至右侧，可以让 $S_n$ 在一边，$S_{n - 1}$ 自己在另一边，**更符合递推式的结构**．

$$
S_{n - 1} = S_n - \df{2{S_n}^2}{2S_n - 1} = \df{-S_n}{2S_n - 1}
$$

这个类型在[无提示构造法](./constructive.md)页面讲过，处理策略是对等式两侧 **取倒数**：

$$
\df{1}{S_{n - 1}} = \df{1 - 2S_n}{S_n} = \df{1}{S_n} - 2
$$

即

$$
\df{1}{S_n} - \df{1}{S_{n - 1}} = 2
$$

该式对 $n \ge 2$ 恒成立，由于是 $n$ 与 $n - 1$ 的关系，因此可以描述整个数列（而不是从第 $2$ 项起）．（这句话不用在卷子上写出）

因此 $\{\df 1 {S_n}\}$ 为首项 $\df 1 {S_1} = \df 1 {a_1} = 1$，公差为 $2$ 的等差数列，

有 $\df{1}{S_n} = 1 + 2(n - 1) = 2n - 1$，即 $S_n = \df{1}{2n - 1}$．

（注意到 $S(0) \ne 0$，可以预测到结果 $\{a_n\}$ 分段）．

求出 $S_n$ 后可以用题目给出的递推式 $a_n = \df{2{S_n}^2}{2S_n - 1}$ 计算 $a_n$，也可以用 $S_n - S_{n - 1}$ 计算 $a_n$．观察一下，这里应该是后者更简便．

$n \ge 2$ 时，$a_n = S_n - S_{n - 1} = -\df{2}{4n^2 - 8n + 3}$．

因此答案为

$$
a_n = \begin{cases}
1, & n = 1 \\
-\df{2}{4n^2 - 8n + 3}, & n \ge 2
\end{cases}
$$

:::

### 给 $T$ 求 $a$

刚才我们系统梳理了给 $\{S_n\}$ 求 $\{a_n\}$ 的解题策略．前缀积与前缀和是同理的，当给定 $\{a_n\}$ 的前缀积 $\{T_n\}$ 与 $\{a_n\}$ 的关系时，上面的套路与策略都要学会灵活使用：

- 给定 $\{T_n\}$ 的通项，则 $a_n = \df{T_n}{T_{n - 1}}$ 直接得到．
- 给定 $\{T_n\}$ 与 $\{a_n\}$ 的关系，可以考虑：
	- 通过 **向前递推一项** 再 **作比** 的方式 **消去 $\{T_n\}$**．
	- 通过 $a_n = \df{T_n}{T_{n - 1}}$ **消去 $\{a_n\}$**．

最后，$\{a_n\}$ 不分段等价于 $T(0) = \* 1$．

:::info 例题 6.5

已知数列 $\{a_n\}$ 的前缀和为 $\{S_n\}$，$\{S_n\}$ 的前缀积为 $\{b_n\}$，若 $\df{2}{S_n} + \df{1}{b_n} = 2$，求 $a_n$．

:::

乍一看 $\{b_n\}$ 是一个 **前缀和** 的 **前缀积**，两层嵌套，如果考虑直接硬做显然不合适．

但是当我们以更高的视角看这个题目，就会发现题目的本质其实是：

> 给定数列 $\{S_n\}$，设其前缀积为 $\{b_n\}$，若 $\df{2}{S_n} + \df{1}{b_n} = 2$，求 $\{S_n\}$ 的差分．

如果 $\{S_n\}$ 可解，则 $\{S_n\}$ 的差分直接做就行，因此这里只存在一个 **前缀积** $\{b_n\}$ 与原数列 $\{S_n\}$ 的关系，模仿先前的策略思考．

对 $\df{2}{S_n} + \df{1}{b_n} = 2$ 这个式子处理，消 $\{b_n\}$ 更容易还是消 $\{S_n\}$ 更容易呢？

- 消 $\{b_n\}$（前缀积）：向前递推一项得 $\df{2}{S_{n - 1}} + \df{1}{b_{n - 1}} = 2$，两式作比形式不好，无法消 $\{b_n\}$，放弃．
- 消 $\{S_n\}$（原数列）：只需利用 $S_n = \df{b_n}{b_{n - 1}}$，这里替换一下发现很可做．

那就使用后者做．

:::tip 例题 6.5 解答

显然 $S_n \ne 0$，$b_n \ne 0$．

当 $n = 1$ 时，$\df 2 {S_1} + \df 1 {b_1} = 2$，即 $\df 2 {b_1} + \df 1 {b_1} = 2$，解得 $b_1 = \df 3 2$．

当 $n \ge 2$ 时，有 $S_n = \df{b_n}{b_{n - 1}}$，因此

$$
\begin{aligned}
\df{2}{S_n} + \df{1}{b_n} &= 2 \\[1em]
\df{2b_{n - 1}}{b_n} + \df 1 {b_n} &= 2 \\[1em]
2b_{n - 1} + 1 &= 2b_n \\
b_n - b_{n - 1} = \df 1 2
\end{aligned}
$$

而 $b_1 = \df 3 2$，可知 $\{b_n\}$ 是一个首项为 $\df 3 2$，公差为 $\df 1 2$ 的等差数列，$b_n = \df 3 2 + \df 1 2(n - 1) = \df {n + 2} 2$．

（注意到 $b(0) = 1$，可以预测到 $\{S_n\}$ 不分段．）

知道 $\{b_n\}$ 后可以考虑用 $\df{2}{S_n} + \df{1}{b_n} = 2$ 或 $S_n = \begin{cases} b_1, & n = 1 \\[1em] \df{b_n}{b_{n - 1}}, & n \ge 2 \end{cases}$ 来求 $\{S_n\}$，

无论如何最终的结果是（中间步骤省略）：

$$
S_n = \df{n + 2}{n + 1}
$$

（注意到 $S(0) \ne 0$，可以预测到 $\{a_n\}$ 分段．）

$n = 1$ 时，$a_1 = S_1 = \df 3 2$．

$n \ge 2$ 时，$a_n = S_n - S_{n - 1} = \df{n + 2}{n + 1} - \df{n + 1}n = -\df 1 {n^2 + n}$

因此

$$
a_n = \begin{cases}
\df 3 2, & n = 1 \\[1em]
-\df 1 {n^2 + n}, & n \ge 2
\end{cases}
$$

:::