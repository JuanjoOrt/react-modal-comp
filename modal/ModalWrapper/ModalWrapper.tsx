import react, {useEffect} from 'react'
import { ModalComponent } from '../ModalComponent/Modal'
import { ModalWrapperProps } from './InterfaceModalWrapper'


export const Modal = ({showModal, ...props}: ModalWrapperProps) => showModal && <ModalComponent {...props}/>