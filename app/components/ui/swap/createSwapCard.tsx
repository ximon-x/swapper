/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState } from "react";
import CreateConsiderationCard from "../nft/considerationCard";
import ReviewCard from "../nft/reviewCard";
import NftCards from "../nft/nftCards";
import { useOfferStore } from "../../hooks/useOfferStore";
import { useConsiderationStore } from "../../hooks/useConsiderationStore";
import { CreateOrderParams } from "@/utils/types";
import { useAccount } from "wagmi";
import axios from "axios";
import { createOrder, initSeaport } from "@/app/services/seaport";

function CreateSwapCard() {
  const { address } = useAccount();

  const offers = useOfferStore((state) => state.offers);
  const considerations = useConsiderationStore((state) => state.consideration);

  const clearOffer = useOfferStore((state) => state.clear);
  const clearConsideration = useConsiderationStore((state) => state.clear);

  const [mode, setMode] = useState(0);

  const handleMode = (index: number) => {
    return mode === index ? "checked" : null;
  };

  const setAccordian = (index: number) => {
    setMode(index);
  };

  const handleSubmit = async () => {
    try {
      const offer = Array.from(offers.values());
      const consideration = Array.from(considerations.values());

      const params: CreateOrderParams = {
        offer,
        consideration,
        offerer: address!,
      };

      // @ts-ignore
      const seaport = initSeaport(window.ethereum!);

      const order = await createOrder(seaport, params);

      axios
        .post("/createOffer", order)
        .then((res) => {
          window.alert(
            "Offer Created. OrderID: " + res.data.receipt.insertedId
          );
        })
        .catch((err) => {
          console.log("error in request", err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full p-4 m-4">
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-2"
          onClick={() => setMode(0)}
          // @ts-ignore
          checked={handleMode(0)}
        />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-3xl m-4 ">What are you Offering?</h1>
        </div>
        <div className="collapse-content">
          <NftCards />

          <div className="flex justify-end p-8">
            <button className="btn btn-primary" onClick={() => setAccordian(1)}>
              Place Offer
            </button>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          readOnly
          type="radio"
          name="my-accordion-2"
          onClick={() => setMode(1)}
          // @ts-ignore
          checked={handleMode(1)}
        />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-3xl m-4 ">What are your Considerations?</h1>
        </div>
        <div className="collapse-content">
          <CreateConsiderationCard />

          <div className="flex justify-end p-8">
            <button
              className="btn btn-secondary mx-4"
              onClick={() => setAccordian(0)}
            >
              Back
            </button>
            <button
              className="btn btn-primary mx-4"
              onClick={() => setAccordian(2)}
            >
              Place Consideration
            </button>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-2"
          onClick={() => setMode(2)}
          // @ts-ignore
          checked={handleMode(2)}
        />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-3xl m-4 ">Review and Create Swap</h1>
        </div>
        <div className="collapse-content">
          <ReviewCard />
          <div className="flex justify-end p-8">
            <button
              className="btn btn-secondary mx-4"
              onClick={() => {
                clearOffer();
                clearConsideration();
                setAccordian(1);
              }}
            >
              Cancel
            </button>
            <button className="btn btn-primary mx-4" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSwapCard;
