import { useConsiderationStore } from "../../hooks/useConsiderationStore";
import { useOfferStore } from "../../hooks/useOfferStore";

function ReviewCard() {
  const offers = useOfferStore((state) => state.offers);
  const considerations = useConsiderationStore((state) => state.consideration);

  const offersArray = Array.from(offers);
  const considerationsArray = Array.from(considerations);

  return (
    <div className="block">
      <div className="flex">
        <h1 className="text-2xl m-4">You are offering: </h1>
        <div>
          <ol>
            {offersArray.map((offer) => {
              return (
                <li key={Math.random()} className="text-2xl m-4">
                  {offer[1].token}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="flex">
        <h1 className="text-2xl m-4">You are considering: </h1>
        <div>
          <ol>
            {considerationsArray.map((consideration) => {
              return (
                <li key={Math.random()} className="text-2xl m-4">
                  {consideration[1].token}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
