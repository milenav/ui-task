import './../../App.scss';
import NewsCard from "./NewsCard";
import newsData from './../../news.json';

const News = () => {
    return (
        <section className="news-section container-fluid">
            <div className="container">
                <div className="row news-card-wrapper">
                    {newsData.map((card, index) =>
                        <NewsCard key={index} title={card.title} src={card.src} image={card.image} alt={card.alt}
                                  text={card.text} date={card.date} description={card.description}/>)}
                </div>
            </div>
        </section>
    )
}

export default News;