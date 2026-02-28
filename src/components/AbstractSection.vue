<script setup>
import { ref } from 'vue';
const abstractText = `Despite significant advances in autonomous web navigation, current methods remain far from human-level performance in complex web environments. We argue that this limitation stems from Topological Blindness, where agents are forced to explore via trial-and-error without access to the global topological structure of the environment. To overcome this limitation, we introduce WebNavigator, which reframes web navigation from probabilistic exploration into deterministic retrieval and pathfinding. WebNavigator constructs Interaction Graphs via zero-token cost heuristic exploration offline and implements a Retrieve-Reason-Teleport workflow for global navigation online. WebNavigator achieves state-of-the-art performance on WebArena and Online-Mind2Web. On WebArena multi-site tasks, WebNavigator achieves a 72.9% success rate, more than doubling the performance of enterprise-level agents. This work reveals that Topological Blindness, rather than model reasoning capabilities alone, is an underestimated bottleneck in autonomous web navigation.`

const highlights = [
  { value: '72.9%', label: 'Success Rate on Multi-site Tasks' },
  { value: '2×', label: 'Better than Enterprise Agents' },
  { value: '6', label: 'Action Space Size' },
]

const students = ref([
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' }
])

</script>

<template>
  <section id="abstract" class="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="section-title">Abstract</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {{ abstractText }}
      </p>
      <!-- Key Highlights -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <!-- v-for: 循环遍历 highlights 数组，item 是当前项，index 是索引 -->
        <!-- :key: Vue 的列表渲染优化，使用 item.label 作为唯一标识符 -->
        <!-- class: Tailwind CSS 样式类
             - text-center: 文本居中
             - p-6: 内边距
             - bg-gradient-to-br: 从左上到右下的渐变背景
             - from-blue-50 to-indigo-50: 浅色模式的蓝色渐变
             - dark:from-gray-700 dark:to-gray-600: 深色模式的灰色渐变
             - rounded-xl: 圆角
             - transform: 启用 CSS 变换
             - transition-all duration-300: 所有属性平滑过渡，耗时 300ms
             - hover:scale-105: 鼠标悬停时放大到 105%
             - hover:shadow-lg: 鼠标悬停时添加大阴影
        -->
        <!-- :style: 绑定动态样式对象，设置动画延迟时间（每个项延迟增加 0.1s） -->
        <div 
          v-for="(item, index) in highlights" 
          :key="item.label"
          class="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{{ item.value }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
