# 导数提高例题精析

> 高中数学·导数·例题精析

## 例 1

对定义域 $D=\left(0,+\infty\right)$ 的 $f(x)$ 恒有 $f'(x)>\frac{f(x)}{x}$.

1.  判断函数 $F(x)=\frac{f(x)}{x}$ 在 $\left[0,+\infty\right)$ 上的单调性.
2. 设 $x_i\in\mathbb{N}, i=1,2,...,n\ (n\ge 2)$，比较 $A=\sum_{i=1}^n f(x_i)$ 和 $B=f(\sum_{i=1}^n x_i)$ 的大小关系.

### 例 1 思路解析

第 1 问略。


:::details 提示 1
先尝试推答案：找到一个符合条件的 $f(x)$。只需 $F(x)$ 为严格增函数，不妨令 $F(x)=x$，则 $f(x)=x^2$。任意代入数据，显然有 $A<B$，故推测答案为 $A<B$。
:::

:::details 提示 2
我们只知道 $F(x)$ 的单调性。所以我们需要将 $f(x)$ 用含 $F(x)$ 的式子代换。
:::

:::details 提示 3
为避免情况过于复杂，先考察二元情况：$A=f(x_1)+f(x_2)=x_1F(x_1)+x_2F(x_2)$，$B=f(x_1+x_2)=(x_1+x_2)F(x_1+x_2)$。
:::

:::details 提示 4
在二元情况的基础上，注意到要证 $B>A$，只需将 $B$ 对应拆解成两项，$B=x_1F(x_1+x_2)+x_2F(x_1+x_2)$，再根据 $x_1,x_2>0$ 得到 $x_1,x_2<x_1+x_2$，从而由单调性 $F(x_1+x_2)>F(x_1),F(x_2)$，等式得证。接下来，推广即可
:::

### 例 1 解答

1. $F'(x)=\frac{xf'(x)-f(x)}{x^2}$，由 $f'(x)>\frac{f(x)}{x} (x>0)$ 得 $xf'(x)-f(x)>0$，从而 $F'(x)>0$，进而 $F(x)$ 为严格增函数。
2. 由于 $x_i>0,n\ge 2$，故 $(\sum_{i=1}^{n}{x_i})>x_k,\ k=1,2,...,n$。
   $$
   \begin{align}
   B&=(\sum_{i=1}^{n}{x_i})F(\sum_{i=1}^n{x_i})\\
   &=\sum_{i=1}^{n}{x_i F(\sum_{j=1}^n{x_j})}\\
   &\textcolor{blue}{>}\sum_{i=1}^{n}{x_i F(x_i)}\\
   &=\sum_{i=1}^{n}{f(x_i)}\\
   &=A
   \end{align}
   $$
   所以 $B>A$。

## 例 2

设 $f(x)=e^x-\cos x \left(x>0\right)$，正实数数列 $\{a_n\}$ 满足 $a_1=1$，且当 $n\ge 2$ 时，$f(a_n)=a_{n-1}$.

求证：$a_{n-1}>a_n+a_n^2$ 在 $n\ge 2$ 时恒成立.

### 例 2 思路解析

::: details 提示 1
看似是一道数列题，实则只需要换元，就能转化为不等式问题。

由 $n\ge 2$ 得 $f(a_n)=a_{n-1}$，则转化为：$f(a_{n})>a_n+a_n^2$ 在 $n\ge 2$ 时恒成立。

为了简便起见，换元 $t=a_n>0$（正实数）。由于不确定 $a_n$ 是否可以任意小，所以只能得到原问题的必要条件：

$e^t-\cos{t}>t^2+t$ 在 $t>0$ 时恒成立。
:::

:::details 提示 2
试证明 $g(t)=e^t-\cos{t}-t^2-t>0$ 在 $t>0$ 时恒成立。

常规求导，得 $g'(t)=e^t+\sin{t}-2t-1$, $g'(0)=0$.

