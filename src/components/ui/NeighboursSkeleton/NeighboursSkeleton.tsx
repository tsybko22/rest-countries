import { type LiHTMLAttributes } from 'react';

import styles from './NeighboursSkeleton.module.scss';

interface NeighboursSkeletonProps {
  count?: number;
}

const SkeletonRow = ({ ...props }: LiHTMLAttributes<HTMLLIElement>) => (
  <li {...props}>
    <div className={styles.skeletonImage}></div>
    <div className={styles.skeletonText}></div>
  </li>
);

const NeighboursSkeleton = ({ count = 1 }: NeighboursSkeletonProps) => {
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

export default NeighboursSkeleton;
