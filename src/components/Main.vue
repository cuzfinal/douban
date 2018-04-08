<template>
  <div class="main">
    <book-card 
      category="虚构类"
      :books="booksXg"></book-card>
    <book-card 
      category="非虚构类"
      :books="booksFxg"></book-card>
    <div class="types">
      <h2>分类浏览</h2>
      <categories :categories="categories"></categories>
    </div>
    <div class="footer">
      <h1>豆瓣</h1>
    </div>
  </div>
</template>

<script>
import Header from "./base/Header.vue";
import BookCard from "./base/BookCard.vue";
import Categories from './base/Categories.vue';
import utils from '../utils/api'
import { debug } from 'util';
export default {
  name: "Main",
  components: {
    Header,
    BookCard,
    Categories
  },
  data () {
    return {
      categories: ['小说','爱情','历史','外国文学','青春','励志','随笔','传记','推理','旅行','奇幻','经营'],
      booksXg: [],
      booksFxg: []
    }
  },
  mounted () {
    if(this.categories.length % 2 !== 0){
      this.categories.push('')
    }
    this.getBooks();
  },
  methods: {
    getBooks () {
      utils.GetBooksByTag('虚构类').then( r => this.booksXg = r.books)
      utils.GetBooksByTag('非虚构类').then( r => this.booksFxg = r.books)
    }
  }
}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100px;
  h2{
    display: inline-block;
    min-width: 4em;
    margin-bottom:  0;
    color: #111;
    font-size: 1.06rem;
    font-weight: normal;
    margin-left: 18px;
  }
  .borderbtm{
    border-bottom: solid 1px #eee;
  }
  .footer{
    width: 100%;
    padding-bottom: 20%;
    text-align: center;
    color: #42bd56;
    h1{
      font-weight: lighter;
    }
  }
}
</style>
