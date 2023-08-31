import { useState } from "react";
import { useConsiderationStore } from "../../hooks/useConsiderationStore";
import { ConsiderationInputItem } from "@opensea/seaport-js/lib/types";
import { ItemType } from "@opensea/seaport-js/lib/constants";
import { CONTRACTS } from "@/utils/constants";

function CreateConsiderationCard() {
  const addConsideration = useConsiderationStore((state) => state.add);

  const [nftContractAddress, setNftContractAddress] = useState("");
  const [ftContractAddress, setFtContractAddress] = useState("");
  const [assetId, setAssetId] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChange = (e: any, setter: any) => {
    setter(e.target.value);
  };

  const handleFtSubmit = () => {
    if (!ftContractAddress || !amount) return;

    const key = `${CONTRACTS.sepolia.SwapperToken}`;

    const consideration: ConsiderationInputItem = {
      token: CONTRACTS.sepolia.SwapperToken,
      amount: amount.toString(),
    };

    addConsideration(key, consideration);

    setFtContractAddress("");
    setAmount(0);

    console.log("Submitted");
  };

  const handleNftSubmit = () => {
    if (!nftContractAddress || !assetId) return;

    const key = `${nftContractAddress}-${assetId}`;

    // TODO: Add validation for NFT
    const consideration: ConsiderationInputItem = {
      token: nftContractAddress,
      identifier: assetId,
      itemType: ItemType.ERC721,
    };

    addConsideration(key, consideration);

    setNftContractAddress("");
    setAssetId("");
    console.log("Submitted");
  };

  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow p-4 card bg-base-300 rounded-box place-items-center">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What NFTs do you want?</h2>
            <input
              type="text"
              placeholder="Enter Contract Address"
              className="input w-full max-w-xs"
              onChange={(e) => handleChange(e, setNftContractAddress)}
            />
            <input
              type="text"
              placeholder="Enter Asset ID"
              className="input w-full max-w-xs"
              onChange={(e) => handleChange(e, setAssetId)}
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleNftSubmit()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow p-4 card bg-base-300 rounded-box place-items-center">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Add Fungible Token to Consideration?</h2>
            <select
              className="select select-ghost w-full max-w-xs"
              onChange={(e) => handleChange(e, setFtContractAddress)}
            >
              <option disabled selected>
                Select Token
              </option>
              <option>Swapper Token</option>
            </select>

            <input
              type="text"
              placeholder="Enter Amount"
              className="input w-full max-w-xs"
              onChange={(e) => handleChange(e, setAmount)}
            />

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleFtSubmit()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateConsiderationCard;
