import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e6b6c8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transform: translateY(-100%);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-150%);
`;

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsMounted(true);
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    if (isMounted && overlayRef.current && contentRef.current) {
      if (isOpen) {
        gsap
          .fromTo(
            overlayRef.current,
            { y: '-100%' },
            { y: '0%', duration: 1, ease: 'power3.inOut' },
          )
          .then(() => {
            gsap.fromTo(
              contentRef.current,
              { y: '-100%' },
              { y: '0%', duration: 0.5, ease: 'power1.out' },
            );
          });
      } else {
        gsap.to(contentRef.current, { y: '-100%', duration: 0.5 });
        gsap.to(overlayRef.current, { y: '-100%', duration: 0.5 }).then(() => {
          setIsVisible(false);
          setIsMounted(false);
        });
      }
    }
  }, [isOpen, isMounted]);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <ModalOverlay ref={overlayRef} onClick={onClose}>
      <ModalContent ref={contentRef} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body,
  );
};
