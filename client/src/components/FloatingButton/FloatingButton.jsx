import CreatePost from "../CreatePost/CreatePost";
import styles from "./FloatingButton.module.css";
import { useState } from "react";

export default function FloatingButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
        <button className={styles.floatingButton} onClick={() => setIsOpen(true)}>
            +
        </button>

        {isOpen && (
            <div className={styles.modal} onClick={() => setIsOpen(false)}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <CreatePost isModal onClose={() => setIsOpen(false)} />
                </div>
            </div>
        )}
    </>
  );
}