**Component example**
```jsx
import { useState } from  'react'
import {Modal} from  'react-modal-comp'

function  App() {
	const [visible, setVisible] =  useState(false)
	return (
		<div  className="App">
			<button  onClick={() =>  setVisible(true)}>Hola hola</button>
			<Modal  showModal={visible}  closeModal={() =>  setVisible(false)}  bodyClass='component-body-modal'>Hola hola</Modal>
		</div>
	)
}

export  default  App
```

**Component Props**
|Props|Type | Desc 
|---|---|---|
| showModal| boolean | show/hide modal
| closeModal| fn|return the action to close the modal
| overlayClass| string|overlay className
| bodyClass| string|body className
