import Link from "next/link"
import styles from './button.module.css'

export default function Button({ text = "", href = "#", target = "_self", primary=true, style={} }) {

    return (
        <Link href={href} target={target} style={{marginTop: "40px", ...style}} className={`${styles["button"]} ${primary ? styles["button-red"] : styles["button-blue"]}`} >
              <span style={{position: "relative", zIndex: "2"}}>{text}</span>
        </Link>
    )
}