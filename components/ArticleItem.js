import Link from 'next/link'
import articleStyles from "../styles/Articles..module.css";

const ArticleItem = ({article})=>{
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`} >
            <a className={articleStyles.card}>
                <h3>{article.first_name} &arr;</h3>
                <p>{article.avatar}</p>
            </a>
        </Link>
    )
}

export default ArticleItem