虽然正负性不明显，但对于这种含有多项式且不含乘除法或复合函数的函数，必然在多次求导过后更加简单。
:::

::: details 提示 3
再求导 $g''(t)=e^t-\cos{t}-2$，$g''(0)=0$.

正负性仍不明显，再求导 $g'''(t)=e^t+\sin{t}$.

终于有 $t>0$ 时，$g'''(t)>1-1=0$ 恒成立，故 $g''(t)$ 严格增。

再由 $g''(0)=0$，得 $g''(t)\ge 0$ 恒成立，故 $g'(t)$ 单调增。

再由 $g'(0)=0$，得 $g'(t)>0$ 恒成立，故 $g(t)$ 严格增。

最后由 $g(0)=0$，得 $g(t)>0$ 在 $t>0$ 时恒成立，命题得证。
:::

### 例 2 解答

证明：令 $g(t)=e^t-\cos{t}-t^2-t,\ t\in \left(0,+\infty\right)$.

$$
\begin{align}
g'(t)&=e^t-\sin t-2t-1,&g'(0)&=0\\
g''(t)&=e^t-\cos t-2,&g''(0)&=0\\
g'''(t)&=e^t+\sin t.
\end{align}
$$

因为 $g'''(t)=e^t+\sin t>e^0 - 1 = 0\ (t>0)$，所以 $g''(t)$ 严格增。

因为 $g''(t)$ 严格增，$g''(0)=0$，所以 $g''(t)>0$，所以 $g'(t)$ 严格增。

因为 $g'(t)$ 严格增，$g'(0)=0$，所以 $g'(t)>0$，所以 $g(t)$ 严格增。

因为 $g(t)$ 严格增，$g(0)=0$，所以 $g(t)>0,\ t>0$ 恒成立。

所以 $e^t-\cos t>t+t^2$ 在 $t>0$ 时恒成立。

由于 $a_n>0$，代入 $t=a_{n}$，则 $e^t-\cos t=f(t)=f(a_n)=a_{n-1}$。

所以 $a_{n-1}>a_n+a_n^2$ 在 $n\ge 2$ 时恒成立。

::: tip 原理挖掘
根本原因在于，根据泰勒展开，$e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+...$，而 $\cos{x}=1-\frac{x^2}{2}+...$，两者相减使 $g(x)=x+x^2+\frac{x^3}{6}+...$，故求到三阶导才能出结果。
:::

## 例 3

已知函数 $f(x)=\frac{e^x}{x}-\ln x+x-a$.

1. 若 $f(x)\ge 0$ 在定义域上恒成立，求 $a$ 的取值范围。
2. 求证：若 $f(x)$ 有两个零点 $x_1,x_2$，则 $x_1x_2<1$.

### 例 3 思路解析

第 1 问略。

提示 1

若是直接求导，很可能就走入了死胡同，计算量过大。只能凭借注意力发现 $\frac{e^x}{x}=e^{x-\ln x}$，所以可以换元求解。

令 $t(x)=x-\ln x$，则 $f(x)=e^t-t-a$，记为 $g(t)=e^t-t-a$.

提示 2

注意求解 t 的范围：

$t'(x)=1-\frac{1}{x}$，解得驻点为 $1$. 验证得此点为最小值点，故 $t(x)_{\text{min}}=t(1)=1$. 易知无上界，故 $t\in \left[1,+\infty\right)$.

提示 3

分析 $g(t)$ 可知，$g'(t)=e^t-1>0$，故 $g(t)$ 严格增，且无上界，$g(t)\ge g(1)=e-1-a$，当 $a<e-1$ 时无解，舍去；当 $a\ge e-1$ 时，有一个解 $t_0$。这一个解需要对应两个 $t(x)=t_0$ 的两个根 $x_1,x_2$.

提示 4

代入联立得

