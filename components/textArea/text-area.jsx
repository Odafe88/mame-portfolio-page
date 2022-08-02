import React from 'react'
import styles from "./textArea.module.scss"


const TextArea = ({ handleChange, label, name }) => (
    <div className={styles.text_area_container}>
        <label className={styles.text_area_label}>{label}:</label>
        <textarea className={styles.text_area} required onChange={handleChange} name={name}></textarea>


    </div>
)

export default TextArea;