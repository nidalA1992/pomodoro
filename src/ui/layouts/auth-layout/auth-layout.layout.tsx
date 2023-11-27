import { type FC } from 'react';

import type { IAuthLayoutProps } from './auth-layout.props';
import s from './auth-layout.module.scss';

export const AuthLayout: FC<IAuthLayoutProps> = props => {
  return (
    <main className={s.main}>
      <a href='/' className={s.logo}>
        <img
          className={s.logoImg}
          src='/images/tomato-img.png'
          alt='Логотип pomodoro_box'
        />
        <span className={s.logoText}>pomodoro_box</span>
      </a>
      <div className={s.contentContainer}>{props.children}</div>
      <p className={s.copy}>Skillbox® | {new Date().getUTCFullYear()}</p>
    </main>
  );
};
