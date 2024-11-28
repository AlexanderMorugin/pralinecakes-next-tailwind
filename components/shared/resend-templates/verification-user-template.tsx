import { type FC } from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: FC<Props> = ({ code }) => (
  <div>
    <p>
      Код подтверждения: <h2>{code}</h2>
    </p>

    <p>
      Подтвердить регистрацию. Перейдите по{' '}
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
        этой ссылке
      </a>
      .
    </p>
  </div>
);
