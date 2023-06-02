import "./App.css";
import Login2 from "./components/login/Login2";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Login2 />
      </div>
      <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bg-white/10 bottom-0 backdrop-blur-lg"/>
      </div>
    </div>
  );
}

export default App;
