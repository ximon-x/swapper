"use client";

import Image from "next/image";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Mint from "../ui/mint";

function Main() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <div className="hero my-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/assets/cat.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            width={500}
            height={500}
            alt="Cat"
          />
          <div>
            <h1 className="text-5xl my-6 h-auto font-bold">
              Become the owner of this cat NFT!
            </h1>
            <p className="py-6">
              Cats are one of the most popular pets in the world. They are cute,
              cuddly, and they can be a great source of companionship. There are
              over 500 million domesticated cats in the world today, which means
              that there is no shortage of people who love them! If you&apos;re
              looking for a new furry friend to add to your family, then look no
              further than this adorable cat NFT. This NFT will make an
              excellent addition to any collection or home decor scheme.
              You&apos;ll never have another boring day again with this little
              guy around!
            </p>

            <Mint Token={"CatNFT"} />
          </div>
        </div>
      </div>

      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/assets/dog.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            width={500}
            height={500}
            alt="Dog"
          />
          <div>
            <h1 className="text-5xl my-6 h-auto font-bold">
              This Dog NFT can be yours!
            </h1>
            <p className="py-2">
              Dogs are the best pets. They&apos;re loyal, loving, and they make
              you feel like a million bucks. But what if your dog could be more
              than just a pet? What if it could be an investment that pays off
              in the future? That&apos;s what this NFT is all about. It&apos;s
              not just a cute picture of a dog - it&apos;s also a digital asset
              that can be traded on the blockchain. You can buy and sell these
              NFTs for real money, or you can keep them as collectibles. Either
              way, you win!
            </p>
            <Mint Token={"DogNFT"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
