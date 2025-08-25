import axios from "axios";
import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const DiabeticCheck = () => {
  const navigate = useNavigate();
  const [preg, setPreg] = useState(0);
  const [glu, setGlu] = useState(0);
  const [blpres, setBlPres] = useState(0);
  const [skthick, setSkThik] = useState(0);
  const [insulin, setInsulin] = useState("");
  const [bmi, setBmi] = useState(0);
  const [diafun, setDiaFun] = useState("");
  const [age, setAge] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-gray-900 h-full flex flex-col justify-between p-10 gap-10  lg:flex-row 2xl:h-dvh">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ClipLoader color="blue" size={100} />{" "}
        </div>
      ) : (
        <>
          <div className="lg:w-3/4 w-full flex flex-col gap-10">
            <div className="flex flex-row sm:gap-10 gap-5 justify-start items-center">
              <BsArrowLeftCircle
                className="text-2xl sm:text-4xl text-white hover:text-indigo-600 transition duration-300 ease-in-out"
                onClick={() => {
                  navigate("/");
                }}
              />
              <label className="font-bold text-2xl sm:text-5xl text-indigo-600">
                Diabetes Checker
              </label>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Number of Pregnancies
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {preg}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Number of times you have been pregnant.
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="20"
                    value={preg}
                    onChange={(e) => {
                      setPreg(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Glucose Level
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {glu}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Plasma glucose concentration after 2 hours in an oral
                      glucose tolerance test.
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="300"
                    value={glu}
                    onChange={(e) => {
                      setGlu(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Blood Pressure (mmHg)
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {blpres}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Diastolic blood pressure (mm Hg). Normal is around 80.
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="40"
                    max="200"
                    value={blpres}
                    onChange={(e) => {
                      setBlPres(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Skin Thickness (mm)
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {skthick}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Triceps skinfold thickness (mm)
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="100"
                    value={skthick}
                    onChange={(e) => {
                      setSkThik(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">Insulin</label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      2-hour serum insulin (mu U/ml).
                    </div>
                  </div>
                  <input
                    className="bg-white rounded-3xl p-1"
                    placeholder="0 - 900"
                    type="number"
                    value={insulin}
                    onChange={(e) => {
                      setInsulin(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold"></label>
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">
                      Diabetes Pedigree Score
                    </label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      A score indicating family history of diabetes (higher
                      means greater risk)
                    </div>
                  </div>
                  <input
                    className="bg-white rounded-3xl p-1"
                    type="number"
                    step="0.01"
                    placeholder="e.g. 0.234"
                    value={diafun}
                    onChange={(e) => {
                      setDiaFun(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">BMI</label>
                    <FaQuestionCircle
                      className="cursor-pointer"
                      color="white"
                    />
                    <span className="text-indigo-600"> {bmi}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Body Mass Index (weight in kg / height in m²). Healthy
                      range: 18.5–24.9.
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="10"
                    max="70"
                    step="0.1"
                    value={bmi}
                    onChange={(e) => {
                      setBmi(e.target.value);
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
              <button
                className="bg-indigo-600 p-2 rounded-3xl font-bold w-full text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
                onClick={async () => {
                  setLoading(true);
                  try {
                    if (
                      preg === 0 ||
                      glu === 0 ||
                      blpres === 0 ||
                      skthick === 0 ||
                      insulin === "" ||
                      bmi === 0 ||
                      diafun === "" ||
                      age === 0 
                    ) {
                      setLoading(false)
                      Swal.fire({
                      title: "Diabetes Check Result",
                      text: "Unable to determine your diabetes status. Please check your inputs.",
                      icon: "info",
                    });
                    }else{
                    const resp = await axios.post(
                      `http://127.0.0.1:5000/api/get-diabetic-prediction`,
                      {
                        Pregnancies: preg,
                        Glucose: glu,
                        BloodPressure: blpres,
                        SkinThickness: skthick,
                        Insulin: insulin,
                        BMI: bmi,
                        DiabetesPedigreeFunction: diafun,
                        Age: age,
                      }
                    );
                    setLoading(false);
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
                        });}
                  } catch (e) {
                    setLoading(false);
                    console.log(e.message);
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
          <div className="w-full lg:w-1/4 flex flex-col gap-5">
            <label className="font-bold text-2xl sm:text-3xl text-indigo-600 text-center sm:text-left">
              What is Diabetic?
            </label>
            <p className="text-white text-center sm:text-justify">
              Diabetes is a long-term health condition that occurs when the body
              cannot properly regulate blood sugar (glucose) levels. It happens
              either because the body does not produce enough insulin or cannot
              effectively use the insulin it makes. Insulin is the hormone
              responsible for helping glucose enter cells to provide energy.
            </p>
            <p className="text-white text-center sm:text-justify">
              There are different types of diabetes, including Type 1, Type 2,
              and gestational diabetes. Common symptoms include excessive
              thirst, frequent urination, fatigue, and slow healing of wounds.
              If left unmanaged, diabetes can lead to serious complications
              affecting the heart, kidneys, nerves, and eyes.
            </p>
            <p className="text-white text-center sm:text-justify">
              With early detection, healthy lifestyle choices, and proper
              treatment, diabetes can be effectively managed to maintain a good
              quality of life. Our tool helps assess your risk by analyzing key
              health and lifestyle factors.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DiabeticCheck;
