---
sidebar_position: 2
description: 了解一阶逻辑．
---

# 一阶逻辑

:::warning

下面的内容是废稿，请不要阅读．

:::

## 命题逻辑

### 命题、命题常元、命题变元

**命题** 是可以确定真假性的陈述句．

- $1 > 0$ 是命题，为真命题．
- 哈尔滨是中国的首都也是命题，为假命题．
- 哥德巴赫猜想仍是命题，命题真假性是确定的，只是目前还不知道．
- $x > 1$ 不是命题，因为这里的 $x$ 值不同，则 $x > 1$ 的真假性不同，无法确定．
- $|x| \ge 0$ 不是命题．虽然对任意的实数 $x$ 这都成立，但是命题不能有个体变项的自由出现（后面会讲解）．

命题的真假性称作命题的 **真值**．真值只有两种的逻辑称作 **二值逻辑**．高中阶段仅处理二值逻辑．

一个真值未指定，代指任意命题的变量称作 **命题变元**．命题变元的真值不确定，因此不是命题，但是它自动继承命题的全部性质．比如我们对命题定义了真值，则命题变元同样有真值属性；后文对命题定义了运算规则，则命题变元自动继承相同的运算规则，等等．

### 命题联结词

实数的运算通过运算符表达，而命题的运算通过 **命题联结词** 表达．命题与命题通过命题联结词结合，可以构成新的命题．

常用的命题联结词共有 $5$ 种：

- **否定**：用符号 $\neg$ 表示．命题 $\neg P$ 的真假性与 $P$ 相反．
- **合取**：用符号 $\land$ 表示，为自然语言联结词「且」的抽象．$P \land Q$ 为真，当且仅当 $P$ 和 $Q$ 均为真．
- **析取**：用符号 $\lor$ 表示，为自然语言联结词「或」的抽象．$P \lor Q$ 为真，当且仅当 $P$ 和 $Q$ 中存在一个为真．
- **蕴含**：用符号 $\to$ 表示．$P \to Q$ 为真，当且仅当 $P$ 假或 $Q$ 真．也即，$P \to Q$ 为假当且仅当 $P$ 真且 $Q$ 假．
- **等价**：用符号 $\harr$ 表示．$P \harr Q$ 为真，当且仅当 $P$ 和 $Q$ 的真假性相同．

这里最难理解意义的可能是蕴含符号，先记一下它的定义，它的意义我们会在后面说明．

关于合取析取符号的记忆：$\land$ 可以联想 and 中的 n，$\lor$ 可以联想 or 中的 r．

运算优先级*：从高到低的顺序为 $\neg$，$\land$，$\lor$，$\to$，$\harr$，同级运算从左到右，括号最优先．

高中阶段无需记忆运算优先级，本文也不会用到它（本文会采用括号提示）．

## 谓词逻辑

### 命题函数

> 因为 $\pi$ 是无理数，且无理数是实数，所以 $\pi$ 是实数．

这个逻辑无法用命题逻辑很好地表出．命题逻辑以命题作为最小单位，因此在命题逻辑上，「$\pi$ 是无理数」和「无理数是实数」找不到什么联系．我们需要一种逻辑将命题再向下拆分，让「$\pi$ 是无理数」拆分出「$\pi$」和「是无理数」，「无理数是实数」拆分出「无理数」和「是实数」，这样以来我们才能找到两者之间的联系．

由此，引入谓词逻辑．命题逻辑将命题作为最小单位，而谓词逻辑会将命题继续拆分．拆分出的「$\pi$」称作 **个体**．「是无理数」和「是实数」这样的结构称作 **谓词**，他们可以对不同的个体判定出不同的真假性．

谓词「是实数」可表达为 $\mathrm{isReal}(x)$．因为它的自变量只有一个 $x$，称作 **一元谓词**．同时还有 **多元谓词**，$a > b$ 的谓词 $\mathrm{isBiggerThan}(a, b)$ 就是一个二元谓词．**命题** 可以视作 **零元谓词**．当然，我们还可以将 $x \in \R$ 和 $a > b$ 这类表达式直接当成谓词使用，不必非得写为函数形式，此时可能会在表达式两侧括中括号 $[]$，这个括号还有个名字「艾弗森括号」．

