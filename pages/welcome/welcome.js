import { Page, suiLocalConfig, slutil, Dialog } from '../../common/index'

Page({
  date: {},
  onSlLoad() {
    console.log("page=====>Load");
    console.log("suiLocalConfig=====>",suiLocalConfig);
    console.log("slutil=====>", slutil);
    console.log("Dialog=====>", Dialog);
  },
  console(event) {
    console.log("event.detail=========", event.detail);
  }
})