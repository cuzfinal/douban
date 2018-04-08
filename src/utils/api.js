const jsonp = require('jsonp')
const baseUrl = 'https://api.douban.com/v2/'
export default {
    /**
     * 根据标签获取图书列表
     * @param {String}  tag     类型
     * @param {Number}  count   条数
     * @param {Number}  start   偏移位置
     */
    GetBooksByTag (tag, count = 10, start = 0) {
        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}book/search?tag=${tag}&count=${count}&start=${start}`, null, (err, data) => {
                if (err) {
                    console.error(err)
                } else {
                    resolve(data)
                }
            })
        })
    },
    /**
     * 
     * @param {String} bookId 图书Id
     */
    GetBookInfoById (bookId) {
        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}book/${bookId}`, null, (err, data) => {
                if (err) {
                    console.error(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}