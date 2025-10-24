import { RefObject, useEffect, useState } from 'react';

import styles from './ExpandableText.module.css';

export const useClientHeight = (refContainer: RefObject<HTMLDivElement | null>, defaultFullHeight: number) => {
  const [fullHeight, setFullHeight] = useState(defaultFullHeight);

  useEffect(() => {
    const element = refContainer.current?.querySelector('.' + styles.contentMeasure);

    if (!element) {
      return;
    }

    const height = element.clientHeight;

    setFullHeight(height);
  }, [refContainer, setFullHeight]);

  return fullHeight;
};
