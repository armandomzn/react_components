import { JobProps } from "../interfaces/JobProps";
import JobActivities from "./JobActivities";

interface Props {
  jobs: JobProps[];
  currentIndex: number;
}

const JobInfo = ({ jobs, currentIndex }: Props) => {
  const { title, company, date, activities } = jobs[currentIndex];
  return (
    <article className="job">
      <div className="animation">
        <h3>{title}</h3>
        <div className="job-info">
          <span className="job-company">{company}</span>
          <p className="job-date">{date}</p>
        </div>
        <JobActivities activities={activities} />
      </div>
    </article>
  );
};

export default JobInfo;
