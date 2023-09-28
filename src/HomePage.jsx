import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Cricket", slug: "Cricket" },
    { name: "Marvel Cinematic Universe", slug: "Marvel Cinematic Universe" },
    { name: "Bollywood Movies", slug: "Bollywood" },
    { name: "Science and Tech", slug: "Science and Tech" },
    { name: "World History", slug: "World History" },
  ];
  const handleCategorySelect = (slug) => {
    navigate(`/quiz/${slug}`);
  };

  return (
    <div className="back">
      <div className="card">
        <h1 className="home-title">Welcome to the Quiz App</h1>
        <p className="home-subtext">Select a category to start the quiz:</p>
        <div className="categories">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="home-list"
              onClick={() => handleCategorySelect(category.slug)}
            >
              <h2 className="home-names">{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
