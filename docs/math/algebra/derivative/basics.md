# 导数基本概念

import Geogebra from '@site/src/GeoGebra';

## 基本概念引入

高中阶段不要求对极限的掌握，本章仅做了解即可，不做应试要求．

### 数列的极限

直观上看，数列 $a_n = \df 1 n$ 在 $n \to +\infty$ 时无限接近于 $0$．这个「无限接近于 $0$」到底如何严谨地刻画呢？

答案是魏尔斯特拉斯提出的，具有划时代意义的 $\varepsilon \text - N$ 语言：

对于数列 $\{a_n\}$，如果存在实数 $a$，使得 $\forall \varepsilon > 0$，$\exist N \in \N^\ast$，$\forall n > N$，有 $|a_n - a| < \varepsilon$，则称数列 $\{a_n\}$ **收敛于** $a$，$a$ 是 $\{a_n\}$ 的 **极限**，记作

$$
\lim_{n \to \infty} a_n = a
$$

也就是说，如果对于任意一个 $\varepsilon > 0$，我们都能找到这个数列的某一项，使得 **从这一项起后面的任一项** 与 $a$ 的距离均小于 $\varepsilon$，就称这个数列收敛于 $a$．

当一个数列不收敛时，称它是 **发散** 的．

:::info 例题 1.1

用极限的定义证明 $a_n = \df 1 n$ 时，$\{a_n\}$ 收敛到 $0$．

:::

:::tip 例题 1.1 解答

$$
\lv \df 1 n - 0 \rv = \df 1 n < \varepsilon \iff n > \df 1 \varepsilon
$$

因此，对任意 $\varepsilon > 0$，取 $N = \max(\left\lfloor \df 1 \varepsilon \right\rfloor, 1)$，则 $n > N$ 时，有

$$
\lv \df 1 n - 0 \rv < \varepsilon
$$

因此 $\lim\limits_{n \to +\infty} \df 1 n = 0$．

:::

高中阶段不要求证明极限．数列 $\{\df 1 n\}$ 在 $n \to \infty$ 时趋于 $0$ 是一个可以直接写出的结论．

### 函数的极限定义

对于函数 $f(x)$ 与实数 $a$，如果存在实数 $b$，使得 $\forall \varepsilon > 0$，$\exist \delta > 0$，对任意 $x \in (a - \delta, a) \cup (a, a + \delta)$，有 $|f(x) - b| < \varepsilon$，则 $b$ 称作 $f(x)$ 在点 $a$ 的 **极限**，记作

$$
\lim_{x \to a} f(x) = b
$$

这就是严格定义函数极限的 $\varepsilon \text - \delta$ 语言．也就是说，对于任意 $\varepsilon > 0$，我们都能找到一段 **包含 $a$ 但是扣去 $a$** 的区间，使得这个区间上对应的函数值与 $b$ 的距离都小于 $\varepsilon$，就称函数在点 $a$ 处的极限为 $b$．

可以证明，函数在某点存在极限，则这个极限唯一．

### 函数极限的运算法则

- $\lim\limits_{x \to a} [f(x) \pm g(x)] = \lim\limits_{x \to a} f(x) \pm \lim\limits_{x \to a} g(x)$．
- $\lim\limits_{x \to a} [f(x)g(x)] = \lim\limits_{x \to a} f(x) \cdot \lim\limits_{x \to a} g(x)$．
- 当 $\* \lim\limits_{x \to a} g(x) \ne 0$ 时，$\lim\limits_{x \to a} \df{f(x)}{g(x)} = \df{\lim\limits_{x \to a} f(x)}{\lim\limits_{x \to a} g(x)}$．

这些性质不难感性理解，也可以严格证明，证明高中阶段不作要求，这里不给出．

### 无穷小

若 $\lim\limits_{x \to a} f(x) = 0$，称 $f(x)$ 为 $x \to a$ 时的 **无穷小**．

根据上面的四则运算规则，可以得知：

- 若 $f(x)$，$g(x)$ 都是 $x \to a$ 时的无穷小，则 $f(x) \pm g(x)$ 是 $x \to a$ 时的无穷小．
- 若 $f(x)$ 是 $x \to a$ 时的无穷小，且 $\lim\limits_{x \to a} g(x)$ 存在，则 $f(x) \cdot g(x)$ 是 $x \to a$ 时的无穷小．

但两个无穷小的商不能确定：运算法则规定了分母不能为无穷小．

设 $f(x)$，$g(x)$ 为 $x \to a$ 时的两个无穷小，且 $g(x) \ne 0$，当 $\lim\limits_{x \to a} \df{f(x)}{g(x)}$ 存在时，

