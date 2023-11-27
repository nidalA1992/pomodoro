import { type FC } from 'react';

import type { ISecondaryButtonProps } from './secondary-button.props';
import s from './secondary-button.module.scss';
import { Button } from '../button';

export const SecondaryButton: FC<ISecondaryButtonProps> = props => {
  return (
    <Button className={s.button} {...props}>
      {props.children}
    </Button>
  );
};
