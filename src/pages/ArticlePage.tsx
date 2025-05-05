
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleDetail from "../components/ArticleDetails";
import CommentsSection from "../components/CommentsComponent";

function ArticlePage(){
    return(
        <div className="App">
            <Header />
            <div className="container mx-auto flex flex-col lg:flex-row py-8 px-4 gap-8">
                <main className="w-full lg:w-2/3 flex flex-col items-center space-y-8">
                    <ArticleDetail />
                    <CommentsSection />
                </main>
                <aside className="w-full lg:w-1/3 flex flex-col space-y-6">
                </aside>
            </div>
            <Footer />
        </div>
    )
}

export default ArticlePage;