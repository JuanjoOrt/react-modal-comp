import react, {useEffect, MouseEvent} from 'react'
import { ModalProps } from './InterfaceModal'
import './styles.css'

const buttonEsc = 27

export const ModalComponent = ({closeModal, children, overlayClass, bodyClass}: ModalProps) => {
    const assignOverlayClass = overlayClass ? overlayClass : 'modal-overlay'
    const assignBodyClass = bodyClass ? bodyClass : 'modal-body'

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if(e.keyCode === buttonEsc){
              closeModal()
            }
          }
          window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    const handleBodyModal = (e: MouseEvent) => {
        e.stopPropagation();
    }

    return (
    <div>
        <div onClick={closeModal} className={assignOverlayClass}>
        <div onClick={handleBodyModal} className={assignBodyClass}>
            {children}
        </div>
        </div>
    </div>
    )
}