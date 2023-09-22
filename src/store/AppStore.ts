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

// export class AppStore {
//   customerData = {
//     name: "",
//     email: "",
//     };

//   productData = {
//     id: "",
//     name: "",
//     price: 0,
//   };

//   constructor() {
//     makeObservable(this, {
//       customerData: observable,
//       productData: observable,
//       setCustomerData: action,
//       setProductData: action,
//     });
//   }

//   setCustomerData(data: CustomerData) {
//     this.customerData = data;
//   }

//   setProductData(data: ProductData) {
//     this.productData = data;
//   }
// }