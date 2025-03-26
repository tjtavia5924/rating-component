import thanks from "../images/illustration-thank-you.svg";

type ResultsProps = {
  selectedRating: number;
};
export default function Results({ selectedRating }: ResultsProps) {
  return (
    <div className="thanks-container">
      <div className="thanks-image-container">
        <img src={thanks} alt="thanks" />
      </div>
      <p className="thanks-rating"> You selected {selectedRating} out of 5</p>
      <h1 className="thanks-header">Thank you!</h1>
      <p className="thanks-message">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
