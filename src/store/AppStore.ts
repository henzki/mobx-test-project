import { makeAutoObservable } from "mobx";

class AppStore {
  data: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setData(value: string) {
    this.data = value;
  }
}

const appStore = new AppStore();
export default appStore;
