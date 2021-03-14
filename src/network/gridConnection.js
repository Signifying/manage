import { request } from "./request";

export function getGriddata() {
  return request({
    url: '/grid',
  })
}
export class Grids {
  constructor(pccs) {
    this.pccs = pccs
  }
}