---
sidebar_position: 3
description: 了解高中数学中的逻辑推理系统．
---

# 逻辑推理系统

中学阶段遇到的题目绝大部分分为两种：

- 给定若干条件 $\alpha_1$，$\alpha_2$ 等，要求证明结论 $\beta_1$，$\beta_2$ 等．
- 给定若干条件 $\alpha_1$，$\alpha_2$ 等，找到某个变量的取值范围 / 某些变量应该满足的关系式．

这里条件和结论的本质是命题函数（谓词）．

## 证明型问题

> 已知 $x \ge 0$，$y < 0$，求证：$2x - y \ge 0$．

可以看到这相当于给定了两个命题函数 $\alpha_1(x) = [x \ge 0]$，$\alpha_2(y) = [y < 0]$，结论 $\beta(x, y) = [2x - y \ge 0]$，然后要求证明：

$$
\alpha_1(x) \land \alpha_2(y) \implies \beta(x, y)
$$

更一般地，对于所有的证明题，其均相当于给定两个有限命题函数集合：条件集 $\{\alpha_1, \alpha_2, \ldots, \alpha_n\}$ 与结论集 $\{\beta_1, \beta_2, \ldots, \beta_m\}$，要求证明：

$$
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n \implies \beta_1 \land \beta_2 \land \cdots \land \beta_m
$$

这等价于证明：

$$
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n \to \beta_1 \land \beta_2 \land \cdots \land \beta_m
$$

是恒真的．

我们当然可以对这个式子左右两侧直接进行逻辑学上的变形得到答案，但是这种操作通常可读性很差，因此我们通常使用 **一阶逻辑自然演绎系统** 解决这个问题．

首先，注意到

$$
\alpha \to (\beta_1 \land \beta_2) \iff \neg \alpha \lor (\beta_1 \land \beta_2) \iff (\neg \alpha \lor \beta_1) \land (\neg \alpha \lor \beta_2) \iff (\alpha \to \beta_1) \land (\alpha \to \beta_2)
$$

即对于原问题中的

$$
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n \implies \beta_1 \land \beta_2 \land \cdots \land \beta_m
$$

我们拆成

$$
\begin{aligned}
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n &\implies \beta_1 \\
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n &\implies \beta_2 \\
\vdots & \implies \vdots \\
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n &\implies \beta_m
\end{aligned}
$$

只需分开证明 $m$ 个重言蕴含式即可．这么做一定不改变等价性．

对于规约后的问题

$$
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n \implies \beta
$$

令条件集 $\Gamma = \{\alpha_1, \alpha_2, \ldots, \alpha_n\}$，则证明可以记作

$$
\Gamma \implies \beta
$$

（更规范的记号应当为 $\vDash$，但 $\implies$ 更易懂且高中更常用．）

大部分情形下，它的一个合法证明可以表示为一个命题函数序列 $P_1, P_2, \ldots, P_L$，其中每个 $P_i$ 满足以下条件之一：

- $P_i \in \Gamma$．
- $P_i \in \Lambda$．$\Lambda$ 为一个命题函数集合，包括 **所有公理与可以直接使用的定理**．$\Lambda$ 中的每一个元素都是一个 **恒真式**．
- $P_i$ 由 $P_{j_1}, P_{j_2}, \ldots, P_{j_k}$ 由 **逻辑推理规则** 推出，即 $P_{j_1}, P_{j_2}, \ldots, P_{j_k} \implies P_i$．其中要求 $j_1, j_2, \ldots, j_k < i$（否则涉及循环论证）．

特别地，$P_L = \beta$．

高中阶段常见的逻辑推理规则基于[经典等价公式](./fol#经典等价公式)与[经典重言蕴含公式](./fol#经典重言蕴含公式)，列举在下．

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

如对于本节开始的例题，我们可以构造出命题函数序列

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
