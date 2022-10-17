import {createRouter, createWebHistory} from 'vue-router'
import {CurrentLibrary, Vue, Git, GitHubPages, Traveling} from './components/sections'

const routes = [
  { path: '/', component: CurrentLibrary },
  { path: '/vue', component: Vue },
  { path: '/git', component: Git },
  { path: '/git-hub-pages', component: GitHubPages },
  { path: '/traveling', component: Traveling }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router