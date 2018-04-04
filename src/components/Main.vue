<template>
  <div class="main">
    <book-card 
      :category="category"
      :books="books"></book-card>
    <book-card 
      category="非虚构类"
      :books="books"></book-card>
    <div class="types">
      <h2>分类浏览</h2>
      <categories :categories="categories"></categories>
    </div>
    <div class="footer">
      
    </div>
  </div>
</template>

<script>
import Header from "./base/Header.vue";
import BookCard from "./base/BookCard.vue";
import Categories from './base/Categories.vue';
export default {
  name: "Main",
  components: {
    Header,
    BookCard,
    Categories
  },
  data() {
    return {
      categories:['小说','爱情','历史','外国文学','青春','励志','随笔','传记','推理','旅行','奇幻','经营'],
      category: "虚构类",
      books: [{
        id: 1,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 2,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 3,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 4,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 5,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 6,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 7,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      },{
        id: 8,
        title:'刺杀骑士团长',
        stars: 8.2,
        cover:'https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg'
      }]
    };
  },
  mounted() {
    if(this.categories.length % 2 !== 0){
      this.categories.push('')
    }
  }
};
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
    padding-bottom: 50%;
  }
}
</style>
