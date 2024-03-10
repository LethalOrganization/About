import PageBlock from "../pageBlock/PageBlock";
import styles from './Services.module.css';

export default function Services() {
  return <PageBlock className={styles.services}>
    <h2>What we offer</h2>
    <ul>
      <li>
        <h3>Foo</h3>
        <div>
          Sapien faucibus et molestie ac feugiat sed. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. At in tellus integer feugiat scelerisque varius morbi enim. Viverra tellus in hac habitasse. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus in hac
        </div>
      </li>
      <li>
        <h3>Foo</h3>
        <div>
          Sapien faucibus et molestie ac feugiat sed. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. At in tellus integer feugiat scelerisque varius morbi enim. Viverra tellus in hac habitasse. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus in hac
        </div>
      </li>
    </ul>
  </PageBlock>
}