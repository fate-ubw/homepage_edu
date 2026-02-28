<script setup>
const BASE_URL = import.meta.env.BASE_URL

const authors = [
  { name: 'Xuanwang Zhang', affiliations: [1, 2, 3], isEqual: true, url: '#' },
  { name: 'Yuteng Han', affiliations: [1, 2], isEqual: true, url: '#' },
  { name: 'Jinnan Qi', affiliations: [1, 2], url: '#' },
  { name: 'Mulong Xie', affiliations: [3], url: '#' },
  { name: 'Zhen Wu', affiliations: [1, 2], isCorresponding: true, url: '#' },
  { name: 'Xinyu Dai', affiliations: [1, 2], url: '#' },
]

const affiliations = [
  { id: 1, name: 'National Key Laboratory for Novel Software Technology, Nanjing University' },
  { id: 2, name: 'School of Artificial Intelligence, Nanjing University' },
  { id: 3, name: 'Fellou AI' }
]

const links = [
  { name: 'arXiv', icon: '📚', url: 'https://arxiv.org/...', color: 'bg-orange-500 hover:bg-orange-600 text-white' },
  { name: 'Code', icon: '💻', url: 'https://github.com/fate-ubw/webNavigator', color: 'bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600' },
  { name: 'Visualization', icon: '🎮', url: '#visualization', color: 'bg-blue-500 hover:bg-blue-600 text-white' },
]
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- arXiv Badge -->
      <div class="mb-6 animate-fade-in-up">
        <span class="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full text-sm font-medium">
          arXiv Preprint
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight animate-fade-in-up">
        WebNavigator: Global Web Navigation<br>
        <span class="text-blue-600 dark:text-blue-400">via Interaction Graph Retrieval</span>
      </h1>

      <!-- Authors -->
      <div class="mb-4 animate-fade-in-up-delay">
        <p class="text-lg text-gray-700 dark:text-gray-300">
          <template v-for="(author, index) in authors" :key="author.name">
            <a 
              :href="author.url" 
              class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {{ author.name }}<sup>{{ author.affiliations.join(',') }}</sup><sup v-if="author.isEqual">*</sup><sup v-if="author.isCorresponding">†</sup>
            </a>
            <span v-if="index < authors.length - 1">, </span>
          </template>
        </p>
      </div>

      <!-- Affiliations -->
      <div class="mb-6 text-sm text-gray-600 dark:text-gray-400 space-y-1 animate-fade-in-up-delay">
        <p v-for="affiliation in affiliations" :key="affiliation.id">
          <sup>{{ affiliation.id }}</sup> {{ affiliation.name }}
        </p>
        <p class="mt-2">
          <sup>*</sup> Equal contribution &nbsp;&nbsp;
          <sup>†</sup> Corresponding author
        </p>
        <p class="mt-2">
          <a href="mailto:zhangxuanwang@smail.nju.edu.cn" class="hover:text-blue-600 dark:hover:text-blue-400">zhangxuanwang@smail.nju.edu.cn</a>, 
          <a href="mailto:wuz@nju.edu.cn" class="hover:text-blue-600 dark:hover:text-blue-400">wuz@nju.edu.cn</a>
        </p>
      </div>

      <!-- Links -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up-delay">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="paper-link"
          :class="link.color"
        >
          <span>{{ link.icon }}</span>
          <span>{{ link.name }}</span>
        </a>
      </div>

      <!-- Teaser Figure -->
      <div class="mt-12 animate-fade-in-up-delay">
        <img 
          :src="`${BASE_URL}fig2-v10.svg`" 
          alt="WebNavigator Trajectory Comparison"
          class="w-full mx-auto rounded-xl shadow-2xl dark:shadow-gray-900/50"
        />
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Trajectory comparison on a multi-site task (WebArena 760). WebNavigator achieves human-level planning via two navigate(domain, query) actions, whereas the ReAct baseline prematurely terminates due to Topological Blindness.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
sup {
  font-size: 0.75em;
  vertical-align: super;
}
</style>
