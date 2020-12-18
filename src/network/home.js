import { request } from "./request";

export function getHomedata() {
  return request({
    url: '/energy',
  })
}
export class Powers {
  constructor(pvs, bty, wp, pv, all, square) {
    this.pvs = pvs
    this.bty = bty
    this.wp = wp
    this.pv = pv
    this.all = all
    this.square = square
  }
}