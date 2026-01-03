# 复数的三角函数形式

定义一个复数（有序数对） $z=x+y\mathrm i$ 的**模长**为其在极坐标系下向量的模长 $r=\sqrt{x^2+y^2}$，**幅角**为其在极坐标系下的幅角 $\varphi$，记作：

$$
r=|z|,\,\varphi=\arg z
$$

一般的，对于 $x\ne0$ 时，我们有 $\varphi=\arctan\frac yx$，则每个复数 $z$ 都能表示为：

$$
z=r(\cos\varphi+\mathrm i\sin\varphi)
$$

我们称这个形式为复数的三角表达式。  
注意到这个表示形式不是唯一的，对于任意一组 $\varphi_n=\varphi+2n\pi,\,n\in\mathbb Z$，均满足上式。一般的，在不加说明的情况下，钦定 $\varphi\in[-\pi,\pi)$，称其为该复数幅角的主值。

## 复幂函数
由复数的三角表达式，我们可以轻易地推导出棣莫弗公式，即：

$$
z_1=r_1(\cos\varphi_1+\mathrm i\sin\varphi_1),\,\,z_2=r_2(\cos\varphi_2+\mathrm i\sin\varphi_2)\\
$$

根据复数的乘法，可以得到：

$$
z_1z_2=r_1r_2(\cos(\varphi_1+\varphi_2)+\mathrm i\sin(\varphi_1+\varphi_2))
$$

由这个结果，我们可以得到复数的二次幂的结果。相似的，我们可以得到其任意整数次幂。那么我们尝试推导复数的幂函数 $z^n$（此时 $z^n$ 为一个记号）。

在这里，我们要有一些限定条件：

- $z^n$ 在 $\mathbb C$ 上几乎全纯，即 $z^n$ 定义在在 $\mathbb C/\mathbb k$ 且上处处连续，其中 $\mathbb k$ 的勒贝格测度为 $0$，如有理数集 $\mathbb Q$ 和整数集 $\mathbb Z$。
- $z^n$ 在实数域上完全等价于形如 $x^n$ 的幂函数。

根据这两个条件，我们可以确定幂函数满足：

$$
z^n=r^n(\cos(n\varphi)+\mathrm i\sin(n\varphi)),\,\,n\in\mathbb R
$$

:::info 证明
首先，归纳法易证 $n\in\mathbb Z$ 的情况。  
接着考虑 $n\in\mathbb Q$ 的情况，不妨令：$n=\frac qp\,(p,q\in\mathbb Z,\,q>0,\,\gcd(p,q)=1)$。  
考虑两个复数，满足 $z^p=w^q$，则有：

$$
\begin{aligned}
w^q&=r_w^q(\cos(q\varphi_w)+\mathrm i\sin(q\varphi_w))\\
&=r_z^p(\cos(p\varphi_z)+\mathrm i\sin(p\varphi_z))\\
&=z^p
\end{aligned}
$$

类比两式，我们有：

$$
r_w^q=r_z^q,\,\,q\varphi_w=p\varphi_z
$$

于是：

$$
z^\frac pq=w=r_w^{p/q}\left[\cos\left(\frac pq\varphi_w\right)+\mathrm i\sin\left(\frac pq\varphi_w\right)\right]
$$

代回 $n=\frac pq$，则对于任意的有理数 $n$，命题均成立。由于有理数集 $\mathbb Q$ 的稠密性，对于所有无理数 $n$，构造有理数列 $\{n_k\}$，使得：

$$
\lim_{k\to\infty} n_k=n
$$

则由于 $z^n$ 连续，则对于所有无理数，则 $z^n$ 为 $k\to\infty$ 时，函数 $z^n$ 的极限，且与 $\{n_k\}$ 的选取无关。
则对于所有实数，命题均成立。$\square$

:::

但是如上过程是基于所有的 $\varphi$ 在主值上。事实上，$z^n$ 在严谨的来说并不能算是一个函数，若 $\varphi$ 的取值不在主值上，它将是一个多值函数，顾名思义，在每一个点上有多个值，如 $n\in \mathbb Q$，其会有 $q$ 个取值。  
我们只关心我们得到的等式：

$$
z^n=r^n(\cos(n\varphi)+\mathrm i\sin(n\varphi)),\,\,n\in\mathbb R
$$

这将极大地简化我们的计算，由此，我们可以轻易地推导出 $n$ 倍角公式。

## 复指数函数
首先我们注意到当 $x\ne0$ 时，显然有公式：

$$
\arg({x+y\mathrm i})=\arctan\frac yx
$$

考虑如下极限的存在性：

$$
\begin{align}
\lim_{n\to\infty} \left(1+\frac zn\right)^n
\end{align}
$$

首先，我们有模长：

$$
\begin{aligned}
\lim_{n\to\infty}
\left|\left(1+\frac zn\right)^n\right|&=\lim_{n\to\infty}\left(1+\frac{2x}n+\frac{x^2+y^2}{n^2}\right)^\frac n2\\
&=\lim_{n\to\infty}\left(1+\frac{2x}n\right)^\frac n2\\
&=e^x
\end{aligned}
$$

于是其的模长收敛。再考虑其的幅角，由于当 $n$ 充分大时，总有 $1+\frac xn>0$，于是幅角可以表示成：

$$
\arg\left(1+\frac zn\right)^n=n\arctan\frac{\frac yn}{1+\frac xn}
$$

现在让 $n\to\infty$，由于 $\frac yn\sim\arctan\frac yn$，于是我们有：

$$
\lim_{n\to\infty}n\arctg\left(\frac{\frac yn}{1+\frac xn}\right)=\lim_{n\to\infty}n\cdot\frac yn=y
$$

那么该极限收敛，且满足：

$$
\lim_{n\to\infty} \left(1+\frac zn\right)^n=e^x(\cos y+\mathrm i\sin y)
$$

由于 $y=0$ 时，极限 $(1)\equiv e^x$，根据唯一性定理，极限 $(1)$ 为函数 $e^x$ 在复数域 $\mathbb C$ 的解析延拓。此时令 $x=0$，于是有：

$$
e^{\mathrm i\varphi}=\cos\varphi+\mathrm i\sin\varphi
$$

对于所有的 $\varphi=q\pi\,\,(q\in\mathbb Q\cup[0,1])$，我们称 $e^{i\varphi}$ 为**单位根**，即满足如下方程的根。

$$
x^n=1
$$
