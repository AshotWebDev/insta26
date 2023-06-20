import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../store/slices/messagesSlice/messagesSlice'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'
import { useRef } from 'react'

function MessengerChatForm() {
	const {currentUser} = useSelector(selectUsers)
	const formRef = useRef()
	const dispatch = useDispatch()
	function handleSubmit(e) {
		e.preventDefault()
		dispatch(addMessage({body: formRef.current[0].value, fromId: currentUser.id}))
		formRef.current.reset()
	}
  return (
	 <form ref={formRef} onSubmit={handleSubmit}>
		<div className='Chat-input'>
			<input type='text' placeholder='Message...'/>
			<img src={IMAGES.like} alt=''/>
	 	</div>
	 </form>
  )
}

export default MessengerChatForm
