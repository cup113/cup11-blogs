# ALG不等式及二元均值不等式的对称证明

> 高中数学·不等式·均值不等式 | 高中数学·导数·ALG 不等式

## 一、 预备知识

### 1.1 二元均值不等式

对任意$a,b>0$且$a \neq b$，有严格不等式链：
$$
\begin{align}
\sqrt{\frac{a^2+b^2}{2}} > \frac{a+b}{2} > \sqrt{ab} > \frac{2}{\frac{1}{a}+\frac{1}{b}}
\end{align}
$$
对应四类均值：
- $Q$（平方平均）
- $A$（算术平均）
- $G$（几何平均）
- $H$（调和平均）

### 1.2 对数平均（ALG 不等式）

对数平均的定义：

$$
L(a,b) = \frac{a - b}{\ln a - \ln b} \quad (a \neq b)
$$

需证不等式链：

$$
A > L > G
$$

## 二、对称换元策略

### 2.1 换元设计

常规的证明方法往往令 $a=tb$ 来进行换元，但这种换元方法使得 $a, b$ 出现了一次项 ($t$) 和常数项的**不对称性**，证明可能更加繁琐。

为消除 $a,b$ 的不对称性，考虑构造**一个乘 $t$，一个除以 $t$**。引入参数：

$$
\begin{cases}
m = \sqrt{ab} \\[2mm]
t = \sqrt{\dfrac{a}{b}} \quad (t > 1)
\end{cases}
$$

则原变量可对称表达为：

$$
a = mt, \quad b = \dfrac{m}{t}
$$

### 2.2 特征分析

- 由于所有均值具有**齐次性**（即缩放不变性），故 $Q,A,L,G,H$ 对参数 $m$ 呈线性关系。
- 由于所有均值具有**轮换对称性**，故**只需判断 $\boxed{t>1}$ 时的情况即可**。

## 三、不等式证明

### 3.1 算术平均 > 对数平均（$A > L$）

$$
\begin{align}
A &= \frac{mt + \frac{m}{t}}{2} &= \frac{t + \frac{1}{t}}{2} \cdot m\\
L &= \frac{mt - \frac{m}{t}}{\ln(mt) - \ln\left(\frac{m}{t}\right)} &= \frac{t - \frac{1}{t}}{2\ln t} \cdot m
\end{align}
$$

等价于：

$$
\begin{align}
\frac{t + \frac{1}{t}}{2} &> \frac{t - \frac{1}{t}}{2\ln t}\\
\ln t &> \frac{t^2 - 1}{t^2 + 1}
\end{align}
$$

**步骤三**：导数验证

令$f(t) = \ln t - \dfrac{t^2 - 1}{t^2 + 1}$，求导：

$$
\begin{align}
f'(t) = \frac{1}{t} - \frac{4t}{(t^2 + 1)^2} = \frac{(t^2 - 1)^2}{t(t^2 + 1)^2} > 0
\end{align}
$$

结合$f(1)=0$，得$f(t) > 0$恒成立。

---

### 3.2 对数平均 > 几何平均（$L > G$）

只需证：

$$
\begin{align}
L = \frac{t - \frac{1}{t}}{2\ln t} \cdot m &> m = G\\
t - \frac{1}{t} &> 2\ln t
\end{align}
$$

约去$m$得：

$$
$$

**步骤二**：构造函数分析

令$g(t) = t - \dfrac{1}{t} - 2\ln t$，求导：
$$
\begin{align}
g'(t) = 1 + \frac{1}{t^2} - \frac{2}{t} = \left(1 - \frac{1}{t}\right)^2 > 0
\end{align}
$$

结合$g(1)=0$，得$g(t) > 0$恒成立。

### 3.3 几何平均 > 调和平均（$G > H$）

即证：

$$
\begin{align}
\sqrt{ab} = m > \frac{2}{\frac{1}{mt} + \frac{t}{m}} = \frac{2m}{t + \frac{1}{t}}
\end{align}
$$

$$
\begin{align}
t + \frac{1}{t} > 2
\end{align}
$$

此为基本不等式，当$t \neq 1$时严格成立。

## 四、方法总结

| 关键技巧   | 应用示例                           | 优势分析                 |
| ---------- | ---------------------------------- | ------------------------ |
| 对称参数化 | $a=mt,\ b=\frac{m}{t}$             | 消除变量不对称性         |
| 齐次性约简 | 约去公共因子$m$                    | 降维简化问题             |
| 构造函数法 | $f(t)=\ln t - \frac{t^2-1}{t^2+1}$ | 将不等式转化为函数单调性 |

这体现了：

1. 对称换元法在不等式证明中的普适性
2. 导数工具在验证函数单调性中的核心作用
3. 齐次性特征对简化问题的指导意义
