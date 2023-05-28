import { v4 as uuidv4 } from "uuid";
import { TbArrowRampRight } from "react-icons/tb";
interface Props {
  activities: string[];
}

const JobActivities = ({ activities }: Props) => {
  return (
    <div className="job-activities">
      <ul>
        {activities.map((activity) => {
          return (
            <li className="job-activity" key={uuidv4()}>
              <TbArrowRampRight className="job-activity-icon" />
              {activity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobActivities;
