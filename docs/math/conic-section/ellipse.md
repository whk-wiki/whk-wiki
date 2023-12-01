---
description: 椭圆的定义、方程和性质，包括一些二级结论。
sidebar_position: 1
---


# 椭圆

## 第一定义

（人教 A 版选必一 P105）

与平面内两定点 $F_1,F_2$ 距离之和为定值（大于 $|F_1F_2|$）的点的轨迹叫做**椭圆**，定点 $F_1,F_2$ 叫做椭圆的**焦点**，$|F_1F_2|$ 叫做椭圆的**焦距**，焦距的一半叫做半焦距。

## 标准方程

$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\,(a>b>0)$ 和 $\dfrac{y^2}{a^2}+\dfrac{x^2}{b^2}=1\,(a>b>0)$ 都是椭圆的标准方程。

其中前者焦点在 $x$ 轴上，后者焦点在 $y$ 轴上。

### 推导

当焦点在 $x$ 轴上时，设焦点分别为 $F_1(-c,0),F_2(c,0)$，椭圆上的点到两焦点距离之和为 $2a$，椭圆上任意一点 $P(x,y)$。

由椭圆第一定义：
$$
\begin{gathered}
|PF_1|+|PF_2|=2a\\
\sqrt{(x+c)^2+y^2}+\sqrt{(x-c)^2+y^2}=2a\\
\sqrt{(x+c)^2+y^2}=2a-\sqrt{(x-c)^2+y^2}
\end{gathered}
$$
两边平方：
$$
\begin{gathered}
(x+c)^2+y^2=4a^2+(x-c)^2+y^2-4a\sqrt{(x-c)^2+y^2}\\
a\sqrt{(x-c)^2+y^2}=a^2-cx
\end{gathered}
$$
再平方：
$$
\begin{gathered}
a^2(x-c)^2+a^2y^2=a^4+c^2x^2-2a^2cx\\
(a^2-c^2)x^2+a^2y^2=a^2(a^2-c^2)
\end{gathered}
$$
两边同除 $a^2(a^2-c^2)$：
$$
\frac{x^2}{a^2}+\frac{y^2}{a_2-c^2}=1
$$
换元 $b^2=a^2-c^2$：
$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1
$$
推导完毕。焦点在 $y$ 轴的情况类似。

## 参数方程

椭圆可以看做**一个圆经过“伸缩”后得到的图形**（人教 A 版选必一 P108 例 2），所以类比圆的参数方程可以得到：

在椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ 上的点 $P$ 坐标可表示为 $(a\cos\theta,b\sin\theta)$，其中 $\theta$ 为参数。

事实上，类比圆面积还可以得到椭圆面积公式 $S=\pi ab$，不过没啥用。

## 简单几何性质

以下均以椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1(a>b>0)$ 为研究对象，另一种可类比。

### 有界性

$$
\begin{aligned}
&\because\dfrac{x^2}{a^2}=1-\dfrac{y^2}{b^2}\le 1\\
&\therefore-a\le x\le a
\end{aligned}
$$

同理可得 $-b\le y\le b$，这说明椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ 位于直线 $x=\pm a,y=\pm b$ 围成的矩形框里。

### 对称性

显然椭圆既有轴对称性，又有中心对称性。

$x$ 轴、$y$ 轴是椭圆的两条对称轴，原点 $O$ 为椭圆的对称中心，也叫**椭圆的中心**。

### 顶点

不妨设椭圆焦点 $F_1(-c,0),F_2(c,0)$、$A_1,A_2$ 分别为椭圆与 $x$ 轴负半轴和正半轴的交点、$B_1,B_2$ 分别为椭圆与 $y$ 轴负半轴和正半轴的交点。

不难得出 $|F_1F_2|=2c$，即为**焦距**； $A_1(-a,0),A_2(a,0),B_1(0,-b),B_2(0,b)$，这四个点称为椭圆的**顶点**；线段 $A_1A_2$ 称为椭圆的**长轴**，$|A_1A_2|=2a$；线段 $B_1B_2$ 称为椭圆的**短轴**，$|B_1B_2|=2b$。

### 离心率

离心率 $e=\dfrac ca\in[0,1)$，描述椭圆的形状。

$e$ 越接近 $0$，椭圆越接近于圆，当且仅当 $a=b$ 时 $e=0$，此时是一个以原点为圆心，$a$ 为半径的圆；$e$ 越接近 $1$，椭圆越扁平，越接近于线段。

## 焦点三角形

