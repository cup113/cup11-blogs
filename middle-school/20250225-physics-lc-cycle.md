# LC 振荡电路周期公式的推导

> 高中物理·电磁波·LC 振荡电路 | 高等数学·微分方程

## 预备知识

1. 复合函数的求导 $(f(ax+b))'=af'(ax+b)$。
2. 二阶导 $f''(x)=(f'(x))'$，例如 $(x^2)''=(2x)'=2$。
3. 自感电动势 $\varepsilon$ 与自感系数 $L$ 的关系：$\varepsilon = L\frac{\Delta I}{\Delta t}$。

## 公式

我们已经知道，在 LC 振荡电路中，有周期

$$
\begin{align}
T=2\pi \sqrt{LC}
\end{align}
$$

其中 $L$ 为自感系数，$C$ 为电容。但这从何而来？

书上没有的原因也很简单，和单摆/弹簧简谐运动的周期公式一样，超出了高中数学的知识范围。

## 另类的方程

我们对于这整个过程到底能不能列表达式？

其实是可以的。我们只需要抓住 $L$ 的定义（为了表征电势差的符号，我们**添加负号以显示“阻碍”电流减小的作用**）：

$$
\begin{align}
\varepsilon = -L\frac{\Delta I}{\Delta t}
\end{align}
$$

由于我们需要**求解瞬时关系**，令 $\Delta t\to 0$，则 $\frac{\Delta I}{\Delta t}=I'(t)$，下同。

那么，$\varepsilon$ 又是什么呢？因为电路无电阻，电容器和自感线圈始终**无电势差**，所以保持 $\varepsilon = U$，$U$ 为电极板两端电压，$U=\frac{Q}{C}$。

于是我们得到：

$$
\begin{align}
\frac{Q(t)}{C}=-LI'(t)
\end{align}
$$

接下来，因为 $I=\frac{\Delta Q}{\Delta t}=Q'(t)$，所以本质上我们可以把 $Q, I$ 表示为关于 $t$ 的函数，用**导数描述瞬时状态**。

$$
\begin{align}
\frac{Q(t)}{C}=-LQ''(t)
\end{align}
$$

这样我们就得到了一个另类关于 $Q(t)$ 的方程。像这样既有原函数又有导函数的方程，称为 **微分方程**。

## 求解

严格的证明超出高中知识范围太多，所以我们考虑“凑”出来一个解。

将上式变形：

$$
\begin{align}
\boxed{Q''(t)=-\frac{Q(t)}{LC}}
\end{align}
$$

**由于周期性大多涉及三角函数**，我们联想到三角函数的求导：

$$
\sin'x=\cos x,\ \cos' x=-\sin x
$$

所以有：$\sin''x=-\sin x$，也就是说当二阶导为原函数的**负常数倍**时，函数很有可能和三角函数有关。

那么多出的系数从何而来？

$$
(\sin \omega x)'=\omega \cos \omega x,\ (\omega \cos \omega x)'=-\omega^2 \sin \omega x
$$

从复合函数的求导中来。

所以，我们要构造 $\omega^2 = \frac{1}{LC}$，也就得到了：

$$
\begin{align}
\boxed{\omega = \frac{1}{\sqrt{LC}}}
\end{align}
$$

而 $\omega$ 在三角函数中本就有其自身的含义：角速度。

于是：

$$
\begin{align}
\boxed{T=\frac{2\pi}{\omega}}\\
\boxed{T=2\pi\sqrt{LC}}
\end{align}
$$

证毕。

> 备注：事实上，此类方程通解为：
>
> $(A\sin(\omega t+\phi))''=-A\omega^2\sin(\omega t+\phi)$。但我们只需要求解周期。

## 结论

我们可以得到结论：

$$
f''(t)=-Kf(t)\iff \omega=\sqrt{K}\iff T=\frac{2\pi}{\sqrt{K}}
$$

在上式中，因为 $K=\frac{1}{LC}$，才有了我们常用的公式。

- 正因为在电势差的等式中 $L$ 在分子而 $C$ 在另一侧的分母，所以才会有 $LC$；
- 正因为我们用到了二阶导函数，$(\sin \omega x)''=\omega^2 \sin \omega x$，所以才会出现根号；
- 正因为涉及到了三角函数，所以才会出现 $2\pi$。

## 拓展

### 简谐振动的周期推导

根据简谐振动的判定及牛顿第二定律，有：

$$
\left\{\begin{align}
F&=-kx\\
F&=ma
\end{align}\right.
$$

因为 $\boxed{a(t)=x''(t)}$，所以有：

$$
\boxed{x''(t)=-\frac{k}{m}x(t)}
$$

代入刚才的结论，此时对应

$$
K=\frac{k}{m}
$$

所以：

$$
T=2\pi\sqrt{K}=2\pi\sqrt{\frac{m}{k}}
$$

### 单摆公式的周期推导

因为单摆是基于简谐振动推出的（利用了小角度的近似），所以有：

$$
F=-mg\sin\theta=-mg\theta=-mg\frac{x}{L}
$$

也就是说，简谐振动中的 $k=\frac{mg}{L}$ 。

代入得：

$$
T=2\pi\sqrt{\frac{m}{k}}=2\pi\sqrt{\frac{L}{g}}
$$

一切都源于这个二阶微分方程。

> 注：关于二阶常系数微分方程的通解，可以自行上网搜索。
