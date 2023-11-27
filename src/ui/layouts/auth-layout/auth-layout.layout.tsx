import { type FC } from 'react';

import type { IAuthLayoutProps } from './auth-layout.props';
import s from './auth-layout.module.scss';

export const AuthLayout: FC<IAuthLayoutProps> = props => {
  return (
    <main className={s.main}>
      <div className={s.contentContainer}>{props.children}</div>
    </main>
  );
};
