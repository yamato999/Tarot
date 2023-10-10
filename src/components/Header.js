import styles from './Header.module.css'

const Header = () => {
    return(
        <>
        <div className={styles.image__container}>
            <img src="image_1.jpg" className={styles.image}></img>
            <p className={styles.image__description}>Сильнейшая ясновидящая в Казахстане гадалка Жания с Истинным Даром</p>
        </div>
        <div className={styles.buttons__container}>
        <button className={styles.buttons}>Позвонить</button>
        <button className={styles.buttons}>WhatsApp</button>
        </div>
        </>
        
    )
}

export default Header