---
sidebar_position: 3
description: 了解高中数学中的逻辑推理系统．
---

# 逻辑推理系统

中学阶段遇到的题目，大多存在条件、结论、目标函数几个要素．条件与结论这两个要素的本质，都是命题函数．

## 证明型问题

> 已知 $x \ge 0$，$y < 0$，求证：$2x - y \ge 0$．

可以看到这相当于给定了两个命题函数 $\alpha_1(x) = [x \ge 0]$，$\alpha_2(y) = [y < 0]$，结论 $\beta(x, y) = [2x - y \ge 0]$，然后要求证明：

$$
\alpha_1(x) \land \alpha_2(y) \implies \beta(x, y)
$$

更一般的证明型问题的形式是：给定一个 **有限命题函数集合**：**条件集** $\{\alpha_1, \alpha_2, \ldots, \alpha_n\}$；以及一个 **命题函数**：**结论** $\beta$，要求证明：

$$
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n \implies \beta
$$

我们通常使用 **一阶逻辑自然演绎系统** 解决这个问题．

令条件集 $\Gamma = \{\alpha_1, \alpha_2, \ldots, \alpha_n\}$，则证明可以记作

$$
\Gamma \implies \beta
$$

它的一个合法证明可以表示为一个命题函数序列 $P_1, P_2, \ldots, P_L$，其中每个 $P_i$ 满足以下条件之一：

- $P_i \in \Gamma$．
- $P_i \in \Lambda$．$\Lambda$ 为一个命题函数集合，包括 **所有公理与可以直接使用的定理**．$\Lambda$ 中的每一个元素都是一个 **恒真式**．
- $P_i$ 由 $P_{j_1}, P_{j_2}, \ldots, P_{j_k}$ 由 **逻辑推理规则** 推出，即 $P_{j_1}, P_{j_2}, \ldots, P_{j_k} \implies P_i$．其中要求 $j_1, j_2, \ldots, j_k < i$（否则涉及循环论证）．

特别地，$P_L = \beta$．

常见逻辑推理规则：

重言蕴含：

- **附加**：$A \implies A \lor B$．
- **化简**：$A \land B \implies A$．
- **合取引入**：$A, B \implies A \land B$．
- **假言推理**：$A, A \to B \implies B$．
- **反证法**：$A \to B, \neg B \implies \neg A$．
- **归谬论**：$A \to B, A \to \neg B \implies \neg A$．
- **析取三段论**：$A \lor B, \neg A \implies B$．
- **假言三段论**：$A \to B, B \to C \implies A \to C$．
- **等价三段论**：$A \harr B, B \harr C \implies A \harr C$．
- **消解**：$A \to B, \neg A \to C \implies B \lor C$．
- 构造性二难：$A \to B, C \to D, A \lor C \implies B \lor D$．
- 破坏性二难：$A \to B, C \to D, \neg B \lor \neg D \implies \neg A \lor \neg C$．

等价（下面的每个等价式都可以拆成两个推出式使用）：

- **置换规则**：将一个命题公式的 $A$ 的任意子公式置换为与之等价的公式，得到的命题公式为 $B$，则有 $A \iff B$．
- **德摩根律**：$\neg(P \land Q) \iff \neg P \lor \neg Q$、$\neg(P \lor Q) \iff \neg P \land \neg Q$．
- **逆否命题**：$P \to Q \iff \neg Q \to \neg P$．
- **分配律**：$P \land (Q \lor R) \iff (P \land Q) \lor (P \land R)$、$P \lor (Q \land R) \iff (P \lor Q) \land (P \lor R)$．
- **交换律**：$\lor$，$\land$，$\harr$ 两侧的命题函数可以自由交换．
- **合取前提**：$P \to (Q \to R) \iff Q \to (P \to R) \iff (P \land Q) \to R$．
- **析取前提**：$(P \to R) \land (Q \to R) \iff (P \lor Q) \to R$．
- **$\boldsymbol \to$ 的展开**：$P \to Q \iff \neg(P \land \neg Q) \iff \neg P \lor \neg Q$
- **$\boldsymbol \harr$ 的展开**：$P \harr Q \iff (P \to Q) \land (Q \to P) \iff (P \land Q) \lor (\neg P \land \neg Q)$．
- 显然系列：恒等律 $P \land P \iff P$，$P \lor P \iff P$、一律 $P \land \mathrm T \iff P$，$P \lor \mathrm T \iff \mathrm T$、零律 $P \land \mathrm F \iff \mathrm F$，$P \lor \mathrm F \iff P$，补余律 $P \land \neg P \iff \mathrm F$，$P \lor \neg P \iff \mathrm T$、双重否定律 $P \iff \neg \neg P$．

