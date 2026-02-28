# 🎯 Vue 事件监听详解

## 📊 你看到的代码

```vue
<button type="button" @click="count++">count is {{ count }}</button>
                      ↑      ↑
                      事件    处理逻辑
```

让我逐个部分解释！

---

## 🔑 核心语法

### **完整格式**

```vue
<button v-on:click="count++">Click me</button>
        ↑     ↑     ↑
        指令  事件  处理代码
```

### **简写格式（推荐）**

```vue
<button @click="count++">Click me</button>
        ↑      ↑
        @是v-on:的简写
               处理代码
```

---

## 📋 语法结构详解

### **格式：`@事件名="处理代码"`**

```vue
@click="count++"
↑      ↑
│      └─ JavaScript 代码（点击时执行）
└─ 事件类型（点击事件）
```

---

## 🎯 常见事件类型

### **1. 鼠标事件**

```vue
<!-- 点击 -->
<button @click="handleClick">点击我</button>

<!-- 双击 -->
<button @dblclick="handleDoubleClick">双击我</button>

<!-- 鼠标移入 -->
<div @mouseenter="handleMouseEnter">鼠标移入</div>

<!-- 鼠标移出 -->
<div @mouseleave="handleMouseLeave">鼠标移出</div>

<!-- 鼠标悬停 -->
<div @mouseover="handleMouseOver">鼠标悬停</div>
```

---

### **2. 键盘事件**

```vue
<!-- 按键按下 -->
<input @keydown="handleKeyDown" />

<!-- 按键释放 -->
<input @keyup="handleKeyUp" />

<!-- 按下回车键 -->
<input @keyup.enter="handleEnter" />

<!-- 按下 ESC 键 -->
<input @keyup.esc="handleEscape" />
```

---

### **3. 表单事件**

```vue
<!-- 输入框内容改变 -->
<input @input="handleInput" />

<!-- 输入框失去焦点 -->
<input @blur="handleBlur" />

<!-- 输入框获得焦点 -->
<input @focus="handleFocus" />

<!-- 表单提交 -->
<form @submit="handleSubmit">
  <button type="submit">提交</button>
</form>
```

---

## 💡 处理代码的三种写法

### **写法1：内联表达式（简单操作）**

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <!-- 直接写 JavaScript 表达式 -->
  <button @click="count++">count is {{ count }}</button>
  
  <!-- 可以写多个语句（用分号分隔） -->
  <button @click="count++; console.log(count)">点击</button>
  
  <!-- 可以写简单的逻辑 -->
  <button @click="count = count > 10 ? 0 : count + 1">重置或增加</button>
</template>
```

**适用场景：**
- ✅ 简单的操作（`count++`）
- ✅ 一行代码能完成
- ❌ 不适合复杂逻辑

---

### **写法2：调用方法（推荐）**

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

// 定义方法
function increment() {
  count.value++
  console.log('Count:', count.value)
}

function reset() {
  count.value = 0
}
</script>

<template>
  <!-- 调用方法（不带括号） -->
  <button @click="increment">增加</button>
  
  <!-- 调用方法（带括号） -->
  <button @click="reset()">重置</button>
  
  <!-- 传递参数 -->
  <button @click="addNumber(5)">增加 5</button>
</template>
```

**适用场景：**
- ✅ 复杂逻辑
- ✅ 多行代码
- ✅ 需要复用的逻辑

---

### **写法3：箭头函数（传递参数）**

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function addNumber(num) {
  count.value += num
}
</script>

<template>
  <!-- 使用箭头函数传递参数 -->
  <button @click="() => addNumber(5)">增加 5</button>
  
  <!-- 或者直接传递 -->
  <button @click="addNumber(10)">增加 10</button>
  
  <!-- 传递多个参数 -->
  <button @click="() => calculate(5, 10)">计算</button>
</template>
```

---

## 🧪 实际例子

### **例子1：计数器（你的代码）**

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">count is {{ count }}</button>
  <!-- 
    解释：
    @click="count++" 
    - 当按钮被点击时
    - 执行 count++（count 增加 1）
    - Vue 自动更新页面显示
  -->
</template>
```

---

### **例子2：多个按钮**

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    
    <!-- 三个按钮，三种操作 -->
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">重置</button>
  </div>
</template>
```

---

### **例子3：输入框**

```vue
<script setup>
import { ref } from 'vue'

const message = ref('')

function handleInput(event) {
  console.log('输入的内容:', event.target.value)
}
</script>

<template>
  <input 
    v-model="message"
    @input="handleInput"
    placeholder="输入内容"
  />
  <p>你输入的是: {{ message }}</p>
