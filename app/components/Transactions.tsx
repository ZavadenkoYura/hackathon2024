"use client";

type Props = {
  transactions: {
    id: number;
    createdAt: Date;
    userId: number;
    amount: number;
    date: Date;
    cardId: number;
    category: string;
    metadata: string;
  }[];
};

// Create a batch of banch of transactions for a specific card and pull them in

export function Transactions({ transactions }: Props) {
  return (
    <div>
      <div className="w-full font-bold">Recent Transactions</div>
      <div className="w-full h-[200px] mt-3 overflow-y-auto">
        {transactions.length ? (
          transactions.map((transaction, idx) => (
            <div
              className="w-full h-[75px] flex justify-between p-3 mt-2 border-b-2 border-gray-200"
              key={idx}
            >
              <div className="w-[15%] h-full bg-slate-300"></div>
              <div className="w-[83%] h-full flex flex-col justify-between text-sm text-slate-500">
                <div className="w-full flex justify-between">
                  <div>
                    <span className="font-bold">Amount</span>:{" "}
                    {transaction.amount}
                  </div>
                </div>
                <div>
                  <span className="font-bold">Expiry:</span>{" "}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center text-slate-400">
            <span>No Transactions</span>
          </div>
        )}
      </div>
    </div>
  );
}
