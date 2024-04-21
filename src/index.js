import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') 
  );

import store  from "./redux/store";

const App = () => {
 const [myCount, setMyCount] = useState(store.getState().addSubReducer.count)

  useEffect(()=> {
    const unsubscribe = store.subscribe(()=> {
      const {count} = store.getState().addSubReducer

      console.log(count,'count')
      setMyCount(count)
    })
    return ()=> {
      unsubscribe()
    }
  },[])
 
    return <div >
      <div>
        {store.getState().addSubReducer.count}
      </div>

      <div>
        <button onClick={()=> {
          store.dispatch({type:'add'})
        }}  > + </button>
      </div>
      <button onClick={()=> { store.dispatch({type:'sub'}) }} > - </button>

    </div>
}


root.render(<App  />)