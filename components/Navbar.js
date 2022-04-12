import Link from "next/link";
import styles from '../styles/Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">Users</Link>
        </div>
    )
}
export default Navbar;