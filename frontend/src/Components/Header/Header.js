import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="header">
      <div className="logo">
        <h2>Blog Station</h2>
      </div>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" onClick={() => setTab("/")}>
              {tab === "/" ? <Home /> : <HomeOutlined />}
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/newpost" onClick={() => setTab("/newpost")}>
              {tab === "/newpost" ? <Add /> : <AddOutlined />}
              AddPost
            </Link>
          </li>
        </ul>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/search" onClick={() => setTab("/search")}>
              {tab === "/search" ? <Search /> : <SearchOutlined />}
              Search
            </Link>
          </li>
        </ul>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/account" onClick={() => setTab("/account")}>
              {tab === "/account" ? (
                <AccountCircle />
              ) : (
                <AccountCircleOutlined />
              )}
              Account
            </Link>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <ul className="social-media-list">
          <li className="social-media-list-item">
            <a href="https://github.com/Prakash-Patasani">
              <GitHubIcon />
            </a>
          </li>
        </ul>
        <ul className="social-media-list">
          <li className="social-media-list-item">
            <a href="https://www.linkedin.com/in/prakash-patasani-923473216/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
        <ul className="social-media-list">
          <li className="social-media-list-item">
            <a href="https://www.facebook.com/prakash.patasani.35">
              <FacebookIcon />
            </a>
          </li>
        </ul>
        <ul className="social-media-list">
          <li className="social-media-list-item">
            <a href="https://www.facebook.com/prakash.patasani.35">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
