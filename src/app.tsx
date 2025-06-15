import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Upload } from "lucide-react/dist/lucide-react";
import UploadField from "./components/upload";

declare global {
  interface Window {
    electron: any;
  }
}

const App = () => (
  <div className="w-screen h-screen overflow-hidden flex flex-col font-[roboto] font-bold bg-zinc-800 dark:bg-main-light text-white">
    <Header />
    <div className="flex flex-col h-ful w-full   justify-center items-center  p-4">
      <h1 className="text-3xl mt-4 font-bold">Welcome to {window.electron.ipcRenderer.title}</h1>
      <UploadField />
    </div>
  </div>
);

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<App />);
}

render();
