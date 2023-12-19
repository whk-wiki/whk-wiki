---
sidebar_position: 3
description: 了解高中数学中的逻辑．
---

# 高中数学中的逻辑

中学阶段遇到的题目绝大部分分为两种：

- 给定若干条件 $\alpha_1$，$\alpha_2$，$\alpha_3$ 等，要求证明结论 $\beta$．
- 给定若干条件 $\alpha_1$，$\alpha_2$，$\alpha_3$ 等，找到某个变量的取值范围 / 某些变量应该满足的关系式．

条件和结论的本质不是命题，而是关于一些变量的命题函数．

# 证明型问题

来看一道给定若干条件 $\alpha_1$，$\alpha_2$，$\alpha_3$ 等，要求证明结论 $\beta$ 的例子：

> 已知 $x \ge 0$，$y < 0$，求证：$2x - y \ge 0$．

可以看到这相当于给定了两个命题函数 $\alpha_1(x) = [x \ge 0]$，$\alpha_2(y) = [y < 0]$，结论 $\beta(x, y) = [2x - y \ge 0]$，然后要求证明：

$$
\alpha_1(x) \land \alpha_2(y) \implies \beta(x, y)
$$

更一般地，对于所有的证明题，其均相当于给定一个有限命题函数集合 $\Gamma = \{\alpha_1, \alpha_2, \ldots, \alpha_n\}$，要求证明：

$$
\alpha_1 \land \alpha_2 \land \cdots \land \alpha_n \implies \beta
$$

记作

$$
\Gamma \implies \beta
$$

（更规范的记号应当为 $\vDash$，但 $\implies$ 更易懂且高中更常用．）

大部分情形下，它的一个合法证明可以表示为一个命题函数序列 $P_1, P_2, \ldots, P_m$，其中每个 $P_i$ 满足以下条件之一：

- $P_i \in \Gamma$．
- $P_i$ 为一条 **恒真式**，该恒真式应为 **公理或显然的定理**，如 $x > 2 \to x > 1$．
- $P_i$ 由 $P_{j_1}, P_{j_2}, \ldots, P_{j_k}$ 由 **逻辑推理规则** 推出，即 $P_{j_1}, P_{j_2}, \ldots, P_{j_k} \implies P_i$．其中要求 $j_1, j_2, \ldots, j_k < i$．

特别地，$P_m = \beta$．

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
- **构造性二难**：$A \to B, C \to D, A \lor C \implies B \lor D$．
- **破坏性二难**：$A \to B, C \to D, \neg B \lor \neg D \implies \neg A \lor \neg C$．

等价：

- **德摩根律**：$\neg(P \land Q) \implies \neg P \lor \neg Q$、$\neg(P \lor Q) \implies \neg P \land \neg Q$．
- **逆否命题**：$P \to Q \implies \neg Q \to \neg P$．
- **分配律**：$A \land (B \lor C) \implies (A \land B) \lor (A \land C)$、$A \lor (B \land C) \implies (A \lor B) \land (A \lor C)$．

如对于本节开始的例题，我们可以构造出命题函数序列

$$
[y < 0], [y < 0 \to -y > 0], [-y > 0], [2x \ge 0], [2x - y > 0], [2x - y \ge 0]
$$

这里 $P_1 = [y < 0]$ 由
