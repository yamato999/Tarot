import styles from './Content.module.css'
const Content = () => {
    return(
        <>
        <div className={styles.content__container}>
            <img src='niiyazha.jpeg' className={styles.niiyazha}></img>
            <p className={styles.description}>ПОЛУЧИТЕ МОЮ КОНСУЛЬТАЦИЮ — ПРЯМО СЕЙЧАС! 
Знайте, что всевозможные проблемы, которые случаются в жизни, можно решить, даже тогда, когда Вам кажется, что все бесполезно и ничего нельзя исправить, что Вы зашли в тупик… Прийдите ко мне за помощью! Я помогаю людям находить ответы, помогаю находить свет всем, кто блуждает в темноте! Если Вам тяжело и Вы устали… дайте мне знать, я знаю в чём причина бед и знаю как именно Вам помочь!</p>
        </div>
        <div className={styles.content__container}>
        
        <p className={styles.description}>Если вы попали ко мне на сайт, значит вы находитесь в сложной ситуации, растеряны, не знаете что предпринять, как быть дальше, или опасаетесь сделать ошибку — позвоните мне, я знаю как Вам помочь!</p>
        <img src='niiyazha_nails.jpeg' className={styles.niiyazha}></img>
        </div>
        </>
    )
}

export default Content