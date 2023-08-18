import { ABIS, CONTRACTS, ASSETS_URIS } from "../../../utils/constants";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

type Props = {
  Token: "CatNFT" | "DogNFT";
};

export default function Mint({ Token }: Props) {
  const { address: accountAddress } = useAccount();

  let address: `0x${string}`;
  let tokenURI: string;
  let abi: any;

  switch (Token) {
    case "CatNFT":
      address = CONTRACTS.sepolia.CatToken as `0x${string}`;
      tokenURI = ASSETS_URIS.CatToken;
      abi = ABIS.CatToken;
      break;

    case "DogNFT":
      address = CONTRACTS.sepolia.DogToken as `0x${string}`;
      tokenURI = ASSETS_URIS.DogToken;
      abi = ABIS.DogToken;
      break;

    default:
      throw new Error("Invalid Token");
  }
  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName: "mintNFT",
    args: [accountAddress, tokenURI],
  });

  const { isError, isSuccess, isLoading, write } = useContractWrite(config);

  return (
    <div>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => write?.()}
      >
        {isLoading ? "Minting..." : "Mint"}
      </button>
      {isSuccess && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>You have minted a new {Token}</span>
          </div>
        </div>
      )}
      {isError && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-error">
            <span>Error! Something went wrong while minting.</span>
          </div>
        </div>
      )}
    </div>
  );
}
