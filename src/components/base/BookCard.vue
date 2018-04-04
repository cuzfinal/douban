<template>
  <div class="book-card">
    <section class="header">
        <h2>最受关注图书 | {{category}}</h2>
        <router-link to="/" class="more">更多</router-link>
    </section>
    <section class="content">
        <ul class="row items">
            <li class="item item_book" v-for="book in books" :key="book.id">
                <router-link :to="{name: 'BookDetail', params:{bookId: book.id}}">
                    <div class="item-poster" :style="`background-image: url(${book.cover})`"></div>
                    <span class="item-title">{{ book.title }}</span>
                    <div class="item-rating">
                        <rater :rate="book.stars"></rater>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
  </div>
</template>
<script>
import Rater from './Rater'
export default {
  name: 'BookCard',
  components: {
      Rater
  },
  props: {
    category: String,
    books: Array
  }
}
</script>
<style lang="less">
.book-card{
    padding: 10px 0 25px 0;
    ::-webkit-scrollbar{
        display: none;
    }
    *{
        text-decoration: none;
    }
    h2{
        font-size: 1.06rem;
        font-weight: normal;
        margin: -10px 20px;
    }
    .more{
        text-decoration: none;
        color: #42bd56;
        font-size: 0.9rem;
        margin-right: 20px;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content{
        width: 100%;
        margin: 15px 0 0 0;
    }
    row{
        border-bottom: 1px solid #f2f2f2;
        padding: 15px 0 43px 0;
    }
    .items{
        font-size: 0;
        white-space: nowrap;
        overflow-x: auto;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .item{
        display: inline-block;
        vertical-align: top;
        width: 100px;
        text-align: center;
        margin-left: .48rem;
        &>*{
            font-size: .94rem;
            white-space: center;
        }
        &:first-child{
            margin-left: 1.12rem;
        }
        &-poster{
            width: 100%;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            &::before{
                content: "";
                float: left;
                margin-top: 140%;
            }
        }
        &-title{
            display: block;
            margin-top: .6rem;
            line-height: .94rem;
            color:black;
        }
        &-rating{
            width: 100px;
        }
    }
    .title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>
