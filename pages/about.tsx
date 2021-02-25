import styles from '../styles/About.module.scss';
import NavBar from '../components/NavBar/NavBar';
import SingleColumn from '../components/layouts/SingleColumn';

export default function About() {
    return (
        <div>
            <NavBar color='dark' />
            <SingleColumn>
                <div className={styles.title}>About</div>
                <p className={styles.text}>
                    Kindness Farm emanates from the belief that we are all born imbued with kindness, & that kindness is a not only the most compassionate, but also the most practical model for the world to dwell in.
                </p>
                <p className={styles.text}>
                    Kindness Farm aims to care for people & Earth by regeneratively & sustainably growing nutrient-full vegetables & fruits; cultivating community education of balanced farming practices; & providing freshly harvested nutriments to houseless and low-income neighbors in need.
                </p>
                <p className={styles.text}>
                    Kindness is the natural instinct in all of us to take care of each other, and our planet; which we believe is distorted by a world that force us to choose our own survival over helping others.
                </p>
            </SingleColumn>
        </div>
    );
}