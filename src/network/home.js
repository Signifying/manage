import {request} from "./request";

export function getHomedata() {
  return request({
    url: '/energy',
  })
}
export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
