import { makeAutoObservable } from "mobx";

export class AppStore {
    customerData: CustomerData = {
      name: "",
      email: "",
    };
  
    productData: ProductData = {
      id: "",
      name: "",
      price: 0,
    };
  
    constructor() {
      makeAutoObservable(this);
    }
  
    setCustomerData(data: CustomerData) {
      this.customerData = data;
    }
  
    setProductData(data: ProductData) {
      this.productData = data;
    }
  }