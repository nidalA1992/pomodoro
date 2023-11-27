import { type FC } from 'react';

import type { IButtonProps } from './button.props';
import s from './button.module.scss';
import clsx from 'clsx';

export const Button: FC<IButtonProps> = props => {
  return (
    <button {...props} className={clsx(s.button, props.className)}>
      {props.children}
    </button>
  );
};
