"use client";

import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaDollarSign,
  FaMoneyBillWave,
  FaChartLine,
  FaHandsHelping,
  FaSignOutAlt,
  FaCoins,
} from "react-icons/fa";
import { PiHandDepositBold } from "react-icons/pi";
import { signOut } from "next-auth/react";

type Props = {};

const services = [
  {
    name: "Transfer Funds",
    href: "/services/transfer",
    icon: <FaMoneyBillWave />,
  },
  { name: "Pay Bills", href: "/services/bills", icon: <FaDollarSign /> },
  { name: "Deposits", href: "/services/deposits", icon: <PiHandDepositBold /> },
  { name: "Investment", href: "/services/investment", icon: <FaChartLine /> },
  { name: "Loans", href: "/services/loans", icon: <FaHandsHelping /> },
  {
    name: "Buy coins",
    href: "/services/cons",
    icon: <FaCoins />,
  },
  { name: "Customer Support", href: "/services/support", icon: <FaHome /> },
];

export function ToolBar({}: Props) {
  return (
    <div className="bg-[#1d2338] h-screen min-w-[15%] shadow-lg fixed z-30">
      <div className="h-[7%] p-5 ml-3">
        <span className="text-white font-bold text-xl">Bankly</span>
      </div>
      <div className="pt-5 ml-3 flex flex-col justify-between h-[93%]">
        <ul>
          {services.map((service) => (
            <li key={service.name} className="ml-3">
              <Link href={service.href}>
                <span className="flex items-center text-white hover:bg-[#2e354f] p-2 rounded transition duration-300">
                  <span className="mr-3 text-xl">{service.icon}</span>
                  {service.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="w-fit flex items-center py-3 px-4 mb-5 ml-3 text-white  hover:opacity-85 transition-opacity"
          onClick={async () => await signOut()}
        >
          <FaSignOutAlt className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
}