上面的所有字母都可以代指任意命题函数．

谓词逻辑特有：

- **易名规则**：更换一个变元的名字，命题函数的真假性不变．
- **消 $\boldsymbol \forall$ 律**：$\forall x, P(x, \ldots) \implies P(x / t, \ldots)$，其中 $t$ 为一个表达式．$P(x / t, \ldots)$ 表示将 $x$ 全部替换为 $t$ 后的结果．
- **引 $\boldsymbol \exist$ 律**：$P(x / t, \ldots) \implies \exist x, P(x, \ldots)$，其中 $t$ 为一个表达式．
- 同样还有引入 $\forall$ 的律与消去 $\exist$ 的律，高中阶段并不常用，这里省略之．

如对于本节开始的例题：

> 已知 $x \ge 0$，$y < 0$，求证：$2x - y \ge 0$．

我们可以构造出命题函数序列

$$
\begin{array}{c}
P_1 & y < 0 & \Gamma \\
P_2 & \forall a, \forall b, \forall c, [c < 0] \land [a < b] \to [ac > bc] & \Lambda \\
P_3 & y < 0 \to -y > 0 & P_2 \implies P_3 & 消 \forall 律 \\
P_4 & -y > 0 & P_1, P_3 \implies P_4 & 假言推理 \\
P_5 & 2x \ge 0 & \Gamma \\
P_6 & \forall a, \forall b, \forall c, \forall d, [a \ge b] \land [c > d] \to [a + c > b + d] & \Lambda \\
P_7 & [2x \ge 0] \land [-y > 0] \to [2x - y > 0] & P_6 \implies P_7 & 消 \forall 律 \\
P_8 & 2x - y > 0 & P_4, P_5, P_7 \implies P_8 & 假言推理 \\
P_9 & \forall a, \forall b, [a > b] \to [a \ge b] & \Lambda \\
P_{10} & [2x - y > 0] \to [2x - y \ge 0] & P_9 \implies P_{10} & 消 \forall 律 \\
P_{11} & 2x - y \ge 0 & P_8, P_{10} \implies P_{11} & 假言推理
\end{array}
$$

倒数第二列与最后一列标注了每一个命题函数的来源，可以看到每一条都满足三个来源之一——前提集 $\Gamma$、公理与常用定理集 $\Lambda$ 或由前面的命题函数由逻辑规则推出．

可以看到上面的推理系统是 **可靠的**，推理过程中的任意 $P_i$ 天然满足了

$$
\Gamma \implies P_i
$$

并且每一步在人的逻辑上都可以接受，因此这就是一个合法证明．

这个系统如果想要 **完备**，即任意正确的命题都是可证的，还需要引入一个规则——**CP 原则**（条件引入原则）：

对于

$$
\alpha_1, \alpha_2, \alpha_3, \ldots, \alpha_n \implies \gamma \to \beta
$$

我们可以将条件引入前提中：

$$
\alpha_1, \alpha_2, \alpha_3, \ldots, \alpha_n, \gamma \implies \beta
$$

从而证明．原理是合取前提 $P \to (Q \to R) \iff (P \land Q) \to R$．

引入 **CP 原则** 后，上面的系统可以被证明是 **完备** 的．

注意到有些命题只能通过归谬法证明，但它的本质仍然是 CP 原则：

$$
\begin{aligned}
\alpha_1, \alpha_2, \alpha_3, \ldots, \alpha_n &\implies \beta \\
\alpha_1, \alpha_2, \alpha_3, \ldots, \alpha_n &\implies \neg \beta \to (\gamma \land \neg \gamma) \\
\alpha_1, \alpha_2, \alpha_3, \ldots, \alpha_n, \neg \beta &\implies (\gamma \land \neg \gamma) \\
\end{aligned}
$$