</template>
```

---

### **例子4：表单提交**

```vue
<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function handleSubmit(event) {
  event.preventDefault()  // 阻止默认提交行为
  console.log('用户名:', username.value)
  console.log('密码:', password.value)
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button type="submit">登录</button>
  </form>
</template>
```

---

## 🎯 事件对象

### **获取事件对象**

```vue
<script setup>
function handleClick(event) {
  console.log('事件对象:', event)
  console.log('点击的元素:', event.target)
  console.log('鼠标位置:', event.clientX, event.clientY)
}
</script>

<template>
  <!-- 方式1：自动传递事件对象 -->
  <button @click="handleClick">点击我</button>
  
  <!-- 方式2：显式传递 $event -->
  <button @click="handleClick($event)">点击我</button>
  
  <!-- 方式3：同时传递自定义参数和事件对象 -->
  <button @click="handleClick($event, 'extra data')">点击我</button>
</template>
```

---

## 🔧 事件修饰符

### **常用修饰符**

```vue
<!-- 阻止默认行为 -->
<form @submit.prevent="handleSubmit">
  <button type="submit">提交</button>
</form>

<!-- 阻止事件冒泡 -->
<div @click.stop="handleClick">点击我</div>

<!-- 只触发一次 -->
<button @click.once="handleClick">只能点击一次</button>

<!-- 按键修饰符 -->
<input @keyup.enter="handleEnter" />
<input @keyup.esc="handleEscape" />
<input @keyup.space="handleSpace" />

<!-- 鼠标按钮修饰符 -->
<div @click.left="handleLeftClick">左键点击</div>
<div @click.right="handleRightClick">右键点击</div>
<div @click.middle="handleMiddleClick">中键点击</div>
```

---

## 📊 完整对比表

| 写法 | 示例 | 适用场景 |
|------|------|---------|
| **内联表达式** | `@click="count++"` | 简单操作 |
| **调用方法** | `@click="increment"` | 复杂逻辑 |
| **带参数** | `@click="add(5)"` | 传递参数 |
| **箭头函数** | `@click="() => add(5)"` | 需要额外逻辑 |
| **事件对象** | `@click="handle($event)"` | 需要事件信息 |

---

## 🎓 你的代码详解

```vue
<button type="button" @click="count++">count is {{ count }}</button>
```

**逐个部分解释：**

```vue
<button 
  type="button"           ← HTML 属性（按钮类型）
  @click="count++"        ← Vue 事件监听
         ↑      ↑
         事件   处理代码
>
  count is {{ count }}    ← 显示的文字（{{ count }} 是插值）
</button>
```

**执行流程：**

```
1. 用户点击按钮
   ↓
2. 触发 click 事件
   ↓
3. 执行 count++（count 增加 1）
   ↓
4. Vue 检测到 count 变化
   ↓
5. 自动更新页面显示
   ↓
6. 按钮文字变成 "count is 1"
```

---

## 🧪 实践练习

### **练习1：修改你的 HelloWorld.vue**

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

// 添加新方法
function doubleCount() {
  count.value = count.value * 2
}

function resetCount() {
  count.value = 0
}
</script>

<template>
  <div class="card">
    <button @click="count++">增加: {{ count }}</button>
    <button @click="count--">减少: {{ count }}</button>
    <button @click="doubleCount">翻倍: {{ count }}</button>
    <button @click="resetCount">重置</button>
  </div>
</template>
```

---

### **练习2：输入框实时显示**

```vue
<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <input 
    v-model="text"
    @input="console.log('输入:', text)"
    placeholder="输入内容"
  />
  <p>你输入的是: {{ text }}</p>
</template>
```

---

## 💡 常见错误

### **错误1：忘记加引号**

```vue
<!-- ❌ 错误 -->
<button @click=count++>点击</button>

<!-- ✅ 正确 -->
<button @click="count++">点击</button>
```

---

### **错误2：在 ref 中忘记 .value**

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)

// ❌ 错误
function increment() {
  count++  // 错误！count 是一个 ref 对象
}

// ✅ 正确
function increment() {
  count.value++  // 正确！需要 .value
}
</script>

<template>
  <!-- 模板中不需要 .value -->
  <button @click="count++">{{ count }}</button>
</template>
```

---

### **错误3：事件名写错**

```vue
<!-- ❌ 错误 -->
<button @onclick="count++">点击</button>  <!-- onclick 是错的 -->

<!-- ✅ 正确 -->
<button @click="count++">点击</button>    <!-- click 才对 -->
```

---

## 🎯 总结

### **基本语法**

```vue
@事件名="处理代码"

例如：
@click="count++"
@input="handleInput"
@submit.prevent="handleSubmit"
```

### **三种写法**

1. **内联表达式**：`@click="count++"`
2. **调用方法**：`@click="increment"`
3. **传递参数**：`@click="add(5)"`

### **记忆技巧**

```
@ = 监听事件
@click = 监听点击
@click="代码" = 点击时执行代码
```

---

现在你理解了吗？试试修改你的 HelloWorld.vue，添加更多按钮！🎉