以椭圆上的一点 $P$ 和椭圆两焦点 $F_1,F_2$ 为顶点的三角形叫做焦点三角形。

以下默认 $\triangle PF_1F_2$ 存在，即 $|x_P|\neq a$。

设 $|PF_1|=r_1,|PF_2|=r_2,\angle F_1PF_2=\theta$。

### 周长

显然 $C_{\triangle PF_1F_2}=2a+2c$。

### 面积

结论：$S_{\triangle PF_1F_2}=b^2\tan{\dfrac{\theta}2}$。

#### 证明

由余弦定理：
$$
\begin{gathered}
r_1^2+r_2^2-2r_1r_2\cos\theta=4c^2\\
(r_1+r_2)^2-2r_1r_2-2r_1r_2\cos\theta=4c^2\\
4a^2-2r_1r_2(1+\cos\theta)=4c^2\\
r_1r_2=\frac{2b^2}{1+\cos\theta}
\end{gathered}
$$
代入 $S=\dfrac 12r_1r_2\sin\theta$ 得：
$$
\begin{aligned}
S&=b^2\frac{\sin\theta}{1+\cos\theta}\\
&=b^2\tan\frac{\theta}2
\end{aligned}
$$
#### 推论

因为 $S=\dfrac 12\cdot 2c|y_P|=b^2\tan\dfrac{\theta}2$，所以 $\tan\dfrac\theta2=\dfrac{c|y_p|}{b^2}$，所以**当且仅当 $\boldsymbol P$ 在椭圆短轴顶点时，$\boldsymbol\theta$ 最大**。

因此，$\tan\dfrac{\theta}2$ 最大值为 $\dfrac{c^2}{b^2}=\dfrac{c^2}{a^2-c^2}=\dfrac{1}{\frac 1{e^2}-1}$，易得：

- 当 $e\in\left(\dfrac{\sqrt 2}{2},1\right)$ 时，存在 $4$ 个 $P$ 使得 $\theta=90\degree$
- 当 $e=\dfrac{\sqrt 2}{2}$ 时，存在 $2$ 个 $P$ 使得 $\theta=90\degree$
- 当 $e\in\left(0,\dfrac{\sqrt2}2\right)$ 时，不存在 $P$ 使得 $\theta=90\degree$

### 焦半径

$r_1=a+ex,r_2=a-ex$。（左加右减）

#### 证明

$$
\begin{aligned}
r_1&=|PF_1|\\
&=\sqrt{(x+c)^2+y^2}\\
&=\sqrt{(x+c)^2+b^2(1-\frac{x^2}{a^2})}\\
&=\sqrt{x^2+2cx+c^2+b^2-\frac{b^2}{a^2}x^2}\\
&=\sqrt{\frac{a^2-b^2}{a^2}x^2+2cx+a^2}\\
&=\sqrt{e^2x^2+2aex+a^2}\\
&=\sqrt{(ex+a)^2}\\
&=|ex+a|
\end{aligned}
$$

同理 $r_2=|ex-a|$。

因为 $x\in[-a,a]$，所以 $ex\in[-c,c]$，所以 $a+ex>0,a-ex>0$，所以 $r_1=a+ex,r_2=a-ex$，$r_1,r_2\in[a-c,a+c]$。

### 离心率与三角函数

设 $\angle PF_1F_2=\alpha,\angle PF_2F_1=\beta$，根据正弦定理：
$$
e=\frac ca=\frac{2c}{2a}=\frac{\sin\theta}{\sin\alpha+\sin\beta}
$$

### 内切圆

设 $\triangle PF_1F_2$ 内切圆圆心为 $C$，过 $C$ 分别作 $PF_1,PF_2,F_1F_2$ 垂线，垂足分别为 $M,N,G$。设半径为 $r=|CM|=|CN|=|CG|$。

#### 半径

##### 证明一

$$
\begin{aligned}
&\because S=\frac12(2a+2c)r=b^2\tan\frac\theta2\\
&\begin{aligned}
\therefore r&=\frac{b^2}{a+c}\tan\frac\theta2\\
&=\frac{a^2-c^2}{a+c}\tan\frac\theta2\\
&=(a-c)\tan\frac\theta2
\end{aligned}
\end{aligned}
$$
##### 证明二

$$
\begin{aligned}
&\because |F_1M|=|F_1G|,|F_2N|=|F_2G|\\
&\therefore |F_1M|+|F_2N|=|F_1F_2|=2c\\
&\therefore|PM|+|PN|=|PF_1|+|PF_2|-|F_1M|-|F_2N|=2a-2c\\
&\therefore|PM|=|PN|=a-c\\
&\therefore|PC|=|PM|\tan\frac\theta2=(a-c)\tan\frac\theta2
\end{aligned}
$$

