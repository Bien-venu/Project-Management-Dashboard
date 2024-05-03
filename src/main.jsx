import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Chart from "./components/Chart.jsx";
import { DataProvider } from "./context/AppContext.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider>
        <div className="flex">
          <NavBar />
          <App />
          <Chart />
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);
