const mock = require("mockjs")

function imgData(path, n, format) {
  let arr = []
  for (let i = 1; i < n + 1; i++) {
    arr.push(path + i + format)
  }
  return arr
}
const index_list = mock.mock('http://index-mock', {
  'list|8': [{
    'id|+1': 1,
    'name': '@cname',
    'img|1': imgData('static/images/index-photo', 8, '.jpg'),
    'age|16-30': 1,
    'height|152-175': 1,
    'hot|100-10000': 1,
    'tj|1-7': true
  }]
})
const girl_list = mock.mock('http://girl-list-mock', {
  'list|6': [{
    'id|+1': 1,
    'name': '@cname',
    'img|1': imgData('static/images/index-photo', 6, '.jpg'),
    'age|16-30': 1,
    'height|152-175': 1,
    'tj|1-4': true,
    'hot|100-10000': 1,
    'work': '@ctitle',
    'des': '@csentence(20,40)',
    'dz|500-1000': 1,
    'hua|100-1000': 1
  }]
})
const boy_list = mock.mock('http://boy-list-mock', {
  'list|6': [{
    'id|+1': 1,
    'name': '@cname',
    'img|1': imgData('static/images/index-boy-photo', 4, '.jpg'),
    'age|16-30': 1,
    'height|152-175': 1,
    'tj|1-4': true,
    'hot|100-10000': 1,
    'work': '@ctitle',
    'des': '@csentence(20,40)',
    'dz|500-1000': 1,
    'hua|100-1000': 1
  }]
})
const detail = mock.mock('http://detail-mock', {
  'list': [{
    'id|+1': 1,
    'name': '@cname',
    'img|1': imgData('static/images/index-photo', 6, '.jpg'),
    'age|16-30': 1,
    'height|152-175': 1,
    'hot|100-10000': 1,
    'xuanyan': '@csentence(40,80)',
    'dz|500-1000': 1,
    'hua|100-1000': 1,
    'img_list|2-4': imgData('static/images/index-boy-photo', 4, '.jpg'),
    'cantact': {
      'QQ': '@integer(10000000,1000000000)',
      'phone': '@integer(10000000,1000000000)',
      'wechat': '@name'
    },
    'marry|1': false,
    'xingzuo|1': ["摩羯座", "双鱼座", "处女座", "狮子座"],
    'weight': '@integer(40,60)',
    'addr': '@city',
    'another_info': ["本科", "大长腿", "肤白", "教师", "有宝马"],
    'gift|2-4': imgData('static/images/index-boy-photo', 4, '.jpg')
  }]
})
export {
  index_list,
  girl_list,
  boy_list,
  detail
}