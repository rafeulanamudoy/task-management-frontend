import storage from "redux-persist/es/storage/session";
import { persistReducer, PersistConfig } from "redux-persist";

import { RootState, rootReducer } from "./rootReducer";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["auth"],
  // Add any other options you need
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
