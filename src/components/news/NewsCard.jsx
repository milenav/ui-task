import newsData from './../../news.json';
import './News.scss';

const NewsCard = () => {
    return (
        <>
            {newsData.map((news, index) => (
                <article key={index} className="news-card col-3 col-sm">
                    <img src="" alt="" height="60" width="60"/>
                    <div>
                        <span>{news.src}</span>
                        <img src={news.src} alt=""/>
                        <h3 className="news-title">{news.title}</h3>
                    </div>
                    <img className="news-img" src={news.image} alt={news.alt}/>
                    <h4 className="news-subtitle">{news.text}</h4>
                    <span className="news-date">{news.date}</span>
                    <p className="news-descr">{news.description}</p>
                    <button className="btn">Read more</button>
                </article>
            ))}

        </>
    )
}

export default NewsCard;