import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// import VideoApp from "./component/useImperativeHendel/VideoApp";
// import ButtonApp from "./component/button/ButtonApp";
// import ChatApp from "./component/useEffect/useEffectFakeChatRealTime/ChatApp";
// import UseRefCount from "./component/useRef/UseRefCount";
// import UseCallbackApp from "./component/useCallback/UseCallbackApp";
// import UseMemo from "./component/useMeno/UseMeno";
// import CountDown from "./component/useReducer/CountDown";
// import TodoAppResucer from "./component/useReducer/TodoAppResucer";
// import Main from "./component/useContext/Main";
// import AppTodo from "./component/useContext/todoContext/AppTodo";
// import TodoList from "./component/todoList/TodoList";
// import UseEffect from "./component/useEffect/useEffectWithEven/UseEffect";
// import Countdown from "./component/useEffect/useEffectWidthTime/Countdown";
// import Image from "./component/useEffect/useEffectWidthImage/Image";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoList></TodoList> */}

        <button
          onClick={() => setToggle(!toggle)}
          style={{
            margin: "20px",
          }}
        >
          toggle
        </button>
        {/* {toggle && <UseEffect></UseEffect>} */}

        {/* {toggle && <Countdown />} */}
        {/* {toggle && <Image></Image>} */}
        {/* {toggle && <ChatApp />} */}
        {/* {toggle && <UseRefCount></UseRefCount>} */}
        {/* {toggle && <UseMemo />} */}
        {/* {toggle && <UseCallbackApp />} */}
        {/* {toggle && <CountDown />} */}
        {/* {toggle && <TodoAppResucer />} */}

        {/* {toggle && <Main></Main>} */}
        {/* {toggle && <AppTodo></AppTodo>} */}
        {/* {toggle && <VideoApp />} */}
        {/* {toggle && <ButtonApp />} */}
      </header>
    </div>
  );
}

export default App;
