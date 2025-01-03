import clsx from 'clsx';
import type { ComponentProps } from 'react';
import styles from './ui-button.module.css';

type UiButtonProps = ComponentProps<'button'>;

const UiButton = (props?: UiButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.uiButton, props?.className)}
    />
  );
};

export default UiButton;
