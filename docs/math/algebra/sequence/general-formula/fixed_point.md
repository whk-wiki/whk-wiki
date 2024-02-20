---
sidebar_position: 3
description: （延伸阅读）了解不动点法的内涵．
---

# *不动点法的内涵

:::caution 本页对高考应试帮助为零

仅供学有余力的人参考，处于紧张备考状态的读者请勿阅读此文．

:::

**不动点法** 事实上可以不局限于解决 $a_{n + 1} = pa_n + q$ 和 $a_{n + 1} = \df{pa_n + q}{sa_n + t}$ 两类数列的通项，还可解决相当一部分 **一阶递推数列** 的通项公式问题．

如果想要把握不动点法的思维内涵，一些多余的课外知识是必不可少的．本页会选择从一个尽可能容易理解的方向切入．

## 前置知识

一阶递推公式 $a_n = f(a_{n - 1})$，提供了已知 $a_1$ 便可推得整个数列的方法：

$$
\begin{aligned}
a_2 = f(a_1) \\
a_3 = f(a_2) = f(f(a_1)) \\
a_4 = f(a_3) = f(f(a_2)) = f(f(f(a_1))) \\
\cdots
\end{aligned}
$$

称 $x \to f(x)$ 的过程为一次 **迭代**，则 $f(a_n)$ 可以由 $a_1$ 进行 $n - 1$ 次迭代得到．

> 这里有一个要求：$f$ 本身不能与 $n$ 有关．如 $a_{n + 1} = a_n + n$ 这种递推式就无法刻画为一元函数的迭代．

记 $n$ 次迭代函数 $f^n(x) = \underbrace{f(f(\cdots f\right.\right.}_{n 个 f}(x)\left.)\left.)$．对于任意 $n, m \in \N^\ast$，有 $f^{n + m}(x) = f^n(f^m(x))$，因此我们可以补充定义：

- $f^0(x) = x$（这样以来 $f^n(x) = f^n(f^0(x))$ 恒成立，满足上面的性质）．
- $f^{-1}(x)$ 表示 $f(x)$ 的 **反函数**（这样以来 $f(f^{-1}(x)) = f^0(x) = x$，满足上面的性质）．

注意 $\sin^2 x$ 的 $2$ 和这里不太一样，它表示的是 $(\sin x)^2$，而不是迭代两次的 $\sin(\sin x)$．

对于递推数列 $a_n = f(a_{n - 1})$，我们有 $f(a_n) = f^{n - 1}(a_1)$，只要我们求出 $f^{n - 1}(x)$ 的解析形式，就可以直接写出 $\{a_n\}$ 的通项公式．因此，**求解一阶递推数列的通项问题，本质就是求解函数迭代的问题**．

考虑这样一个关系网：

$$
x_0 \xto{f} x_1 \xto{f} x_2 \xto{f} \cdots \xto{f} x_n
$$

引入一个 **存在反函数** 的函数 $\varphi$，记 $t_i = \varphi(x_i)$，则有

$$
\begin{matrix}
x_0 & \xto{f} & x_1 & \xto{f} & x_2 & \xto{f} & \cdots & \xto{f} & x_n \\
\xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} & & \cdots & & \xudarr{\varphi^{-1}}{\varphi} \\
t_0 & & t_1 & & t_2 & & \cdots & & t_n
\end{matrix}
$$

可以发现，从 $t_i$ 到 $t_{i + 1}$，可以先迭代一次 $\varphi^{-1}$，再迭代一次 $f$，最后迭代一次 $\varphi$．即，设 $g(t_i) = t_{i + 1}$，则 $g(x) = \varphi(f(\varphi^{-1}(x)))$．

将 $g$ 引入上面的关系网中：

$$
\begin{matrix}
x_0 & \xto{f} & x_1 & \xto{f} & x_2 & \xto{f} & \cdots & \xto{f} & x_n \\
\xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} & & \cdots & & \xudarr{\varphi^{-1}}{\varphi} \\
t_0 & \xto g & t_1 & \xto g & t_2 & \xto g & \cdots & \xto g & t_n
\end{matrix}
$$

