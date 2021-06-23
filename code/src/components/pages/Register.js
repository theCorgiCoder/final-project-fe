import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, batch} from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import user from '../../reducers/user'

import { REACT_APP_BASE_URL } from '../../reuseables/urls'
import { 
  MainContainer,
  Header, 
  Form, 
  Label, 
  InputField, 
  Text, 
  SecondaryButtonContainer, 
  PrimaryButton, 
  SecondaryButton, 
  ErrorMessage, 
  InputWrapper 
} from '../styled-components/FormElements'

const API_URL = `${REACT_APP_BASE_URL}/register`;

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState(null)

  const accessToken = useSelector(store => store.user.accessToken)
  const error = useSelector(store => store.user.errors)

  const dispatch = useDispatch()
  const history = useHistory()
  
  useEffect(() => {
    if (accessToken) {
    history.push('/')
    }
  },[accessToken, history])

  const onFormSubmit = (e) => {
    e.preventDefault()
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }) 
    }
    fetch (`${REACT_APP_BASE_URL}/register`(mode), options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.username))
            dispatch(user.actions.setAccessToken(data.accessToken))
            dispatch(user.actions.setErrors(null))

            localStorage.setItem('user', JSON.stringify({
              username: data.username,
              accessToken: data.accessToken
            }))
          })
        } else {
          dispatch(user.actions.setErrors(data))
        }
      })
      .catch()
    }

  return (
    <MainContainer>
      <Form onSubmit={onFormSubmit}>
        <Header>
          Register here to be a PetSpotter!
        </Header>
        <InputWrapper>
          <Label htmlFor="username">Username:</Label> 
            <InputField
              id='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <Label htmlFor="password">Password:</Label> 
            <InputField
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </InputWrapper>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <PrimaryButton
          type='submit'
          onClick={() => setMode('register-user')}
        >
          Register
        </PrimaryButton>
        <SecondaryButtonContainer>
          <Text>
            Already registered? 
          </Text>
          <Link to="/login">
            <SecondaryButton>
              Login
            </SecondaryButton>
          </Link>
        </SecondaryButtonContainer>
      </Form>
    </MainContainer>
  )
}

export default Register