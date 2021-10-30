import React from 'react'
export interface ModalProps {
    closeModal: () => void,
    children: React.ReactNode,
    overlayClass: string,
    bodyClass: string,
}
