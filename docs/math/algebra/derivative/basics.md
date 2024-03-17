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

也就是说，如果对于任意一个 $\varepsilon > 0$，我们都能找到这个数列的一段后缀，使得这段后缀的全部元素与 $a$ 的距离小于 $\varepsilon$，就称这个数列收敛于 $a$．

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

对于函数 $f(x)$ 与实数 $a$，如果存在实数 $b$，使得 $\forall \varepsilon > 0$，$\exist \delta > 0$，对任意 $x \in (a - \delta, a) \cup (a, a + \delta)$，则 $b$ 称作 $f(x)$ 在点 $a$ 的 **极限**，记作

$$
\lim_{x \to a} f(x) = b
$$

这就是严格定义函数极限的 $\varepsilon \text - \delta$ 语言．也就是说，对于任意 $\varepsilon > 0$，我们都能找到一段 **包含 $a$ 但是扣去 $a$** 的区间，使得这个区间上对应的函数值与 $b$ 的距离都小于 $\varepsilon$，就称函数在点 $a$ 处的极限为 $b$．

可以证明，函数在某点存在极限，则这个极限唯一．

### 函数极限的运算法则

- $\lim\limits_{x \to a} [f(x) \pm g(x)] = \lim\limits_{x \to a} f(x) \pm \lim\limits_{x \to a} g(x)$．
- $\lim\limits_{x \to a} [f(x)g(x)] = \lim\limits_{x \to a} f(x) \cdot \lim\limits_{x \to a} g(x)$．
- 当 $\* \lim\limits_{x \to a} g(x) \ne 0$ 时，$\lim\limits_{x \to a} \df{f(x)}{g(x)} = \df{\lim\limits_{x \to a} f(x)}{\lim\limits_{x \to a} g(x)}$．

这些性质不难感性理解，但也可以严格证明，证明高中阶段不作要求，这里不给出．

### 无穷小

若 $\lim\limits_{x \to a} f(x) = 0$，称 $f(x)$ 为 $x \to a$ 时的 **无穷小**．

根据上面的四则运算规则，可以得知：

- 若 $f(x)$，$g(x)$ 都是 $x \to a$ 时的无穷小，则 $f(x) \pm g(x)$ 是 $x \to a$ 时的无穷小．
- 若 $f(x)$ 是 $x \to a$ 时的无穷小，且 $\lim\limits_{x \to a} g(x)$ 存在，则 $f(x) \cdot g(x)$ 是 $x \to a$ 时的无穷小．

但两个无穷小的商不能确定：运算法则规定了分母不能为无穷小．

设 $f(x)$，$g(x)$ 为 $x \to a$ 时的两个无穷小，且 $g(x) \ne 0$，

- 若 $\lim\limits_{x \to a} \df{f(x)}{g(x)} = 0$，则称当 $x \to a$ 时，$f(x)$ 是 $g(x)$ 的 **高阶无穷小**．
- 若 $\lim\limits_{x \to a} \df{f(x)}{g(x)} = b \ne 0$，则称当 $x \to a$ 时，$f(x)$ 与 $g(x)$ 是 **同阶无穷小**．
- 特别地，当 $b = 1$ 时，称当 $x \to a$ 时，$f(x)$ 与 $g(x)$ 是 **等价无穷小**，记作 $f(x) \sim g(x)\quad(x \to a)$．

等价无穷小替换公式：设 $f(x) \sim f'(x) \quad (x \to a)$，$g(x) \sim g'(x) \quad (x \to a)$，则

$$
\bal
& \phantom = \lim\limits_{x \to a} \df{f(x)}{g(x)} \\
& = \lim\limits_{x \to a} [\df{f'(x)}{g'(x)} \cdot \df{f(x)}{f'(x)} \cdot \df{g'(x)}{g(x)}]\\
& = \lim\limits_{x \to a} \df{f'(x)}{g'(x)} \cdot \lim\limits_{x \to a} \df{f(x)}{f'(x)} \cdot \lim\limits_{x \to a} \df{g'(x)}{g(x)} \\
& = \lim\limits_{x \to a} \df{f'(x)}{g'(x)}
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

根据上面的讨论，**切线** 就是函数在过某两点的 **割线** 在其中一点沿着函数逼近另一点的产物，

需要注意的是，该切线的定义与圆锥曲线中的切线定义有所不同．一元函数的切线与函数本身的交点数量并不确定（不一定只有一个）．

一般地，如果函数 $f(x)$ 在定义域 $D$ 内每一点都 **可导**，则称 $f(x)$ **可导**．$\forall x \in D$，$f'(x)$ 唯一确定，因此 $f'(x)$ 是在 $D$ 上的一个函数，这个函数称作 **导函数**，简称 **导数**．**求导** 通常指的是求函数 $f$ 的 **导函数** 的过程．

**初等函数不一定处处可导**，如：

- $f(x) = |x| = \sqrt{x^2}$ 的图像为一个 V 形，在 $x = 0$ 处从两侧进行「割线逼近切线」，逼近出的切线斜率不同，左侧为 $-1$，右侧为 $1$，因此该函数在 $x = 0$ 不可导．
- $f(x) = \sqrt[3] x$ 在 $x = 0$ 的切线为竖直线，斜率不存在，因此该函数在 $x = 0$ 不可导．

对于这样的函数，其导函数在原函数的定义域上舍去不可导的部分（这两例中为 $0$），但这样的初等函数是少数．

因此，**导函数** 的 **定义域** 一定是 **原函数** 的 **子集**，并且在绝大多数情况下 **两个定义域相同**．
