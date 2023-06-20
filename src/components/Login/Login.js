import React, { memo, useEffect} from 'react'
import IMAGES from '../../images'
import LoginForm from '../LoginForm/LoginForm'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'
import fetchUsers from '../../store/slices/usersSlice/usersAPI'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {currentUser, usersData} = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(currentUser){
            navigate('/')
        }
    },[currentUser])
    useEffect(()=>{
        if(!usersData.length){
            dispatch(fetchUsers())
        }
    },[])
   
  return (
    <div className='Login'>
        <div className='LoginDiv1'>
            <img src={IMAGES.instagramLoginLogo} alt="instagram"/>
            <LoginForm/>
            <span>OR</span>
            <div className='LoginFacebook'>
                <a href="#">Login with facebook</a>
                <a href="#">Forgot your password?</a>
            </div>
        </div>

        <div className='LoginDiv2'>
            <span>Don't have an account yet?</span>
            <a href="#">Register</a>
        </div>
        <div className='LoginDiv3'>
            <span>Установите приложение.</span>
            <div className='LoginImagesLink'>
                <a href="#"><img src={IMAGES.googlePlay} alt="googlePlay" /></a>
                <a href="#"><img src={IMAGES.microsot} alt="Microsoft" /></a>
            </div>
        </div>
    </div>
  )
}

export default memo(Login)