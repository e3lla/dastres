import React from "react";
import TopHeader from "./TopHeader";
import MainNav from "./MainNav";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="divoneandtwo fixed top-0 w-full z-50 font-shabnam text-[#757575]">
      <TopHeader />
      <Menu/>
      {/* پارت دوم */}
      <MainNav />
    </div>
  );
};

export default Header;