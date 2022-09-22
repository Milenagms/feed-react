import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={"https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q40"} alt={"user"}/>
                    <div className={styles.authorInfo}>
                        <strong>Erica Fernandes</strong>
                        <span>Designer</span>
                    </div>
                </div>
                <time  title={"20 de setembro de 2022 às 08:13h"} dateTime={"2022-09-20 12:00:00"}>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href={""}>jane.design/doctorcare</a></p>
                <p> <a href={""}>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>

                <textarea
                    placeholder={"Deixe um comentário"}
                />
                <footer>
                    <button type={"submit"}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}