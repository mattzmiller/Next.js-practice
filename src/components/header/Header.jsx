import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <img />
        <Link className={styles.navItems} href="/">
          Home
        </Link>
        <Link className={styles.navItems} href="/events">
          Events
        </Link>
        <Link className={styles.navItems} href="/AboutUsPage">
          About Us
        </Link>
      </nav>
    </header>
  );
}
