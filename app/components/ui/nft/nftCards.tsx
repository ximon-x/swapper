"use client";

import { useAccount } from "wagmi";
import useSWR from "swr";
import NftCard from "./nftCard";

function NftCards() {
  const { address } = useAccount();
  const url = `/getNfts?user=${address}`;

  // @ts-ignore
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

  const { data, isLoading } = useSWR(url, fetcher);
  const nftData = data ? Object.entries(data) : [];
  // @ts-ignore
  const ownedNfts = data ? nftData[0][1].ownedNfts : null;
  const nfts = ownedNfts ? (
    <>
      {ownedNfts.map((nft: any) => (
        <NftCard
          key={`${nft.contract.address}-${nft.tokenId}`}
          tokenId={nft.tokenId}
          image={nft.tokenUri.raw}
          name={nft.contract.name}
        />
      ))}
    </>
  ) : (
    <></>
  );

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body flex-row">
        {isLoading ? <div>Loading...</div> : nfts}
      </div>
    </div>
  );
}

export default NftCards;
