import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Triangle
        visible={true}
        height="150"
        width="150"
        color="#0000ff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
