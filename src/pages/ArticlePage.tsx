import react from "react";
import Header from "../components/Header";
import ArticleDetail from "../components/ArticleDetails";
import CommentsSection from "../components/CommentsComponent";

function ArticlePage(){
    return(
        <div className="App">
            <Header />
            <ArticleDetail />
            <CommentsSection />
        </div>
    )
}

export default ArticlePage;