import styles from './HomePage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News/News'
export default function HomePage() {
  return (
    <div className={styles.home_container}>
      <Navbar />
    <News />
    </div>
  )
}
