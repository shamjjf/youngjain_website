import Image from "next/image"
import styles from "./whatsapp.module.css";

export default function WhatsappLink() {
    return (
        <div className={`${styles["whatsapp-link"]}`} >
            <div style={{ padding: "4px"}}>
                <a href="https://wa.me/919552805280"  target="_blank">
                    <Image width={36} height={36} src="/assets/images/icons/social-icons/whatsapp-icon.png" alt="whatsapp icon" />
                </a>
            </div>
        </div>
    )
} 