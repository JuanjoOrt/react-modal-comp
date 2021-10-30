import React from 'react'
export interface ModalWrapperProps {
    closeModal: () => void,
    children: React.ReactNode,
    overlayClass: string,
    bodyClass: string,
    showModal: boolean
}
