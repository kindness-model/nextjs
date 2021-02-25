import styles from './NavBar.module.scss';

type Props = {
    color?: 'light' | 'dark';
}
export default function SiteNav({ color = 'dark' }: Props) {
    return (
        <div className={`${styles.container} ${styles[color]}`}>
            <div className={`${styles.title} ${styles[color]}`}><a href="/">Kindness Farm</a></div>
            <div className={`${styles.items} ${styles[color]}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contribute-donate">Contribute</a>
                <a href="/volunteer">Volunteer</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}