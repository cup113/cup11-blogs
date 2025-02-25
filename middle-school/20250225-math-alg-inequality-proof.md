# ALG 不等式及二元平均值不等式的简洁证明

> 高中数学·不等式·均值不等式
>
> 高中数学·导数·ALG不等式

**TL;DR** 换元为 $a=mt$ 和 $b=\frac{m}{t}$ 可以简化计算。

## 回顾：平均值不等式

我们已经知道平均值不等式（二元形式）：

$$
\sqrt{\frac{a^2+b^2}{2}}>\frac{a+b}{2}>\sqrt{ab}>\frac{2}{\frac{1}{a}+\frac{1}{b}}
$$

其中：

- 平方平均数 $Q=\frac{a^2+b^2}{2}$，
- 算术平均数 $A=\frac{a+b}{2}$，
- 几何平均数 $G=\sqrt{ab}$，
- 调和平均数 $H=\frac{2}{\frac{1}{a}+\frac{1}{b}}$。

## ALG 不等式

而进入导数章节后，我们还会接触一个压轴常见的不等式：ALG不等式。其中：

$$
L=\frac{a-b}{\ln a-\ln b}\ \left(a\ne b, a>0, b>0\right)
$$

该值也符合通常平均值的特点，介于大小两数之间。

我们有一个不等式：

$$
A > L > G\\
\frac{a+b}{2} > \frac{a-b}{\ln a-\ln b} > \sqrt{ab}\ \left(a>0, b>0, a\ne b\right)
$$

常规的证明很容易找到，但是计算较为繁琐（设$a=tb$）。这种繁琐主要来源于$a$与$b$的不对称，$a$ 中含有 $t$ 因子，而 $b$ 则会被约去。

## 证明：巧妙换元

我们观察到，证明的困难之处尤其在于$\sqrt{ab}$。所以我们将进行对称的换元：

$$
m=\sqrt{ab},\ t=\sqrt{\frac{a}{b}}
$$

这样就有：

$$
a=mt,\ b=\frac{m}{t}
$$

更加对称。

由于 $Q,A,L,G,T$ 中的 $a, b$ 均具有轮换对称性，我们**只需证明 $a>b$ 即 $\fbox{t>1}$ 的情况**，此时$\ln t>0$。

### 证明 A>L

$$
A=\frac{t+\frac{1}{t}}{2}m,\ L=\frac{mt-\frac{m}{t}}{\ln {mt}-\ln {\frac{t}{m}}}=\frac{t-\frac{1}{t}}{2\ln t}m
$$

$$
\begin{align}
A&>L\\
\iff \frac{t+\frac{1}{t}}{2}m&>\frac{t-\frac{1}{t}}{2\ln t}m\\
\iff t+\frac{1}{t}&>\frac{t-\frac{1}{t}}{\ln t}\\
\iff \ln t&>\frac{t^2-1}{t^2+1}\\
\end{align}
$$

令

$$f(t)=\ln t - \frac{t^2-1}{t^2+1}$$

则

$$
f'(t)=\frac{1}{t}-\frac{4t}{(t^2+1)^2}=\frac{t^4+2t^2+1-4t^2}{t(t^2+1)^2}=\frac{(t^2-1)^2}{t(t^2+1)^2}>0
$$

且 $f(1)=0$ ，故 $f(x)$ 恒正，等式证毕。

### 证明 L>G

$$
\begin{align}
L&>G\\
\iff \frac{t-\frac{1}{t}}{2\ln t}m&>m\\
\iff t-\frac{1}{t}&>2\ln t\\
\end{align}
$$

令

$$f(t)=t-\frac{1}{t}-2\ln t$$

则

$$f'(t)=1+\frac{1}{t^2}-\frac{2}{t}=\left(\frac{1}{t}-1\right)^2>0
$$

且 $f(1)=0$ ，故 $f(x)$ 恒正，等式证毕。

可以看到，这种换元方法在证明 L>G 时尤其简洁。

### 拓展证明：G>H

$$
\begin{align}
G&>H\\
\iff \sqrt{ab}&>\frac{2}{\frac{1}{a}+\frac{1}{b}}\\
\iff m&>\frac{2}{\frac{1}{mt}+\frac{t}{m}}\\
\iff 1&>\frac{2}{\frac{1}{t}+t}\\
\iff t+\frac{1}{t}&>2
\end{align}
$$

即为基本不等式（由于 $t>1$，不取等）。

## 小结

换元是证明 ALG 不等式的关键。有时，考虑更加对称的结构可能会让问题更加简单。
