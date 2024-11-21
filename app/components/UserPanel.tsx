"use client";

import { formatDate } from "date-fns";

type Props = {
  user: {
    id: number;
    username: string;
    email: string;
    password: string;
    mobile: string | null;
    country: string | null;
    position: string | null;
    address: string | null;
    createdAt: Date;
  } | null;
};

type InformationFieldProps = {
  label: string;
  prop: string | null;
};

function InformationField({ label, prop }: InformationFieldProps) {
  return (
    <>
      <div className="w-[25%] text-slate-500 p-3 border-b-2">{label}</div>
      <div className="w-[70%] text-slate-500 p-3 flex justify-end border-b-2">
        {prop ? prop : "Unknown"}
      </div>
    </>
  );
}

export function UserPanel({ user }: Props) {
  return (
    <div className=" bg-white rounded-lg row-span-2 p-4">
      <div className="w-full">
        <div className="w-full flex flex-col items-center mt-10">
          <div className="w-32 h-32 bg-orange-400 flex justify-center items-center text-white text-7xl text-bold rounded-full">
            {user!.username.slice(0, 1)}
          </div>
          <div className="mt-3 text-lg">
            <span>{user!.username}</span>
          </div>
          <span className="text-sm text-slate-300">
            {formatDate(user!.createdAt, "MM/dd/yyyy")}
          </span>
        </div>
        <div className="w-full mt-5">
          <div className="w-full flex justify-between">
            <InformationField label="Email" prop={user!.email!} />
          </div>
          <div className="w-full flex justify-between">
            <InformationField label="Mobile" prop={user!.mobile} />
          </div>
          <div className="w-full flex justify-between">
            <InformationField label="Country" prop={user!.country} />
          </div>
          <div className="w-full flex justify-between">
            <InformationField label="Position" prop={user!.position} />
          </div>
          <div className="w-full flex justify-between">
            <InformationField label="Address" prop={user!.address} />
          </div>
        </div>
      </div>
    </div>
  );
}
