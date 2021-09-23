import Basic from '../src/components/basic';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Next.js!</h1>
                <Basic />
            </main>
        </div>
    );
}
