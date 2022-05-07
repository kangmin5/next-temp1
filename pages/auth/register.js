import React, {useState} from 'react'
import Register from '@/components/auth/Register'

export default function registerPage() {
  const [user, setUser] = useState({
    userid:'',password:'',name:'',email:'',birth:'',address:''
  })
  const onChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setUser({...user,[name]:value})
  }
  const onSubmit = e => {
    e.preventDefault()
    alert('1.회원가입저장'+JSON.stringify(user))
  }





  return (
    <div >
      <Register onChange={onChange} onSubmit={onSubmit }/>
    
    </div>
  )
}