#### 角分线性质推论

##### $(1)$

延长 $PC$ 交 $F_1F_2$ 于 $E$。
$$
\frac{|PC|}{|EC|}=\frac{|PF_1|}{|EF_1|}=\frac{|PF_2|}{|EF_2|}=\frac{|PF_1|+|PF_2|}{|EF_1|+|EF_2|}=\frac ac=\frac 1e
$$

##### $(2)$

$$
\begin{gathered}
\frac{|PF_1|}{|PF_2|}=\frac{|EF_1|}{|EF_2|}\\
\frac{a+ex_P}{a-ex_P}=\frac{c+x_E}{c-x_E}\\
\end{gathered}
$$
由 $(1)$：$\dfrac{|PF_2|}{|EF_2|}=\dfrac ac$ 得：
$$
\begin{gathered}
\frac{a+ex_P}a=\frac{c+x_E}c\\
\frac{ex_P}a=\frac{x_E}c\\
\boldsymbol{x_E=e^2x_P}
\end{gathered}
$$
##### $(3)$
$$
\begin{gathered}
\frac{|PC|}{|EC|}=\frac{x_P-x_C}{x_C-x_E}=\frac1e\\
ex_P-ex_C=x_C-e^2x_P\\
(1+e)x_C=(e+e^2)x_P\\
\boldsymbol{x_C=ex_P}
\end{gathered}
$$

## 第二定义

（人教 A 版选必一  P117）

与平面内一定点 $F$ 与不经过 $F$ 的一条定直线 $l$ 的距离之比为定值 $e\,(0\le e<1)$ 的点的轨迹叫做椭圆。$e$ 是椭圆的离心率，$F$ 是椭圆的一个焦点，$l$ 是对应的**准线**。

### 推导

我们在用第一定义推导椭圆方程时曾得到：
$$
a\sqrt{(x-c)^2+y^2}=a^2-cx
$$
可以变形为：
$$
\frac{\sqrt{(x-c)^2+y^2}}{\frac{a^2}c-x}=\frac ca
$$
这可以理解为点 $P(x,y)$ 到点 $F_2(c,0)$ 的距离与到直线 $x=\dfrac {a^2}c$ 的距离之比为 $\dfrac ca$，即离心率 $e$。

如果称 $F_2$ 为右焦点，则可以称直线 $l_2:x=\dfrac {a^2}c$ 为**右准线**，同理**左准线**即为 $l_1:x=-\dfrac{a^2}c$。注意到准线一定在椭圆外。

## 第三定义

（人教 A 版选必一 P108 例 3）

与点 $A_1(-a,0),A_2(a,0)$ 连线的斜率之积为定值 $k\,(-1\le k<0)$ 的点的集合与 $\{A_1,A_2\}$ 的并集是椭圆。

### 推导

根据椭圆标准方程：
$$
\begin{gathered}
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\\
\frac{y^2}{b^2}=\frac{a^2-x^2}{a^2}\\
\frac{y^2}{x^2-a^2}=-\frac{b^2}{a^2}\\
\frac y{x+a}\cdot\frac y{x-a}=\frac{c^2-a^2}{a^2}=e^2-1
\end{gathered}
$$

$P(x,y)$ 为椭圆上的点，则：

$$
k_{PA_1}k_{PA_2}=-\frac{b^2}{a^2}=e^2-1
$$

### 更一般的结论

若 $A(-x_0,-y_0),B(x_0,y_0)$，直线 $PA$ 的斜率与直线 $PB$ 的斜率之积为 $-\dfrac{b^2}{a^2}$，则 $P$ 点轨迹为：
$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=\frac{x_0^2}{a^2}+\frac{y_0^2}{b^2}
$$

## 点和椭圆的位置关系

对于点 $M(x_0,y_0)$ 和椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$：

- 当 $\dfrac{x_0^2}{a^2}+\dfrac{y_0^2}{b^2}<1$ 时，点 $M$ 在椭圆内
- 当 $\dfrac{x_0^2}{a^2}+\dfrac{y_0^2}{b^2}=1$ 时，点 $M$ 在椭圆上
- 当 $\dfrac{x_0^2}{a^2}+\dfrac{y_0^2}{b^2}>1$ 时，点 $M$ 在椭圆外

## 直线和椭圆的位置关系

联立化简后根据判别式 $\Delta$ 判断即可。

