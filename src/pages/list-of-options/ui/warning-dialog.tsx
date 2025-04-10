import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { animateDialog, FADE_IN, FADE_OUT } from '~/shared/lib/animation';
import { UiButton } from '~/shared/ui/ui-button';
import styles from './warning-dialog.module.css';

const WARNING_TEXT = `Please add at least 2 valid options.

An option is considered valid if its title is not empty and its weight is greater than 0`;

const CLOSE_BUTTON_TEXT = 'Close';

type WarningDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const WarningDialog = ({ open, onClose }: WarningDialogProps) => {
  const dialogReference = useRef<HTMLDialogElement>(null);

  const openDialog = async () => {
    const { current: dialog } = dialogReference;

    if (dialog) {
      dialog.showModal();
      await animateDialog(dialog, FADE_IN.keyframes, FADE_IN.options);
    }
  };

  const closeDialog = async (returnValue?: string) => {
    const { current: dialog } = dialogReference;

    if (dialog) {
      await animateDialog(dialog, FADE_OUT.keyframes, FADE_OUT.options);
      dialog.close(returnValue);
    }
  };

  useLayoutEffect(() => {
    if (open) {
      void openDialog();
    }
  }, [open]);

  return (
    open &&
    createPortal(
      <dialog
        ref={dialogReference}
        className={styles.uiDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            void closeDialog('cancel');
          }
        }}
        onClose={() => {
          onClose();
        }}
      >
        <div className={styles.container}>
          <p className={styles.warning}>{WARNING_TEXT}</p>
          <UiButton
            className={styles.closeButton}
            onClick={() => {
              void closeDialog();
            }}
          >
            {CLOSE_BUTTON_TEXT}
          </UiButton>
        </div>
      </dialog>,
      document.body
    )
  );
};

export default WarningDialog;
