<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
  num:"10",
  inVisible: true
})
function increment() {
  count.value++
}

function decrement() {
  count.value--
}
function reset() {
  count.value = 0
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- 这个叫做标签 -->
    <button type="button" @click="increment">增加: {{ count }}</button>
    <button type="button" @click="increment()">增加: {{ count }}</button>
    <button type="button" @click="count--">减少: {{ count }}</button>
    <button type="button" @click="count = 0">重置</button> # @click 是监听点击的事件，等号后面是对应的代码
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the 
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs" id="my-id">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
/*selector style 最核心的概念就是 selector。可以有不同类型的 selecotr 实现不同的的功能包含了 tag，class，等 */
/* 给 class="read-the-docs" 的元素设置字体颜色为 #888（灰色） */
.read-the-docs {
  color: #888;
}

/* 给所有 p 标签设置字体颜色为红色 */
p {
  color: red;
} 
#my-id {
  color: rgb(40, 14, 211);
}
</style>
<!--我理解了，这里我们要换一种思路，首先是.read-the-docs 相当于是引用了前面的 class 然后给这个 class 添加对应的color
而不是说我们预设来这个一个 style 叫做 read-the-docs-->
