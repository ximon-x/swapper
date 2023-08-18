import Image from "next/image";

function FaucetCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/images/swapperToken.png"
          alt="Token"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Get free Swapper Tokens!</h2>
        <p>
          You can get <span className="font-bold">1, 000, 000 ST</span> by
          hitting this button
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Get Tokens</button>
        </div>
      </div>
    </div>
  );
}

export default FaucetCard;
