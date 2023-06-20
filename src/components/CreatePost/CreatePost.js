import React, { useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()

        const [{value: img}, {value: desc}] = formRef.current
        dispatch({type: 'addPost', payload: {img, desc}})
        navigate('/')
        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit}>
                <input type="text" />
                <input type="text" />
                <label className="input-file">
                    <input type="submit" name="file" style={{display: 'none'}}/>		
                    <span>Выберите файл</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