一般地，对于两个函数 $f$ 和 $g$，如果存在一个函数 $\varphi$ 及其反函数 $\varphi^{-1}$，使得 $g(x) = \varphi(f(\varphi^{-1}(x)))$，则称 $f$ 与 $g$ 通过 $\varphi$ **相似**，记作 $f \stackrel \varphi \sim g$，$\varphi$ 称作 $f$ 与 $g$ 的 **桥函数**．

如果我们将上面的关系网中间全部折叠：

$$
\begin{matrix}
x_0 & \xto{f^n} & x_n \\
\xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} \\
t_0 & \xto{g^n} & t_n
\end{matrix}
$$

不难发现 $f^n \stackrel \varphi \sim g^n$．

这也就是说，**如果 $f \stackrel \varphi \sim g$，则 $f^n \stackrel \varphi \sim g^n$**．

回到我们的问题：对于一个较为复杂的函数 $f(x)$，求 $f^n(x)$．

对于较难求解迭代的 $f$，可以试图找到它的一个 **相似函数** $g$，设它们的桥函数为 $\varphi$，则有关系网

$$
\begin{matrix}
x_0 & \xto{f^n} & x_n \\
\xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} \\
t_0 & \xto{g^n} & t_n
\end{matrix}
$$

关系网指出 $x_0$ 到 $x_n$ 有两条路径：一条为 $f^n$，一条为 $\varphi \to g^n \to \varphi^{-1}$．始终点相同的路径应为同一映射（函数），因此

$$
f^n(x) = \varphi^{-1}(g^n(\varphi(x)))
$$

如果 **$g^n(x)$ 的解析式容易求得**，则 $f^n(x)$ 的解析式根据此式自然可解．

纵观我们的分析可以发现，现在的目标变成：找到 $f$ 的一个 **自身迭代后仍易求得解析式** 的 **相似函数** $g$．

**自身迭代后仍易求得解析式** 的函数有哪些呢？**常见的**（注意不是全部）有两种：

- $g(x) = x + d$，$d$ 为任意参数．
- $g(x) = qx$，$q$ 为任意非零参数．

相信读者看出来了：

- $g(x) = x + d$ 对应 **等差数列** 递推的函数形式，$g^n(x)$ 对应首项为 $x$，公差为 $d$ 的数列第 $n + 1$ 项 $\* x + nd$．
- $g(x) = qx$，对应 **等比数列** 递推的函数形式，$g^n(x)$ 对应首项为 $x$，公比为 $q$ 的数列第 $n + 1$ 项 $\* x \cdot q^n$．

让我们回归数列意义．规约 $\varphi(x)$ 的过程，实质上是在换元 $b_n = \varphi(a_n)$．对于难以求解迭代的 $a_n \xto f a_{n + 1}$，两侧换元为 $b_n \xto g b_{n + 1}$，如果 $g$ 是像上面两个函数那样好求迭代的函数，则 $\{b_n\}$ 的通项就可解，进而通过 $\varphi^{-1}$ 还原出 $\{a_n\}$ 的通项．

## 不动点法方法介绍

那么怎么构造合适的 $\varphi(x)$ 使得 $g(x)$ 符合这种形式呢？我们需要引入一个概念——**不动点**，以及有关它的一个性质．

我们将满足 $f(x_0) = x_0$ 的 $x_0$ 称作 $f(x)$ 的 **不动点**．

- 一个 $f$ 可以有多个不动点．
- 对于 $f$ 的一个不动点 $x_0$，$x_0$ 经过一次 $f$ 的迭代后仍为 $x_0$．
- $f$ 的所有不动点是其与 $y = x$ 的所有交点横坐标．

观察关系网：

