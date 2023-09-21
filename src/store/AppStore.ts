import { makeAutoObservable } from "mobx";

export class AppStore {
  data: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setData(value: string) {
    this.data = value;
  }
}