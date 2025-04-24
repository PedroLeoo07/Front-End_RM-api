import Image from "next/image";
import styles from "../styles/Loader.module.css";

    export default function Loader() {
        return (
            <div className={styles.container}>
                <Image src={"/loader.gif"} alt="Loading 🙂" width={300} height={300} priority className={styles.image} />
                <h1 className={styles.message}>Carregando... Por favor aguarde!!</h1>
            </div>
        );
    }