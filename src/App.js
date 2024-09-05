import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavBar, { SideNavBarItem } from "./components/SideNavBar";
import { GrHomeRounded } from "react-icons/gr";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";

import Home from "./pages/Home";
import MyClass from "./pages/MyClass";
import TakeTests from "./pages/TakeTests";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import User from "./pages/User";
function App() {
  return (
    <Router>
      <div className="flex">
        <SideNavBar>
          <SideNavBarItem
            icon={<GrHomeRounded className="text-grey" size={21} />}
            text="Home"
            route="/"
          />
          <SideNavBarItem
            icon={<RiGraduationCapFill className="text-grey" size={21} />}
            text="My Class"
            route="/myclass"
          />
          <SideNavBarItem
            icon={<MdOutlineEventNote className="text-grey" size={24} />}
            text="Take Tests"
            route="/taketests"
          />
        </SideNavBar>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myclass" element={<MyClass />} />
            <Route path="/taketests" element={<TakeTests />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/userprofile" element={<User />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
