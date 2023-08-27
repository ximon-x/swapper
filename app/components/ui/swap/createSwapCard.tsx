/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import NftCards from "../nft/nftCards";

import { useState } from "react";
import { useOfferStore } from "../../hooks/useOfferStore";

function CreateSwapCard() {
  const offers = useOfferStore((state) => state.offers);
  const [mode, setMode] = useState(0);

  const handleMode = (index: number) => {
    return mode === index ? "checked" : null;
  };

  const setAccordian = (index: number) => {
    setMode(index);
  };

  const handleSubmit = () => {
    console.log("Submitted");
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
          <h2 className="text-2xl m-4">Considerations</h2>
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
          <div className="flex justify-end p-8">
            <button
              className="btn btn-secondary mx-4"
              onClick={() => setAccordian(1)}
            >
              Back
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
