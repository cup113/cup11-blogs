---
next:
  link: ./A31.html
  text: A31. 语句 数据类型
---

# A3. JavaScript入门

想让网页动起来吗？JavaScript就是网页的『魔法棒』！它能实现点击按钮弹出提示、表单实时验证、动态加载内容等交互功能。在这个单元，你将学习如何用变量存储数据、用函数封装逻辑、用事件处理用户操作。从简单的计算器到交互式游戏，JavaScript让你的网页从静态图片变成动态电影。准备好让你的网页『活』起来了吗？让我们一起探索前端开发的魔法世界！

## 速查表 / CheatSheet

亦可参见：<https://quickref.cn/docs/javascript.html>。

1. 语句 数据类型
   1. **JavaScript 的特性**：
      - JavaScript 是一种脚本语言，通过解释器实时执行代码。它自动管理内存，开发者无需手动分配或释放内存。
      - 支持多种数据类型，包括基础数据类型（如 `number`、`string`、`boolean`）和引用数据类型（如对象、数组等）。

   2. **变量声明方式**：
      - `var`：旧式声明方式，存在作用域问题（如变量提升），不推荐使用。
      - `let`：块级作用域声明，适合可变变量。
      - `const`：块级作用域声明，用于不可重新赋值的常量。

   3. **基础数据类型**：
      - `number`：支持整数、小数、科学计数法、`Infinity` 和 `NaN`。
      - `string`：支持单引号、双引号和反引号包裹，提供丰富的字符串操作方法。
      - `boolean`：表示逻辑值，只有 `true` 和 `false` 两个值。
      - `undefined` 和 `null`：分别表示未初始化和显式为空的值。

   4. **类型转换**：
      - 显式转换：使用内置函数（如 `Number()`、`String()`、`Boolean()`）进行类型转换。
      - 隐式转换：在某些运算中自动进行类型转换，可能导致意外结果，建议尽量避免依赖隐式转换。

   5. **浏览器基础函数**：
      - `console.log()`：调试工具，输出信息到控制台。
      - `alert()`、`prompt()`、`confirm()`：与用户交互的基本方法，但在正式开发中较少使用。

   6. **模板字符串**：
      - 使用反引号 `` ` `` 包裹，支持嵌入变量和表达式，格式为 `${variable}`，增强了代码的可读性和灵活性。

2. 数组 流程控制
   1. **数组创建与操作**

      1. **数组创建方式**：
         - **字面量**：`const arr = [1,2,3]`（推荐）
         - **构造函数**：`new Array()`（需注意参数类型）
         - **Array.of**：`Array.of(1, 2)`（少用）
      2. **数组操作方法**：
         - **首尾增删**：`push`/`pop`、`unshift`/`shift`
         - **修改元素**：`arr[index] = value`
         - **查询元素**：`slice(start, end)`、`indexOf(searchElement)`
         - **任意位置操作**：`splice(index, count, ...items)`（核心方法，先删除再插入）
      3. **数组长度特性**：
         - `arr.length` 动态可变，但不等于实际元素数（可能包含 `undefined`）
         - 索引从 0 开始，最大索引为 `length - 1`

   2. **流程控制**

      1. **分支结构**：
         - `if (条件) { ... }`：条件必须加括号
         - `if...else`：互斥分支
         - `else if`：多级互斥条件
         - **与 Python 的区别**：不依赖缩进，必须用 `{}` 包裹代码块
      2. **循环结构**：
         - `while`：先判断条件，再执行循环体
         - `for`：三部分结构（初始化、条件、更新）
         - `for...of`：遍历元素值
         - `for...in`：遍历索引（对象属性名）
         - **常见陷阱**：
           - 死循环（忘记更新循环变量）
           - 索引越界（`i <= arr.length`）
           - 修改 `arr.length` 导致循环异常
           - 作用域污染（用 `var` 声明循环变量）
           - `for...in` 索引类型为字符串
         - **break**：立即退出当前循环
         - **continue**：跳过当前迭代，进入下一次循环

3. 函数 事件 DOM
   1. **JavaScript 函数核心**
        - **函数定义**
          - 普通函数：`function greet(name) { ... }`，支持默认参数（如 `b = 1`）。
          - 箭头函数：`const square = x => x * x;`，无 `this`，适合回调函数。
          - 函数提升：函数声明可提前调用，函数表达式和箭头函数不可提前调用。
        - **函数返回值**
          - 使用 `return` 返回结果，后续代码不再执行；未显式返回则默认 `undefined`。
          - 参数未传且无默认值时，参数值为 `undefined`，可能导致 `NaN`（如 `calculateArea()`）。
        - **递归函数**
          - 必须包含 **终止条件**（如 `n === 0`）和 **递归逻辑**（如 `factorial(n - 1)`），否则导致栈溢出。

   2. **DOM 操作详解**
        - **选择元素**
          - `getElementById`：通过 ID 获取单个元素。
          - `querySelector`：CSS 选择器获取第一个匹配元素（如 `.box.active`）。
          - `querySelectorAll`：返回 NodeList，支持 `forEach` 遍历所有匹配元素。
          - `getElementsByClassName`：返回 **实时更新的 HTMLCollection**，建议转为数组（`Array.from()`）使用。
        - **修改元素**
          - 推荐使用 `textContent` 获取/设置文本内容（避免 XSS 风险），而非 `innerText`。
          - `innerHTML` 可解析 HTML 标签，但需注意安全性。
          - 属性操作：`setAttribute()`、`getAttribute()`、`removeAttribute()`。
        - **增删元素**
          - 创建：`document.createElement("div")`。
          - 插入：`appendChild()` 添加到末尾，`insertBefore()` 插入到指定位置。
          - 删除：`removeChild()` 从父元素移除子元素。

   3. **事件绑定与处理**
        - **绑定方式**
          - `onclick`：简单但不灵活（覆盖风险）。
          - `addEventListener("click", handler)`：支持多个监听器，可解绑（推荐）。
        - **事件传递阶段**
          - **捕获阶段**：事件从顶层元素向下传递（设置 `useCapture = true`）。
          - **冒泡阶段**：事件从目标元素向上传播（默认行为）。
        - **事件对象**
          - 常见属性：`clientX/Y`（鼠标坐标）、`keyCode`（按键码）、`target`（触发元素）。
          - 解绑事件：`removeEventListener()`，常用于元素生命周期结束时。

   4. **jQuery 优势与实践**
        - **链式操作**
          - 返回 jQuery 对象本身，支持连续调用（如 `.css().text().fadeIn()`）。
        - **简化 DOM 操作**
          - 选择器：`$(".class")`、`$("#id")`。
          - 修改内容：`.text()`（文本）、`.html()`（HTML）。
        - **属性与事件**
          - 固有属性（如 `checked`）使用 `.prop()`，自定义属性（如 `data-*`）使用 `.attr()`。
          - 事件绑定：`.on("click", handler)`，动态元素推荐此方法。
        - **性能优化**
          - 批量操作 DOM（如 `innerHTML = ""` 清空内容），避免频繁操作。

   5. **开发最佳实践**
        - **数据与界面分离**
          - 数据更新后主动调用渲染函数（如 `setCount()` 更新 DOM）。
        - **避免污染作用域**
          - 使用 `let/const` 声明变量，避免全局变量冲突。
        - **调试技巧**
          - 控制台输出日志（`console.log()`）。
          - 使用 `$0` 快速选择高亮的 DOM 元素。
4. 表单
   1. **表单基础结构与属性**
      - **`<form>` 元素**
        - 作为表单容器，包裹所有表单控件。
        - `method` 和 `action` 属性决定表单提交方式（GET/POST）和目标地址。
        - 默认提交行为需通过 `event.preventDefault()` 阻止，避免页面跳转。
      - **`<label>` 元素**
        - 通过 `for` 与 `id` 关联控件，或通过嵌套结构隐式绑定。
        - 扩大用户可点击区域，提升交互体验。
      - **表单控件嵌套**
        - 控件需包含在 `<form>` 内部，便于 JavaScript 统一处理。

   2. **表单核心控件 `<input>` 元素**
      - **`基本使用**
        - `type` 是最核心属性，决定输入类型（文本、密码、数字、日期、单选、复选、文件等）。
        - `autocomplete` 支持多种取值（如 `username`、`email`），引导浏览器智能填充。
        - `name` 用于表单提交时标识字段。
      - **单选框与复选框**
        - 单选框需共享 `name` 属性，用户只能选择一个选项。
        - 复选框允许多选，需独立设置 `name` 或使用数组形式提交。
      - **文件上传框**
        - `accept` 限制文件类型，`multiple` 允许多文件选择。
        - 隐藏域（`<input type="hidden">`）用于传递不可见的上下文信息（如问卷开始时间）。

   3. **表单其他控件**
      - **下拉框（`<select>`）**
        - 通过 `<option>` 定义选项，选中值为 `value` 属性。
        - 支持 `multiple` 属性实现多选。
      - **多行文本框（`<textarea>`）**
        - `rows` 和 `cols` 定义字符数而非像素尺寸。
        - 换行和缩进会被保留，建议在 HTML 中一行写完默认值。
      - **按钮元素（`<button>`）**
        - `type` 决定行为（`submit`、`reset`、`button`）。
        - 自定义操作需绑定 `onclick` 事件或 `addEventListener`。

   4. **表单 DOM 交互**
      - **获取控件值**
        - 通过 `element.value` 获取文本框、下拉框等控件的值。
        - `textarea` 的默认值通过闭合标签内的文本设置。
      - **文件处理**
        - 使用 `FileReader` API 读取文件内容（`readAsText` 方法）。
        - 注意 `files` 属性获取文件列表，而非 `value`。
      - **事件绑定**
        - `oninput` 实时触发（适合搜索），`onchange` 用户离开输入框后触发（适合验证）。
        - 推荐使用 `addEventListener` 绑定事件，避免内联事件。

   5. **表单提交与数据绑定**
      - **阻止默认提交行为**
        - 通过 `event.preventDefault()` 阻止页面刷新，实现纯前端处理。
      - **`FormData` 对象**
        - 提取表单数据并转换为普通对象（`Object.fromEntries(formData)`）。
      - **数据绑定范式**
        - 将变量更新封装为 `set` 函数，实现数据与视图的同步（如计算立方值示例）。

   6. **表单验证**
      - **HTML 内置验证**
        - `required`、`min`/`max`、`minlength`/`maxlength` 等属性。
        - 浏览器自带验证规则有限，无法满足复杂需求。
      - **`valibot` 库**
        - 轻量级表单验证库，支持链式规则定义。
        - 适用于复杂表单的结构化校验（如用户名长度、邮箱格式）。


