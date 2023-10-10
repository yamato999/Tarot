import Card from "./Card";
import styles from './Cards.module.css'
const Cards = props => {
    return(
        <div className={styles.cards__container}>
                <Card imageUrl='/photo1.jpeg' text="ОТВОРОТ СОПЕРНИЦЫ ЛИБО СОПЕРНИКА
Помогу в отвороте соперника в любовных отношениях"></Card>
                <Card imageUrl='/photo2.jpeg' text="СНЯТИЕ ПОРЧИ И СГЛАЗА
Помощь в снятии порчи и сглаза."></Card>
                <Card imageUrl='/photo3.jpeg' text="МАГИЯ ЛЮБВИ И ОТНОШЕНИЙ
Приворот любимого человека."></Card>
                <Card imageUrl='/photo4.jpeg' text='ПРИВЛЕЧЕНИЕ ФИНАНСОВ И УДАЧИ
Окажу помощь в обретении финансового благополучия, обряды на успех в делах, бизнесе'></Card>
        </div>
    )
}
export default Cards