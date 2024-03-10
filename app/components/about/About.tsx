import Image from 'next/image';
import PageBlock from '../pageBlock/PageBlock';
import styles from './About.module.css';

type AboutProps = {
  imageSrc: string
}

export default function About({imageSrc}: AboutProps) {
  return <PageBlock className={`${styles.about}`}>
    <div className={styles.aboutImg}>
      <Image src={imageSrc} fill={true} alt='About image'/>
    </div>
    <div className={styles.content}>
      <h2>Who we are</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </PageBlock>
}