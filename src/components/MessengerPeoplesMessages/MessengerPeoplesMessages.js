import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'
import { useMemo } from 'react'

function MessengerPeoplesMessages() {
	const {usersData, currentUser} =  useSelector(selectUsers)
	

  const users = useMemo(()=>{
		return usersData.filter(user => user.id !== currentUser.id)
						.map(user =>({
							id: user.id,
							img: user.avatar,
							name: user.username,
							active: 'Active '+ (Math.round(Math.random()* 7 + 2) ) + ' m ago'
						}))
  },[usersData])
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			users.map(el => <MessengerPeoplesMessage key={el.id} id={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
