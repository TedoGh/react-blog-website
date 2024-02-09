import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { linkData } from "./HeaderData";
import ContainerWrapper from "../../components/ContainerWrapper/ContainerWrapper";
import Button from "../../components/Button/Button";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

export default function Header() {
  const [isActive, SetIsActive] = useState<boolean>(false);
  const path = useLocation();

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActive]);

  useEffect(() => {
    SetIsActive(false);
  }, [path]);

  return (
    <header className="header">
      <ContainerWrapper>
        <div className="header-wrapper">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} />
            </Link>
          </div>
          <nav className="nav">
            <div className="hamburger" onClick={() => SetIsActive(!isActive)}>
              {isActive ? (
                <FaTimes color="#fff" size={20} />
              ) : (
                <FaBars color="#fff" size={20} />
              )}
            </div>
            <ul className={isActive ? "nav-list active" : "nav-list"}>
              {linkData.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link to={item.path} className="nav-link">
                      {item.linkTitle}
                    </Link>
                  </li>
                );
              })}
              <Button title="Subscribe" background="#fff" color="#1D2939" />
            </ul>
          </nav>
        </div>
      </ContainerWrapper>
    </header>
  );
}
