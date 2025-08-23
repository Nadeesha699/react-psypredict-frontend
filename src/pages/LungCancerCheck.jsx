import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaQuestionCircle } from "react-icons/fa";

const LungCancerCheck = () => {
  const navigate = useNavigate();
  const [smoking, setSmoking] = useState(0);
  const [age,setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [yellowFinger, setYellowFinger] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [peerPressure, setPeerPressure] = useState(0);
  const [chronicDisease, setChronicDisease] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [allergy, setAllergy] = useState(0);
  const [wheezing, setWheezing] = useState(0);
  const [alchoholUse, setAlcholUse] = useState(0);
  const [coughing, setCoughing] = useState(0);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(0);
  const [swallowingDifficulty, setSwallowingDifficulty] = useState(0);
  const [chestPain, setChestPain] = useState(0);

  return (
    <div className="bg-gray-900 h-dvh flex flex-row justify-between p-10 gap-10">
      <div className="w-3/4 flex flex-col gap-10">
        <div className="flex flex-row gap-10 justify-start items-center">
          <BsArrowLeftCircle
            size={40}
            color="white"
            onClick={() => {
              navigate("/");
            }}
          />
          <label className="font-bold text-5xl text-indigo-600">
            Lungcancer Checker
          </label>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <label className="text-white font-bold">Gender</label>
              <select
                className="rounded-3xl"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
                <label className="text-white font-bold">Age <span>{age}</span></label>
               <input
              className="accent-indigo-700"
              type="range"
              min="1"
              max="120"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Yellow Fingers</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Are your fingers stained yellow (often from smoking)?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={yellowFinger}
                onChange={(e) => {
                  setYellowFinger(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Anxiety</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you often feel anxious or nervous?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={anxiety}
                onChange={(e) => {
                  setAnxiety(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Peer Pressure</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Have you been pressured by friends/colleagues to smoke or
                  drink?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={peerPressure}
                onChange={(e) => {
                  setPeerPressure(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Chronic Disease</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you have any chronic illness (e.g., diabetes, asthma)?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={chronicDisease}
                onChange={(e) => {
                  setChronicDisease(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Fatigue</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you often feel tired or lacking energy?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={fatigue}
                onChange={(e) => {
                  setFatigue(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Allergy</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you have frequent allergic reactions?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={allergy}
                onChange={(e) => {
                  setAllergy(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Wheezing</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you experience wheezing or noisy breathing?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={wheezing}
                onChange={(e) => {
                  setWheezing(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Alcohol Use</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you consume alcohol regularly?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={alchoholUse}
                onChange={(e) => {
                  setAlcholUse(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Coughing</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you cough frequently?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={coughing}
                onChange={(e) => {
                  setCoughing(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">
                  Shortness of Breath
                </label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you experience breathing difficulty when resting or
                  exercising?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={shortnessOfBreath}
                onChange={(e) => {
                  setShortnessOfBreath(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Smoking</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you smoke regularly?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={smoking}
                onChange={(e) => {
                  setSmoking(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">
                  Swallowing Difficulty
                </label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you struggle to swallow food or liquids?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={swallowingDifficulty}
                onChange={(e) => {
                  setSwallowingDifficulty(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                <label className="text-white font-bold">Chest Pain</label>
                <FaQuestionCircle color="white" className="cursor-white" />
                <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                  Do you experience chest pain often?
                </div>
              </div>
              <select
                className="rounded-3xl"
                value={chestPain}
                onChange={(e) => {
                  setChestPain(e.target.value);
                }}
              >
                <option value={0}>Select</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
              </select>
            </div>
          </div>
          
          <button
            className="bg-indigo-600 p-2 rounded-3xl font-bold w-1/6 text-white"
            onClick={async () => {
              try {
                const resp = await axios.post(
                  `http://127.0.0.1:5000/api/get-lung-cancer-prediction`,
                  {
                    GENDER: gender,
                    AGE: age,
                    SMOKING: smoking,
                    YELLOW_FINGERS: yellowFinger,
                    ANXIETY: anxiety,
                    PEER_PRESSURE: peerPressure,
                    "CHRONIC DISEASE": chronicDisease,
                    FATIGUE: fatigue,
                    ALLERGY: allergy,
                    WHEEZING: wheezing,
                    "ALCOHOL CONSUMING": alchoholUse,
                    COUGHING: coughing,
                    "SHORTNESS OF BREATH": shortnessOfBreath,
                    "SWALLOWING DIFFICULTY": swallowingDifficulty,
                    "CHEST PAIN": chestPain,
                  }
                );
                resp.data.result === "Non-Diabetic"
                  ? Swal.fire({
                      title: "Diabetes Check Result",
                      text: "You are likely not diabetic. Keep maintaining a healthy lifestyle!",
                      icon: "success",
                    })
                  : resp.data.result === "Diabetic"
                  ? Swal.fire({
                      title: "Diabetes Check Result",
                      text: "You may have diabetes. Please consult a doctor for proper diagnosis.",
                      icon: "warning",
                    })
                  : Swal.fire({
                      title: "Diabetes Check Result",
                      text: "Unable to determine your diabetes status. Please check your inputs.",
                      icon: "info",
                    });
              } catch (e) {
                console.log(e.message);
                Swal.fire({
                  title: "Diabetes Check Result",
                  text: "Unable to determine your diabetes status. Please check your inputs.",
                  icon: "info",
                });
              }
            }}
          >
            Predict
          </button>
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
