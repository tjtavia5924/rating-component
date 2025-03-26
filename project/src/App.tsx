import { useState } from "react";
import Results from "./components/Results";
import RatingForm from "./components/RatingForm";

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSelected, setSelected] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const numbers = [1, 2, 3, 4, 5];

  const handleRating = (rating: number) => {
    setSelectedRating(rating);
    setShowWarning(false);
  };
  const submitFeedback = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (selectedRating > 0) {
      setSelected(true);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <>
      {isSelected ? (
        <Results selectedRating={selectedRating} />
      ) : (
        <RatingForm
          submitFeedback={submitFeedback}
          numbers={numbers}
          handleRating={handleRating}
          showWarning={showWarning}
        />
      )}
    </>
  );
}

export default App;
