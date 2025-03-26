import info from "../images/info_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

type SubmitButtonProps = {
  showWarning: boolean;
};
export default function SubmitButton({ showWarning }: SubmitButtonProps) {
  return (
    <div>
      <button className="submit-btn">SUBMIT</button>
      {showWarning && (
        <div className="alert-container">
          <img src={info} alt="info" className="alert-icon" />
          <p className="alert-message">
            Please select a rating before submitting.
          </p>
        </div>
      )}
    </div>
  );
}
