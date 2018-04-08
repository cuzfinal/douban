import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import BookDetail from '../components/BookDetail'
import Author from '../components/Author'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  },{
    path: '/book/:bookId',
    name: 'BookDetail',
    component: BookDetail
  },{
    path: '/book/author/:authorId',
    name: 'Author',
    component: Author
  },{
    path: '*',
    redirect: '/'
  }]
})
