import {
  Container,
  ProfileCard,
  ProfileLinkButton,
  // ProfileForm,
  ProfileSignoutButton,
} from '@/components/shared';
import { getUserSession } from '@/lib/get-user-session';
import { prisma } from '@/prisma/prisma-client';
import { redirect } from 'next/navigation';
// import { getUserSession } from '@/lib/get-user-session';
// import { prisma } from '@/prisma/prisma-client';
// import { redirect } from 'next/navigation';

export default async function ProfilePage() {
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

  return (
    <Container className='py-5 px-2 md:p-10'>
      <div className='flex flex-col items-center gap-5 w-full'>
        <ProfileCard data={user} />
        <ProfileLinkButton route='/profile/orders' text='Мои заказы' />
        <ProfileLinkButton route='/profile/edit' text='Редактировать профиль' />
        <ProfileSignoutButton />
      </div>
    </Container>
  );
}
