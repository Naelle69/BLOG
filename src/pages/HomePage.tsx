import Header from "../components/Header";
/* import Footer form "../components/Footer"; */
import ImageComponent from "../components/ComponentsAccueil/BoxLeft/ImageComponent";
import ThemesComponent from "../components/ComponentsAccueil/BoxLeft/ThemesComponent";
import ArticlesComponent from "../components/ComponentsAccueil/BoxLeft/ArticlesComponent";
import AboutComponent from "../components/ComponentsAccueil/BoxRight/AboutComponent";
import PopularPosts from "../components/ComponentsAccueil/BoxRight/PostsComponent";
import NewsletterComponent from "../components/ComponentsAccueil/BoxRight/NewsletterComponent";
import FollowMeComponent from "../components/ComponentsAccueil/BoxRight/SocialsMediaComponent";
import Advertisement from "../components/ComponentsAccueil/BoxRight/PubComponent";

function HomePage() {
    return (
        <div className="App">
            <Header />
            <div className="container mx-auto flex flex-col lg:flex-row py-8 px-4 gap-8">
                <main className="w-full lg:w-2/3 flex flex-col items-center space-y-8">
                    <ImageComponent />
                    <ThemesComponent />
                    <ArticlesComponent />
                </main>
                <aside className="w-full lg:w-1/3 flex flex-col space-y-6">
                    <AboutComponent />
                    <FollowMeComponent />
                    <PopularPosts />
                    <NewsletterComponent />               
                    <Advertisement />
                </aside>
            </div>
        </div>
    )
}

export default HomePage;