还可以用一个大写字母表示任意谓词，如任意一元谓词可以表达为 $P(x)$．代指任意谓词的东西称作 **谓词变项**．相对地，特定的一种谓词称作 **谓词常项**，如 $\mathrm{isBiggerThanOne}(x)$．

观察「$\pi$ 是无理数」和「$x$ 是无理数」，拆分出的个体分别为 $\pi$ 和 $x$，他们显然是两类元素：$\pi$ 是不能变动的个体，称作 **个体常项** / **常元**．$x$ 是可以变动的个体，称作 **个体变项** / **变元**．

每个个体变项存在一个可变动的范围，称之为 **论域**．论域是可以使得后文良定义的集合．如：

- 「$x > 1$」中，$x$ 的论域是实数域（虚数不能比较大小）．
- 「直线 $l$ 经过点 $A$」中，$l$ 的论域是所有直线构成的集合；$A$ 的论域是所有点构成的集合．

可以看到谓词的表现很像一个函数：它的真值随着某些自变量的取值而变化，当这些自变量的取值确定后，真值确定．因此，谓词也称作 **命题函数**．

### 量词

量词可以对命题函数中的个体进行约定，使得这个个体被这个量词管辖，而不被命题函数的自变量管辖．下面我们就能看到这句话的意义．

**全称量词** $\boldsymbol \forall$ 表达「对所有的个体都」的含义，写作 $\forall x P(x)$．$\forall$ 这个符号来源于「全部」的英文 All 的首字母倒写．

所有数字的绝对值都大于 $0$，可以写为 $\forall x, |x| > 0$．我们发现这里虽然出现了变元 $x$，但整个句子的真假性已经确定了（假），因此它已经是一个命题．这说明量词量化后的变元与普通的变元有不同之处．

**存在量词** $\boldsymbol \exist$ 表达「存在一个个体」的含义，写作 $\exist xP(x)$．$\exist$ 这个符号来源于「存在」的英文 Exist 的首字母倒写．

存在一个数字的绝对值小于等于 $0$，可以写为 $\exist x, |x| \le 0$．同样，整个句子的真假性确定了（真）．

存在量词可以用全称量词表出：$\exist x P(x) \iff \neg \forall x \neg P(x)$，也即「存在一个 $x$ 满足 $P$」就是「任意 $x$ 都不满足 $P$」的反义．

谓词仅作用在变元，而不作用在谓词上的逻辑称作 **一阶逻辑**（First-Order Logic, FOL）．

### 谓词公式

定义 **谓词公式** 为谓词常项、谓词变项、量词构成的合法公式．谓词公式也可以包含命题常项和命题变项，但它们可以视作零元谓词．

单个谓词常项和谓词变项本身都是谓词公式．

### 变元的分类

- $\forall x, P(x)$ 和 $\exists x, P(x)$ 中，$x$ 称作 **约束变元**．
- $P(x)$ 中的变元 $x$ 不受量词约束，称作 **自由变元**．

当一个谓词公式不含谓词变项时，谓词公式退化为 **命题函数** / 谓词，该命题函数的自变量数等于公式包含的 **自由变元** 的数量（而不包含 **约束变元**），这是因为一个谓词公式的真值与所有 **自由变元** 的取值有关，而与 **约束变元** 的取值无关．

下面是一些例子：

- $x > 1$ 的真值与 $x$ 的值有关，可以表达为一元命题函数 $P(x)$．
- $x > 1 \land y > 0$ 的真值与 $x$ 和 $y$ 的值均有关，可以表达为二元命题函数 $P(x, y)$．
- $\forall x, x > 1$ 的真值与 $x$ 的值无关，可以表达为零元命题函数 $P$．零元的命题函数退化为命题，此时公式的真值确定，如本例中为假．
- $(\exist x, x > 1) \land y < 1$ 的真值与 $x$ 的值无关而与 $y$ 的值有关，可表达为一元命题函数 $P(y)$．

### 全称肯定命题与特称肯定命题

**全称肯定命题** 形如「满足 $P(x)$ 的 $x$ 均满足 $Q(x)$」．用形式逻辑表达为：

