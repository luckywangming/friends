const mock = require("mockjs")

function imgData(path, n, format) {
    let arr = []
    for (let i = 1; i < n + 1; i++) {
        arr.push(path + i + format)
    }
    return arr
}
const api_index = mock.mock('http://index-mock', {
    'list|8': [{
        'id|+1': 1,
        'name': '@cname',
        'img|1': imgData('../static/images/index-photo', 8, '.jpg'),
        'age|16-30': 1,
        'height|152-175': 1,
        'hot|100-10000': 1,
        'tj|1-9': true
    }]
})
export {
    api_index
}