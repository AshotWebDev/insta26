import { useDispatch, useSelector } from 'react-redux'
import './MessengerPeoplesMessage.css'
import { selectMessages, toggleActiveUser } from '../../store/slices/messagesSlice/messagesSlice'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'

function MessengerPeoplesMessage({name,active,img, id}) {
	const {activeUserId} = useSelector(selectMessages)
	const {currentUser} = useSelector(selectUsers)
	const dispatch = useDispatch()
  return (
	 <div onClick={()=>dispatch(toggleActiveUser({fromId: currentUser.id , toId: id}))} style={{backgroundColor: activeUserId === id ? 'gray': ''}} className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
