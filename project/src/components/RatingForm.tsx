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
    <form onSubmit={submitFeedback} className="container" role="region">
      <div className="star-container" aria-label="Star Icon">
        <img src={star} alt="star" />
      </div>
      <h1 className="header" aria-label="Question: How did we do?">
        How did we do?
      </h1>
      <p className="message" aria-live="polite">
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
