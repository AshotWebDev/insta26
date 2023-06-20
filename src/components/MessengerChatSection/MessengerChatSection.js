import { useSelector } from 'react-redux'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'
import { selectMessages } from '../../store/slices/messagesSlice/messagesSlice'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'
import { useMemo } from 'react'

function MessengerChatSection() {
	const {activeUserId} = useSelector(selectMessages)
	const {usersData} = useSelector(selectUsers)
	const activeUser = useMemo(()=>{
		return usersData.find(user => user.id === activeUserId)
	},[activeUserId])
  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<p>{activeUser.username}</p>
			<p>i</p>
		</div>
		<div className='Chat'>
			<MessengerChat {...{activeUser}}/>
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
