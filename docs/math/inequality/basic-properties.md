---
sidebar_position: 1,
---

# 等式与不等式的基本性质

这篇文章基本上是基于教材重温小学、初中的知识．

## 等式的基本性质

- 对称性：$a=b \iff b=a$．
- 传递性：$a=b,b=c \iff a=b=c$．
- 可加性：$a=b \iff a\pm c=b\pm c$．
- 可乘性：$a=b \implies ac=bc$．
- 可除性：$a=b,c\ne0 \implies \dfrac ac=\dfrac bc$．

## 不等式的基本性质

- 对称性：$a>b \iff b<a$；$a<b \iff b>a$．
- 传递性：$a>b,b>c \implies a>c$；$a<b,b<c \implies a<c$．
- 可加性：$a>b \iff a\pm c>b\pm c$．
- 可乘性：$a>b,c>0 \implies ac>bc$；$a>b,c<0 \implies ac<bc$．
- 同向可加性：$a>b,c>d \implies a+c>b+d$．
- 同向同正可乘性：$a>b>0,c>d>0 \implies ac>bd$．
- 可乘方性：$a>b>0,n\in\N,n\ge2 \implies a^n>b^n$．
- 可开方性：$a>b>0,n\in\N,n\ge2 \implies \sqrt[n]a>\sqrt[n]b$．

关于应用传递性时能否取等：

- $a\ge b,b\ge c \implies a\ge c$．
- $a\ge b,b>c\ 或\ a>b,b\ge c \implies a>c$．

## 不等式的性质拓展

### 有关倒数的性质

- $a>b,ab>0 \implies \dfrac1a<\dfrac1b$．
- $a<0<b \implies \dfrac1a<0<\dfrac1b$．
- $a>b>0,c>d>0 \implies \dfrac ad>\dfrac bc$．
- $0<a<m<b\ 或\ a<m<b<0 \implies \dfrac1b<\dfrac1m<\dfrac1a$．

### 有关分数的性质

若 $a>b>m>0$，则：

- 真分数：$\dfrac{b-m}{a-m}<\dfrac ba<\dfrac{b+m}{a+m}$（糖水不等式）．
  
- 假分数：$\dfrac{a+m}{b+m}<\dfrac ab<\dfrac{a-m}{b-m}$．

即真分数越加越大，假分数越加越小．可以用作差法证明．

### 其他性质

- $a<b,c<d \implies a-d<b-c$．
- 对于任意 $a\in\R$，有 $a^2\ge0$，当且仅当 $a=0$ 时等号成立．
- 对于任意 $a,b\in\R$，有 $a^2+b^2\ge2ab$，当且仅当 $a=b$ 时等号成立．证明：$(a-b)^2=a^2+b^2-2ab\ge0$，所以 $a^2+b^2\ge2ab$．

## 不等式基本题型

### 不等式的基本性质的直接应用

:::info 例 1

（多选题）已知 $a>b\ge2$，则（　　）

- A. $b^2<3b-a$
- B. $a^3+b^3>a^2b+ab^2$
- C. $ab>a+b$
- D. $\dfrac12+\dfrac2{ab}>\dfrac1a+\dfrac1b$

:::

:::tip 例 1 解答

对于 A，由于 $b-a<0$，所以若 A 成立，则 $b^2-2b<b-a<0$，而当 $b\ge2$ 时，$b^2-2b$ 的值域为 $[0,+\infty)$，因此 A 错误．

对于 B，作差化简得 $(a-b)^2(a+b)>0$ 成立，因此 B 正确．

对于 C，两端除以 $ab$ 得 $\dfrac1a+\dfrac1b<1$，由于 $a>2,b\ge2$，所以 $0<\dfrac1a<\dfrac12,0<\dfrac1b\le\dfrac12$，所以 $\dfrac1a+\dfrac1b<1$ 成立，因此 C 正确．

对于 D，作差通分化简得 $\dfrac{(a-2)(b-2)}{2ab}>0$，由于 $a>2,b\ge2$，所以 $a-2>0,b-2\ge0,2ab>0$，所以 $\dfrac{(a-2)(b-2)}{2ab}\ge0$，即该式可以等于 $0$，因此 D 错误．

故选 BC．

:::

对于这种选择题，如果直接证明比较困难，我们可以尝试 **代入特殊值** 来找反例．如：

- 例 1 A 选项：代入 $a=3,b=2$ 得 $b^2=4,3b-a=3$，因此不成立．

- 例 1 D 选项：代入 $a=3,b=2$ 得 $\dfrac12+\dfrac2{ab}=\dfrac1a+\dfrac1b=\dfrac56$，因此不成立．

### 作差法与作商法比较大小

