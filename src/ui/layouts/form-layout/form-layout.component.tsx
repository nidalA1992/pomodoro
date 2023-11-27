import { type FC } from 'react';

import type { IFormLayoutProps } from './form-layout.props';
import s from './form-layout.module.scss';
import clsx from 'clsx';

export const FormLayout: FC<IFormLayoutProps> = props => {
  return (
    <form {...props} className={clsx(s.form, props.className)}>
      {props.children}
    </form>
  );
};
