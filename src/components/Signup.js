import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedForm = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedForm)
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <>
      <h3>Create New Account:</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleChange} />
        <br/>
        <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleChange} />
        <br/>
        <input placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleChange} />
        <br/>
        <input type="submit" value="Sign Up"/>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
