"use client";

import Image from "next/image";
import logo from "@/src/app/img/logo.svg";
import { signOut } from "next-auth/react";

export default function HeaderInterno() {
  return (
    <header className="bg-colorPrimary text-white flex items-center justify-between w-full px-4 sm:px-8 py-4">
      {/* Logo */}
      

      {/* Dropdown Menu */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        {/* Dropdown Items */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white text-colorTextDark rounded-box z-[1] mt-3 w-40 p-2 shadow"
        >
          <li>
            <a onClick={() => signOut()}>Logout</a>
          </li>
          <li>
            <a href="#">Inserir outro site</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