$$
\forall x, P(x) \to Q(x)
$$

所有正方形都是长方形可以表达为：

$$
\forall x, \mathrm{isSquare}(x) \to \mathrm{isRect}(x)
$$

这里 $P(x) \to Q(x)$ 应当理解为「$x$ 可以不满足 $P$，但 $x$ 一旦满足 $P$ 就得满足 $Q$」．$\to$ 这个联结词主要是为了方便全称肯定命题的．

全称肯定命题在中学阶段非常常见，由于中学阶段不教授命题联结词，高中阶段将它简写为：

$$
\forall P(x), Q(x) \coloneqq \forall x, P(x) \to Q(x)
$$

**特称肯定命题** 的定义是：形如「满足 $P(x)$ 的 $x$ 中，存在一个满足 $Q(x)$」．它可以表达为：

$$
\exist x, P(x) \land Q(x)
$$

如有些平行四边形是矩形可以表达为：

$$
\exist x, \mathrm{isPara}(x) \land \mathrm{isRect}(x)
$$

有些平行四边形是矩形，等价于有几何图形同时满足平行四边形和矩形两个命题，因此我们需要的联结词是 $\land$，这与全称肯定命题不同．或者也可以理解为，在这个情境下，我们需要一个类似 $P \to Q$，但 $P$ 为假时恒假的「蕴含」运算符，而这个运算符其实就是 $\land$．

换句话说：

- 所有的 $P$ 都是 $Q$，是对论域中所有的 $x$，确定它要么不满足 $P$，要么满足 $P$ 的同时满足 $Q$．这就是蕴含关系．
- 存在一个 $P$ 是 $Q$，是在所有论域中找到一个 $x$，要求它必须满足 $P$，并且满足 $P$ 的同时满足 $Q$．这应该为合取关系．

同理，高中阶段定义：

$$
\exist P(x), Q(x) \coloneqq \exist x, P(x) \land Q(x)
$$

### 解决开头的问题

「因为 $\pi$ 是无理数，且无理数是实数，所以 $\pi$ 是实数」这个推理过程，可以表达为：

$$
\mathrm{isIrrational}(\pi) \land (\forall x, \mathrm{isIrrational}(x) \to \mathrm{isReal}(x)) \implies \mathrm{isReal}(\pi)
$$

### 充分条件、必要条件

如果 $\forall x, P(x) \to Q(x)$，那么对于 $P(x) \to Q(x)$ 这个命题函数，对 $x$ 的任何指派都使得最终解释为真．此时记

$$
P(x) \implies Q(x)
$$

对于满足这样关系的两个命题函数，称 $P(x)$ 为 $Q(x)$ 的 **充分条件**，$Q(x)$ 为 $P(x)$ 的 **必要条件**．

例：「如果 $x > 2$，那么 $x > 1$」可以表示为 $\forall x, x > 2 \to x > 1$．这里，$x > 2$ 就是 $x > 1$ 的充分条件，$x > 1$ 就是 $x > 2$ 的必要条件．

**充分条件** 中的「充分」，意为 $x$ 满足 $P(x)$ 的时候，我们就已经 **有了充分的理由** 说明 $x$ 满足 $Q(x)$．所以 $P(x)$ 是 $Q(x)$ 的充分条件．自然语言表述：「**只要** $P(x)$，**就** $Q(x)$」．

**必要条件** 中的「必要」，意为 $x$ 想要满足 $P(x)$，那么 **前提必须满足** $Q(x)$．如果 $Q(x)$ 不满足，则 $P(x)$ 不可能满足．自然语言表述：「**只有** $Q(x)$，**才有可能** $P(x)$」．

这种必要性也可以表达为

$$
\neg Q(x) \implies \neg P(x)
$$

可以看到，$P(x)$ 是 $Q(x)$ 的充分条件等价于 $Q(x)$ 是 $P(x)$ 的必要条件，即

$$
\forall x, P(x) \to Q(x) \iff \forall x, \neg Q(x) \to \neg P(x)
$$

当 $P(x) \implies Q(x)$，但 $Q(x) \nimplies P(x)$ 时，称 $P(x)$ 为 $Q(x)$ 的 **充分不必要条件**；$Q(x)$ 为 $P(x)$ 的 **必要不充分条件**．

