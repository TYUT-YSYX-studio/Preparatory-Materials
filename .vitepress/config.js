import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Preparatory-Materials/',
  title: '先研实验室前置学习讲义',
  description: '太原理工大学"一生一芯"工作室前置讲义',
  lang: 'zh-CN',
  srcExclude: ['**/node_modules/**', '**/.git/**', '**/scripts/**', 'LICENSE', 'README.md'],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('_')
      }
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '2409版本', link: '/2409_Version/序' },
      { text: '2509版本', link: '/2509_Version/序' },
    ],

    sidebar: {
      '/2409_Version/': [
        { text: '序', link: '/2409_Version/序' },
        {
          text: '适应期',
          collapsed: false,
          items: [
            { text: '见习学员第一次学习路线', link: '/2409_Version/first_batch/markdown/pre_trainees/lecture1' },
            { text: '见习学员第二次学习路线', link: '/2409_Version/first_batch/markdown/pre_trainees/lecture2' },
            { text: '见习学员第三次学习路线', link: '/2409_Version/first_batch/markdown/pre_trainees/lecture3' },
            { text: '见习学员第四次学习路线', link: '/2409_Version/first_batch/markdown/pre_trainees/lecture4' },
            { text: '见习学员结业大作业', link: '/2409_Version/first_batch/markdown/pre_trainees/final_lab' },
          ]
        },
        {
          text: '特殊内容',
          collapsed: false,
          items: [
            { text: '加强版学习任务', link: '/2409_Version/first_batch/markdown/special/special_lab' },
          ]
        },
        {
          text: '正式学员',
          collapsed: false,
          items: [
            { text: '正式学员第一次学习路线', link: '/2409_Version/first_batch/markdown/formal_trainees/lecture1' },
            { text: '正式学员第二次学习路线', link: '/2409_Version/first_batch/markdown/formal_trainees/lecture2' },
            { text: '正式学员第三次学习路线', link: '/2409_Version/first_batch/markdown/formal_trainees/lecture3' },
            { text: '正式学员第四次学习路线', link: '/2409_Version/first_batch/markdown/formal_trainees/lecture4' },
            { text: '正式学员第五次学习路线', link: '/2409_Version/first_batch/markdown/formal_trainees/lecture5' },
          ]
        },
        {
          text: '寒假研学',
          collapsed: false,
          items: [
            { text: '第一次学习路线', link: '/2409_Version/first_batch/markdown/winter_vacation/lecture1' },
            { text: '第二次学习路线', link: '/2409_Version/first_batch/markdown/winter_vacation/lecture2' },
            { text: '第三次学习路线', link: '/2409_Version/first_batch/markdown/winter_vacation/lecture3' },
            { text: '第四次学习路线', link: '/2409_Version/first_batch/markdown/winter_vacation/lecture4' },
          ]
        },
        {
          text: '项目实践',
          collapsed: false,
          items: [
            { text: '预学习过渡阶段', link: '/2409_Version/first_batch/markdown/final_trans/final_lecture' },
          ]
        },
        { text: '资料下载', link: '/2409_Version/资料下载' },
      ],
      '/2509_Version/': [
        { text: '序', link: '/2509_Version/序' },
        {
          text: '适应期',
          collapsed: false,
          items: [
            { text: '第一周', link: '/2509_Version/pre_trainees/适应期第一周' },
          ]
        },
        {
          text: '正式学员',
          collapsed: false,
          items: [
            { text: '第一周', link: '/2509_Version/formal_trainees/正式学员第一周' },
          ]
        },
        {
          text: '寒假研学',
          collapsed: false,
          items: [
            { text: '第一周', link: '/2509_Version/final_trans/适应期结业大作业' },
          ]
        },
        {
          text: '项目实践',
          collapsed: false,
          items: [
            { text: '第一周', link: '/2509_Version/winter_vacation/寒假研学第一周' },
          ]
        },
        { text: '资料下载', link: '/2509_Version/资料下载' },
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TYUT-YSYX-studio/Preparatory-Materials' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
