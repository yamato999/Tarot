import styles from './Card.module.css'
const Card = (props) => {
    return(
        <div className={styles.card_container}>
            <img src={props.imageUrl}/>
            <div>
                <p className={styles.card__desc}>{props.text}</p>
            </div>
        </div>
    )
}
export default Card;