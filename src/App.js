import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {NAvbar,Footer,Sidebar,ThemeSettings} from './components'


const App = () => {
  const activeMenu = false;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position='"Top'>
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-200 text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-black bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-black">Sidebar</div>
          )}
          <div
            className={`dark:bg-white bg-white min-h-screen md:ml-72 w-full ${
              activeMenu ? " md:ml-72 " : "flex-2 "
            }`}
          >
            <div className="fixed md:static bg-gray-200  navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/*Dashboard*/}
              <Route path="/" element="ECommerce"/>
              <Route path="/ecommerce" element="ECommerce"/>
               {/*Pages*/}
               <Route path="/orders" element="Orders"/>
               <Route path="/employee" element="Employees"/>
               <Route path="/customers" element="Customer"/>
               {/*Apps*/}
              <Route path="/kanban" element="Kanban"/>
              <Route path="/editor" element="Editor"/>
              <Route path="/calender" element="Calender"/>
              <Route path="/color-picker" element="ColorPicker"/>
              {/*Charts*/}
              <Route path="/line" element="Line"/>
              <Route path="/area" element="Area"/>
              <Route path="/bar" element="Bar"/>
              <Route path="/financial" element="Financial"/>
              <Route path="/color-mapping" element="ColorMapping"/>
              <Route path="/pyramid" element="Pyramid"/>
              <Route path="/stacked" element="Stacked"/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
