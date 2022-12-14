import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";
import {useState} from "react";

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}
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

                        <button onClick={handleDeleteComment} title={"Deletar comentário"}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p> {content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span> {likeCount} </span>
                    </button>

                </footer>
            </div>

        </div>
    )
}

