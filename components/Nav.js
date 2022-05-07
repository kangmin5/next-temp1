import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Nav.module.css'

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.logo} >
              <Link href='/'>APP LOGO</Link>
          </div>
          <div className={styles.mainMenu}>
              <Link href='/menu/about'>About</Link>
              <Link href='/menu/faq'>FAQ</Link>
              <Link href='/menu/contact'>Contact</Link>
          </div>
          <div className={styles.loginMenu}>
              <Link href='/menu/login'>로그인</Link>
          <Link href='/menu/register' >회원가입</Link>
          </div>
      </div>
    </div>
  )
}


