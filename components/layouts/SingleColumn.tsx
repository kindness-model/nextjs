import { PropsWithChildren } from 'react';
import styles from './SingleColumn.module.scss';

export default function SingleColumn({children}: PropsWithChildren<{}>){
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {children}
            </div>
        </div>
    )
}