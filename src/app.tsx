import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./components/Header";

declare global {
  interface Window {
    electron: any;
  }
}

const App = () => (
  <div className="h-screen flex flex-col font-[roboto] font-bold bg-black dark:bg-main-light text-white">
    <Header />
    <h1 className="flex flex-row flex-1 w-full overflow-hidden justify-center items-center">
      {window.electron.ipcRenderer.title}
    </h1>
  </div>
);

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<App />);
}

render();