即，将 $\neg \beta$ 引入前提后，证明这些条件可以得出互相矛盾的命题函数，从而证明 $\Gamma$ 与 $\neg \beta$ 不能自洽，得到 $\Gamma \implies \beta$．

总结：处理证明型问题时：

- 如果结论存在条件，先将条件手动引入条件集 $\Gamma$．
- 证明时，可以：
	- 引入条件集中的命题函数；
	- 引入公理集中的命题函数；
	- 将先前写下的部分命题函数通过逻辑推理规则推出另一命题函数．
- 直至证明结论为止．
- 整个过程中，只要每个命题函数都由先前的命题函数 **单调不强** 地推出，就一定是合法的，不必追求等价性．

当然，实际写过程时不必像刚刚那样那么麻烦，读者只需像初中那样，善用因为所以号即可．

## 值域型问题

这种问题的形式是：给定 **条件集** $\Gamma$（元素为命题函数）和一个 **目标函数** $f$，求 $f$ 的取值范围（值域）．如：

> 已知 $x \ge 0$，$y < 0$，求 $2x - y$ 的取值范围．

设给定的两个命题函数 $\alpha_1(x) = [x \ge 0]$，$\alpha_2(y) = [y < 0]$．定义函数 $f(x, y) = 2x - y$，并设集合 $S$ 为所求．

则我们要求两点：

$$
\alpha_1(x) \land \alpha_2(y) \implies [f(x, y) \in S]
$$

且

$$
\forall s, (s \in S \to \exist x \exist y, \alpha_1(x) \land \alpha_2(y) \land [f(x, y) = s])
$$

第一条是在说：对于任意的 $x$，$y$，如果条件成真，则 $f(x, y)$ 必须属于 $S$．这保证了 $S$ 包含所有解．

第二条是在说：对于任意的 $s \in S$，一定存在一组 $x$，$y$，使得条件成立的同时，$f(x, y)$ 等于 $s$．这保证了 $S$ 中所有元素都能被取到（也即必须均为解）．

二者是缺一不可的，且二者同时成立时，$S$ 唯一确定．

想要证明 $f(x, y)$ 的取值范围是 $S$，同理须分两步：

第一步是通过证明型问题的方式，有效推理出 $f(x, y) \in S$：

> 已知 $x \ge 0$，$y < 0$，求 $2x - y$ 的取值范围．

$$
\begin{array}{c}
P_1 & y < 0 & \Gamma \\
P_2 & \forall a, \forall b, \forall c, [c < 0] \land [a < b] \to [ac > bc] & \Lambda \\
P_3 & y < 0 \to -y > 0 & P_2 \implies P_3 & 消 \forall 律 \\
P_4 & -y > 0 & P_1, P_3 \implies P_4 & 假言推理 \\
P_5 & 2x \ge 0 & \Gamma \\
P_6 & \forall a, \forall b, \forall c, \forall d, [a \ge b] \land [c > d] \to [a + c > b + d] & \Lambda \\
P_7 & [2x \ge 0] \land [-y > 0] \to [2x - y > 0] & P_6 \implies P_7 & 消 \forall 律 \\
P_8 & 2x - y > 0 & P_4, P_5, P_7 \implies P_8 & 假言推理
\end{array}
$$

第二步是检查 $S$ 中是否所有元素 $s$，都存在一组变元的取值同时满足所给条件，及研究对象的值为 $s$．

对于任意的 $s \in (0, +\infty)$，可以发现：令 $x = \dfrac s 3$，$y = -\dfrac s 3$，即可满足条件的同时，使研究对象的值为 $2x - y$．

通过上面两步，我们才能说：$2x - y$ 的取值范围是 $(0, +\infty)$．

当然，由于我们事先不知道 $S$，证明的目标并不会那么明确．比如，对于上面的例题，也可能有效推理出 $2x - y \ge 0$，此时 $S' = [0, +\infty)$．那么这时就必须注意到：$0$ 是取不到的．