$$
\left\{\begin{align}
t(x_1)&=t_0\\
t(x_2)&=t_0\\
\end{align}\right.
$$

要比较 $x_1 x_2$ 和 1 的大小关系，也就是比较 $x_1$ 和 $\frac{1}{x_2}$ 的大小关系。更进一步说，是要证明 $t(x)$ 和 $t\left(\frac{1}{x}\right)$ 在 $x<1$ 时的大小关系。

提示 5

作差比较。令 $T(x)=t(x)-t\left(\frac{1}{x}\right),\ x\in (0, 1)$.

$$
\begin{align}
T(x)&=t(x)-t\left(\frac{1}{x}\right)\\
&=x-\ln x-\frac{1}{x}+\ln\frac{1}{x}\\
&=x-\frac{1}{x}-2\ln {x}\\
T(1)&=0\\
T'(x)&=1+\frac{1}{x^2}-\frac{2}{x}\\
&=\left(1-\frac{1}{x}\right)^2>0\\
\end{align}
$$

故当 $0<x<1$ 时，$T(x)$ 严格增，$T(x)<0$.

所以，$t(x)<t\left(\frac{1}{x}\right)$.

提示 6

不妨令 $x_1<1,\ x_2>1$，则 $T(x_1)<0$，即 $t(x_1)<t\left(\frac{1}{x_1}\right)$.

又 $t(x_2)=t(x_1)=t_0$，故 $t(x_2)<t(\frac{1}{x_1})$.

且 $x_2>1,\frac{1}{x_1}>1$，$t(x)$ 在 $(1,+\infty)$ 上严格增，故 $x_2<\frac{1}{x_1}$，所以：

$\boxed{x_1 x_2<1}$.

### 例 3 解答

令 $t(x)=x-\ln x$.

::: tip 换元技巧
$$
\begin{align}
\frac{e^x}{x}&=e^{x-\ln x}\\
xe^x&=e^{x+\ln x}\\
\end{align}
$$
:::

## 例 4

(2023 秋) 令 $f(x)=\ln x$，取 $\left(a_1,f(a_1)\right)$ 过曲线 $f(x)=\ln x$ 作切线交 $y$ 轴于点 $(0,a_2)$，取点 $\left(a_2,f(a_2)\right)$ 过曲线 $f(x)=\ln x$ 作切线交 $x$ 轴于点 $(0,a_3)$，以此类推，得到 $a_1,a_2,...$，直到 $a_n<0$ 时停止操作，得到数列 $\{a_n\}$。

1. 若正整数 $m\ge 2$，求证：$a_m=\ln a_{m-1}-1$.
2. 若正整数 $m\ge 2$，试比较 $A=a_m$ 与 $B=a_{m-1}-2$ 的大小关系。
3. 若正整数 $k\ge 3$，是否存在 $k$ 使得 $a_1,a_2,...,a_k$ 构成等差数列？若存在，求出 $k$ 的所有取值；若不存在，请说明理由。

### 例 4 思路解析

### 例 4 解答

## 例 5

判断曲线 $f(x)=e^{x-1}$ 和曲线 $g(x)=\ln x$ 的公切线条数，并说明理由。

### 例 5 思路解析

### 例 5 解答

## 例 6

已知 $y=f(x),\ y=g(x)$ 和 $y=h(x)=kx+b\ (k,b\in\mathbb{R})$ 三函数，且在区间 $D$ 上，恒有 $f(x)\ge g(x)\ge h(x)$。

1. 若 $f(x)=x^2+2x$, $g(x)=-x^2+2x$, $D=(-\infty,+\infty)$，求 $h(x)$ 解析式。
2. 若 $f(x)=x^2-x+1$, $g(x)=k\ln x$, $h(x)=kx-k$，$D=(-\infty,+\infty)$，求 $k$ 的取值范围。
3. 若 $f(x)=x^4-2x^2$, $g(x)=4x^2-8$, $h(x)=4(t^3-t)x-3t^4+2t^2 \left(0<|t|<\sqrt{2}\right)$，$D=[m,n]\subset \left[-\sqrt 2,\sqrt 2\right]$，求证：$|m-n|<\sqrt 7$

### 例 6 思路解析

### 例 6 解答
