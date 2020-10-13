import React from 'react'
import styles from './index.module.css'

export default function UserProject({name, description, access_level}) {

  return (
      <div className={styles.project}>
        <div className={styles.heading}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.access_level}>
                {access_level}
            </div> 
        </div>
        <div className={styles.description}>
            {description}
        </div>
      </div>
  )
}