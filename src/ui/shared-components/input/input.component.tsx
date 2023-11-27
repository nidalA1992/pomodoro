import { type FC } from 'react';

import type { IInputProps } from './input.props';
import s from './input.module.scss';

export const Input: FC<IInputProps> = props => {
  return <input className={s.input} {...props} />;
};