而当 $P(x) \implies Q(x)$ 且 $Q(x) \implies P(x)$，即 $P(x) \iff Q(x)$ 时，称这种特殊的关系为 $P(x)$ 与 $Q(x)$ **互为充要条件**．

综上，两个命题函数之间一共有四种关系：

- $P(x)$ 为 $Q(x)$ 的 **充分不必要条件**，即 $P(x) \implies Q(x)$ 且 $P(x) \nimpliedby Q(x)$．此时，$x$ 满足 $P(x)$ 的时候，一定满足 $Q(x)$，满足 $Q(x)$ 时却不一定满足 $P(x)$．因此 $P(x)$ 的要求比 $Q(x)$ 更为苛刻，我们称 $P(x)$ 是一个比 $Q(x)$ **强** 的条件．
- $P(x)$ 为 $Q(x)$ 的 **必要不充分条件**，即 $P(x) \impliedby Q(x)$ 且 $P(x) \nimplies Q(x)$．此时 $P(x)$ 是一个比 $Q(x)$ **弱** 的条件．
- $P(x)$ 是 $Q(x)$ 的 **充要条件**，即 $P(x) \iff Q(x)$．此时 $P(x)$ 与 $Q(x)$ **强度相同**．
- $P(x)$ 是 $Q(x)$ 的 **既不充分也不必要条件**，即 $P(x) \nimplies Q(x)$ 且 $P(x) \nimpliedby Q(x)$．此时 $P(x)$ 与 $Q(x)$ 之间不比较强度．

在一个推出链 $A \implies B \implies C$ 上，$A$，$B$，$C$ **单调不变强**（即 **保持强度相同** 或 **变弱**）．

举个例子：$x > 3 \implies x > 2 \implies x > 1$．

:::warning[一个语文问题]

- $P$ 是 $Q$ 的充分条件．
- $P$ 的充分条件之一是 $Q$．

由于这两句话中，关键词都是「充分条件」，以及 $P$ 都在 $Q$ 的前方，有不少人的第一反应是两句话的意思相同，即都是 $P \implies Q$．然而事实上 **两句话的关系是颠倒的**，第二句话等价于「$Q$ 是 $P$ 的充分条件」，意为 $P \impliedby Q$．

笔者更推荐将「充分、必要条件」的表达转化为「强、弱条件」的表达．两句话转化的结果分别是：

- $P$ 是 $Q$ 的不弱条件．
- $P$ 的不弱条件之一是 $Q$．

然后再观察关系，可知第一句话为 $P$ 不弱于 $Q$，第二句话为 $Q$ 不弱于 $P$．

永远记住：$P \implies Q$，**箭头指着的比箭头背对的更弱或等价（即不强）**．

:::

:::info[例题 2.1]

例子：$x > 1$ 是 $x > 2$ 的什么条件？

- A. 充分不必要条件．
- B. 必要不充分条件．
- C. 充要条件．
- D. 既不必要也不充分条件．

:::

:::tip[例题 2.1 解答]

上面的题目可以翻译为：

$x > 1$ 是 $x > 2$ 的什么条件？

- A. 更强的条件．
- B. 更弱的条件．
- C. 强度相同的条件．
- D. 强度不可比的条件．

很明显 $x > 1$ 比 $x > 2$ 要弱，因此选 B．

:::

### 全称肯定命题上的四个概念

全称肯定命题 $\forall x, P(x) \to Q(x)$ 上的若干概念：

- **逆命题**：$\forall x, Q(x) \to P(x)$．即，「所有满足 $Q$ 的都满足 $P$」．
- **否命题**：$\forall x, \neg P(x) \to \neg Q(x)$．即，「所有不满足 $P$ 的都不满足 $Q$」．
- **逆否命题**：$\forall x, \neg Q(x) \to \neg P(x)$．即，「所有不满足 $Q$ 的都不满足 $P$」．
- **该命题的否定**：$\neg(\forall x, P(x) \to Q(x)) \iff \exist x, P(x) \land \neg Q(x)$．即，「存在一个 $P$ 不是 $Q$」．这是一个特称否定命题．

