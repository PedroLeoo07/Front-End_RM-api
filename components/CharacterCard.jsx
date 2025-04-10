import styles from "../styles/CharacterCard.module.css";

export default function CharacterCard( { character } ) {
    return (
        <div className={styles.card}>
            <img 
            src={character.image} 
            alt={character.name}
            className={styles.avatar}
            />
            <h3 className={styles.title}>Olá</h3>
            <p>Essa é a página inicial</p>
        </div>
    );
}