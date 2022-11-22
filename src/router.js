import {createRouter, createWebHistory} from 'vue-router'
import {CurrentLibrary, Vue, Git, GitHubPages, Traveling, Html5, Express} from './components/sections'

const routes = [
  { path: '/', component: CurrentLibrary },
  { path: '/vue', component: Vue },
  { path: '/git', component: Git },
  { path: '/git-hub-pages', component: GitHubPages },
  { path: '/traveling', component: Traveling },
  { path: '/html5', component: Html5 },
  { path: '/express', component: Express }
]

const router = createRouter({
  history: createWebHistory('/new-year-new-library/'),
  routes
})

export default router