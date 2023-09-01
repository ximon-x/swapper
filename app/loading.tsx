import Image from "next/image";

function Loading() {
  return (
    <div className="flex animate-bounce min-h-screen min-w-screen items-center justify-center">
      <Image
        src="/icons/swapper.png"
        className="rounded"
        width={200}
        height={200}
        alt="Swapper"
      />
    </div>
  );
}

export default Loading;
