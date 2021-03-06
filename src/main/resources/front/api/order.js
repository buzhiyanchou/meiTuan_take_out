//提交订单
function  addOrderApi(data){
    return $axios({
        'url': '/order/submit',
        'method': 'post',
        data
      })
}

//查询所有订单
function orderListApi() {
  return $axios({
    'url': '/order/list',
    'method': 'get',
  })
}

//分页查询订单
function orderPagingApi(data) {
  return $axios({
      'url': '/order/page',
      'method': 'get',
      params:{...data}
  })
}

//再来一单
function orderAgainApi(data) {
  return $axios({
      'url': '/order/again',
      'method': 'post',
      data
  })
}
// 评价
function evaluateOrder(data) {
  return $axios({
    'url': '/order/evaluateOrder',
    'method': 'post',
    data
  })
}
// 查看评价
function selectEvaluateByOrderId(data) {
  return $axios({
    'url': '/order/selectEvaluateByOrderId',
    'method': 'post',
    data
  })
}
