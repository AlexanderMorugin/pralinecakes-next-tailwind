import { redirect } from 'next/navigation';

import { ProfileOrders } from '@/components/shared';
import { getUserSession } from '@/lib/get-user-session';
import { prisma } from '@/prisma/prisma-client';

export default async function ProfileOrdersPage() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  });

  if (!user) {
    return redirect('/not-auth');
  }

  return <ProfileOrders data={user} />;
}
