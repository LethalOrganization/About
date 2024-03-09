import Image from 'next/image';
import styles from './Hero.module.css';

export interface HeroProps {
  title: string,
  subtitle: string, 
  backgroundImageUrl: string
}

export default function Hero({title, subtitle, backgroundImageUrl}: HeroProps) {
  return <div className={styles.hero}>
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
    <div className={styles.heroImageContainer}>
      <Image className={styles.heroImage} fill={true} src={backgroundImageUrl} alt='Hero block image'/>
    </div>
  </div>
}