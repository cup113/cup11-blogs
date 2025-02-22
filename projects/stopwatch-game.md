# 【网页小游戏】增强版掐秒表，解压玩具

## 软件名称

掐秒表 / Stopwatch Game

## 应用平台

* 所有支持ES6的浏览器（移动端、PC端）

## 推荐类型

【开发者自荐】

## 一句话简介

~~注意力训练器~~ 无聊时有没有尝试把手机/平板上的秒表按到整数秒？升级版来了：尽可能准确地在秒表达到5.0000s时按下停止吧。

## 应用简介

由于不满自带应用的精度，顺便要为编程社团提供一点材料，返璞归真用HTML+CSS+JS写了一个掐秒表小游戏。

* 名义精度0.1ms，以鼠标抬起时间判定，当然实际上浏览器达不到这个精度，但是更好玩。
* 保留最近15次的历史记录，适合截图。
* 加上等第评定，更加刺激。

![Stopwatch Game Screenshot](https://vanilla.cup11.top/stopwatch-game/screenshot.png)

按照误差秒数评级，当前等级参考：

- 1.000s内，D级
- 0.300s内，C级
- 0.130s内，B级
- 0.080s内，A级
- 0.050s内，S级
- 0.020s内，SS级
- 0.010s内，SSS级
- 0.005s内，U级

## 网站

部署于Netlify：

<https://vanilla.cup11.top/stopwatch-game/index.html>

快速查看源代码：

<https://bi.cool/project/yu9r4r7>
