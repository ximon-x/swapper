"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import { FaFaucet } from "react-icons/fa";
import { PiHandCoins } from "react-icons/pi";
import { IoMdSwap } from "react-icons/io";
import SwapperLogo from "../ui/swapperLogo";

function Header() {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side z-10">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <li
                className="text-xl"
                onClick={() => {
                  router.push("/create-offer");
                }}
              >
                <a>
                  <IoMdSwap
                    className="stroke-current h-8 w-8 mr-2 border-none"
                    strokeWidth="0.7"
                  />
                  Create an Offer
                </a>
              </li>
              <li
                className="text-xl"
                onClick={() => {
                  router.push("/fulfill-offer");
                }}
              >
                <a>
                  <PiHandCoins
                    className="stroke-current h-8 w-8 mr-2 border-none"
                    strokeWidth="0.7"
                  />
                  Fulfill an Offer
                </a>
              </li>
              <li
                className="text-xl"
                onClick={() => {
                  router.push("/faucet");
                }}
              >
                <a>
                  <FaFaucet
                    className=" h-8 w-8 mr-2 border-none"
                    strokeWidth="0.7"
                  />
                  Get Free Tokens!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <SwapperLogo />
      </div>
      <div className="flex-none">
        <ConnectButton />
        <ul className="menu menu-horizontal bg-base-200 rounded-box ml-4">
          <li
            onClick={() => {
              router.push("/");
            }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>
          <li
            onClick={() => {
              router.push("/about");
            }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </li>
          <li
            onClick={() => {
              router.push("/swaps");
            }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
