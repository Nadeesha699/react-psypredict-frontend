import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaQuestionCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const DepressionCheck = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [academicPres, setAcademicPres] = useState(0);
  const [workPres, setWorkPres] = useState(0);
  const [cgpa, setCGPA] = useState(0);
  const [studySatis, setStudySatis] = useState(0);
  const [jobSatis, setJobSatis] = useState(0);
  const [sleepDur, setSleepDur] = useState("");
  const [dietaryH, setDietaryH] = useState("");
  const [sui, setSui] = useState("");
  const [sHours, setSHours] = useState(0);
  const [finStress, setFinStress] = useState(0);
  const [mIll, setMIll] = useState("");
  const [age, setAge] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-gray-900 h-dvh flex flex-row justify-between p-10 gap-10">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ClipLoader color="blue" size={100} />{" "}
        </div>
      ) : (
        <>
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
                Depression Checker
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
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold">Proffession</label>
                  <select
                    className="rounded-3xl"
                    value={profession}
                    onChange={(e) => {
                      setProfession(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Academic Pressure
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {academicPres}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Do you feel stressed because of exams or grades?
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={academicPres}
                    onChange={(e) => {
                      setAcademicPres(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Work Pressure
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {workPres}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Do you feel overloaded with work tasks?
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={workPres}
                    onChange={(e) => {
                      setWorkPres(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">CGPA</label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {cgpa}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Your grade point average in academics
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    step="0.01"
                    min="0"
                    max="10"
                    type="range"
                    value={cgpa}
                    onChange={(e) => {
                      setCGPA(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Job Satisfaction
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {jobSatis}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      How satisfied are you with your job? (1 = very
                      dissatisfied, 5 = very satisfied)
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={jobSatis}
                    onChange={(e) => {
                      setJobSatis(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Study Satisfaction
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {studySatis}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      How satisfied are you with your studies? (1 = very
                      dissatisfied, 5 = very satisfied)
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={studySatis}
                    onChange={(e) => {
                      setStudySatis(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold">
                    Age <span className="text-indigo-600">{age}</span>
                  </label>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
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
                    <label className="text-white font-bold">
                      Sleep Duration
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      On average, how many hours do you sleep daily?
                    </div>
                  </div>
                  <select
                    className="rounded-3xl"
                    value={sleepDur}
                    onChange={(e) => {
                      setSleepDur(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Less than 5 hours">Less than 5 hours</option>
                    <option value="5-6 hours">5-6 hours</option>
                    <option value="7-8 hours">7-8 hours</option>
                    <option value="More than 8 hours">More than 8 hours</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Dietary Habits
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      How healthy do you consider your daily diet?
                    </div>
                  </div>
                  <select
                    className="rounded-3xl"
                    value={dietaryH}
                    onChange={(e) => {
                      setDietaryH(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Healthy">Healthy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Unhealthy">Unhealthy</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Suicidal Thoughts
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Have you ever felt like harming yourself?
                    </div>
                  </div>
                  <select
                    className="rounded-3xl"
                    value={sui}
                    onChange={(e) => {
                      setSui(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Family History of Mental Illness
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Has anyone in your family been diagnosed with a mental
                      illness?
                    </div>
                  </div>
                  <select
                    className="rounded-3xl"
                    value={mIll}
                    onChange={(e) => {
                      setMIll(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Work/Study Hours
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {sHours}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Average number of hours spent working or studying per day.
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    step="0.5"
                    min="0"
                    max="16"
                    value={sHours}
                    onChange={(e) => {
                      setSHours(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Financial Stress
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {finStress}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Do you feel stressed about money?
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="10"
                    value={finStress}
                    onChange={(e) => {
                      setFinStress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                className="bg-indigo-600 p-2 rounded-3xl font-bold w-full text-white"
                onClick={async () => {
                  setLoading(true);
                  try {
                    if (
                      gender === "" &&
                      profession === "" &&
                      academicPres === 0 &&
                      workPres === 0 &&
                      cgpa === 0 &&
                      studySatis === 0 &&
                      jobSatis === 0 &&
                      sleepDur === "" &&
                      dietaryH === "" &&
                      sui === "" &&
                      sHours === 0 &&
                      finStress === 0 &&
                      mIll === "" &&
                      age === 0
                    ) {
                      setLoading(false)
                      Swal.fire({
                        title: "Depression Check Result",
                        text: "We couldn't determine your depression status. Please review your inputs and try again.",
                        icon: "info",
                      });
                    }else{
                    const resp = await axios.post(
                      `http://127.0.0.1:5000/api/get-depression-predition`,
                      {
                        Gender: gender,
                        Age: age,
                        Profession: profession,
                        "Academic Pressure": academicPres,
                        "Work Pressure": workPres,
                        CGPA: cgpa,
                        "Study Satisfaction": studySatis,
                        "Job Satisfaction": jobSatis,
                        "Sleep Duration": sleepDur,
                        "Dietary Habits": dietaryH,
                        "Have you ever had suicidal thoughts ?": sui,
                        "Work/Study Hours": sHours,
                        "Financial Stress": finStress,
                        "Family History of Mental Illness": mIll,
                      }
                    );
                    setLoading(false);
                    resp.data.result === "Non-Depression"
                      ? Swal.fire({
                          title: "Depression Check Result",
                          text: "You are likely not Depression. Keep maintaining a healthy lifestyle!",
                          icon: "success",
                        })
                      : resp.data.result === "Depression"
                      ? Swal.fire({
                          title: "Depression Check Result",
                          text: "You may be experiencing signs of depression. Please consult a medical professional for proper guidance.",
                          icon: "warning",
                        })
                      : Swal.fire({
                          title: "Depression Check Result",
                          text: "We couldn't determine your depression status. Please review your inputs and try again.",
                          icon: "info",
                        });}
                  } catch (e) {
                    setLoading(false);
                    console.log(e.message);
                    // Swal.fire({
                    //   title: "Depression Check Result",
                    //   text: "We couldn't determine your depression status. Please review your inputs and try again.",
                    //   icon: "info",
                    // });
                    Swal.fire({
                      title: "Server Error",
                      text: "We could not connect to the server. Please try again later or check your internet connection.",
                      icon: "error",
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
              What is Depression?
            </label>
            <p className="text-white text-justify">
              Depression is a common
              mental health disorder that affects the way a person thinks,
              feels, and behaves. It goes beyond temporary feelings of sadness
              and can interfere with daily life, work, and relationships. People
              experiencing depression may have persistent low mood, loss of
              interest in activities, changes in sleep or appetite, and
              difficulty concentrating.
            </p>
            <p className="text-white text-justify">
              With proper support, treatment, and early prediction, depression
              can be managed effectively. Our tool helps identify the risk of
              depression by analyzing your responses and lifestyle factors.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DepressionCheck;
