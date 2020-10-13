import React from 'react'
import styles from './index.module.css'
import UserProject from '../UserProject'


export default class UserPage extends React.Component{
  render() {

    return (
      <div className={styles.text}>
        Охуенно, просто заебись, спасибо нахуй
        <UserProject name='FirstProject' access_level='public' description='description of the first project' />
      </div>  
    )
  }
}