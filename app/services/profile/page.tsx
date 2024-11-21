import { getServerSessionAuth } from "@/app/api/auth/[...nextauth]/route";
import { PaymentMethods } from "@/app/components/PaymentMethods";
import { Transactions } from "@/app/components/Transactions";
import { UserPanel } from "@/app/components/UserPanel";
import prisma from "@/lib/prisma";

export default async function Profile() {
  const session = await getServerSessionAuth();

  const user = await prisma.account.findUnique({
    where: { id: session?.user!.id },
  });

  const cards = await prisma.paymentCard.findMany({
    where: { userId: session?.user!.id },
  });

  const transactions = await prisma.transaction.findMany({
    where: { userId: session?.user!.id },
  });

  return (
    <div className="w-full">
      <div className="w-[90%] m-auto grid lg:grid-cols-2 md:grid-cols-2 gap-2">
        <UserPanel user={user} />
        <div className="h-80 bg-white rounded-lg p-4">
          <PaymentMethods cards={cards} />
        </div>
        <div className="h-80 bg-white rounded-lg p-4">
          <Transactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
