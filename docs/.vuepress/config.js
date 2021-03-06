module.exports = {
  base: "/vuepress-wei.github.io/",
  // 博客名
  title: "FUTURE ◆ 未来",
  // 博客描述
  description: "坚持比努力更可怕",
  head: [
    ['link', {
      rel: 'icon',
      href: '/dou.jpg'
    }]
  ],
  theme: require.resolve("../../theme/"),
  themeConfig: {
    // 设置logo
    logo: "/dou.jpg",
    author: "weiei",
    searchMaxSuggestions: 20,
    repo: "weiei/vuepress-theme-wei",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "Last Updated",
    navs: [
      // 默认为左侧底部设计
      {
        text: "关于",
        link: "/notes/about",
        blank: false
      },
      {
        text: "友链",
        link: "/notes/friendLink",
        blank: false
      },
      
    ],
    noteConfig: {
      // 背景图片
      bg: "dm.jpg",
      // 来创建左侧菜单
      nav: [
        // 通过以下方式可以获取到相应的文章内容
        // _this['$'+_this.$themeConfig.noteConfig.nav[0].frontmatter.id].map[_this.$themeConfig.noteConfig.nav[0].frontmatter.key]
        {
          text: "随笔", // 左侧栏名称
          icon: "",
          frontmatter: {
            // 指定frontmatter内容
            id: "other", // 指向vuepress-plugin-blog中的frontmatter
            key: "essay" // Markdown中的frontmatter配置的categories值
          }
        },
        {
          text: "语言",
          icon: "",
          frontmatter: {
            id: "language"
          }, // 通过这种方式进行分组设置
          open: true,
          items: [
            {
              text: "Java",
              icon: "",
              frontmatter: { key: "Java" },
              items: [
                {
                  text: "SpringBoot",
                  icon: "",
                  frontmatter: { key: "SpringBoot" }
                },
                {
                  text: "SpringCloud",
                  icon: "",
                  frontmatter: { key: "SpringCloud" }
                }
              ]
            },
            {
              text: "HTML",
              icon: "",
              frontmatter: {
                key: "HTML"
              },
              items: [
                {
                  text: "标签",
                  icon: "",
                  frontmatter: {
                    key: "标签"
                  }
                }
              ]
            },
            {
              text: "JavaScript",
              icon: "",
              frontmatter: {
                key: "JavaScript"
              },
              items: [{
                  text: "ECMAScript6",
                  icon: "",
                  frontmatter: {
                    key: "ECMAScript6"
                  }
                },
                {
                  text: "Three.js",
                  icon: "",
                  frontmatter: {
                    key: "Three"
                  }
                },
                {
                  text: "Vue",
                  icon: "",
                  frontmatter: {
                    key: "Vue"
                  }
                },
                {
                  text: "React",
                  icon: "",
                  frontmatter: {
                    key: "React"
                  }
                }
              ]
            },{
              text:'Css',
              icon:'',
              frontmatter:{
                key:'Css'
              },
              items:[{
                text:'LESS',
                icon:'',
                frontmatter:{
                  key:'less'
                }
              }]
            }
          ]
        }
        // ,
        // {
        //   text: "目录",
        //   icon: "iconqq",
        //   link: "", // 手动指定link优先选择
        //   frontmatter: { id: "tags" }, // 通过这种方式进行分组设置
        //   items: [
        //     {
        //       text: "Vue",
        //       icon: "iconqq",
        //       link: "",
        //       frontmatter: { key: "Vue" }
        //     },
        //     { text: "Java", icon: "iconqq", frontmatter: { key: "Java" } },
        //     {
        //       text: "Vuepress",
        //       icon: "iconqq",
        //       link: "",
        //       frontmatter: { key: "Vuepress" }
        //     }
        //   ]
        // }
      ],
      // 联系我设置内容
      contact: {
        enabled: true,
        items: [{
            text: "QQ",
            link: "http://wpa.qq.com/msgrd?v=3&uin=1454900516&site=qq&menu=yes",
            icon: "iconqq"
          },
          {
            text: "GitHub",
            link: "https://github.com/weiei",
            icon: "icongithub"
          }
        ]
      }
    },
    comment: {
      choosen: "valine",
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: "#valine-ic-comment",
        appId: "Y34cUjWPqzbPWKc1Ua5UGDqn-gzGzoHsz",
        appKey: "cKSTywqJYCSmbHPYbwaOC23d",
        notify: false,
        // verify: false,
        visitor: true,
        // avatar:'mm', //头像，默认即可
        placeholder: "just go go"
      },
      container: ".valine-ic-comment"
    },
    sponsor: ["/alipay.jpg", "/Tenpay.png"],
    footer: {
      icp: {
        val: "暂无",
        link: "......"
      }, // ICP备案
      startYear: "2019", // 开始日期
      psr: {
        val: "", //"苏公网安备 XXXXX号",
        link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=XXXXX&token=62a24040-710d-473b-89b8-26de6e91d20b"
      } // 公安备案
    }
  },
  markdown: {
    lineNumbers: true
  }
};
