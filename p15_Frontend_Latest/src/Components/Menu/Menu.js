import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, Togg } from "../Redux/slice";
import { useNavigate } from "react-router-dom";
import CustomerMenu from "./CustomerMenu";
import CompanyMenu from "./CompanyMenu";
import AdminMenu from "./AdminMenu";

const Menu = () => {
  const { data, toggle } = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout({}));
    dispatch(Togg(false));
    navigate("/");
  };

  const role = data?.role_id?.role_id ?? data?.user_id?.role_id?.role_id;

  return (
    // className="dropdown-menu show p-2 shadow rounded"
    <>
      {role === 1 && <AdminMenu />}
      {role === 2 && <CompanyMenu />}
      {role === 3 && <CustomerMenu />}
    </>
  );
};

export default Menu;
