import { request } from "./request";

export function getEssdata() {
  return request({
    url: '/ess',
  })
}
export class Ess {
  constructor(ldc) {
    this.ldc = ldc
  }
}