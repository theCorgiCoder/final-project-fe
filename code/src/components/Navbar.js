import React from "react";
import { useSelector } from "react-redux";

import UserNav from "./NavBar/UserNav"
import GuestNav from "./NavBar/GuestNav"


const Navbar = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  if (accessToken) {
    return (
        <UserNav />
    );
  } else {
    return (
      <GuestNav />
    );
  }
};

export default Navbar;

