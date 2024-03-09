import styles from './Hero.module.css';

export interface HeroProps {
  title: string,
  subtitle: string, 
  backgroundImageUrl: string
}

export default function Hero({title, subtitle}: HeroProps) {
  return <div className={styles.heroContainer} style={{background: 'url(/favicon.ico)'}}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.title}>{subtitle}</h2>
  </div>
}