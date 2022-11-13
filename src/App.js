import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import GlobalContextProvider from "./components/pages/GlobalContext";
import Myroutes from "./Myroutes";
import { myStore, ourPersistor } from "./reducer/myStore"

function App() {


  return (
    <>
      {/* <GlobalContextProvider> */}

      <Provider store={myStore}>
        <PersistGate persistor={ourPersistor}>
          <Myroutes />
        </PersistGate>
      </Provider>

      {/* </GlobalContextProvider> */}
    </>
  );
}

export default App;
