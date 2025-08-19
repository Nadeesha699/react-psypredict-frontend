import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";

const DiabeticCheck = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 h-dvh flex flex-row justify-between p-10">
      <div className="w-3/4">
        <div className="flex flex-row gap-10 justify-start items-center">
          <BsArrowLeftCircle
            size={40}
            color="white"
            onClick={() => {
              navigate("/");
            }}
          />
          <label className="font-bold text-5xl text-indigo-600">
            Check Diabetic
          </label>
        </div>
        <div>
          <div>
            <label>Gender</label>
            <select>
              <option value={""}>select</option>
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </select>
          </div>
          <div>
            <label>Age</label>
            <input type="range" min="0" max="120" />
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col gap-5">
        <label className="font-bold text-3xl text-indigo-600">
          What is Diabetic?
        </label>
        <p className="text-white text-justify">
          Diabetes is a long-term health condition that occurs when the body
          cannot properly regulate blood sugar (glucose) levels. It happens
          either because the body does not produce enough insulin or cannot
          effectively use the insulin it makes. Insulin is the hormone
          responsible for helping glucose enter cells to provide energy.
        </p>
        <p className="text-white text-justify">
          There are different types of diabetes, including Type 1, Type 2, and
          gestational diabetes. Common symptoms include excessive thirst,
          frequent urination, fatigue, and slow healing of wounds. If left
          unmanaged, diabetes can lead to serious complications affecting the
          heart, kidneys, nerves, and eyes.
        </p>
        <p className="text-white text-justify">
          With early detection, healthy lifestyle choices, and proper treatment,
          diabetes can be effectively managed to maintain a good quality of
          life. Our tool helps assess your risk by analyzing key health and
          lifestyle factors.
        </p>
      </div>
    </div>
  );
};

export default DiabeticCheck;
