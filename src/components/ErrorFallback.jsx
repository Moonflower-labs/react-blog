import { AiOutlineLoading } from "react-icons/ai";

const ErrorFallback = () => {
  return (
    <div className="h-screen min-h-full overflow-y-auto">
      <div className="flex flex-col gap-4 text-3xl p-3 mx-auto">
        <p>An Error Occurred While Loading Posts...</p>
        <AiOutlineLoading className="animate-spin " />
      </div>
    </div>
  );
};

export default ErrorFallback;
