import { type FC } from 'react';

import type { IErrorPageProps } from './error-page.props';
import s from './error-page.module.scss';
import { Link } from 'react-router-dom';

export const ErrorPage: FC<IErrorPageProps> = props => {
  return (
    <main className={s.wrapper}>
      <p className={s.text}>Ууупс...</p>
      <div className={s.img}>
        <div>4</div>
        <img src='/images/tomato-img.png' alt='Логотип pomodoro_box' />
        <div>4</div>
      </div>
      <Link to='/'>
        <p className={s.linkText}>
          на <span>главную</span>
        </p>
      </Link>
    </main>
  );
};
