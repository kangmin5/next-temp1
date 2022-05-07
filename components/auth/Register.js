import React from 'react'
import styles from '@/styles/Register.module.css'
import Link from 'next/link'

export default function Register({onChange,onSubmit}) {
    return (
        <div className={styles.container}>
            <div>
                <h1>회원가입</h1>
                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='아이디' name='userid' required={true} onChange={onChange}/><br/>
                    <input type='text' placeholder='패스워드' name='password' required={true} onChange={onChange}/><br/>
                    <input type='text' placeholder='이름' name='name' required={true} onChange={onChange}/><br/>
                    <input type='text' placeholder='이메일' name='email' required={true} onChange={onChange}/><br/>
                    <input type='text' placeholder='휴대번호' name='phone' required={true} onChange={onChange}/><br/>
                    <input type='text' placeholder='생일' name='birth' onChange={onChange}/><br/>
                    <input type='text' placeholder='주소' name='address' onChange={onChange} /><br /><br />
                    <div>
                        <button type="submit">가입</button>
                        <button><Link href="/">취소</Link></button><br /><br/>
                    </div>
                    <Link href="/auth/login">로그인 화면으로 전환</Link>
                    
                </form>
            </div>
        </div>
    )
}
