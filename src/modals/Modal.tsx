import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  ReactNode,
  RefObject,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

type ModalProps = {
  children?: ReactNode;
  onClose?: (e?: MouseEvent) => void;
};

export interface ModalActions {
  show: () => void;
  hide: () => void;
}

const Modal = ({ children, onClose }: ModalProps, ref: ForwardedRef<ModalActions>) => {
  const [modalShown, setModalShown] = useState<boolean>(false);
  const modalBodyRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    show: (): void => {
      setModalShown(true);
      modalBodyRef.current?.focus();
    },
    hide: (): void => setModalShown(false),
  }));

  const handleClose = (e: MouseEvent): void => {
    if (!modalShown) return;
    (ref as RefObject<ModalActions>).current?.hide();
    if (onClose) onClose(e);
  };

  return (
    <div className={'Modal' + (modalShown ? '' : ' hidden')} onClick={handleClose}>
      <section className="modalBody" ref={modalBodyRef} onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </div>
  );
};
export default forwardRef(Modal);
