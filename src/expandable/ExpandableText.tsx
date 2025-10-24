import { type TextProps, Typography } from '@alfalab/core-components/typography';
import cn from 'classnames';
import { useRef, useState } from 'react';

import styles from './ExpandableText.module.css';
import { useClientHeight } from './useClientHeight';

type ExpandableTextProps = TextProps & {
  lines?: number;
};

const DEFAULT_LINE_HEIGHT = 20;
const DEFAULT_FULL_HEIGHT = 200;

const LINE_HEIGHTS = {
  'primary-large': 24,
  'primary-medium': 24,
  'primary-small': 20,
  'secondary-large': 16,
  'secondary-medium': 16,
  'secondary-small': 16,
  caps: 16,
} as Record<Exclude<TextProps['view'], undefined>, number>;

export const ExpandableText = ({ className, color, lines = 4, style, view, children, ...props }: ExpandableTextProps) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const fullHeight = useClientHeight(refContainer, DEFAULT_FULL_HEIGHT);

  const [open, setOpen] = useState(false);
  const action = open ? 'Свернуть' : 'Развернуть';
  const smallHeight = (view ? LINE_HEIGHTS[view] : DEFAULT_LINE_HEIGHT) * lines;
  const maxHeight = open ? fullHeight : smallHeight;
  const showExpand = smallHeight < fullHeight;
  const styleContent = {
    ...(style || {}),
    maxHeight: `${maxHeight}px`,
  };

  return (
    <div className={styles.container} ref={refContainer}>
      <Typography.Text
        className={cn(styles.content, color && styles[`color_${color}`], className)}
        style={styleContent}
        view={view}
        {...props}
      >
        {children}
      </Typography.Text>
      <Typography.Text className={cn(styles.contentMeasure, className)} view={view} {...props}>
        {children}
      </Typography.Text>
      {showExpand && (
        <Typography.Text className={styles.action} view={view} onClick={() => setOpen(!open)}>
          {action}
        </Typography.Text>
      )}
    </div>
  );
};
