---
sidebar_position: 2
description: 了解前缀和通项问题的更多做题技巧．
---

# 求和问题拓展

## 不常规裂项

### 裂项的本质

[上一页](./basics.md#裂项)讲解的的 **常规裂项**（也是最常考的裂项方式），裂项结果为

$$
C \cdot (\df 1 {b_n} - \df 1 {b_{n + k}}), \quad C 为与 n 无关的常数
$$

其求和时：

- $C$ 作为公因式提出．
- 中间括号的求和，整体构成了数列 $\{\df 1 {b_n}\}$ 的两个连续段相减．
- 运用 $n$，$k$ 互换将不定长 $n$ 的两段连续段相减变为定长 $k$ 的两段连续段相减．

那么，为什么非得是 $\{\df 1 {b_n}\}$ 呢？只要是一个数列就可以了！因此，更一般的裂项应当总结为

$$
C \cdot (b_n - b_{n + k}), \quad C 为与 n 无关的常数
$$

这里的 $b_n$ 可以像 **常规裂项** 一样是 $\df 1 {q_n}$ 的形式，当然也可以是 $\df{p_n}{q_n}$ 的形式，当然也可以不是一个分式，比如 $\sqrt{p_n}$，${p_n}^2$……都可以．

因此，裂项的内容绝对不止于此，我们可以进行一些更为深入的研究．

### 不常规裂项一 - 分子非常数

$$
C \cdot (\df {c_n}{b_n} - \df {c_{n + k}}{b_{n + k}}), \quad C 为与 n 无关的常数
$$

这个裂项求和的结果最后也能表示成数列 $\{\df{c_n}{b_n}\}$ 的 **两个连续段相减** 形式，因此也是一个裂项，后面称这种裂项为 **分子非常数裂项**．

**分子非常规裂项** 的步骤并不固定，通常需要 **先猜后证**，以例题为例说明．

:::info 例题 1.1.1

求 $a_n = \df{n \cdot 2^n}{(n + 1)(n + 2)}$ 的前缀和 $S_n$．

:::

本题无法用常规裂项策略解决，读者可以自行试试看：

- 分母可以表示成同一个数列 $\{n + 1\}$ 的第 $n$ 项和第 $n + 1$ 项．
- 但 $\df{分子}{分母差}$ 不是常数．

并且似乎无论如何变形都无法常规裂项，遂放弃，尝试分子非常数裂项．

:::tip 例题 1.1 解答（思考过程）

分子非常数裂项中，可以猜测一下它的裂项结果．这里笔者会猜测

$$
\df{n \cdot 2^n}{(n + 1)(n + 2)} \stackrel ? = \df{2^n}{n + 1} - \df{2^{n + 1}}{n + 2}
$$

为什么会想到这么猜？首先：

- **猜出来的形式一定要是一个合法裂项**，即分母可以统一成一个数列 $\{b_n\}$ 的第 $n$ 项与第 $n + k$ 项，分子也能统一成一个数列 $\{c_n\}$ 的第 $n$ 项与第 $n + k$ 项．两个 $k$ 是相同的（这里是 $1$）．
- **优先猜测结构与通项相似的裂项**．这里分母全是一次式，分子含 $2$ 的幂，因此笔者会这么猜．

然后再尝试证明：

$$
\df{2^n}{n + 1} - \df{2^{n + 1}}{n + 2} = \df{2^n\cdot (n + 2) - 2^{n + 1}\cdot (n + 1)}{(n + 1)(n + 2)} = \df{-n \cdot 2^n}{(n + 1)(n + 2)}
$$

结果最终的结果与原式呈相反数，说明我们要提一个 $-1$ 的公因式出来：

$$
\df{n \cdot 2^n}{(n + 1)(n + 2)} = -(\df{2^n}{n + 1} - \df{2^{n + 1}}{n + 2})
$$

裂项成功，后面就轻车熟路了．

:::

:::tip 例题 1.1 解答（写在卷子上的过程）

注意到 $a_n = -(\df{2^n}{n + 1} - \df{2^{n + 1}}{n + 2})$，因此有

$$
\begin{aligned}
S_n &= -(\df 2 2 - \df{2^2}3 + \df {2^2}{3} - \df {2^3}4 + \cdots + \df{2^n}{n + 1} - \df{2^{n + 1}}{n + 2}) \\
&= -[(\df 2 2 + \df {2^2} 3 + \cdots + \df{2^n}{n + 1}) -
(\df {2^2} 3 + \df {2^3} 4 + \cdots + \df{2^{n + 1}}{n + 2})
] \\
&= -(1 - \df{2^{n + 1}}{n + 2}) \\
&= \df{2^{n + 1}}{n + 2} - 1
\end{aligned}
$$

:::

一般来说，分子非常数裂项的试题，则裂项结果通常是较好猜的．有可能出现需要系数修正的情况，如上题．

:::info 例题 1.1.2

求 $a_n= \df{(n - 1)(n + 2)}{2^n}$ 的前缀和 $S_n$．

:::

:::tip 例题 1.1.2 解答

猜测与通项结构相同的裂项：

$$
\df{(n - 1)(n + 2)}{2^n} \stackrel ? = \df{(n + c_1)(n + c_2)}{2^n} - \df{(n + c_1 + 1)(n + c_2 + 1)}{2^{n + 1}}
$$

首先可以注意到

$$
2(n + c_1)(n + c_2) - (n + c_1 + 1)(n + c_2 + 1) = 2(n - 1)(n + 2)
$$

会发现不太对劲，左侧 $n^2$ 的系数是 $1$，右侧是 $2$，对不上．

因此修正猜测

$$
\df{(n - 1)(n + 2)}{2^n} \stackrel ? = \df{(n + c_1)(n + c_2)}{2^{n - 1}} - \df{(n + c_1 + 1)(n + c_2 + 1)}{2^n}
$$

此时

$$
2(n + c_1)(n + c_2) - (n + c_1 + 1)(n + c_2 + 1) = (n - 1)(n + 2) = n^2 + n - 2
$$

左侧一次项系数为 $2c_1 + 2c_2 - c_1 - 1 - c_2 - 1 = c_1 + c_2 - 2$，应为 $1$，可知 $c_1 + c_2 = 3$．

左侧常数项为 $2c_1c_2 - (c_1 + 1)(c_2 + 1) = c_1c_2 - c_1 - c_2 - 1$，应为 $-2$，可知 $c_1c_2 = 2$．

很明显 $c_1 = 1$，$c_2 = 2$，这就边猜边证出来了

$$
\df{(n - 1)(n + 2)}{2^n} = \df{(n + 1)(n + 2)}{2^n} - \df{(n + 2)(n + 3)}{2^{n + 1}}
$$

一个很有趣的数学巧合是上面的式子中 $n + 2$ 可以约去，但约去后就不再是裂项了，读者可以试试看．

:::

### 不常规裂项二 - 无理、对数型

$$
\df{1}{\sqrt{n} + \sqrt{n + k}} = \df{1} k (\sqrt{n + k} - \sqrt n)
$$

$$
\lg \df{a_{n + 1}}{a_n} = \lg a_{n + 1} - \lg a_n
$$

这也是两个非常经典的裂项，前者分母有理化即得，后者显然．

:::info 例题 1.2

求 $a_n = \df 1 {\sqrt n + \sqrt{n + 1}}$ 的前缀和 $S_n$．

:::

:::tip 例题 1.2 解答

$$
a_n = \df{\sqrt{n + 1} - \sqrt n}{(\sqrt {n + 1} + \sqrt n)(\sqrt {n + 1} - \sqrt n)} = \sqrt {n + 1} - \sqrt n
$$

因此

$$
\begin{aligned}
S_n &= \sqrt 2 - 1 + \sqrt 3 - \sqrt 2 + \cdots + \sqrt {n + 1} - \sqrt n \\
&= (\sqrt 2 + \sqrt 3 + \cdots + \sqrt {n + 1}) - (1 + \sqrt 2 + \cdots + \sqrt n) \\
&= \sqrt{n + 1} - 1
\end{aligned}
$$

:::

### 不常规裂项三 - 小尾巴

:::info 例题 1.3

对

$$
a_n = \df{4n^2}{(2n + 1)(2n - 1)}
$$

进行可求和的裂项．

:::

:::tip 例题 1.3 解答

$$
\df{4n^2}{(2n + 1)(2n - 1)} = \df{4n^2}{4n^2 - 1} = \df{1}{4n^2 - 1} + 1 =  \df 1 2 (\df 1 {2n - 1} - \df 1 {2n + 1}) \* + 1
$$

注意到这里带了个 $+1$ 的常数小尾巴，但它并不影响这个形式可以求和：

- 每一项有个 $+ 1$，整体对 $S_n$ 就有 $+n$ 的贡献，单独计算它．
- 而剩余的裂项部分求和．

最后再将两部分计算总和即可．

:::

这个例子提示我们：如果待裂项分式 **可分离常数**，可以 **优先考虑分离常数**．下面再给一个分离常数的例子：

$$
a_n = \df{n^2 + n + 1}{n^2 + n} \implies a_n = 1 + \df 1 {n^2 + n} = 1 + \df 1 n - \df 1 {n + 1}
$$

这个尾巴可以是常数 $+1$，还可以是一个能求和的式子，如 $+ n$（$+n$ 的贡献可以单独求和为 $\df{n(n + 1)}2$），但这种情况一般少见．

因此裂项被我们拓展为

$$
C \cdot (b_n - b_{n + k}) + c_n
$$

- $C$ 为与 $n$ 无关的常数．
- $\{c_n\}$ 为可求前缀和的数列（常数视作常数列）．

### 不常规裂项四 - 多项裂项

$$
\bal
& \phantom = \df 1 {n(n + 1)(n + 2) \cdots (n + k)} \quad (k \ge 2)\\[1em]
& = \df 1{(n + 1)(n + 2) \cdots(n + k - 1)} \cdot \df 1 {n(n + k)}\\[1em]
& = \df 1{(n + 1)(n + 2) \cdots(n + k - 1)k} \cdot (\df 1 n - \df 1 {n + k}) \\[1em]
& = \df 1 k \cdot [\df 1 {n(n + 1)(n + 2) \cdots(n + k - 1)} - \df 1 {(n + 1)(n + 2) \cdots(n + k - 1)(n + k)}]
\eal
$$

设 $b_n = \df 1 {n(n + 1)(n + 2)\cdots(n + k - 1)}$，则中括号内可以视为 $b_n - b_{n + 1}$，说明裂项成功．

以 $a_n = \df 1 {n(n + 1)(n + 2)}$ 为例，

其裂项结果为 $\df 1 2 (\df 1 {n(n + 1)} - \df 1{(n + 1)(n + 2)})$，求和结果为 $S_n = \df 1 4 - \df 1 {2(n + 1)(n + 2)}$．

### *不常规裂项五 - 阶乘、组合数

$$
a_n = n \cdot n! \implies a_n = (n + 1)! - n!
$$

$$
a_n = \df{n}{(n + 1)!} \implies a_n = \df{n \cdot n!}{n!(n + 1)!} = \df 1{n!} - \df 1{(n + 1)!}
$$

$$
a_n = \dbinom{n}{k} \implies a_n = \dbinom{n + 1}{k + 1} - \dbinom{n}{k + 1}
$$

### *不常规裂项六 - 三角函数

**下面默认所有三角函数函数值都不会取到 $0$，可以随便除**．

> 事实上，三角函数只有自变量为 $\pi$ 的半整数倍时有可能为 $0$，但下面我们讨论的数列一般都是这种形式：
>
> - $a_n = \sin(2n + 1)$
> - $a_n = \tan(\df n 2 + \df 1 2)$
>
> 由于 $n \in \Z$，三角函数自变量都是 **有理数**，只要 **自变量取不到 $0$**（$0$ 是 $\pi$ 的半整数倍中唯一的有理数），那么三角函数值就不会取到 $0$．

根据正切差角公式，

$$
\tan k = \tan(n + k - n) = \df{\tan(n + k) - \tan n}{1 + \tan n \tan(n + k)}
$$

因此

$$
\tan n \tan(n + k) = \df{\tan(n + k) - \tan n}{\tan k} - 1
$$

观察一下这个形式

$$
\df 1 {\tan k} \cdot [\tan (n + k) - \tan n] - 1
$$

是一个带尾巴的裂项，因此 $\* \tan n \tan (n + k)$ 可以裂项．

:::info 例题 1.3

求 $a_n = \tan n \tan (n + 1)$ 的前缀和 $S_n$．

:::

:::tip 例题 1.3 解答

观察到

$$
\tan [(n + 1) - n] = \df{\tan(n + 1) - \tan n}{1 + \tan n \tan(n + 1)}
$$

因此有

$$
a_n = \tan n \tan (n + 1) = \df{\tan(n + 1) - \tan n}{\tan 1} - 1
$$

于是

$$
\begin{aligned}
S_n &= \tan 1 \tan 2 + \tan 2\tan 3 + \cdots + \tan n \tan(n + 1) \\[1em]
&= \df{\tan 2 - \tan 1}{\tan 1} - 1 + \df{\tan 3 - \tan 2}{\tan 1} - 1 + \cdots + \df{\tan(n + 1) - \tan n}{\tan 1} - 1 \\[1em]
&= \df{[\tan 2 + \tan 3 + \cdots + \tan(n + 1)] - (\tan 1 + \tan 2 + \cdots + \tan n)}{\tan 1} - n \\[1em]
&= \df{\tan(n + 1) - \tan 1}{\tan 1} - n \\[1em]
&= \df{\tan(n + 1)}{\tan 1} - n - 1
\end{aligned}
$$

:::

事实上，

- $a_n = \sin n \sin(n + k)$，$a_n = \cos n \cos(n + k)$，$a_n = \tan n \tan(n + k)$（这个是上面讲的）．
- $a_n = \sin(An + B)$，$a_n = \cos(An + B)$．
- $a_n = \df 1 {\sin n \sin(n + k)}$，$\df 1 {\cos n \cos(n + k)}$，$\df 1 {\tan n \tan(n + k)}$．

这些形式全部可以裂项求和，为了不影响文章结构，笔者将它们的裂项方式放在下面的收折框中（按难度顺序排列）．

<details>

<summary> $a_n = \df 1 {\sin n \sin(n + k)}$ </summary>

$$
\sin k = \sin(n + k - n) = \sin(n + k)\cos n - \cos(n + k)\sin n
$$

两侧同时除以 $\sin n \sin (n + k)$ 得

$$
\df{\sin k}{\sin n \sin (n + k)} = \df 1 {\tan n} - \df 1 {\tan(n + k)}
$$

将 $\sin k$ 除过去：

$$
a_n = \df 1 {\sin n \sin (n + k)} = \df{\fr 1 {\tan n} - \fr 1{\tan(n + k)}}{\sin k}
$$

这就可以裂项了．以 $k = 1$ 为例，求和结果为

$$
S_n = \df{\fr 1 {\tan 1} - \fr 1 {\tan(n + 1)}}{\sin 1}
$$

</details>

<details>

<summary> $a_n = \df 1 {\cos n \cos(n + k)}$ </summary>

$$
\sin k = \sin(n + k)\cos n - \cos(n + k)\sin n
$$

两侧同时除以 $\cos n \cos (n + k)$，再将 $\sin k$ 除到等号右侧，可得

$$
a_n = \df 1 {\cos n \cos (n + k)} = \df{\tan(n + k) - \tan n}{\sin k}
$$

裂项成功．以 $k = 1$ 为例，求和结果为

$$
S_n = \df{\tan(n + 1) - \tan 1}{\sin 1}
$$

</details>

<details>

<summary> $a_n = \df 1 {\tan n \tan(n + k)}$ </summary>

尝试对 $a_n + 1 = \df{1 + \tan n \tan(n + k)}{\tan n \tan(n + k)}$ 进行 **常规裂项**（分子为 $1$ 的裂项），可以得到

$$
a_n + 1 = \df{1 + \tan n \tan(n + k)}{\tan(n + k) - \tan n} \cdot (\df 1 {\tan n} - \df 1 {\tan(n + k)})
$$

乍一看这个系数不是常数，但再一看，原来是 $\tan k = \tan(n + k - n)$ 运用正切差角公式展开的倒数！于是

$$
a_n + 1 = \df 1 {\tan k} \cdot (\df 1 {\tan n} - \df 1 {\tan(n + k)})
$$

因此

$$
a_n = \df 1 {\tan k} \cdot (\df 1 {\tan n} - \df 1 {\tan(n + k)}) - 1
$$

是一个带尾巴的裂项，以 $k = 1$ 为例，求和结果为

$$
S_n = \df 1 {\tan^2 1} - \df 1 {\tan 1 \tan(n + 1)} - n
$$

</details>

<details>

<summary> $a_n = \sin (An + B)$ </summary>

两侧同时乘以 $\sin (\df A 2)$：

$$
\sin (\df A 2)a_n = \sin (\df A 2)\sin(An + B)
$$

对等式右侧使用 **积化和差** 公式可得

$$
\sin (\df A 2)a_n = -\df 1 2 [\cos(An + B + \df A 2 ) - \cos(An + B - \df A 2 )]
$$

等式右侧是一个可以裂项的形式，这里换一个元更为清晰：令 $b_n = \cos(An + B - \df A 2)$，则

$$
\sin (\df A 2)a_n = -\df 1 2(b_{n + 1} - b_n)
$$

$\sin (\df A 2)$ 是一个非零常数（保证 $A \ne 2z\pi$），除过去即可．

$$
a_n = -\df 1 {2\sin(\fr A 2)} \cdot (b_{n + 1} - b_n)
$$

$$
\bal
S_n &= -\df 1 {2\sin(\fr A 2)} \cdot (b_{n + 1} - b_1) \\[1em]
&= \df {\cos(B + \fr A 2) - \cos(An + B + \fr A 2)}{2\sin(\fr A 2)}
\eal
$$

</details>

<details>

<summary> $a_n = \cos (An + B)$ </summary>

两侧同时乘以 $\sin (\df A 2)$：

$$
\sin (\df A 2)a_n = \sin (\df A 2)\cos(An + B)
$$

**积化和差**：

$$
\sin (\df A 2)a_n = \df 1 2 [\sin(An + B + \df A 2 ) - \sin(An + B - \df A 2 )]
$$

换元：令 $b_n = \sin(An + B - \df A 2)$，则

$$
\sin (\df A 2)a_n = \df 1 2(b_{n + 1} - b_n)
$$

$$
a_n = \df 1 {2\sin(\fr A 2)} \cdot (b_{n + 1} - b_n)
$$

$$
\bal
S_n &= \df 1 {2\sin(\fr A 2)} \cdot (b_{n + 1} - b_1) \\[1em]
&= \df {\sin(An + B + \fr A 2) - \sin(B + \fr A 2)}{2\sin(\fr A 2)}
\eal
$$

</details>

<details>

<summary> $a_n = \sin n \sin(n + k)$ </summary>

积化和差：

$$
\bal
a_n &= -\df 1 2 [\cos(2n + k) - \cos k] \\[1em]
&= \df{\cos k} 2 - \df 1 2 \cdot \cos(2n + k)
\eal
$$

$\cos(2n + k)$ 满足形态 $\cos(An + B)$，可以使用上面的方法求和，结果为

$$
\df {\sin(2n + k + 1) - \sin(k + 1)}{2\sin 1}
$$

乘 $-\df 1 2$ 再加上 $n\df {\cos k} 2$：

$$
\df {\sin(k + 1) - \sin(2n + k + 1) + 2n\sin 1 \cos k}{4\sin 1}
$$

$k = 1$ 时，上式为

$$
\df {(n + 1) \sin 2 - \sin (2n + 2)}{4 \sin 1}
$$

</details>

<details>

<summary> $a_n = \cos n \cos(n + k)$ </summary>

积化和差：

$$
\bal
a_n &= \df 1 2 [\cos(2n + k) + \cos k] \\[1em]
&= \df 1 2 \cdot \cos(2n + k) + \df{\cos k} 2
\eal
$$

$\cos(2n + k)$ 求和：

$$
\df {\sin(2n + k + 1) - \sin(k + 1)}{2\sin 1}
$$

乘 $\df 1 2$ 再加上 $n\df {\cos k} 2$：

$$
\df {\sin(2n + k + 1) - \sin(k + 1) + 2n\sin 1 \cos k}{4\sin 1}
$$

$k = 1$ 时，上式为

$$
\df {(n - 1)\sin 2 + \sin(2n + 2)}{4 \sin 1}
$$

</details>

### 不常规裂项 ex - 和裂项

最后来看另一种特别的裂项 - 和裂项．它的内容是

$$
a_n = \df{b_n + b_{n + k}}{b_nb_{n + k}} = \df 1 {b_n} + \df 1{b_{n + k}}
$$

这种形式的裂项无法用来直接求 $\{a_n\}$ 的前缀和，但是可以求 $\{(-1)^n a_n\}$ 的前缀和，见下例：

:::info 例题 1.7.1

已知 $a_n = (-1)^n \df{4n}{4n^2 - 1}$ 前缀和为 $\{S_n\}$，求 $S_{2020}$．

:::

:::tip 例题 1.7.1 解答

$$
a_n = (-1)^n \df{(2n - 1) + (2n + 1)}{(2n - 1)(2n + 1)} = (-1)^n (\df 1 {2n - 1} + \df 1 {2n + 1})
$$

此时 $S_{2020} = - 1 \ \cancel{- \df 1 3 + \df 1 3} \ \cancel{+ \df 1 5 - \df 1 5}\  \cancel{- \df 1 7 + \cdots + \df 1 {4039}} \ + \df 1 {4041} = - \df {4040}{4041}$．

:::

:::info 例题 1.7.2

和裂项：

$$
\df{3n + 2}{n(n + 1)2^n}
$$

:::

:::tip 例题 1.7.2 解答

回想一下上一个页面的[例题 2.3.6](./basics.md#裂项)：

$$
\df{n + 2}{n(n + 1)2^n} = \df{2(n + 1)}{n(n + 1)2^n} - \df n {n(n + 1)2^n} = \df 1 {n 2^{n - 1}} - \df 1{(n + 1)2^n}
$$

这个题跟那个题非常类似，那个题是将 $n + 2$ 拆成 $2(n + 1)$ 和 $-n$，系数绝对值之比为 $2 : 1$，正好将一个 $2^n$ 消成 $2^{n - 1}$ 构成裂项．这里也是一样的考虑：

$$
3n + 2 = 2(n + 1) + n
$$

因此

$$
\df{3n + 2}{n(n + 1)2^n} = \df{2(n + 1)}{n(n + 1)2^n} + \df n {n(n + 1)2^n} = \df 1 {n 2^{n - 1}} + \df 1{(n + 1)2^n}
$$

:::

## 配对求和

其实这种问题跟数列没什么关系（只是运用了一下高斯求等差数列和的思想），很简单，直接上题．

:::info 例题 2.1

已知 $f(x) = \df{4^x}{4^x + 2}$，求 $f(0) + f(\df 1 {10}) + f(\df 2 {10} ) + \cdots + f(\df 9 {10}) + f(1)$ 的值．

:::

:::tip 例题 2.1 解答

猜测：$f(x) + f(1 - x)$ 也是一个定值．

证明：

$$
\begin{aligned}
f(x) + f(1 - x) &= \df{4^x}{4^x + 2} + \df{4^{1 - x}}{4^{1 - x} + 2} \\[1em]
& = \df{4^x}{4^x + 2} + \df{4}{2 \cdot 4^x + 4} \\[1em]
& = \df{4^x}{4^x + 2} + \df{2}{4^x + 2} \\[1em]
& = 1
\end{aligned}
$$

确实是定值．

将所求的 $x$ 与 $1 - x$ 配对，可以发现共有 $5$ 对，中间剩余一个 $\df 1 2$．

我们有 $f(\df 1 2) + f(\df 1 2) = 1$，因此 $f(\df 1 2 ) = \df 1 2$．

所以答案是 $5 + \df 1 2 = \df{11}2$．

:::

还有一种题，如 $f(1) + f(2) + \cdots + f(100) + f(\df 1 2) + f(\df 1 3) + f(\df 1 {100})$ 的值，这种就是 $f(x)$ 和 $f(\df 1 x)$ 配对了（有一个 $f(1)$ 需要单算）．

下面说一下这种函数的常见形态和构造方式：

- $f(x) + f(\df 1 x) = \mathrm{const.}$：$f(x) = \df{1}{x^n + 1}$ 和 $f(x) = \df{x^n}{x^n + 1}$ 两类函数均满足此要求，其中 $n$ 取任意实数．
- $f(x) + f(a - x) = b = \mathrm{const.}$：等价于 $f$ 关于 $(\df a 2, \df b 2)$ 中心对称，取一个奇函数做平移即可．

:::info 例题 2.2

在 $1$ 和 $100$ 之间插入 $n$ 个实数，使得这 $n + 2$ 个数构成递增的等比数列，将这 $n + 2$ 个数的乘积记作 $T_n$，求 $\lg T_n$．

:::

:::tip 例题 2.2 解答

类比等差数列 $\{a_n\}$ 的前缀和 $\{S_n\}$ 用倒序相加可以证明

$$
2S_n = n(a_1 + a_n)
$$

等比数列 $\{b_n\}$ 的前缀积 $\{T_n\}$ 用倒序相乘可以证明

$$
{T_n}^2 = (a_1 \cdot a_n)^n
$$

因此本题 ${T_n}^2 = 100^{n + 2}$，$T_n = 10^{n + 2}$，$\lg T_n = n + 2$．

:::