- 若 $\lim\limits_{x \to a} \df{f(x)}{g(x)} = 0$，则称当 $x \to a$ 时，$f(x)$ 是 $g(x)$ 的 **高阶无穷小**．
- 若 $\lim\limits_{x \to a} \df{f(x)}{g(x)} = b \ne 0$，则称当 $x \to a$ 时，$f(x)$ 与 $g(x)$ 是 **同阶无穷小**．
- 特别地，当 $b = 1$ 时，称当 $x \to a$ 时，$f(x)$ 与 $g(x)$ 是 **等价无穷小**，记作 $f(x) \sim g(x)\quad(x \to a)$．

等价无穷小替换公式：设 $f(x) \sim F(x) \quad (x \to a)$，$g(x) \sim G(x) \quad (x \to a)$，则

$$
\bal
& \phantom = \lim\limits_{x \to a} \df{f(x)}{g(x)} \\
& = \lim\limits_{x \to a} [\df{F(x)}{G(x)} \cdot \df{f(x)}{F(x)} \cdot \df{G(x)}{g(x)}]\\
& = \lim\limits_{x \to a} \df{F(x)}{G(x)} \cdot \lim\limits_{x \to a} \df{f(x)}{F(x)} \cdot \lim\limits_{x \to a} \df{G(x)}{g(x)} \\
& = \lim\limits_{x \to a} \df{F(x)}{G(x)}
\eal
$$

也即对一个分式求极限时，分子与分母可以 **替换为它的等价无穷小**，而 **极限值不改变**，这个规则称作 **等价无穷小替换规则**．

一个最经典的等价无穷小是 $x \sim \sin x \quad (x \to 0)$ 和它的推论 $x \sim \sin x \sim \cos x \sim \tan x \quad (x \to 0)$（证明从略）．

高中物理中一些公式的推导用到的，所谓「$x$ 很小，将 $\sin x$ 近似为 $x$」的原理，其实就是在做上面的 **等价无穷小替换**．

### *连续的定义

设函数 $f(x)$ 在点 $a$ 存在极限，且

$$
\lim_{x \to a}f(x) = f(a)
$$

称 $f(x)$ 在点 $a$ 连续．

可以证明，**所有初等函数在定义域上都处处连续**．

### 导数的定义

对连续函数 $f(x)$，令自变量从 $x$ 从 $x_0$ 出发，当自变量变化了 $\Delta x$ 时，因变量 $f(x)$ 会变化

$$
\Delta f = f(x_0 + \Delta x) - f(x_0)
$$

这个过程中，称因变量变化与自变量变化之比为 **因变量的平均变化速度**，即

