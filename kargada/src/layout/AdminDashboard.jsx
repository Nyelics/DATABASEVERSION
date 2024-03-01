import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./dashboard.css";

const AdminDashboard = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSideMenuItemClick = (e) => {
    const sideLinks = document.querySelectorAll(
      ".sidebar .side-menu li a:not(.logout)"
    );
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  };

  const handleMenuBarClick = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar.classList.toggle("close");
  };

  const handleSearchBtnClick = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setShowSearchForm((show) => !show);
    }
  };

  const handleWindowResize = () => {
    const sideBar = document.querySelector(".sidebar");
    const searchBtnIcon = document.querySelector(
      ".content nav form .form-input button .bx"
    );
    const searchForm = document.querySelector(".content nav form");
    if (window.innerWidth < 768) {
      sideBar.classList.add("close");
    } else {
      sideBar.classList.remove("close");
    }
    if (window.innerWidth > 576) {
      searchBtnIcon.classList.replace("bx-x", "bx-search");
      searchForm.classList.remove("show");
    }
  };

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode state
  };

  useEffect(() => {
    const sideLinks = document.querySelectorAll(
      ".sidebar .side-menu li a:not(.logout)"
    );
    sideLinks.forEach((item) => {
      item.addEventListener("click", handleSideMenuItemClick);
    });

    const menuBar = document.querySelector(".content nav .bx.bx-menu");
    menuBar.addEventListener("click", handleMenuBarClick);

    const searchBtn = document.querySelector(
      ".content nav form .form-input button"
    );
    searchBtn.addEventListener("click", handleSearchBtnClick);

    window.addEventListener("resize", handleWindowResize);

    const toggler = document.getElementById("theme-toggle");
    toggler.addEventListener("change", handleThemeToggle);

    return () => {
      sideLinks.forEach((item) => {
        item.removeEventListener("click", handleSideMenuItemClick);
      });
      menuBar.removeEventListener("click", handleMenuBarClick);
      searchBtn.removeEventListener("click", handleSearchBtnClick);
      window.removeEventListener("resize", handleWindowResize);
      toggler.removeEventListener("change", handleThemeToggle);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <div className="sidebar">
        <Link to="admin/dashboard" className="logo">
          <img className="kargada" src="/kargada.png" alt="Company Logo" />
          <div className="logo-name">
            <span>Kar</span>gada
          </div>
        </Link>
        <ul className="side-menu">
          <li>
            <Link to="admin/dashboard">
              <i className="bx bxs-dashboard"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="admin/inventory">
              <i className="bx bx-store-alt"></i>
              Inventory
            </Link>
          </li>
          <li className="active">
            <Link to="admin/messages">
              <i className="bx bx-message"></i>
              Messages
            </Link>
          </li>
          <li>
            <Link to="admin/updates">
              <i className="bx bx-calendar"></i>
              Updates
            </Link>
          </li>
          <li>
            <Link to="admin/setting">
              <i className="bx bx-cog"></i>
              Setting
            </Link>
          </li>
          <li>
            <Link to="admin/account">
              <i className="bx bx-group"></i>
              Account
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="/" className="logout">
              <i className="bx bx-log-out-circle"></i>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <nav>
          <i className="bx bx-menu"></i>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button className="search-btn" type="submit">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="theme-toggle" hidden />
          <label htmlFor="theme-toggle" className="theme-toggle"></label>
          <a href="#" className="notif">
            <i className="bx bx-bell"></i>
            <span className="count">12</span>
          </a>
          <a href="#" className="profile">
            <img src="images/logo.png" />
          </a>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
