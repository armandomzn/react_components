import { JobProps } from "../interfaces/JobProps";

interface Props {
  jobs: JobProps[];
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

const BtnContainer = ({ jobs, setCurrentIndex, currentIndex }: Props) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`btn ${
              currentIndex === index ? "active-btn" : "job-btn"
            }`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
