/* eslint-disable @next/next/no-img-element */
type NftCardProps = {
  name: string;
  image: string;
  tokenId: string;
};

function NftCard({ name, image, tokenId }: NftCardProps) {
  return (
    <div className="card shadow-xl w-48 m-4">
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">
          Token ID: <span className="font-bold">{tokenId}</span>
        </p>
      </div>
    </div>
  );
}

export default NftCard;
