<template>
  <div class="book-detail">
    <h1>{{ bookInfo.title }}</h1>
    <section class="subject-info">
      <div class="right" :title="bookInfo.title" :style="{backgroundImage: `url(${ bookInfo.images.small })`}">
      </div>
      <div class="left">
        <rater :rate="+bookInfo.rating.average" class="rate"></rater>
        <span class="rating-cnt">123456人评价</span>
        <p class="meta">
          <span  v-for="(author, index) in bookInfo.author" :key="index">
            <router-link :to="{name: 'Author',  params: {authorId:author}}">
             {{ author }}
            </router-link> / 
          </span>
          / {{ bookInfo.publisher}} / {{ bookInfo.pages }}页 / {{ bookInfo.binding }} / {{ bookInfo.price }}元 /{{ bookInfo.pubdate}}
        </p>
      </div>
    </section>
    <section class="subject-mark">
      <div>想读</div>
      <div>在读</div>
      <div>读过</div>
    </section>
    <section class="subject-intro">
      <h2>{{ bookInfo.title }}的内容简介</h2>
      <div>
        <p>
          {{ bookInfo.summary && bookInfo.summary.slice(0,72) + '...' }}
          <span @click="expand">(展开)</span>
        </p>
      </div>
    </section>
    <section class="tags">
      <ul>
        <li></li>
      </ul>
    </section>
  </div>
</template>
<script>
import utils from '../utils/api'
import Rater from './base/rater'
export default {
  name: 'BookDetail',
  components: {
    Rater
  },
  mounted () {
    const bookId = this.$route.params.bookId
    utils.GetBookInfoById(bookId).then(r => {
      this.bookInfo = r
    })
  },
  data () {
    return {
      bookInfo: {},
      expanding: false
    }
  },
  methods: {
    expand () {
      this.expanding = !this.expanding
    }
  }
}
</script>
<style lang="less">
.book-detail{
  position: relative;
  margin: 0 18px;
  h1{
      font-weight: lighter;
      font-size: 1.8rem;
      margin-bottom: 0;
  }
  .subject-info{
    position: relative;
    overflow: hidden;
    .left{
      margin-right: 100px;
      .rate{
        display: inline-block;
        position: relative;
        transform: scale(1.3, 1.3);
        transform-origin: top left;
        top: -5px;
        .score{
          color: #000
        }
      }
      .rating-cnt{
        margin-left: 30px;
        color: #aaa;
      }
      .meta {
        list-style: none;
        color: #494949;
        font-size: 0.9rem;
        line-height: 1.6rem;
        a{
          text-decoration: none;
          color: #42bd56;
        }
      }
    }
    .right{
      float: right;
      width: 100px;
      height: 142px;
      background-size: cover;
    }
  }
  .subject-mark{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    div{
      border: solid 1px #ffb712;
      color: #ffb712;
      border-radius: 5px;
      text-align: center;
      width: 31%;
      height: 30px;
      line-height: 30px;
    }
  }
  .subject-intro{
    h2{
      color: #aaa;
      font-weight: normal;
      font-size: 1rem;
    }
    p{
      color: #555;
      line-height: 1.3rem;
      span{
        float: right;
        position: relative;
        bottom: 0;
        color: #42bd56;
      }
    }
    .expanding{
      color: #555;
      float: right;
      position: relative;
    }
  }
  .tags{
    ul{
      padding: 0;
      list-style: none;
    }
  }
}
</style>
