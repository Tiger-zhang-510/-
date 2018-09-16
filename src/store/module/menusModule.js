let menus = [
    { id: 1, level: 1, name: '快速上手', type: "link", url: "/detail/quickstart" },
    {
      id: 2,
      level: 1,
      name: '教程',
      type: "button",
      isExpanded: false,
      isSelected: false,
      subMenu: [
        { id: 21, level: 2, name: '简介', type: "link", url: "/detail/tutorial" },
        { id: 22, level: 2, name: '英雄编辑器', type: "link", url: "/detail/toh-pt1" },
        { id: 23, level: 2, name: '主从结构', type: "link", url: "/detail/toh-pt2" },
        { id: 24, level: 2, name: '多个组件', type: "link", url: "/detail/toh-pt3" },
        { id: 25, level: 2, name: '服务', type: "link", url: "/detail/toh-pt4" },
        { id: 26, level: 2, name: '路由', type: "link", url: "/detail/toh-pt5" },
        { id: 27, level: 2, name: 'HTTP', type: "link", url: "/detail/toh-pt6" },
      ]
    },
    {
      id: 3,
      level: 1,
      name: '核心知识',
      type: "button",
      isExpanded: false,
      isSelected: false,
      subMenu: [
        { id: 31, level: 2, name: '架构', type: "link", url: "/detail/architecture" },
        {
          id: 32,
          level: 2,
          name: '模板与数据绑定',
          type: "button",
          isExpanded: false,
          isSelected: false,
          subMenu: [
            { id: 321, level: 3, name: '显示数据', type: "link", url: "/detail/displaying-data" },
            { id: 322, level: 3, name: '模板语法', type: "link", url: "/detail/template-syntax" },
            { id: 323, level: 3, name: '生命周期钩子', type: "link", url: "/detail/lifecycle-hooks" },
            { id: 324, level: 3, name: '组件交互', type: "link", url: "/detail/component-interaction" },
            { id: 325, level: 3, name: '组件样式', type: "link", url: "/detail/component-styles" },
            { id: 326, level: 3, name: '动态组件', type: "link", url: "/detail/dynamic-component-loader" },
            { id: 327, level: 3, name: '属性型指令', type: "link", url: "/detail/attribute-directives" },
            { id: 328, level: 3, name: '结构型指令', type: "link", url: "/detail/structural-directives" },
            { id: 329, level: 3, name: '管道', type: "link", url: "/detail/pipes" },
            { id: 3210, level: 3, name: '动画', type: "link", url: "/detail/animations" },
          ]
        },
        {
          id: 33,
          level: 2,
          name: '表单',
          type: "button",
          isExpanded: false,
          isSelected: false,
          subMenu: [
            { name: '用户输入', type: "link", url: "/detail/user-input" },
            { name: '模板驱动表单', type: "link", url: "/detail/forms" },
            { name: '表单验证', type: "link", url: "/detail/form-validation" },
            { name: '响应式表单', type: "link", url: "/detail/reactive-forms" },
            { name: '动态表单', type: "link", url: "/detail/dynamic-form" }
          ]
        },
        { id: 34, level: 2, name: '引用启动', type: "link", url: "/detail/bootstrapping" },
        {
          id: 35,
          level: 2,
          name: 'NgModules',
          type: "button",
          isExpanded: false,
          isSelected: false,
          subMenu: [
            { id: 341, level: 3, name: 'NgModule', type: "link", url: "/detail/ngmodule" },
            { id: 342, level: 3, name: 'NgModule 常见问题', type: "link", url: "/detail/ngmodule-faq" }
          ]
        },
        {
          id: 36,
          level: 2,
          name: '依赖注入',
          type: "button",
          isExpanded: false,
          isSelected: false,
          subMenu: [
            { id: 361, level: 3, name: '依赖注入', type: "link", url: "/detail/dependency-injection" },
            { id: 362, level: 3, name: '多级注入器', type: "link", url: "/detail/hierarchical-dependency-injection" },
            { id: 363, level: 3, name: 'DI 实例技巧', type: "link", url: "/detail/dependency-injection-in-action" }
          ]
        },
        { id: 37, level: 2, name: 'HttpClient', type: "link", url: "/detail/http" },
        { id: 38, level: 2, name: '路由与导航', type: "link", url: "/detail/router" },
        { id: 39, level: 2, name: '测试', type: "link", url: "/detail/testing" },
        { id: 310, level: 2, name: '速查表', type: "link", url: "/detail/cheatsheet" },
      ]
    },
    {
      id: 4,
      level: 1,
      name: '其它技术',
      type: "button",
      isExpanded: false,
      isSelected: false,
      subMenu: [
        { id: 41, level: 2, name: '国际化（i18n）', type: "link", url: "/detail/i18n" },
        { id: 42, level: 2, name: '语言服务', type: "link", url: "/detail/language-service" },
        { id: 43, level: 2, name: '安全', type: "link", url: "/detail/security" },
        {
          id: 44,
          level: 2,
          name: '环境设置与部署',
          type: "button",
          isExpanded: false,
          isSelected: false,
          subMenu: [
            { id: 441, level: 3, name: '搭建本地开发环境', type: "link", url: "/detail/setup" },
            { id: 442, level: 3, name: '搭建方式剖析', type: "link", url: "/detail/setup-systemjs-anatomy" },
            { id: 443, level: 3, name: '浏览器支持', type: "link", url: "/detail/browser-support" },
            { id: 444, level: 3, name: 'npm 包', type: "link", url: "/detail/npm-packages" },
            { id: 445, level: 3, name: 'TypeScript 配置', type: "link", url: "/detail/typescript-configuration" },
            { id: 446, level: 3, name: '预 (AoT) 编译器', type: "link", url: "/detail/aot-compiler" },
            { id: 447, level: 3, name: '预 (AoT) 编译器', type: "link", url: "/detail/metadata" },
            { id: 448, level: 3, name: '部署', type: "link", url: "/detail/deployment" }
          ]
        },
        {
          id: 45,
          level: 2,
          name: '升级',
          type: "button",
          isExpanded: false,
          isSelected: false,
          subMenu: [
            { id: 451, level: 3, name: '从 AngularJS 升级', type: "link", url: "/detail/upgrade" },
            { id: 452, level: 3, name: '升级速查表', type: "link", url: "/detail/ajs-quick-reference" }
          ]
        },
        { id: 46, level: 2, name: 'Visual Studio 2015 快速上手', type: "link", url: "/detail/visual-studio-2015" },
        { id: 47, level: 2, name: '风格指南', type: "link", url: "/detail/styleguide" },
        { id: 48, level: 2, name: '词汇表', type: "link", url: "/detail/glossary" }
      ]
    },
    { id: 5, level: 1, name: 'API 参考手册', type: "link", url: "/detail/api" }
  ];
  let levelNum = 1;
  let startExpand = []; // 保存刷新后当前要展开的菜单项
  function setExpand(source, url) {
    let sourceItem = ''; //用来存放菜单项的字符串
    for (let i = 0; i < source.length; i++) {
      sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
      if (sourceItem.indexOf(url) > -1) { // 查找当前 URL 所对应的子菜单属于哪一个祖先菜单
        if (source[i].type === 'button') { // 导航菜单为按钮
          source[i].isSelected = true; // 设置选中高亮
          source[i].isExpanded = true; // 设置为展开
          startExpand.push(source[i]);
          // 递归下一级菜单，以此类推
          setExpand(source[i].subMenu, url);
        }
        break;
      }
    }
  }
  const state = {
    menus,
    levelNum
  };
  const mutations = {
    findParents(state, payload) {
      if (payload.menu.type === "button") {
        payload.menu.isExpanded = !payload.menu.isExpanded;//点击扩展
      } else if (payload.menu.type === "link") {
        if (startExpand.length > 0) {
          for (let i = 0; i < startExpand.length; i++) {
            startExpand[i].isSelected = false;
          }
        }
        startExpand = []; // 清空展开菜单记录项
        setExpand(state.menus, payload.menu.url);
      };
    },
    firstInit(state, payload) {
      setExpand(state.menus, payload.url);
    }
  }
  export default {
    state,
    mutations
  };