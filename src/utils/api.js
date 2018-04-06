import axios from 'axios'
const baseUrl = 'https://api.douban.com/v2/'
export default {
    /**
     * 根据标签获取图书列表
     * @param {标签} tag 
     * @param {获取条数} count 
     * @param {获取偏移位置} start 
     */
    GetBooksByTag (tag, count = 10, start = 0) {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + 'book/search', {
                params: {
                    tag: tag,
                    count: count,
                    start: start
                }
            }).then(r => resolve(r))
              .catch(e => console.error(e))
        })
    }
}