如何证明 $S'$ 取不到 $0$ 呢？这其实就相当于从条件集证明出 $f(x, y) \ne 0$ 这个命题函数，仍然要通过有效推理得到．因此：

- 证明一个值取不到，仍然通过有效推理说明．
- 证明一个值能取到，通过构造．

证明一个值取不到，也是通过有效推理说明的；而当证明出 $f(x, y) \ne 0$ 后，结合 $f(x, y) \ge 0$，便可进一步有效推理出 $f(x, y) > 0$．因此不难看出，答案值域集合 $S$ 一定是通过有效推理能推出的所有 $f(x, y) \in S'$ 中，最小的那个 $S'$．这也就是说，当我们推出了一个 $f(x, y) \in S'$，而 $S \ne S'$ 时，当前的推理可以进一步完善，尚待推出更强的结论．

:::note 一种错误想法

有一种想法是「证明型问题」证的是「推出」；而「值域型问题」证的是「等价」．也即对于「值域型问题」，相当于找到一个 $S$，令 $\beta(x, y) = [f(x, y) \in S]$，则证明

$$
\Gamma \iff \beta
$$

即可．

事实上这种想法是 **错误的**．比如条件集 $\{[x = 1], [y = 1]\}$，求 $x$ 的值域．答案显然是 $1$，但 $[x = 1]$ 明显无法与条件集构成等价．

:::

另外，「求 $f(x, y)$ 的值」的本质就是「值域型问题」．只不过此时的值域集合 $S$ 通常不是若干区间的并，而是若干离散点的并，在有效推理后，仍需检查每个离散点是否存在构造．

注：实际写过程的时候，检查解集并构造的第二步基本可以省略不写，但这一步在实际逻辑推理上是必须的．如果不做这一步，单纯的推出 $f(x, y) \in S'$，即使有效推理完全正确，$S'$ 也不一定是答案——否则 $\R$ 可以回答任何值域型问题了．

## 最值型问题

> 已知 $\alpha_1(x) = [x \le 0]$，$\alpha_2(y) = [y \ge 0]$，求 $f(x, y) = 2x - y$ 的最大值．

该问题稍弱于「值域型」问题．下面以最大值为例，最小值显然只是在不等号上对称了而已．

设最终的最大值为 $M$，则我们只需证明两点：

一：

$$
\alpha_1(x) \land \alpha_2(y) \implies [f(x, y) \le M]
$$

二：

$$
\exist x \exist y, \alpha_1(x) \land \alpha_2(y) \land [f(x, y) = M]
$$

即证明所有能取到的值小于等于 $M$，再构造使得目标函数取到 $M$．

目标函数的最值有两种可能：**只有一个** 或 **不存在**．不存在分为两种情况：

- **无限**：如条件集为 $\varnothing$ 时，$x$ 不存在最大值．
- **渐近**：如条件集为 $\{[x > 0]\}$ 时，$\dfrac 1 x$ 不存在最小值（只能渐近 $0$）．

## 常见操作的逻辑学意义

### 问题的弱化，强化，等价变换

根据假言三段论，我们有

$$
(\forall x, P(x) \to Q(x)) \land (\forall x, Q(x) \to R(x)) \implies \forall x, P(x) \to R(x)
$$

即

$$
(P(x) \implies Q(x)) \land (Q(x) \implies R(x)) \implies (P(x) \implies R(x))
$$

这是 $\implies$ 的传递性．这里最外层的 $\implies$ 应该理解为：$P$，$Q$，$R$ 取任意谓词时，只要左侧成立，右侧就成立．

更进一步我们可以推出，当 $P(x) \implies P'(x)$ 成立时：

