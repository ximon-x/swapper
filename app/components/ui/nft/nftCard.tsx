import { useState } from "react";
import { useOfferStore } from "../../hooks/useOfferStore";
import { CreateInputItem } from "@opensea/seaport-js/lib/types";
import { ItemType } from "@opensea/seaport-js/lib/constants";

/* eslint-disable @next/next/no-img-element */
type NftCardProps = {
  id: string;
  name: string;
  image: string;
  tokenId: number;
  contractAddress: string;
};

function NftCard({ id, name, image, tokenId, contractAddress }: NftCardProps) {
  const addOffer = useOfferStore((state) => state.add);
  const removeOffer = useOfferStore((state) => state.remove);

  const [selected, setSelected] = useState(false);

  const toggleSelect = () => {
    const item: CreateInputItem = {
      itemType: ItemType.ERC721,
      token: contractAddress,
      identifier: tokenId.toString(),
      amount: "1",
    };

    !selected ? addOffer(id, item) : removeOffer(id);
    setSelected(!selected);
  };

  return (
    <div className="card shadow-xl w-48 m-4" onClick={toggleSelect}>
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}{" "}
          {selected && (
            <input
              readOnly
              type="checkbox"
              // @ts-ignore
              checked="checked"
              className="checkbox checkbox-info"
            />
          )}
        </h2>
        <p className="text-xl">
          Token ID: <span className="font-bold">{tokenId}</span>
        </p>
      </div>
    </div>
  );
}

export default NftCard;
