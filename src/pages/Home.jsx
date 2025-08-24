import { FaQuestionCircle } from "react-icons/fa";
import DepressionImage from "../images/depression.png";
import LungCancerImage from "../images/lung.png";
import MigraineImage from "../images/migraine.png";
import DiabeticImage from "../images/sugar.png";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 h-dvh flex flex-col justify-between p-10">
      <div className="flex flex-col gap-10 items-center">
        <label className="font-bold text-5xl text-indigo-600">
          Psy<span className="text-white">Predict</span>
        </label>
        <label className="text-white text-xs text-center w-1/2">
          Our AI-powered health prediction tool helps you assess the risk of
          migraine, diabetes, lung cancer, and depression. Simply enter your
          symptoms, and our model provides instant, data-driven insights to
          support early detection and prevention.
        </label>
      </div>
      <div className="flex flex-row justify-evenly">
        <div
          className="border-4 border-indigo-600 w-40 h-40 flex flex-col p-2 justify-evenly items-center rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            navigate("/depression-check");
          }}
        >
          <img
            src={DepressionImage}
            alt="depression-image"
            className="w-1/2 h-1/2"
          />
          <label className="text-white text-sm font-bold">
            Depression Checker
          </label>
        </div>
        <div
          className="border-4 border-indigo-600 w-40 h-40 flex flex-col p-2 justify-evenly items-center rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            navigate("/migraine-check");
          }}
        >
          <img
            src={MigraineImage}
            alt="migraine-image"
            className="w-1/2 h-1/2"
          />
          <label className="text-white text-sm font-bold">Migraine Checker</label>
        </div>
        <div
          className="border-4 border-indigo-600 w-40 h-40 flex flex-col p-2 justify-evenly items-center rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            navigate("/diabetic-check");
          }}
        >
          <img
            src={DiabeticImage}
            alt="diabetic-image"
            className="w-1/2 h-1/2"
          />
          <label className="text-white text-sm font-bold">Diabetes Checker</label>
        </div>
        <div
          className="border-4 border-indigo-600 w-40 h-40 flex flex-col p-2 justify-evenly items-center rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            navigate("/lungcancer-check");
          }}
        >
          <img
            src={LungCancerImage}
            alt="lungcancer-image"
            className="w-1/2 h-1/2"
          />
          <label className="text-white text-sm font-bold">
           Lungcancer Checker
          </label>
        </div>
      </div>
      <div className="w-full flex  justify-end fixed bottom-10 right-10">
        <FaQuestionCircle
          className="text-white hover:text-indigo-600 transition duration-300 ease-in-out"
          size={20}
          onClick={() => {
            navigate("/about");
          }}
        />
      </div>
      <label className="text-indigo-600 text-sm font-bold w-full text-center ">
        <span className="text-white">Develped by</span> Nadeesha Ruwandima
      </label>
    </div>
  );
};

export default Home;
