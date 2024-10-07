import { ReactNode } from "react";
import { ToolBar } from "../components/ToolBar";
import { Header } from "../components/Header";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex ">
      <ToolBar />
      <div className="w-full flex justify-end">
        <div className="w-[85%]">
          <Header />
          <div className="w-full flex justify-center mt-24 mb-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
