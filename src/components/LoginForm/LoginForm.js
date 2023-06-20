import React, { memo, useRef } from 'react'
import './LoginForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUsers } from '../../store/slices/usersSlice/usersSlice'
function LoginForm() {
  const {currentUser, usersData} = useSelector(selectUsers)
    const formRef = useRef(null)
    const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    const [{value: login}, {value: password}] = formRef.current
    dispatch(logIn({login, password}))
}
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <button>Login</button>
    </form>
  )
}

export default memo(LoginForm)