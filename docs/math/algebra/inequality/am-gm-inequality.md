---
sidebar_position: 2
---

# 基本不等式

基本不等式，在高中一般指代数-几何均值不等式（Inequality of Arithmetic and Geometric Means, AM-GM Inequality），是高中数学的重要不等式之一．在高中主要研究二元和三元情况．

## 基本不等式

[前一节](https://whk-wiki.github.io/whk-wiki/math/inequality/basic-properties#%E5%85%B6%E4%BB%96%E6%80%A7%E8%B4%A8)我们提到过一个重要的不等式：对于任意 $a,b\in\R$，有 $a^2+b^2\ge2ab$，当且仅当 $a=b$ 时等号成立．

特殊地，将 $a,b$ 分别替换为 $\sqrt a,\sqrt b$，其中 $a,b>0$，则可以推出基本不等式．

### 基本形式

对于任意 $a,b\in\R_+$，有
$$
\sqrt{ab}\le\frac{a+b}2,
$$
当且仅当 $a=b$ 时等号成立．

基本不等式表明：两个正数的算术平均数不小于它们的几何平均数．

### 直接证明

要证
$$
\sqrt{ab}\le\frac{a+b}2,
$$
只需证
$$
2\sqrt{ab}\le a+b,
$$
只需证
$$
a+b-2\sqrt{ab}\ge0,
$$
即
$$
\left(\sqrt a-\sqrt b\right)^2\ge0.
$$
上式显然成立，且当且仅当 $a=b$ 时上式中的等号成立．因此，原不等式成立．证毕．

这种「要证……只需证……」的写法常用于考试中的证明题．

### 均为负数的情况

对于任意 $a,b<0$，有
$$
a+b\le-2\sqrt{ab},
$$
当且仅当 $a=b$ 时等号成立．

证明：
$$
\begin{aligned}
    a+b=-((-a)+(-b))&\ge2\sqrt{(-a)(-b)}\\
    -(a+b)&\ge2\sqrt{ab}\\
    a+b&\le-2\sqrt{ab}.
\end{aligned}
$$
当且仅当 $-a=-b$，即 $a=b$ 时等号成立．证毕．

### 三元及多元形式

对于任意 $n$ 个正实数 $a_1,a_2,\dots,a_n$，有
$$
\frac{\sum_{i=1}^na_i}n\ge\sqrt[n]{\textstyle\prod_{i=1}^na_i},
$$
当且仅当 $a_1=a_2=\dots=a_n$ 时等号成立．

在高中，常用基本不等式的三元形式：对于任意 $a,b,c\in\R_+$，有
$$
\frac{a+b+c}3\ge\sqrt[3]{abc},
$$
当且仅当 $a=b=c$ 时等号成立．

## 其他常用不等式

1. $ab\le\dfrac{(a+b)^2}4$，其中 $a,b\in\R$，当且仅当 $a=b$ 时等号成立．

2. $\left|x+\dfrac1x\right|\ge2$，其中 $x\ne0$，当且仅当 $x=\pm1$ 时等号成立．
   
3. $\left|\dfrac ba+\dfrac ab\right|\ge2$，其中 $a,b$ 满足 $ab\ne0$，当且仅当 $a=\pm b$ 时等号成立．

4. $\left|ax+\dfrac bx\right|\ge2\sqrt{ab}$，其中 $x\ne0$，当且仅当 $x=\pm\sqrt{\dfrac ba}$ 时等号成立．

5. $a^2+b^2+c^2\ge ab+bc+ca$，其中 $a,b,c\in\R$，当且仅当 $a=b=c$ 时等号成立．证明：两边乘 $2$ 后完全平方．

## 均值不等式

对于任意 $a,b>0$，有
$$
\frac2{\frac1a+\frac1b}\le\sqrt{ab}\le\frac{a+b}2\le\sqrt{\frac{a^2+b^2}{2}},
$$
当且仅当 $a=b$ 时四个式子相等．

上述不等式称为均值不等式（RMP-AM-GM-HM Inequality, or Mean Inequality Chain）．

用自然语言叙述为：调和平均数 ≤ 几何平均数 ≤ 算术平均数 ≤ 平方平均数（也称均方根）．简记为：**「调几算平」**．

### 证明

第一个不等号：
$$
\begin{aligned}
    (a-b)^2&\ge0 \\
    (a+b)^2&\ge4ab \\
    a+b&\ge2\sqrt{ab} \\
    \frac1{a+b}&\le\frac1{2\sqrt{ab}} \\
    \frac{2ab}{a+b}&\le\sqrt{ab} \\
    \frac2{\frac1a+\frac1b}&\le\sqrt{ab}
\end{aligned}
$$
第三个不等号：
$$
\begin{aligned}
    a^2+b^2&\ge2ab \\
    2a^2+2b^2&\ge(a+b)^2 \\
    \frac{a^2+b^2}2&\ge\frac{(a+b)^2}4 \\
    \sqrt{\frac{a^2+b^2}2}&\ge\frac{a+b}2
\end{aligned}
$$
证毕．

## 对勾函数与飘带函数

在解题的过程中，我们常常需要求 $ax\pm\dfrac bx$ 的最值，且限制了 $x$ 的范围，使得无法直接应用基本不等式．因此我们需要熟知下面这两种函数的性质．有关函数的基本知识见 [?] 节．

**「对勾函数」** 指的是形如 $y=ax+\dfrac bx$（$a,b>0$）的一类函数，其
- 位于第一、三象限；
- 分别在第一、三象限有一个极小值点和一个极大值点（通过基本不等式求出）；
- 渐近线为 $x=0$ 和 $y=ax$；
- 是一个奇函数．

$y=x+\dfrac1x$ 和 $y=3x+\dfrac4x$ 图象分别如下图所示：

![](./assets/am-gm-inequality/fig-1.png)

**「飘带函数」** 指的是形如 $y=ax-\dfrac bx$（$a,b>0$）的一类函数，其
- 在 $(-\infty,0)$ 和 $(0,+\infty)$ 上分别单调递增；
- 在 $x$ 轴正、负半轴上分别有一个零点；
- 渐近线为 $x=0$ 和 $y=ax$；
- 是一个奇函数．

$y=x-\dfrac1x$ 和 $y=2x-\dfrac3x$ 图象分别如下图所示：

![](./assets/am-gm-inequality/fig-2.png)

我们也可以画出其他类似函数的图象，如：

![](./assets/am-gm-inequality/fig-3.png)

上面这些函数的大致图像可以通过 **平移**、极限、研究奇偶性、研究单调性等方式画出．

## 基本不等式及均值不等式的常见应用

### 判断所给不等式是否正确

:::info 例 1

（多选题）若 $x,y$ 满足 $x^2+y^2-xy=1$，则（　　）
- A. $x+y\le1$
- B. $x+y\ge-2$
- C. $x^2+y^2\le2$
- D. $x^2+y^2\ge1$

:::

:::tip 例 1 解答

先求 $x+y$ 的范围．由所给等式和基本不等式得
$$
(x+y)^2=1+3xy\le1+3\cdot\frac{(x+y)^2}4,
$$
解得 $-2\le x+y\le2$，当且仅当 $x=y=-1$ 时 $x+y=-2$，当且仅当 $x=y=1$ 时 $x+y=2$．所以 A 错误，B 正确．

再求 $x^2+y^2$ 的范围．注意到其与平方平均数有关，由 $\sqrt{xy}\le\sqrt{\dfrac{x^2+y^2}2}$ 得
$$
x^2+y^2=1+xy\le1+\frac{x^2+y^2}2,
$$
解得 $x^2+y^2\le2$，当且仅当 $x=y=\pm1$ 时等号成立．所以 C 正确．

对于 D，对所给等式配方得 $\left(x-\dfrac y2\right)^2+\left(\dfrac{\sqrt3y}2\right)^2=1$，使用 **三角换元** 法，设
$$
x-\frac y2=\cos\theta,\dfrac{\sqrt3y}2=\sin\theta.
$$
解得
$$
x=\cos\theta+\frac{\sqrt3}3\sin\theta,y=\frac{2\sqrt3}3\sin\theta,
$$
因此 $x^2+y^2=\cos^2\theta+\dfrac53\sin^2\theta+\dfrac{2\sqrt3}3\sin\theta\cos\theta=\dfrac43+\dfrac23\sin\left(2\theta-\dfrac\pi6\right)\in\left[\dfrac23,2\right]$．所以 D 错误．

故选 BC．

对于 D，也可以采用 **特殊值法**，代入 $x=\dfrac{\sqrt3}3,y=-\dfrac{\sqrt3}3$，则 $x^2+y^2-xy=1$，但 $x^2+y^2=\dfrac23<1$，不符合选项，所以 D 错误．

:::

### 利用基本不等式（或均值不等式）求最值

对于 $x,y>0$：
- 如果积 $xy$ 为定值，则 $x+y$ 有最小值 $2\sqrt{xy}$，当且仅当 $x=y$ 时取到．
- 如果和 $x+y$ 为定值，则 $xy$ 有最大值 $\dfrac{(x+y)^2}4$，当且仅当 $x=y$ 时取到．

应用条件简记为 **「一正二定三相等」** 或 **「正定等」**．

由此：
- 若 $a,b,x,y>0$，$ax+by=1$，则
$$
\begin{aligned}
    \frac1x+\frac1y=(ax+by)\left(\frac1x+\frac1y\right)&=a+b+\dfrac{by}x+\dfrac{ax}y \\
    &\ge a+b+2\sqrt{ab}=\left(\sqrt a+\sqrt b\right)^2.
\end{aligned}
$$

- 若 $a,b,x,y>0$，$\dfrac ax+\dfrac by=1$，则
$$
\begin{aligned}
    x+y=(x+y)\left(\frac ax+\frac by\right)&=a+b+\frac{ay}x+\frac{bx}y \\
    &\ge a+b+2\sqrt{ab}=\left(\sqrt a+\sqrt b\right)^2.
\end{aligned}
$$

:::note 注意

如果 **连续使用** 基本不等式，必须保证他们 **等号成立的条件一致**．

:::

:::info 例 2（多元基本不等式）

已知 $a,b>0$，求 $\dfrac1a+\dfrac a{b^2}+b$ 的最小值．

:::

:::tip 例 2 解答

为了使所有项之积为常数，我们把 $b$ 拆成 $\dfrac b2+\dfrac b2$．即
$$
\frac1a+\frac a{b^2}+b=\frac1a+\frac a{b^2}+\frac b2+\frac b2\ge4\sqrt[4]{\frac1a\cdot\frac a{b^2}\cdot\frac b2\cdot\frac b2}=4\sqrt[4]{\frac14}=2\sqrt2,
$$
当且仅当 $a=b=2$ 时等号成立．

因此，$\dfrac1a+\dfrac a{b^2}+b$ 的最小值为 $2\sqrt2$．

当然，也可以用两次基本不等式，先把前两项合并，再合并第三项，取等条件为两次基本不等式的取等条件 **同时成立**．

:::

:::info 例 3（多次使用不等式）

若 $a,b\in\R$ 且 $ab>0$，求 $\dfrac{a^4+4b^4+1}{ab}$ 的最小值．

:::

:::tip 例 3 解答

$$
\frac{a^4+4b^4+1}{ab}\ge\frac{2\sqrt{4a^4b^4}+1}{ab}=\frac{4a^2b^2+1}{ab}=4ab+\frac1{ab}\ge2\sqrt{4ab\cdot\frac1{ab}}=4.
$$
当且仅当 $\begin{cases}a^4=4b^4,\\4ab=\dfrac1{ab},\end{cases}$ 即 $\begin{cases}x=\dfrac{\sqrt[4]8}2,\\y=\dfrac{\sqrt[4]2}2\end{cases}$ 或 $\begin{cases}x=-\dfrac{\sqrt[4]8}2,\\y=-\dfrac{\sqrt[4]2}2\end{cases}$ 时等号成立．

因此，$\dfrac{a^4+4b^4+1}{ab}$ 的最小值为 $4$．

:::

#### 配凑法

所谓的配凑法，顾名思义，就是将所给的式子配凑出 **和或积为定值** 的形式，如 $6x(3-2x)=3\cdot2x(3-2x)$、$x+\dfrac1{x-2}=x-2+\dfrac1{x-2}+2$，然后利用上面所说的方法求最值．

对于 **二次比一次** 的分式，一般 **将分子表示成关于分母的二次多项式** 的形式．如果直接配凑过于麻烦，也可以直接将分母 **换元**．

对于 **一次比二次** 的分式，一般先把分子 **换元**，然后把分子除到分母上，这样分母就变为 $at+\dfrac bt+c$ 的形式．注意在分母上应用基本不等式要变号．

:::info 例 4

若 $x<1$，求 $\dfrac{x^2-x+9}{x-1}$ 的最大值．

:::

:::tip 例 4 解答

$x-1<0$，因此
$$
\frac{x^2-x+9}{x-1}=\frac{(x-1)^2+(x-1)+9}{x-1}=x-1+\frac9{x-1}+1\le-2\sqrt9+1=-5,
$$
当且仅当 $x-1=\dfrac9{x-1}$，即 $x=-2$ 时等号成立．

因此 $\dfrac{x^2-x+9}{x-1}$ 的最大值为 $-5$．

:::

#### 常值代换法

:::info 例 5

已知 $a,b>0$，且 $\dfrac1a+\dfrac2b=1$，求 $\dfrac3{a-1}+\dfrac2{b-2}$ 的最小值．

:::

:::tip 例 5 解答

由 $\dfrac1a+\dfrac2b=1$ 得 $ab-2a-b=0$，即 $(a-1)(b-2)=2$．因此
$$
\begin{aligned}
    \frac3{a-1}+\frac2{b-2}&=\frac{2a+3b-8}{(a-1)(b-2)}\\
    &=\frac{2a+3b-8}2\\
    &=a+\frac32b-4\\
    &=\left(a+\frac{3b}2\right)\left(\frac1a+\frac2b\right)-4\\
    &=4+\frac{3b}{2a}+\frac{2a}b-4\ge2\sqrt3,
\end{aligned}
$$
当且仅当 $\dfrac{3b}{2a}=\dfrac{2a}b$ 时等号成立．

因此 $\dfrac3{a-1}+\dfrac2{b-2}$ 的最小值为 $2\sqrt3$．

:::

#### 换元法

:::info 例 6

已知 $x,y>0$，$x+3y+xy=9$，求 $x+3y$ 的最小值．

:::

:::tip 例 6 解答

设法构造出 $x+3y$．由 $x+3y+xy=9$ 得
$$
x+3y=9-xy=9-\frac13\cdot x\cdot3y\ge9-\frac13\cdot\frac{(x+3y)^2}{4},
$$
当且仅当 $x=3y$，即 $x=3,y=1$ 时等号成立．设 $x+3y=t>0$，则上式即为
$$
t\ge9-\frac1{12}t^2,
$$
解得 $t\ge6$．

因此 $x+3y=t$ 的最小值为 $6$．

:::

:::info 例 7

若对任意实数 $x,y>0$，不等式 $x+\sqrt{xy}\le a(x+y)$ 恒成立，求实数 $a$ 的取值范围．

:::

:::tip 例 7 解答

**分离参数** 得
$$
a\ge\frac{x+\sqrt{xy}}{x+y}.
$$
上式恒成立，即 $a$ 大于等于 $\dfrac{x+\sqrt{xy}}{x+y}$ 的 **最大值**．

注意到分子中有 $x,x^{1/2}$，分母中有 $x,x^0$，上下除以 $x$ 得
$$
\frac{x+\sqrt{xy}}{x+y}=\frac{1+\sqrt{\dfrac yx}}{1+\dfrac yx}.
$$
令 $\dfrac yx=t>0$，则上式即 $\dfrac{1+\sqrt t}{1+t}$．

令 $1+\sqrt t=m>1$，则 $t=(m-1)^2$，于是上式即
$$
\begin{aligned}
    \frac m{1+(m-1)^2}&=\frac m{m^2-2m+2}\\
    &=\frac1{m+\frac2m-2}\\
    &\le\frac1{2\sqrt2-2}=\frac{\sqrt2+1}2,
\end{aligned}
$$
当且仅当 $m=\dfrac2m$，即 $m=\sqrt2$，即 $t=\dfrac yx=3-2\sqrt2$ 时等号成立．

所以 $\dfrac{x+\sqrt{xy}}{x+y}$ 的最大值为 $\dfrac{\sqrt2+1}2$，因此 $a$ 的取值范围是 $\left[\dfrac{\sqrt2+1}2,+\infty\right)$．

:::

#### 消元法

:::info 例 8

已知 $x,y\in\R$，且 $5x^2y^2+y^4=1$，求 $x^2+y^2$ 的最小值．

:::

:::tip 例 8 解答

注意到所给式子中三项的 $y$ 的次数分别为 $0,2,4$，两侧除以 $y^2$ 得
$$
5x^2+y^2=\frac1{y^2}.
$$
根据消元的思想，将 $x^2$ 用含 $y^2$ 的式子表示，有
$$
x^2=\frac15\left(\frac1{y^2}-y^2\right).
$$
于是
$$
x^2+y^2=\frac15\left(\frac1{y^2}-y^2\right)+y^2=\frac15\left(\frac1{y^2}+4y^2\right)\ge\frac15\cdot2\sqrt4=\frac45,
$$
当且仅当 $y^2=\dfrac12,x^2=\dfrac3{10}$ 时等号成立．

因此 $x^2+y^2$ 的最小值为 $\dfrac45$．

:::

## 参考资料

- [Art of Problem Solving](https://artofproblemsolving.com/wiki/index.php/AM-GM_Inequality)
- [Art of Problem Solving](https://artofproblemsolving.com/wiki/index.php/Root-Mean_Square-Arithmetic_Mean-Geometric_Mean-Harmonic_mean_Inequality)
- [平均数不等式 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E5%B9%B3%E5%9D%87%E6%95%B0%E4%B8%8D%E7%AD%89%E5%BC%8F)