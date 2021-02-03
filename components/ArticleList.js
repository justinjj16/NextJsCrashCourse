import articleStyles from "../styles/Articles..module.css";
import ArticleItem from "./ArticleItem";


const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles && articles.map((article,index) => (
              <div key={index}>
              <ArticleItem article={article} />
              </div>
            ))}
        </div>
    )
}

export default ArticleList;