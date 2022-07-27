import styles from '../App.module.css';

function Header() {
    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <img src="logo.png" className={styles.logo} alt=""/>
                <button className={styles.login}>Login</button>
            </div>

            <div className={styles.title}>StudyWith</div>
            <div className={styles.subtitle}>여러분들의 노트를 공유해주세요!</div>
        </div>
    );
}

export default Header;