import { type FC } from 'react';

import type { IPrimaryButtonProps } from './primary-button.props';
import s from './primary-button.module.scss';
import { Button } from '../button';

export const PrimaryButton: FC<IPrimaryButtonProps> = props => {
  return (
    <Button className={s.button} {...props}>
      {props.children}
    </Button>
  );
};
