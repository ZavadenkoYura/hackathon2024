"use client";

import { formatDate } from "date-fns";

type Props = {
  cards: {
    id: number;
    createdAt: Date;
    cardNumber: string;
    expirationDate: Date;
    cvv: string;
    cardType: string;
    userId: number;
  }[];
};

export async function PaymentMethods({ cards }: Props) {
  return (
    <div>
      <div className="w-full font-bold">Payment methods</div>
      <div className="w-full h-[200px] mt-3 overflow-y-auto">
        {cards.length ? (
          cards.map((card, idx) => (
            <div
              className="w-full h-[75px] flex justify-between p-3 mt-2 border-b-2 border-gray-200"
              key={idx}
            >
              <div className="w-[15%] h-full bg-slate-300"></div>
              <div className="w-[83%] h-full flex flex-col justify-between text-sm text-slate-500">
                <div className="w-full flex justify-between">
                  <div>
                    <span className="font-bold">{card.cardType}</span>:{" "}
                    {card.cardNumber}
                  </div>
                  <div>
                    <span className="text-slate-300">
                      {formatDate(card.createdAt, "MM/dd/yyyy")}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-bold">Expiry:</span>{" "}
                  {formatDate(card.expirationDate, "MM/dd/yyyy")}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center text-slate-400">
            <span>No Payment Methods</span>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center mt-1">
        <button className="w-full bg-violet-500 p-3 text-white rounded-lg hover:opacity-85 transition-all">
          Add payment method
        </button>
      </div>
    </div>
  );
}
