import { type LiHTMLAttributes } from 'react';

import styles from './CountriesSkeleton.module.scss';

interface CountriesSkeletonProps {
  count?: number;
}

const SkeletonRow = ({ ...props }: LiHTMLAttributes<HTMLLIElement>) => (
  <li
    className={styles.skeleton}
    {...props}
  >
    <div className={styles.skeletonImage}></div>
    <div className={styles.skeletonText}></div>
    <div className={styles.skeletonText}></div>
    <div className={styles.skeletonText}></div>
    <div className={styles.skeletonText}></div>
  </li>
);

const CountriesSkeleton = ({ count = 1 }: CountriesSkeletonProps) => {
  const skeletons = Array.from(Array(count));

  return (
    <ul className={styles.column}>
      {count > 1 ? (
        skeletons.map((_, index) => <SkeletonRow key={index} />)
      ) : (
        <SkeletonRow />
      )}
    </ul>
  );
};

export default CountriesSkeleton;