$$
(P(x) \implies Q(x)) \impliedby (P'(x) \implies Q(x))
$$

如果 $P(x) \implies Q(x)$ 是一个要证明的问题，则上面的结论等价于：用 $P(x)$（**条件**）的 **不强条件（必要条件）** 替代自己后，待证明问题 **不变弱**．也就是说：

- 当我们证明出 $P'(x) \implies Q(x)$ 后，待证明问题一定可以直接证明成立．
- 但是 $P(x) \implies Q(x)$ 成立，不一定意味着 $P'(x) \implies Q(x)$ 成立（注意只是不一定，不是一定不，只是一部分谓词 $P$，$Q$ 可能不成立）．

对称地，用 $P(x)$（**条件**）的 **不弱条件（充分条件）** 替代自己后，待证明问题 **不变强**：

- 如果 $P(x) \implies Q(x)$ 成立，则 $P'(x) \implies Q(x)$ 一定成立．
- 但是证明出 $P'(x) \implies Q(x)$，待证明问题不能直接由此证明成立．

同样地，$Q(x)$（**结论**）的 **不强条件（必要条件）** 替代自己后，待证明问题 **不变强**，反之同理．

同时，如果 **条件** 或 **结论** 进行等价变换，问题显然仍然等价．

总之：

- **弱化条件** 或 **强化结论** 会 **强化问题**．强化问题不一定成立，但强化问题做出后，原问题自动解出．常见于 **不等式的放缩**，而问题强化至不成立的现象称作 **放缩过度**．
- **强化条件** 或 **弱化结论** 会 **弱化问题**．弱化问题一定成立（只要原问题成立），但弱化问题做出不能自动解出强化问题．常见于 **通过弱化问题的方式找思路**．
- **等价条件** 或 **等价结论**，**问题等价**．我们可以通过将条件或结论等价为 **更简单，更容易处理的形式**，不影响题目的同时，使得题目更容易解答．

最后，对于 $\alpha = \alpha_1 \land \alpha_2 \land \cdots \land \alpha_n$，强化或弱化任何一个 $\alpha_i$，都会使得 $\alpha$ 的强度做相同变化．感兴趣的读者可以自行证明，但感性理解已经足够．

所以，强化或弱化任何一个子条件，就是在强化或弱化整个条件．

### 分类讨论

观察下面的例子：

> 证明：$|x + y| \ge 0$．
>
> - 当 $x + y > 0$ 时，$|x + y| = x + y > 0$．
> - 当 $x + y = 0$ 时，$|x + y| = 0$．
> - 当 $x + y < 0$ 时，$|x + y| = -(x + y) > 0$．
> 综上，$|x + y| \ge 0$．

上面的证明就采用了分类讨论．它的逻辑学本质是什么？

我们将前提集中的所有条件命题函数并成一个大条件 $\alpha$，要证明的结论设为 $\beta$，分类讨论的每种情况设为命题函数 $\gamma_i$．原先我们要证明的内容是：

$$
\alpha \implies \beta
$$

而我们的做法是：

$$
\begin{aligned}
\alpha \land \gamma_1 & \implies \beta_1 \\
\alpha \land \gamma_2 & \implies \beta_2 \\
\cdots & \implies \cdots \\
\alpha \land \gamma_k & \implies \beta_k \\
\beta_1 \lor \beta_2 \lor \cdots \lor \beta_k &\implies \beta
\end{aligned}
$$

这种操作的正确性基于：

$$
\begin{aligned}
& \alpha \to \beta \\
\iff & \alpha \land \mathrm T \to \beta \\
\iff & \alpha \land (\gamma_1 \lor \gamma_2 \lor \cdots \lor \gamma_k) \to \beta \\
\iff & (\alpha \land \gamma_1) \lor (\alpha \land \gamma_2) \lor \cdots \lor (\alpha \land \gamma_k) \to \beta \\
\impliedby & \beta_1 \lor \beta_2 \lor \cdots \lor \beta_k \to \beta
\end{aligned}
$$

因此原问题弱于 $\beta_1 \lor \beta_2 \lor \cdots \lor \beta_k \implies \beta$，证得后者则前者自动成立，证明无误．

有几点需要注意：

- 必须保证 $(\gamma_1 \lor \gamma_2 \lor \cdots \lor \gamma_k) \iff \mathrm T$，也就是说这 $k$ 种情况必须包含了所有可能情况，不能有遗漏．否则正确性推理的第二步 $\iff$ 退化为 $\implies$，后面的讨论就没意义了（因为已经强化问题了）．$k$ 种情况互相可以重叠．
- 注意最后的 $\beta_1$ 到 $\beta_k$ 应该或起来．
