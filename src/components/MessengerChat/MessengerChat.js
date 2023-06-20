import { useSelector } from 'react-redux'
import './MessengerChat.css'
import { selectMessages } from '../../store/slices/messagesSlice/messagesSlice'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'

function MessengerChat({activeUser}) {
  const {currentDialog} = useSelector(selectMessages)
  const {currentUser} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
      {
        currentDialog.map(message =>
              <p className='message' key={message.id} style={{backgroundColor: currentUser.id === message.fromId ? 'gray' : 'blueviolet'}}>{message.fromId === currentUser.id ? currentUser.username: activeUser.username}<span>{message.body}</span></p>
          )
      }
	 </div>
  )
}

export default MessengerChat
