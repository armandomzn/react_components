import { useState } from "react";
import { data } from "./data";
import { JobProps } from "./interfaces/JobProps";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const tempJobs = data.reverse();

function App() {
  const [jobs, _] = useState<JobProps[]>(tempJobs);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <main className="main">
      <section className="section-center">
        <BtnContainer
          jobs={jobs}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
        <JobInfo jobs={jobs} currentIndex={currentIndex} />
      </section>
    </main>
  );
}

export default App;
