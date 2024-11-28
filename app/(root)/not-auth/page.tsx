import { InfoBlock } from '@/components/shared';

export default function UnauthorizedPage() {
  return (
    <div className='flex flex-col items-center justify-center mt-40 px-8'>
      <InfoBlock
        title='Доступ запрещен'
        text='Данную страницу могут просматривать только авторизованные пользователи'
      />
    </div>
  );
}
