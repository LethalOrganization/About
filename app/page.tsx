import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero title="Lethal Org." subtitle="lorem ipsum." backgroundImageUrl="/images/ice.jpg" />
      <About />
      <Services/>
      <Footer/>
    </main>
  );
}
