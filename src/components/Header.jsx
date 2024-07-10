import Link from "next/link";
import HeaderStyles from "@/components/Header.module.css";

export default function Header() {
  return (
    <>
      <nav className={HeaderStyles.nav}>
        <Link href="/">Home</Link> | <Link href="/rollers">Rollers</Link>
      </nav>
    </>
  );
}