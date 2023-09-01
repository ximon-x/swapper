import { ConsiderationItem, OfferItem } from "@opensea/seaport-js/lib/types";

type NftSwapCardProps = {
  item: OfferItem | ConsiderationItem;
};

function NftSwapCard({
  item: { token, itemType, identifierOrCriteria, startAmount },
}: NftSwapCardProps) {
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };

  return (
    <div className="card shadow-xl neutral-content w-48 m-4">
      <div className="neutral-content flex items-center justify-center">
        {itemType == 0 ? (
          <p className="text-3xl p-4 text-center bg-neutral text-neutral-content">
            ETH
          </p>
        ) : itemType == 1 ? (
          <p className="text-3xl p-4 text-center bg-neutral text-neutral-content">
            FT
          </p>
        ) : itemType == 2 ? (
          <p className="text-3xl p-4 text-center bg-neutral text-neutral-content">
            NFT
          </p>
        ) : (
          <p className="text-3xl p-4 text-center bg-neutral text-neutral-content">
            ??
          </p>
        )}
      </div>
      <div className="card-body px-2">
        <div>
          Contract: <span>{shortenAddress(token)}</span>
        </div>
        <div>
          Token ID: <span>{identifierOrCriteria}</span>
        </div>
        <div>
          Amount: <span>{startAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default NftSwapCard;
