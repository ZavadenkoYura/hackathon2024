import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaDollarSign,
  FaMoneyBillWave,
  FaChartLine,
  FaHandsHelping,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { PiHandDepositBold } from "react-icons/pi";

type Props = {};

const services = [
  {
    name: "Account Overview",
    href: "/services/account",
    icon: <FaUserCircle />,
  },
  {
    name: "Transfer Funds",
    href: "/services/transfer",
    icon: <FaMoneyBillWave />,
  },
  { name: "Pay Bills", href: "/services/bills", icon: <FaDollarSign /> },
  { name: "Deposits", href: "/services/deposits", icon: <PiHandDepositBold /> },
  { name: "Investment", href: "/services/investment", icon: <FaChartLine /> },
  { name: "Loan Services", href: "/services/loans", icon: <FaHandsHelping /> },
  { name: "Customer Support", href: "/services/support", icon: <FaHome /> },
];

export function ToolBar({}: Props) {
  return (
    <div className="bg-blue-600 h-screen w-[250px] shadow-lg fixed">
      <div className="h-[7%] p-4 text-white font-bold text-xl">
        Banking Services
      </div>
      <div className="pt-5 ml-3 flex flex-col justify-between h-[93%]">
        <ul>
          {services.map((service) => (
            <li key={service.name} className="ml-3">
              <Link href={service.href}>
                <p className="flex items-center text-white hover:bg-blue-500 p-2 rounded transition duration-300">
                  <span className="mr-3 text-xl">{service.icon}</span>
                  {service.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <button className="w-fit flex items-center py-3 px-4 mb-5 ml-3 text-white bg-red-400 rounded-lg hover:opacity-85 transition-opacity">
          <FaSignOutAlt className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
}
