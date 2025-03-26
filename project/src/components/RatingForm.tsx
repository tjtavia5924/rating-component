import star from "../images/icon-star.svg";
import SubmitButton from "./SubmitButton";

type RatingFormProps = {
  submitFeedback: (e: { preventDefault: () => void }) => void;
  numbers: number[];
  handleRating: (rating: number) => void;
  showWarning: boolean;
};
export default function RatingForm({
  submitFeedback,
  numbers,
  handleRating,
  showWarning,
}: RatingFormProps) {
  return (
    <form onSubmit={submitFeedback} className="container">
      <div className="star-container" role="star-image">
        <img src={star} alt="star" />
      </div>
      <h1 className="header" role="question">
        How did we do?
      </h1>
      <p className="message" role="message">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-btns">
        {numbers.map((number) => (
          <button
            type="button" // putting type stops from acting as submit buttons
            className="rating-btn"
            key={number}
            onClick={() => {
              handleRating(number);
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <SubmitButton showWarning={showWarning} />
    </form>
  );
}
