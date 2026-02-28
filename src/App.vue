<script setup>
import AbstractSection from './components/AbstractSection.vue';
import HeroSection from './components/HeroSection.vue';
import ThemeToggle from './components/ThemeToggle.vue';
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation nav 开头的 tag 是导航栏，可以 -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span class="font-bold text-xl text-blue-600 dark:text-blue-400">WebNavigator</span>
        <div class="flex gap-6 text-sm">
          <a href="#abstract" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Abstract</a>
          <a href="#visualization" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Visualization</a>
          <a href="#method" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Method</a>
          <a href="#results" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Results</a>
          <a href="#citation" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Citation</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <HeroSection />
      <AbstractSection />
      <!-- 其他 sections 将在后续添加 -->
    </main>

    <!-- Theme Toggle Button -->
    <ThemeToggle />
  </div>
</template>

<style scoped>
</style>