- $\Delta<0$ 时相离
- $\Delta=0$ 时相切
- $\Delta>0$ 时相交

### 弦长

直线 $y=kx+m$ 和椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ 交于两点 $A,B$。（斜率不存在的平凡情况不做讨论）

设两交点坐标分别为 $A(x_1,y_1),B(x_2,y_2)$，有：
$$
\begin{aligned}
|AB|&=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}\\
&=\sqrt{(x_1-x_2)^2+k^2(x_1-x_2)^2}\\
&=\sqrt{1+k^2}\,|x_1-x_2|\\
&=\sqrt{(1+k^2)[(x_1+x_2)^2-4x_1x_2]}
\end{aligned}
$$
根据韦达定理计算即可。

如果得到的是关于 $y$ 的方程，类似地，我们有：
$$
|AB|=\sqrt{1+\frac{1}{k^2}}\,|y_1-y_2|
$$

### 弦中点

直线 $y=kx+m$ 和椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ 交于两点 $A,B$。（斜率不存在的平凡情况不做讨论）

设线段 $AB$ 中点 $M(x_0,y_0)$，有：
$$
k_{AB}k_{OM}=-\dfrac{b^2}{a^2}
$$

如果椭圆焦点在 $y$ 轴上，则 $k_{AB}\times k_{OM}=-\dfrac{a^2}{b^2}$。

#### 数形结合理解

对于椭圆 $C:\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$，其可以看做由圆 $\Omega:x^2+y^2=1$ 经过“伸缩”得到的。

具体地，对于一个在圆 $\Omega$ 上的点 $P'(x,y)$，点 $P(ax,by)$ 一定在椭圆 $C$ 上。显然每个 $P$ 和 $P'$ 一一对应（构成双射）。

因此对于点 $A,B,M$，考虑其在圆 $\Omega$ 上的对应点 $A',B',M'$，根据垂径定理易知：
$$
k_{A'B'}k_{OM'}=-1
$$
根据上文的伸缩变换易知 $k_{AB}=\dfrac ba k_{A'B'},k_{OM}=\dfrac ba k_{OM'}$，得证。

#### 可以写在卷子上的证明

##### 联立法

$$
\begin{cases}
y=kx+m\\
\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1
\end{cases}
$$

带入并化简：
$$
\begin{gathered}
\dfrac{x^2}{a^2}+\dfrac{(kx+m)^2}{b^2}=1\\
(a^2k^2+b^2)x^2+2a^2kmx+k^2m^2-a^2b^2=0
\end{gathered}
$$
所以：
$$
\begin{aligned}
k_{OM}&=\frac{y_0}{x_0}\\
&=\frac{y_1+y_2}{x_1+x_2}\\
&=\frac{k(x_1+x_2)+2m}{x_1+x_2}\\
&=k+\frac{2m}{-\frac{2a^2km}{a^2k^2+b^2}}\\
&=k-\frac{a^2k^2+b^2}{a^2k}\\
&=-\frac{b^2}{a^2k}
\end{aligned}
$$
所以 $k_{AB}k_{AM}=-\dfrac{b^2}{a^2}$，证毕。

##### 点差法

$A,B$ 都满足椭圆方程：
$$
\begin{gathered}
\dfrac{x_1^2}{a^2}+\dfrac{y_1^2}{b^2}=1\\
\dfrac{x_2^2}{a^2}+\dfrac{y_2^2}{b^2}=1
\end{gathered}
$$
相减得到：
$$
\begin{gathered}
\dfrac{x_1^2-x_2^2}{a^2}+\dfrac{y_1^2-y_2^2}{b^2}=0\\
\dfrac{(x_1+x_2)(x_1-x_2)}{a^2}+\dfrac{(y_1+y_2)(y_1-y_2)}{b^2}=0
\end{gathered}
$$
因为斜率存在，所以 $x_1-x_2\neq 0$，两边同时除去：
$$
\dfrac{x_1+x_2}{a^2}+k_{AB}\cdot\dfrac{y_1+y_2}{b^2}\cdot=0
$$
根据中点坐标公式：
$$
\dfrac{2x_0}{a^2}+k_{AB}\cdot\dfrac{2y_0}{b^2}=0
$$
显然 $x_0\neq 0$，除去：
$$
\begin{gathered}
\dfrac{1}{a^2}+k_{AB}k_{OM}\cdot\dfrac{1}{b^2}=0\\
k_{AB}k_{OM}=-\dfrac{b^2}{a^2}
\end{gathered}
$$
证毕。
