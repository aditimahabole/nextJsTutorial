import React from 'react'
import styles from "../src/app/page.module.css";
const about = () => {
  return (
    <div className={styles.main}>
    <h3>This is about page inside Pages folder and nextJs can render it using path /about</h3>
    </div>
  )
}

export default about