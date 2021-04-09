// import request from '@/http/index'
import request from '@/utils/request'

// 投被保人关系分布
export function insureUqe(params) {
  return request({
    url: '/yxhb/cshmb/insureUqe',
    method: 'get',
    params: params,
  })
}


// //保单量, 单/多人保情况
// export function insureCnt(params) {
//     return request({
//       url: '/yxhb/cshmb/insureCnt',
//       method: 'get',
//       params: params,
//     })
//   }

//   //保费
//   export function insureAmt(params) {
//     return request({
//       url: '/yxhb/cshmb/insureAmt',
//       method: 'get',
//       params: params,
//     })
//   }

//     //单量
//     export function userlist(params) {
//       return request({
//         url: '/yxhb/cshmb/insureUqe',
//         method: 'get',
//         params: params,
//       })
//     }
  

//   //经济佣金
//  export function insureBrokerageAmt(params) {
//     return request({
//       url: '/yxhb/cshmb/insureBrokerageAmt',
//       method: 'get',
//       params: params,
//     })
//   }

//   //总客户数
//   export function insureUqe(params) {
//     return request({
//       url: '/yxhb/cshmb/insureUqe',
//       method: 'get',
//       params: params,
//     })
//   }

// //退款金额
// export function insureRefundAmt(params) {
//     return request({
//       url: '/yxhb/cshmb/insureRefundAmt',
//       method: 'get',
//       params: params,
//     })
//   }

// //退款率
// export function insureRefundRate(params) {
//     return request({
//       url: '/yxhb/cshmb/insureRefundRate',
//       method: 'get',
//       params: params,
//     })
// }

// //单量、保单、退款率
// export function insureCntAmtRefundRate(params) {
//     return request({
//       url: '/yxhb/cshmb/insureCntAmtRefundRate',
//       method: 'get',
//       params: params,
//     })
// }

// //被保人最小最大年龄
// export function insureMinMaxUser(params) {
//     return request({
//       url: '/yxhb/cshmb/insureMinMaxUser',
//       method: 'get',
//       params: params,
//     })
// }

// //两种保费对比
// export function insureAmtTypeCompare(params) {
//     return request({
//         url: '/yxhb/cshmb/insureAmtTypeCompare',
//         method: 'get',
//         params: params,
//     })
// }

// //蚌埠海南保费对比
// export function insureAmtCompare(params) {
//     return request({
//         url: '/yxhb/cshmb/insureAmtCompare',
//         method: 'get',
//         params: params,
//     })
// }



