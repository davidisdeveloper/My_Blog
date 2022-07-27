import styles from '../App.module.css';
import Card from './Card.js';
import Board from './Board.js';
import Request from './Request.js';
import React from 'react';

function Bar() {

    const [now, setNow] = React.useState("a")

    const changeValue = (value) => {
        setNow(value);
    } 

    return (
        <div>
            <div className={styles.menu}>
                <ul className={styles.menuBar} >
                    <li onClick={() => changeValue("a")}>자료 다운로드</li>
                    <li onClick={() => changeValue("b")}>자유 게시판</li>
                    <li onClick={() => changeValue("c")}>자료 요청</li>
                </ul>
            </div>

            {now === "a" ? <Card /> : null}
            {now === "b" ? <Board /> : null}
            {now === "c" ? <Request /> : null}

        </div>
    );
}

export default Bar;