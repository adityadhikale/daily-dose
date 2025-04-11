import noImage from "../assets/images/noImage.png";

const NewsCard = ({ article }) => {
  const image = article.image || article.image_url || noImage;
  const title = article.title || "No title";
  const description =
    article.description || article.content || "No description available.";
  const source =
    article.source?.name || article.source_name || article.source_id || "Unknown Source";
  const date = article.publishedAt || article.pubDate;
  const link = article.url || article.link;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</p>
        <div className="text-xs text-gray-400">
          <span>{source}</span> •{" "}
          <span>{date ? new Date(date).toLocaleDateString() : "Unknown Date"}</span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
