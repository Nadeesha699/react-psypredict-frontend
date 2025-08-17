import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";

const DepressionCheck = () => {
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
            Check Depression
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
          What is Depression?
        </label>
        <p className="text-white text-justify">
          <span className="text-indigo-600">Depression is</span> a common mental
          health disorder that affects the way a person thinks, feels, and
          behaves. It goes beyond temporary feelings of sadness and can
          interfere with daily life, work, and relationships. People
          experiencing depression may have persistent low mood, loss of interest
          in activities, changes in sleep or appetite, and difficulty
          concentrating.
        </p>
        <p className="text-white text-justify">
          With proper support, treatment, and early prediction, depression can
          be managed effectively. Our tool helps identify the risk of depression
          by analyzing your responses and lifestyle factors.
        </p>
      </div>
    </div>
  );
};

export default DepressionCheck;
