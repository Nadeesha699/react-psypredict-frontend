import axios from "axios";
import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const DiabeticCheck = () => {
  const navigate = useNavigate();

  const [preg, setPreg] = useState(0);
  const [glu, setGlu] = useState(0);
  const [blpres, setBlPres] = useState(0);
  const [skthick, setSkThik] = useState(0);
  const [insulin, setInsulin] = useState("");
  const [bmi, setBmi] = useState(0.0);
  const [diafun, setDiaFun] = useState("");
  const [age, setAge] = useState(0);

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
            Diabetes Checker
          </label>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col">
            <label className="text-white font-bold">
              Number of Pregnancies{" "}
              <span className="text-indigo-600">{preg}</span>
            </label>
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
          <div className="flex flex-col">
            <label className="text-white font-bold">
              Glucose Level <span className="text-indigo-600">{glu}</span>
            </label>
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
          <div className="flex flex-col">
            <label className="text-white font-bold">
              Blood Pressure (mmHg){" "}
              <span className="text-indigo-600">{blpres}</span>
            </label>
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
          <div className="flex flex-col">
            <label className="text-white font-bold">
              Skin Thickness (mm){" "}
              <span className="text-indigo-600">{skthick}</span>
            </label>
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
          <div className="flex flex-col">
            <label className="text-white font-bold">
              Insulin Level (µU/ml)
            </label>
            <input
              className="bg-white rounded-3xl p-2 w-1/2"
              placeholder="0 - 900"
              type="number"
              value={insulin}
              onChange={(e) => {
                setInsulin(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">
              BMI <span className="text-indigo-600">{bmi}</span>
            </label>
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
          <div className="flex flex-col">
            <label className="text-white font-bold">
              Diabetes Pedigree Score
            </label>
            <input
              className="bg-white rounded-3xl p-1 w-1/2"
              type="number"
              step="0.01"
              placeholder="e.g. 0.234"
              value={diafun}
              onChange={(e) => {
                setDiaFun(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
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
          <button
            className="bg-indigo-600 p-2 rounded-3xl font-bold w-1/6 text-white"
            onClick={async () => {
              try {
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