前三条的原因是 **逆命题**、**否命题**、**逆否命题** 的定义本就如此．最后的否定本质是：

$$
\neg(\forall x, P(x) \to Q(x)) \iff \exist x, \neg (P(x) \to Q(x)) \iff \exist x, P(x) \land \neg Q(x)
$$

我们有以下性质：

- **命题的否定** 和原命题真假性：**一定相反**．即「所有满足 $P$ 的都满足 $Q$」与「存在一个 $P$ 不是 $Q$」真假性相反．
- **否命题** 与原命题的真假性：**无关**．否命题和命题的否定没有任何关系．事实上否命题在中学意义不大．
- **逆否命题** 就是 **逆命题** 的 **否命题**．否命题的最大意义在于引出逆否命题．
- **逆否命题** 和原命题真假性：**一定相同**．所有「所有满足 $P$ 的都满足 $Q$」和「所有不满足 $Q$ 的都不满足 $P$」真假性相同，等价．
- **逆命题** 和原命题真假性：**无关**．特别地，如果一个全称肯定命题和它的 **逆命题** 都为 **真**，也即 $\forall x, P(x) \to Q(x)$ 和 $\forall x, Q(x) \to P(x)$ 均为真，可得 $P(x) \iff Q(x)$．

我们再用高中阶段常用的表达描述一遍：

全称肯定命题 $\forall P(x), Q(x)$ 有：

- **逆命题**：$\forall Q(x), P(x)$．
- **否命题**：$\forall \neg P(x), \neg Q(x)$．即，「所有不满足 $P$ 的都不满足 $Q$」．
- **逆否命题**：$\forall \neg Q(x), \neg P(x)$．即，「所有不满足 $Q$ 的都不满足 $P$」．
- **该命题的否定**：$\exist P(x), \neg Q(x)$．即，「存在一个 $P$ 不是 $Q$」．这是一个特称否定命题．

:::info[例题 2.2]

写出 $\forall x \ge 0, |x| \ge 0$ 的 **否定** 与 **逆否命题**．

:::

:::tip[例题 2.2 解答]

- **否定**：$\exist x \ge 0, |x| < 0$．
- **逆否命题**：$\forall |x| < 0, x < 0$．

:::

### 特称肯定命题的否定

对于特称肯定命题 $\exist x, P(x) \land Q(x)$，中学阶段只研究它的 **否定**：

$$
\neg (\exist x, P(x) \land Q(x)) \iff \forall x, P(x) \to \neg Q(x)
$$

即全称否定命题．

高中阶段常用表达：

$$
\neg(\exist P(x), Q(x)) \iff \forall P(x), \neg Q(x)
$$

:::info[例题 2.3]

写出 $\exist x \ge 0, x + 1 \le 1$ 的 **否定**．

:::

:::tip[例题 2.3 解答]

$\forall x \ge 0, x + 1 > 1$．

:::

### 多元量化

我们可以对同一个命题函数的多个自由变元进行量化（而变成约束变元）．比如

$$
\forall x, (\forall y, P(x, y))
$$

这里 $P(x, y)$ 是一个与 $x$，$y$ 都有关的二元命题函数，$\forall y, P(x, y)$ 这个整体则是一个只与 $x$ 有关的一元命题函数，最外层套上 $\forall x$ 变为命题．

我们可以按照对函数量化的先后顺序，从后到前直接写在一起：

$$
\forall x \forall y, P(x, y) \coloneqq \forall x, (\forall y, P(x, y))
$$

关于量化顺序：

- $\forall x \forall y, P(x, y) \iff \forall y \forall x, P(x, y)$，即 **人人爱人人** $\iff$ **人人都被人人爱**．
- $\forall x \exist y, P(x, y) \impliedby \exist y \forall x, P(x, y)$，即 **人人都有所爱之人** $\impliedby$ **某人被人人爱**．
- $\exist x \forall y, P(x, y) \implies \forall y \exist x, P(x, y)$，即 **某人爱人人** $\implies$ **人人都有人爱**．
- $\exist x \exist y, P(x, y) \iff \exist y \exist x, P(x, y)$，即 **某人爱某人** $\iff$ **某人被某人爱**．