$$
\df{\Delta f}{\Delta x} = \df{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
$$

这里的平均变化速度有两个意义需要体会：

- 物理意义：将 $f(x)$ 图像视作某个物体做直线运动的 $x \text - t$ 图像，则上式相当于从 $x_0$ 时刻开始的 $\Delta x$ 时间内，**物体平均速度** 的大小．
- 斜率意义：上式为 $(x_0, f(x_0))$ 与 $(x_0 + \Delta x, f(x_0 + \Delta x))$ 的 **连线斜率**．

在物理中，物体的瞬时速度定义为上述平均速度中，将 $\Delta x$ 趋近于 $0$ 的结果．在数学上用极限表达就是

$$
\lim_{\Delta x \to 0} \df{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
$$

这是两个无穷小相比，当极限存在时，称 $f$ 在 $x_0$ 上 **可导**，极限值为 $f$ 在 $x_0$ 上的 **导数**，记作

$$
f'(x_0) = \lim_{\Delta x \to 0} \df{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
$$

可以证明，函数在某点 **可导** 比函数在某点 **连续** 要 **强**．

其物理意义为瞬时速度，斜率意义为 **切线斜率**：

<Geogebra id="tangent" filename={require('./assets/basics/tangent.ggb').default} height="230" width="300"/>

将 $B$ 拖至与 $A$ 无限接近，此时斜线的斜率会趋近一个值，这个值就是 $f$ 在 $x_A$ 上的 **导数**．

我们定义：一元函数在点 $x_0$ 上的 **切线** 为 **过点 $(x_0, f(x_0))$ 且斜率为 $f'(x_0)$** 的直线，即

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

根据上面的讨论，对于一条过函数图线上某两点的 **割线**，让其中一点 **沿着函数图线** 无限 **逼近** 另一点，得到的直线即 **切线**．

:::warning

函数切线的定义与圆锥曲线中的切线定义有所不同．圆锥曲线中的切线的定义是一条 **与圆锥曲线有且仅有一个交点** 的直线，但一元函数的切线与函数本身的交点不一定只有一个．

不过，圆锥曲线的切线也可视作割线逼近的产物，一元函数的切线与圆锥曲线的切线都称作切线，正是这个原因．

:::

一般地，如果函数 $f(x)$ 在定义域 $D$ 内每一点都 **可导**，则称 $f(x)$ **可导**．$\forall x \in D$，$f'(x)$ 唯一确定，因此 $f'(x)$ 是在 $D$ 上的一个函数，这个函数称作 **导函数**，简称 **导数**．**求导** 通常指的是求函数 $f$ 的 **导函数** 的过程．

**初等函数不一定处处可导**，如：

- $f(x) = |x| = \sqrt{x^2}$ 的图像为一个 V 形，在 $x = 0$ 处从两侧进行「割线逼近切线」，逼近出的切线斜率不同，左侧为 $-1$，右侧为 $1$，因此该函数在 $x = 0$ 不可导．
- $f(x) = \sqrt[3] x$ 在 $x = 0$ 的切线为竖直线，斜率不存在，因此该函数在 $x = 0$ 不可导．

对于这样的函数，其导函数在原函数的定义域上舍去不可导的部分（这两例中为 $0$），但这样的初等函数是少数．

因此，**导函数** 的 **定义域** 一定是 **原函数** 的 **子集**，并且在绝大多数情况下 **两个定义域相同**．

## 求导法则

### 基本初等函数的导数

- **幂函数** 的导数：对任意 $\alpha \in \Q \setminus \{0\}$，若 $f(x) = x^\alpha$，则 $f'(x) = \red{\alpha}x ^{\red{\alpha - 1}}$．
- **三角函数** 的导数：$(\sin x)' = \cos x$，$(\cos x)' = \red - \sin x$．
- **指数函数** 的导数：$(a^x)' = a^x \ln a$，$(\log_a x)' = \df{1}{x \ln a}, \quad \red{x > 0}$．
- **指数函数** 中 $a = \mathrm e$ 的情形值得注意：$(\e^x)' = \e^x$，$(\ln x)' = \df 1 x, \quad \red {x > 0}$．

必须指出，$\log_a x$ 的定义域为 $(0, +\infty)$，但其导数形式 $\df{1}{x \ln a}$ 的自然定义域是 $\{x \mid x \ne 0\}$，因此必须加上定义域 $(0, +\infty)$ 的限制．

另外，无理数 $\e$ 的定义是

$$
\e = \lim_{x \to +\infty}(1 + \df 1 x)^x
$$

无理数 $\e$ 与 $\ln$ 的特别意义到现在终于明显：它在指数函数的求导上具有高度的基础性和特殊性．

### 导数的四则运算

$$
\begin{array}{c}
[f(x) + g(x)]' & = & f'(x) + g'(x)\\[1em]
[f(x) - g(x)]' & = & f'(x) - g'(x)\\[1em]
[f(x) \cdot g(x)]' & = & f'(x) \cdot g(x) + f(x) \cdot g'(x)\\[1em]
[\df{f(x)}{g(x)}]' & = & \dfrac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)}
\end{array}
$$

除法求导法则的要点：**上面先导，下面后导**，中间是 **减号**．

一些常用的简化运算规则：

$$
[cf(x)]' = [c(x) \cdot f(x)]' = \red{c'(x) \cdot f(x)} + c(x) \cdot f'(x) = c(x) \cdot f'(x)
$$

这里 $c$ 是常数，$c(x)$ 是 $c$ 导出的常函数 $c(x) = c$．而 $c'(x) = 0$，因此标红的一项为 $0$．

这条规则的意义是：$f(x)$ 与 **常数** 相乘的导数，等于 $f(x)$ 的导数与常数相乘．

这里的常数不仅可以是数字，还可以是 **与 $x$ 无关的参数**，如 $f(x) = (a + 3)x^2$，则 $f'(x) = (a+3)[x^2]' = 2(a + 3)x$．

以及 $f(x) = \df{x^2}2$，$f(x) = \df{x^2}{a + 3}$，可以分别将常数视作 $\df 1 2$ 与 $\df 1 {a + 3}$ 来运用此规则（而不是运用除法导数运算法则）．

$$
[\e^xf(x)]' = (\e^x)' \cdot f(x) + \e^x \cdot [f(x)]' = \e^x \cdot [f(x) + f'(x)]
$$

### 复合函数的导数

函数 $f(x) = \sin 2x$ 无法视作基本初等函数的四则运算，但可以视作基本初等函数的复合：
