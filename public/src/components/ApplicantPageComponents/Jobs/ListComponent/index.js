import Job from "./ListCard";
import { JobCardsHoler } from "./listElements";

function ListComponent({ list }) {
  return (
    <JobCardsHoler>
      {list.map((item) => {
        return <Job item={item} />;
      })}
    </JobCardsHoler>
  );
}

export default ListComponent;
