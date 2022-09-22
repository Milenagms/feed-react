import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img
                src={"https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40"}
                alt={"avatar"}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Diego Martins </strong>
                            <time
                                title={"22 de setembro de 2022 às 08:13h"}
                                dateTime={"2022-09-22 12:00:00"}
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title={"Deletar comentário"}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> Muito bom, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span> 20 </span>
                    </button>

                </footer>
            </div>

        </div>
    )
}