证明不等式的常用方法有：作差法、作商法、反证法、同构法、放缩法等．其中同构法与放缩法将在之后提及．下面主要介绍 **作差法** 与 **作商法**．

为了将不等式两侧的数或式子移至同一侧，并且使另一侧留下来的数易于比较，我们可以采用作差法或作商法．

作差法是将不等式两侧作差移至同一侧，判断得到的差与 $0$ 的大小关系，从而证明不等式．

作商法是将不等式两侧作商移至同一侧（注意变号），判断得到的商与 $1$ 的大小关系，从而证明不等式．

:::info 例 2

若 $a<0,b<0$，判断 $p=\dfrac{b^2}a+\dfrac{a^2}b$ 与 $q=a+b$ 的大小关系．

:::

:::tip 例 2 解答 1（作差法）

$$
\begin{aligned}
p-q
&=\dfrac{b^2}a+\dfrac{a^2}b-a-b \\
&=\dfrac{b^2-a^2}{a}+\dfrac{a^2-b^2}{b} \\
&=(b^2-a^2)\left(\dfrac1a-\dfrac1b\right) \\
&=\dfrac{(b-a)^2(b+a)}{ab}.
\end{aligned}
$$

因为 $a<0,b<0$，所以 $a+b<0,ab>0$，又 $(b-a)^2\ge0$，所以 $p-q\le0$，所以 $p\le q$．

:::

:::tip 例 2 解答 2（作商法）

首先有 $p=\dfrac{a^3+b^3}{ab}=\dfrac{(a+b)(a^2-ab+b^2)}{ab}$，又 $a^2+b^2\ge2ab$（参见上文[不等式的其他性质](https://whk-wiki.github.io/whk-wiki/math/inequality/basic-properties#%E5%85%B6%E4%BB%96%E6%80%A7%E8%B4%A8)），因此

$$
\dfrac pq=\dfrac{a^2-ab+b^2}{ab}\ge\dfrac{2ab-ab}{ab}=1,
$$

当且仅当 $a=b$ 时等号成立．由于 $q<0$，所以 $p\le q$．

:::

### 求代数式的取值范围

直接给出一般题型：

:::info 例 3

已知 $m_1<f_1(a,b)<n_1$，$m_2<f_2(a,b)<n_2$，求 $g(a,b)$ 的取值范围．其中 $f_1,f_2,g$ 是二元一次函数，具有 $k_1a+k_2b$ 的形式．

:::

:::tip 例 3 解答（待定系数法）

设 $g(a,b)=pf_1(a,b)+qf_2(a,b)$．左右两边 $a$ 和 $b$ 的系数相等，由此列出方程组求得 $p,q$．根据不等式的同向可加性，将两个已知条件分别乘以 $p$ 和 $q$ 然后相加，得到的即为 $g(a,b)$ 的范围：

$$
pm_1+qm_2<g(a,b)<pn_1+qn_2.
$$

:::

## 糖水不等式的应用

:::info 例 4

在锐角三角形 $ABC$ 中，求证：

（1）$\dfrac A{B+C}+\dfrac B{C+A}+\dfrac C{A+B}<2$；

（2）$\dfrac c{1+c}<\dfrac a{1+a}+\dfrac b{1+b}$．

:::

:::tip 例 4 证明

（1）考虑将分母全部转化为 $A+B+C$ 以合并不等式左边的三个分式．观察到不等式具有轮换性．在锐角 $\triangle ABC$ 中，$A,B,C>0$，且 $A<B+C,B<C+A,C<A+B$，由糖水不等式有
$$
\begin{gathered}
\frac A{B+C}<\frac{2A}{A+B+C}, \\
\frac B{C+A}<\frac{2B}{A+B+C}, \\
\frac C{A+B}<\frac{2C}{A+B+C}. \\
\end{gathered}
$$
由不等式的同向可加性，三式相加得
$$
\begin{aligned}
    \frac A{B+C}+\frac B{C+A}+\frac C{A+B}&<\frac{2A}{A+B+C}+\frac{2B}{A+B+C}+\frac{2C}{A+B+C} \\
    &=\frac{2A+2B+2C}{A+B+C}=2.
\end{aligned}
$$
证毕．

（2）考虑将分母转化为 $1+a+b$ 以合并不等式右边的两个分式．可以猜想与三角形的三边关系有关．在锐角 $\triangle ABC$ 中，$c<a+b$，所以 $a+b-c>0$，由糖水不等式有
$$
\begin{aligned}
    \frac c{1+c}<\frac{c+(a+b-c)}{1+c+(a+b-c)}&=\frac{a+b}{1+a+b}\\
    &=\frac a{1+a+b}+\frac b{1+a+b}<\frac a{1+a}+\frac b{1+b}.
\end{aligned}
$$
证毕．

:::