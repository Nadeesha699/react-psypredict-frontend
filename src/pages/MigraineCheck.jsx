import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";

const MigraineCheck = () => {
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
            Check Migraine
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
          What is Migraine?
        </label>
        <p className="text-white text-justify">
          Migraine is a neurological condition that causes intense, throbbing
          headaches, often on one side of the head. These headaches can last
          from a few hours to several days and are commonly accompanied by
          nausea, vomiting, and extreme sensitivity to light or sound.
        </p>
        <p className="text-white text-justify">
          Triggers for migraines can include stress, lack of sleep, certain
          foods, hormonal changes, or environmental factors. Some people
          experience an “aura” before a migraine, which may involve visual
          disturbances, tingling sensations, or difficulty speaking.
        </p>
        <p className="text-white text-justify">
          While there is no cure for migraines, treatments such as medications,
          lifestyle changes, and trigger management can help reduce their
          frequency and severity. Our tool aims to assess your risk and help you
          understand potential patterns based on your health and lifestyle data.
        </p>
      </div>
    </div>
  );
};

export default MigraineCheck;
