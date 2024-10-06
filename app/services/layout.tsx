import React from "react";
import { ToolBar } from "../components/ToolBar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex">
      <ToolBar />
      <div className="w-full ml-[300px]">{children}</div>
    </div>
  );
}
