import './../../App.scss';
import NewsCard from "./NewsCard";

const News = () => {
    return (
        <section className="news-section container-fluid">
            <div className="container">
                <div className="row news-card-wrapper">
                    <NewsCard />
                </div>
            </div>
        </section>
    )
}

export default News;