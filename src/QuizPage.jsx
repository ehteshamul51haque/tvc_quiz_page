import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/src/questions.json");
        const data = await response.json();
        const categoryQuestions = data.categories.find(
          (cat) => cat.name === category
        );

        if (categoryQuestions) {
          setQuestions(categoryQuestions.questions);
        } else {
          console.error(`Category ${category} not found`);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [category]);

  const handleAnswerSubmit = (questionIndex, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOption,
    });
  };

  const handleSubmitQuiz = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);

    navigate(
      `/results`, {
        state: {
          category,questions,userAnswers,score:totalScore,
        }
      }
    );
  };

  return (
    <div className="back">
      <div className="card">
              <h1 className="quiz-title">{category} Quiz</h1>
              {questions.length > 0 && (
                  <div>
                      {questions.map((question, index) => (
                          <div key={index}>
                              <p className=" quiz-num">Question {index + 1}: {question.text}</p>
                              <div className="option-card">
                                  {question.options.map((option, optionIndex) => (
                                      <div key={optionIndex}
                                          className={`quiz-option ${userAnswers[index]===option?"selected":"default"}`}
                                          onClick={() => handleAnswerSubmit(index, option)}>
                                      {option}
                                      
                                      </div>
                                  ))}
                          </div>
                          <hr className="question-break"/>
                          </div>
                      ))}
                      <div className="quiz-button">
                          <button onClick={handleSubmitQuiz}>
                              Submit Quiz
                          </button>
                      </div>
                  </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
