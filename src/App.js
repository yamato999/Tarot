import styles from './App.module.css'
import Border from "./components/Border"
import Header from "./components/Header"
import Content from "./components/Content"
import Cards from "./components/Cards"

function App(){
  return(
    <div className={styles['body-container']}>
    <Border/>
    <Header/>
    <Border/>
    <Content/>
    <Border/>
    <Cards/>
    <p className={styles.number}>ЗВОНИТЕ В ЛЮБОЕ ВРЕМЯ +77077383539</p>
    <Border/>
    </div>
    
  )
}


export default App
