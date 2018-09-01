import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import TreeViewDetail from '@/components/TreeVIew/TreeViewDetail';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected',
  routes: [{
    path:'/',
    name:'App',
    component:App
  },
  {
    path: '/detail/quickstart',
    name: 'quickstart',
    component: TreeViewDetail
  },
  {
    path: '/detail/tutorial',
    name: 'tutorial',
    component: TreeViewDetail
  },
  {
    path: '/detail/toh-pt1',
    name: 'toh-pt1',
    component: TreeViewDetail
  },
  {
    path: '/detail/toh-pt2',
    name: 'toh-pt2',
    component: TreeViewDetail
  },
  {
    path: '/detail/toh-pt3',
    name: 'toh-pt3',
    component: TreeViewDetail
  },
  {
    path: '/detail/toh-pt4',
    name: 'toh-pt4',
    component: TreeViewDetail
  },
  {
    path: '/detail/toh-pt5',
    name: 'toh-pt5',
    component: TreeViewDetail
  },
  {
    path: '/detail/toh-pt6',
    name: 'toh-pt6',
    component: TreeViewDetail
  },
  {
    path: '/detail/architecture',
    name: 'architecture',
    component: TreeViewDetail
  },
  {
    path: '/detail/displaying-data',
    name: 'displaying-data',
    component: TreeViewDetail
  },
  {
    path: '/detail/template-syntax',
    name: 'template-syntax',
    component: TreeViewDetail
  },
  {
    path: '/detail/lifecycle-hooks',
    name: 'lifecycle-hooks',
    component: TreeViewDetail
  },
  {
    path: '/detail/component-interaction',
    name: 'component-interaction',
    component: TreeViewDetail
  },
  {
    path: '/detail/component-styles',
    name: 'component-styles',
    component: TreeViewDetail
  },
  {
    path: '/detail/dynamic-component-loader',
    name: 'dynamic-component-loader',
    component: TreeViewDetail
  },
  {
    path: '/detail/attribute-directives',
    name: 'attribute-directives',
    component: TreeViewDetail
  },
  {
    path: '/detail/structural-directives',
    name: 'structural-directives',
    component: TreeViewDetail
  },
  {
    path: '/detail/pipes',
    name: 'pipes',
    component: TreeViewDetail
  },
  {
    path: '/detail/animations',
    name: 'animations',
    component: TreeViewDetail
  },
  {
    path: '/detail/user-input',
    name: 'user-input',
    component: TreeViewDetail
  },
  {
    path: '/detail/forms',
    name: 'forms',
    component: TreeViewDetail
  },
  {
    path: '/detail/form-validation',
    name: 'form-validation',
    component: TreeViewDetail
  },
  {
    path: '/detail/reactive-forms',
    name: 'reactive-forms',
    component: TreeViewDetail
  },
  {
    path: '/detail/dynamic-form',
    name: 'dynamic-form',
    component: TreeViewDetail
  },
  {
    path: '/detail/bootstrapping',
    name: 'bootstrapping',
    component: TreeViewDetail
  },
  {
    path: '/detail/ngmodule',
    name: 'ngmodule',
    component: TreeViewDetail
  },
  {
    path: '/detail/ngmodule-faq',
    name: 'ngmodule-faq',
    component: TreeViewDetail
  },
  {
    path: '/detail/dependency-injection',
    name: 'dependency-injection',
    component: TreeViewDetail
  },
  {
    path: '/detail/hierarchical-dependency-injection',
    name: 'hierarchical-dependency-injection',
    component: TreeViewDetail
  },
  {
    path: '/detail/dependency-injection-in-action',
    name: 'dependency-injection-in-action',
    component: TreeViewDetail
  },
  {
    path: '/detail/http',
    name: 'http',
    component: TreeViewDetail
  },
  {
    path: '/detail/router',
    name: 'router',
    component: TreeViewDetail
  },
  {
    path: '/detail/testing',
    name: 'testing',
    component: TreeViewDetail
  },
  {
    path: '/detail/cheatsheet',
    name: 'cheatsheet',
    component: TreeViewDetail
  },
  {
    path: '/detail/i18n',
    name: 'i18n',
    component: TreeViewDetail
  },
  {
    path: '/detail/language-service',
    name: 'language-service',
    component: TreeViewDetail
  },
  {
    path: '/detail/security',
    name: 'security',
    component: TreeViewDetail
  },
  {
    path: '/detail/setup',
    name: 'setup',
    component: TreeViewDetail
  },
  {
    path: '/detail/setup-systemjs-anatomy',
    name: 'setup-systemjs-anatomy',
    component: TreeViewDetail
  },
  {
    path: '/detail/browser-support',
    name: 'browser-support',
    component: TreeViewDetail
  },
  {
    path: '/detail/npm-packages',
    name: 'npm-packages',
    component: TreeViewDetail
  },
  {
    path: '/detail/typescript-configuration',
    name: 'typescript-configuration',
    component: TreeViewDetail
  },
  {
    path: '/detail/aot-compiler',
    name: 'aot-compiler',
    component: TreeViewDetail
  },
  {
    path: '/detail/metadata',
    name: 'metadata',
    component: TreeViewDetail
  },
  {
    path: '/detail/deployment',
    name: 'deployment',
    component: TreeViewDetail
  },
  {
    path: '/detail/upgrade',
    name: 'upgrade',
    component: TreeViewDetail
  },
  {
    path: '/detail/ajs-quick-reference',
    name: 'ajs-quick-reference',
    component: TreeViewDetail
  },
  {
    path: '/detail/visual-studio-2015',
    name: 'visual-studio-2015',
    component: TreeViewDetail
  },
  {
    path: '/detail/styleguide',
    name: 'styleguide',
    component: TreeViewDetail
  },
  {
    path: '/detail/glossary',
    name: 'glossary',
    component: TreeViewDetail
  },
  {
    path: '/detail/api',
    name: 'api',
    component: TreeViewDetail
  }
  ]
})