注意到中间的两种情况推出号反过来不一定成立，也即 **只有同种量词可以交换量化顺序，同时保证等价**．不同种量词交换量化顺序，命题可能变弱或变强．

多元量化的命题函数上也可以定义出充分条件与必要条件．如

$$
\forall x \forall y, P(x, y) \to Q(x, y)
$$

相当于 $P(x, y) \to Q(x, y)$ 在任意 $x$，$y$ 的指派下均为恒真式，即

$$
P(x, y) \implies Q(x, y)
$$

此时，称 $P(x, y)$ 为 $Q(x, y)$ 的充分条件，$Q(x, y)$ 为 $P(x, y)$ 的必要条件．

两边命题函数的自变量不一定要完全相同，数量也可不同．比如

$$
\forall a \forall b \forall c \forall d, P(a, c, d) \to Q(a, b)
$$

可以写作

$$
P(a, c, d) \implies Q(a, b)
$$

充分与必要的关系仍然存在．

对经过多元量化的多元命题函数求否定，需要将所有的量词都改变．如

$$
\neg(\forall x \forall y, P(x, y) \to Q(x)) \iff \exist x \exist y, P(x, y) \land \neg Q(x)
$$

### 谓词逻辑与集合的关系

以对 $A(a, c, d)$ 与 $B(a, b)$ 的两个命题函数的研究为例．

定义作用在 $a$，$b$，$c$，$d$ 变元上的任意命题函数 $P$ 导出的集合 $S_P$：

$$
S_P \coloneqq \{(a, b, c, d) \mid P\}
$$

即满足命题函数 $P$ 为真的所有四元组 $(a, b, c, d)$ 构成的集合．

我们有下面的结论：

- 令 $R_\lor(a, b, c, d) \coloneqq A(a, c, d) \lor B(a, b)$，则有 $S_{R_\lor} = S_A \cup S_B$．
- 令 $R_\land(a, b, c, d) \coloneqq A(a, c, d) \land B(a, b)$，则有 $S_{R_\land} = S_A \cap S_B$．
- $\forall a \forall b \forall c \forall d, A(a, c, d) \to B(a, b) \iff S_A \subseteq S_B$．两边同时为真时，$A(a, c, d) \implies B(a, b)$．
- $\forall a \forall b \forall c \forall d, A(a, c, d) \harr B(a, b) \iff S_A = S_B$．两边同时为真时，$A(a, c, d) \iff B(a, b)$．

前两条可以看出 $\lor$ 与 $\cup$ 长得相似，$\land$ 与 $\cap$ 长得相似，它们是正好有对应关系的．

### $\implies$ 到底是什么？

最后来说一下 $\implies$ 到底是什么．

$\implies$ 意为「推出」，大体是「因为前者，所以后者」的关系，是一个比较模糊的符号．但 $P \implies Q$ 大体都有这样一个含义：$P \to Q$ 在 $P$，$Q$ 中 **某些元素任取时，始终为真**．而这里的某些元素具体指什么，则没有明确的定论．比如：

$x > 1 \implies x > 2$ 成立，意思是 $x$ 任取时，$[x > 1] \to [x > 2]$ 均为真．

$\forall x \exist y, P(x, y) \impliedby \exist y \forall x, P(x, y)$ 成立，意思是 $P$ 任取时，$[\forall x \exist y, P(x, y)] \gets [\exist y \forall x, P(x, y)]$ 均为真．

$(P(x) \implies Q(x)) \land (Q(x) \implies R(x)) {\color{red} \implies} (P(x) \implies R(x))$，自然语言上是「如果 $P$ 比 $Q$ 强，$Q$ 比 $R$ 强，则 $P$ 比 $R$ 强」．这里黑色的 $\implies$ 代表「$x$ 任取时，左 $\to$ 右始终成立」是否成立，而红色的 $\implies$ 则代表「$P$，$Q$，$R$ 任取时，左 $\to$ 右始终成立」是否成立．

我们也可以用二阶逻辑描述它：

$$
\forall P, \forall Q, \forall R, (((\forall x, P(x) \to Q(x)) \land (\forall x, Q(x) \to R(x))) \to (\forall x, P(x) \to R(x)))
$$
