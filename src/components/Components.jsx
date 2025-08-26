import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";

export const LoadingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ClipLoader color="blue" size={100} />
    </div>
  );
};

export const TittleComponet = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row sm:gap-10 gap-5 justify-start items-center">
      <BsArrowLeftCircle
        className="text-2xl sm:text-4xl text-white hover:text-indigo-600 transition duration-300 ease-in-out"
        onClick={() => {
          navigate("/");
        }}
      />
      <label className="font-bold text-2xl sm:text-5xl text-indigo-600">
        {props.name}
      </label>
    </div>
  );
};
