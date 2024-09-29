import './News.scss';

const NewsCard = ({title, src, image, alt, text, date, description}) => {
    return <>
        <article className="news-card col-3 col-sm">
            <div className="icon-wrapper">
                <img src={src} alt={alt}/>
                <h3 className="news-title">{title}</h3>
            </div>
            <img className="news-img" src={image} alt={alt}/>
            <h4 className="news-subtitle">{text}</h4>
            <span className="news-date">{date}</span>
            <p className="news-descr">{description}</p>
            <button className="btn">Read more</button>
        </article>
    </>
}

export default NewsCard;