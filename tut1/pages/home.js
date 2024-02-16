import React from 'react'

import styles from "../src/app/page.module.css";

const home = () => {
  return (
    <div className={styles.main}>
          <h3>This is about page inside Pages folder and nextJs can render it using path /home</h3>
    </div>
  
  )
}

export default home