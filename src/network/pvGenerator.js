import { request } from "./request";

export function getpvGeneratordata() {
  return request({
    url: '/guangfu',
  })
}
export class Guangfu {
  constructor(nbqs) {
    this.nbqs = nbqs
  }
}