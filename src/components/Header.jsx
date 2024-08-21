import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  
  return (
    <header className="d-flex justify-content-between align-items-center p-4 text-light bg-dark sticky-top">
      <Link to={"/"} className="fs-4">
        Context Store
      </Link>
      <Link className="fs-4 text-light">
        <FaShoppingCart />
        <span className="mx-2 fs-6 badge bg-danger">0</span>
      </Link>
    </header>
  );
};
