import React, { useState } from "react";
import Average from "./Average";
import Average_useCallback from "./Average_useCallback";
import Average_useMemo from "./Average_useMemo";

import Counter_useReducer from "./Counter_useReducer";
import Info from "./Info";
import Info_useReducer from "./Info_useReducer";

const App = () => {
  //  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />} */}
      {/* <Counter_useReducer /> */}
      {/* <Info_useReducer /> */}
      {/* <Average /> */}
      {/* <Average_useMemo /> */}
      <Average_useCallback />
    </div>
  );
};

export default App;