$$
\begin{matrix}
x_0 & \xto{f} & x_1 \\
\xudarr{\varphi^{-1}}{\varphi} & & \xudarr{\varphi^{-1}}{\varphi} \\
t_0 & \xto{g} & t_1
\end{matrix}
$$

可以发现，$x_0$ 为 $f$ 的不动点，等价于 $x_0 = x_1$，等价于 $t_0 = t_1$，等价于 $t_0$ 是 $g$ 的一个不动点．也就是说，$f$ 若有不动点 $x_0$，则 $g$ 的一定有不动点 $t_0 = \varphi(x_0)$，这是 $f \sim g$ 的一个 **必要条件**．

接下来分析一下上面两类 $g$ 的不动点．

- $g(x) = x + d$（令 $d \ne 0$）：其存在不动点 $\pm \infty$（这里引入一个无穷大看起来十分粗糙和不严谨，但受限于高中教学只能讲成这样，请读者谅解）．
- $g(x) = qx$（令 $q \ne 0$）：其存在不动点 $0$ 和 $\pm \infty$．

既然 $f$ 有不动点 $x_0$，则 $\varphi(x_0)$ 必须是 $g$ 的一个不动点，我们可以如下构造：

- 如果 $f(x)$ 有唯一不动点 $x_0$：
	- 可令 $\varphi(x) = \* x - x_0$．于是 $\varphi(x_0) = 0$，与 $g(x) = qx$ 的不动点对应．
	- 可令 $\varphi(x) = \* \df 1 {x - x_0}$．于是 $\varphi(x_0) = \infty$，与 $g(x) = x + d$ 的不动点对应．
- 如果 $f(x)$ 有两个不动点 $x_1$，$x_2$，令 $\varphi(x) = \* \df {x - x_1}{x - x_2}$．于是 $\varphi(x_1) = 0$，$\varphi(x_2) = \infty$，与 $g(x) = qx$ 的不动点对应．

这也就是为什么通常令 $b_n = a_n - x_0$，$b_n = \df 1 {x - x_0}$，$b_n = \df {x - x_1}{x - x_2}$ 的原因．

当然上面给出的是必要条件，只能排除一些不好的构造情况，而不能直接指出 $f$ 有一个动点时，按照 $b_n = a_n - x_0$ 换元就一定可以——有时还必须按照 $b_n = \df 1 {x - x_0}$ 换元（如 $a_{n + 1} = \df{pa_n + q}{sa_n + t}$ 在单一不动点时的换元）．

最后的最后，可求迭代的函数不止这两种，还有 $g(x) = ax^\alpha$ 等函数（其迭代可通过两侧取对数求得），而 $ax^2$ 的不动点就还有一个 $\df 1 a$．基于此，我们可以有更多的不动点策略，如：

> $f(x)$ 有两个不动点 $x_1$，$x_2$，也可以令 $\varphi(x) = x - x_1$：$\varphi(x_1) = 0$，$\varphi(x_2) = x_2 - x_1$，函数 $g(x) = \df{1}{x_2 - x_1} \cdot x^2$ 也存在这样两个不动点，因此换元可能可以成功．

举个例子吧：

:::info 例题 ex

用含 $a_1$，$p$，$q$，$n$ 的式子表示 $a_n$：$a_{n + 1} = p{a_n}^2 + qa_n + \df{q^2 - 2q}{4p}$，其中 $p \ne 0$．

:::

:::tip 例题 ex 解答

两个不动点分别为 $x_1 = -\df q {2p}$，$x_2 = \df{q + 2}{2p}$，这里令 $\varphi(x) = x + \df q {2p}$，即 $b_n = a_n + \df q {2p}$，换出来的 $g$ 就是 $g(x) = px^2$，即 $b_{n + 1} = p \cdot {b_n}^2$，$\{b_n\}$ 可解，$\{a_n\}$ 就可解了．

笔者懒得计算结果了，感兴趣的读者可以自行计算并在下面的讨论区讨论！

:::
