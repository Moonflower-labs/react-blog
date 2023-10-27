import { AiOutlineLoading } from "react-icons/ai";

const SuspenseFallback = () => {
  return (
    <div className="h-screen min-h-full w-full flex justify-center items-center overflow-y-auto">
      <div className="flex gap-6 p-2">
        <p className="text-3xl"> Loading Posts...</p>
        <AiOutlineLoading className="animate-spin" />
      </div>
    </div>
  );
};

export default SuspenseFallback;
