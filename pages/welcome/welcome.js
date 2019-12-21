import { Page, slutil } from '../../@op-wechat/index.js'

Page({
  date: {},
  onSlLoad() {
    console.log("page=====>Load");
  },
  console(event) {
    console.log("event.detail=========", event.detail);
  }
})