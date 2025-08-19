import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";

const LungCancerCheck = () => {
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
            Check Lung Cancer
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
          What is Lung Cancer?
        </label>
        <p className="text-white text-justify">
          Lung cancer is a disease in which abnormal cells in the lungs grow and
          multiply uncontrollably, forming tumors that can interfere with normal
          breathing and oxygen exchange. It is one of the most common types of
          cancer worldwide.
        </p>
        <p className="text-white text-justify">
          The two main types are non–small cell lung cancer (NSCLC) and small
          cell lung cancer (SCLC). Risk factors include smoking, long-term
          exposure to harmful chemicals, and family history. Common symptoms may
          include persistent cough, chest pain, shortness of breath, coughing up
          blood, and unexplained weight loss.
        </p>
        <p className="text-white text-justify">
          Early detection is key, as lung cancer can often spread before
          symptoms appear. With timely diagnosis, treatments such as surgery,
          radiation, chemotherapy, and targeted therapies can improve outcomes.
          Our tool helps assess your potential risk by analyzing your health and
          lifestyle data.
        </p>
      </div>
    </div>
  );
};

export default LungCancerCheck;
