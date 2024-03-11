import Image from 'next/image';
import styles from './Hero.module.css';
import { BackgroundBeams } from '../background/background-beams';

export interface HeroProps {
  title: string,
  subtitle: string, 
  backgroundImageUrl: string
}

export default function Hero({title, subtitle, backgroundImageUrl}: HeroProps) {
  return <div className={styles.hero}>
    <div className={styles.contentBackground}>
      <BackgroundBeams />
      {/* <Image className={styles.heroImage} fill={true} src={backgroundImageUrl} alt='Hero block image'/> */}
    </div>
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  </div>
}