import { request } from "./request";

export function getLoaddata() {
  return request({
    url: '/load',
  })
}
export class Loads {
  constructor(rlc) {
    this.rlc = rlc
  }
}