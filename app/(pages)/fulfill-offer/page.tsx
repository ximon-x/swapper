"use client";

import NftSwapCard from "@/app/components/ui/nft/nftSwapCard";
import { OrderSchema } from "@/app/database/schema";
import { fulfillOrder, initSeaport } from "@/app/services/seaport";
import { FulfillOrderParams } from "@/utils/types";
import axios from "axios";
import { useState } from "react";
import { useAccount } from "wagmi";

function FulfillSwap() {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderPayload, setOrderPayload] = useState<OrderSchema>();
  const { address } = useAccount();

  const getOrder = async (orderId: string) => {
    const res = await fetch(`/getOffer?orderId=${orderId}`);
    const { order } = (await res.json()) as { order: OrderSchema };
    return order;
  };

  const handleChange = (e: any) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = async () => {
    const params: FulfillOrderParams = {
      fulfiller: address!,
      order: orderPayload?.order!,
    };

    // @ts-ignore
    const seaport = initSeaport(window.ethereum!);

    await fulfillOrder(seaport, params);

    axios
      .post("/fulfillOffer", {
        fulfiller: address,
        orderId: orderId,
      })
      .then(() => {
        window.alert("Offer Fulfilled");
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Fulfill a Swap</h2>
        <div className="p-4 m-4 flex justify-evenly">
          <input
            type="text"
            placeholder="Order ID"
            className="input input-bordered mx-2"
            value={orderId}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary mx-2"
            disabled={!orderId}
            onClick={async () => {
              // @ts-ignore
              window.my_modal_3.showModal();
              try {
                setLoading(true);
                const order = await getOrder(orderId);
                setOrderPayload(order);
                setLoading(false);
              } catch (e) {
                window.alert("Order not found");
              }
            }}
          >
            Search
          </button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              {loading ? (
                <span className="loading loading-spinner text-primary"></span>
              ) : (
                <div>
                  <h1 className="card-title">Order Details</h1>
                  <div className="flex">
                    <div className="m-4">
                      <h2 className="text-xl m-2">
                        Offerer: {orderPayload?.order.parameters.offerer}
                      </h2>
                      <h1 className="text-xl m-2">
                        Fulfiller:{" "}
                        {orderPayload?.fulfilled
                          ? orderPayload?.fulfiller
                          : "Not Fulfilled"}
                      </h1>
                      <h1 className="text-xl m-2">Offer</h1>
                      {orderPayload?.order.parameters.offer.map((item) => (
                        <NftSwapCard key={Math.random()} item={item} />
                      ))}

                      <h1 className="text-xl m-2">Consideration</h1>
                      {orderPayload?.order.parameters.consideration.map(
                        (item) => (
                          <NftSwapCard key={Math.random()} item={item} />
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end m-4">
                    <button
                      className="btn btn-primary"
                      disabled={
                        address ===
                        (orderPayload?.order.parameters
                          .offerer as `0x${string}`)
                      }
                      onClick={handleSubmit}
                    >
                      Fulfill
                    </button>
                  </div>
                </div>
              )}
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default FulfillSwap;
