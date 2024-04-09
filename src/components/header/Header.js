import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="outer-container">
          <div className="my-logo">
            <Link href={"/"}>
              <Image
                src="https://static.nc-img.com/uxteam/lc.simple-pages/nclabs-logo-maker-2020/img/restaurant.891ff1df.svg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>
          <nav className="my-nav-container">
            <ul className="nav-list">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/todo"}>Todo</Link>
              </li>
              <li>
                <Link href={"/redux"}>Redux</Link>
              </li>
              <li>
                <Link href={"/tasks"}>Tasks</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
