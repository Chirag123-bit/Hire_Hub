import Job from "./ListCard";
import { JobCardsHoler } from "./listElements";

function ListComponent({ list, isLoading }) {
  return (
    { isLoading } && (
      <JobCardsHoler>
        {list.map((item) => {
          return <Job item={item} />;
        })}
      </JobCardsHoler>
    )
  );
}

export default ListComponent;
