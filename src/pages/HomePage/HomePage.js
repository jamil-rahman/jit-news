import styles from './HomePage.module.css'
import Navbar from '../../components/Navbar/Navbar'
export default function HomePage() {
  return (
    <div className={styles.home_container}>
      <Navbar />
    </div>
  )
}
