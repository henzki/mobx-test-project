import React, { createContext, ReactNode, useContext } from "react";
import { AppStore } from "./AppStore";

type AppStoreContextType = {
  store: AppStore;
};

const AppStoreContext = createContext<AppStoreContextType | undefined>(
  undefined
);

export const AppStoreProvider: React.FC<{
  store: AppStore;
  children: ReactNode;
}> = ({ store, children }) => {
  return (
    <AppStoreContext.Provider value={{ store }}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = (): AppStore => {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error("useAppStore() pitää kutsua AppStoreProviderin sisällä.");
  }
  return context.store;
};
