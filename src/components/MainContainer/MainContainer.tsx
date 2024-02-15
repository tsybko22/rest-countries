import clsx from 'clsx';

import { type ReactNode } from 'react';

import styles from './MainContainer.module.scss';

interface MainContainerProps {
  children: ReactNode;
  className: string;
}

const MainContainer = ({ children, className }: MainContainerProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default MainContainer;
