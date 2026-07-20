import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  base: '/Pre-docs/',
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
      { text: '2409版本', link: '/v2409/序' },
      { text: '2509版本', link: '/v2509/序' },
    ],

    sidebar: {
      '/v2409/': [
        { text: '序', link: '/v2409/序' },
        {
          text: '适应期',
          collapsed: false,
          items: [
            { text: '见习学员第一次学习路线', link: '/v2409/pre_trainees/lecture1' },
            { text: '见习学员第二次学习路线', link: '/v2409/pre_trainees/lecture2' },
            { text: '见习学员第三次学习路线', link: '/v2409/pre_trainees/lecture3' },
            { text: '见习学员第四次学习路线', link: '/v2409/pre_trainees/lecture4' },
            { text: '见习学员结业大作业', link: '/v2409/pre_trainees/final_lab' },
          ]
        },
        {
          text: '特殊内容',
          collapsed: false,
          items: [
            { text: '加强版学习任务', link: '/v2409/special/special_lab' },
          ]
        },
        {
          text: '正式学员',
          collapsed: false,
          items: [
            { text: '正式学员第一次学习路线', link: '/v2409/formal_trainees/lecture1' },
            { text: '正式学员第二次学习路线', link: '/v2409/formal_trainees/lecture2' },
            { text: '正式学员第三次学习路线', link: '/v2409/formal_trainees/lecture3' },
            { text: '正式学员第四次学习路线', link: '/v2409/formal_trainees/lecture4' },
            { text: '正式学员第五次学习路线', link: '/v2409/formal_trainees/lecture5' },
          ]
        },
        {
          text: '寒假研学',
          collapsed: false,
          items: [
            { text: '第一次学习路线', link: '/v2409/winter_vacation/lecture1' },
            { text: '第二次学习路线', link: '/v2409/winter_vacation/lecture2' },
            { text: '第三次学习路线', link: '/v2409/winter_vacation/lecture3' },
            { text: '第四次学习路线', link: '/v2409/winter_vacation/lecture4' },
          ]
        },
        {
          text: '项目实践',
          collapsed: false,
          items: [
            { text: '预学习过渡阶段', link: '/v2409/final_trans/final_lecture' },
          ]
        },
        { text: '资料下载', link: '/v2409/资料下载' },
      ],
      '/v2509/': [
        { text: '序', link: '/v2509/序' },
        {
          text: '适应期',
          collapsed: false,
          items: [
            {
              text: '适应期第一次学习路线',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/pre_trainees/lecture1/' },
                { text: '虚拟机安装Ubuntu22.04指北', link: '/v2509/pre_trainees/lecture1/虚拟机安装Ubuntu22.04指北' },
                { text: '实现简单终端作业', link: '/v2509/pre_trainees/lecture1/实现简单终端作业' },
                { text: '更聪明的终端', link: '/v2509/pre_trainees/lecture1/更聪明的终端' },
              ]
            },
            {
              text: '适应期第二次学习路线',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/pre_trainees/lecture2/' },
                { text: 'Ubuntu安装VScode指西', link: '/v2509/pre_trainees/lecture2/Ubuntu安装VScode指西' },
                { text: '中文输入法安装教程', link: '/v2509/pre_trainees/lecture2/中文输入法安装教程' },
                { text: '终端改进辅助说明', link: '/v2509/pre_trainees/lecture2/终端改进辅助说明' },
                { text: 'Shell作业帮助文档', link: '/v2509/pre_trainees/lecture2/Shell作业帮助文档' },
              ]
            },
            {
              text: '适应期第三次学习路线',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/pre_trainees/lecture3/' },
                { text: '指针_结构体教程', link: '/v2509/pre_trainees/lecture3/指针_结构体教程' },
                { text: '指针_结构体练习', link: '/v2509/pre_trainees/lecture3/指针_结构体练习' },
              ]
            },
            {
              text: '适应期第四次学习路线',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/pre_trainees/lecture4/' },
                { text: 'C语言文件操作——二进制操作教程', link: '/v2509/pre_trainees/lecture4/C语言文件操作——二进制操作教程' },
                { text: '最后的终端改进', link: '/v2509/pre_trainees/lecture4/最后的终端改进' },
              ]
            },
            {
              text: '适应期结业考核',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/pre_trainees/final_lab/' },
                { text: '前置学习内容——动态内存分配', link: '/v2509/pre_trainees/final_lab/前置学习内容——动态内存分配' },
              ]
            },
          ]
        },
        {
          text: '见习期',
          collapsed: false,
          items: [
            {
              text: '见习期第一次学习路线',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/intern_trainees/lecture1/' },
                { text: '切换Java版本', link: '/v2509/intern_trainees/lecture1/切换Java版本' },
              ]
            },
            { text: '见习期第二次学习路线', link: '/v2509/intern_trainees/lecture2' },
            { text: '见习期第三次学习路线', link: '/v2509/intern_trainees/lecture3' },
            { text: '见习期第四次学习路线', link: '/v2509/intern_trainees/lecture4' },
          ]
        },
        {
          text: '寒假研学',
          collapsed: false,
          items: [
            {
              text: '第一次学习路线',
              collapsed: true,
              items: [
                { text: '主讲义', link: '/v2509/winter_vacation/lecture1/' },
                { text: '计算机组成原理与体系结构', link: '/v2509/winter_vacation/lecture1/计算机组成原理与体系结构' },
              ]
            },
            { text: '第二次学习路线', link: '/v2509/winter_vacation/lecture2' },
            { text: '第三次学习路线', link: '/v2509/winter_vacation/lecture3' },
            { text: '第四次学习路线', link: '/v2509/winter_vacation/lecture4' },
          ]
        },
        {
          text: '正式学员',
          collapsed: false,
          items: [
            { text: '正式学员第一次学习路线', link: '/v2509/formal_trainees/lecture1' },
            { text: '正式学员第二次学习路线', link: '/v2509/formal_trainees/lecture2' },
            { text: '正式学员第三次学习路线', link: '/v2509/formal_trainees/lecture3' },
          ]
        },
        {
          text: '项目实践',
          collapsed: false,
          items: [
            { text: '预学习过渡阶段', link: '/v2509/final_trans/final_lecture' },
          ]
        },
        { text: '资料下载', link: '/v2509/资料下载' },
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TYUT-YSYX-studio/Pre-docs' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
