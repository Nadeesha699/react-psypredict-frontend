import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaQuestionCircle } from "react-icons/fa";
import { LoadingPage, TittleComponet } from "../components/Components";

const MigraineCheck = () => {
  const [age, setAge] = useState(0);
  const [duration, setDuration] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [location, setLocation] = useState(0);
  const [character, setCharacter] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [nausea, setNausea] = useState(0);
  const [vomit, setVomit] = useState(0);
  const [phonophobia, setPhonophobia] = useState(0);
  const [photophobia, setPhotophobia] = useState(0);
  const [visual, setVisual] = useState(0);
  const [sensory, setSensory] = useState(0);
  const [dysphasia, setDysphasia] = useState(0);
  const [dysarthria, setDysarthria] = useState(0);
  const [vertigo, setVertigo] = useState(0);
  const [tinnitus, setTinnitus] = useState(0);
  const [hypoacusis, setHypoacusis] = useState(0);
  const [diplopia, setDiplopia] = useState(0);
  const [defect, setDefect] = useState(0);
  const [ataxia, setAtaxia] = useState(0);
  const [conscience, setConscience] = useState(0);
  const [paresthesia, setParesthesia] = useState(0);
  const [dpf, setDPF] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between p-10 gap-10 lg:flex-row 2xl:h-dvh">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="lg:w-3/4 w-full flex flex-col gap-10">
            <TittleComponet name="Migraine Checker" />
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">Duration</label>
                    <FaQuestionCircle color="white" className="cursor-white" />
                    <span className="text-indigo-600"> {duration}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      How long does each headache last? (1 = short, 5 = very
                      long)
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={duration}
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">Frequency</label>
                    <FaQuestionCircle color="white" className="cursor-white" />
                    <span className="text-indigo-600"> {frequency}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      How often headaches occur ? ( 1 = rare, 5 = very frequent
                      )
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={frequency}
                    onChange={(e) => {
                      setFrequency(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">Intensity</label>
                    <FaQuestionCircle color="white" className="cursor-white" />
                    <span className="text-indigo-600"> {intensity}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      How strong is the headache ? ( 1 = mild, 5 = severe )
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={intensity}
                    onChange={(e) => {
                      setIntensity(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">Location</label>
                    <FaQuestionCircle color="white" className="cursor-white" />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Choose where the headache is usually felt.
                    </div>
                  </div>
                  <select
                    className="rounded-3xl"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  >
                    <option value={0}>Select</option>
                    <option value={1}>One side of head (unilateral)</option>
                    <option value={2}>Both sides (bilateral)</option>
                    <option value={3}>Back of head</option>
                    <option value={4}>Front / forehead</option>
                    <option value={5}>Around eyes / temple</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">Character</label>
                    <FaQuestionCircle color="white" className="cursor-white" />
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Choose how the headache pain feels.
                    </div>
                  </div>
                  <select
                    className="rounded-3xl"
                    value={character}
                    onChange={(e) => {
                      setCharacter(e.target.value);
                    }}
                  >
                    <option value={0}>Select</option>
                    <option value={1}>Throbbing / pulsating</option>
                    <option value={2}>Pressure / tight band</option>
                    <option value={3}>Stabbing / sharp</option>
                    <option value={4}>Dull ache</option>
                    <option value={5}>Mixed / other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Nausea</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Feeling sick to stomach
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={nausea === 1}
                    onChange={(e) => {
                      setNausea(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Vomit</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Actually vomiting
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={vomit === 1}
                    onChange={(e) => {
                      setVomit(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Phonophobia</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Headache worsens with noise
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={phonophobia === 1}
                    onChange={(e) => {
                      setPhonophobia(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Photophobia</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Actually vomiting
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={photophobia === 1}
                    onChange={(e) => {
                      setPhotophobia(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Visual</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Vision problems (flashes, spots)
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={visual === 1}
                    onChange={(e) => {
                      setVisual(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Sensory</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Numbness or tingling in body
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={sensory === 1}
                    onChange={(e) => {
                      setSensory(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Dysphasia</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Difficulty finding words
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={dysphasia === 1}
                    onChange={(e) => {
                      setDysphasia(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Dysarthria</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Slurred speech
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={dysarthria === 1}
                    onChange={(e) => {
                      setDysarthria(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Vertigo</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Spinning or dizziness
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={vertigo === 1}
                    onChange={(e) => {
                      setVertigo(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Tinnitus</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Ringing in ears
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={tinnitus === 1}
                    onChange={(e) => {
                      setTinnitus(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Hypoacusis</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Reduced hearing
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={hypoacusis === 1}
                    onChange={(e) => {
                      setHypoacusis(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Diplopia</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Double vision
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={diplopia === 1}
                    onChange={(e) => {
                      setDiplopia(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Defect</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Partial vision loss
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={defect === 1}
                    onChange={(e) => {
                      setDefect(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Ataxia</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Balance problems
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={ataxia === 1}
                    onChange={(e) => {
                      setAtaxia(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Conscience</label>
                  <FaQuestionCircle color="white" className="cursor-white" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Fainting or confusion
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={conscience === 1}
                    onChange={(e) => {
                      setConscience(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-left items-center gap-2 relative inline-block group w-1/2">
                  <label className="text-white font-bold">Paresthesia</label>
                  <FaQuestionCircle color="white" className="cursor-pointer" />
                  <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                    Pins & needles sensation
                  </div>
                  <input
                    type="checkbox"
                    className="accent-indigo-700"
                    checked={paresthesia === 1}
                    onChange={(e) => {
                      setParesthesia(e.target.checked ? 1 : 0);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
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
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-left items-center gap-2 relative inline-block group">
                    <label className="text-white font-bold">DPF</label>
                    <FaQuestionCircle color="white" className="cursor-white" />
                    <span className="text-indigo-600"> {dpf}</span>
                    <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-indigo-200 text-xs p-2 rounded-md shadow-md w-52">
                      Duration of aura symptoms before headache (0 = none, 5 =
                      very long).
                    </div>
                  </div>
                  <input
                    className="accent-indigo-700"
                    type="range"
                    min="0"
                    max="5"
                    value={dpf}
                    onChange={(e) => {
                      setDPF(e.target.value);
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
                      age === 0 ||
                      duration === 0 ||
                      frequency === 0 ||
                      intensity === 0 ||
                      dpf === 0 ||
                      character === 0 ||
                      location === 0
                    ) {
                      setLoading(false);
                      Swal.fire({
                        title: "Migraine Check Result",
                        text: "Unable to determine your migraine type. Please review your inputs.",
                        icon: "info",
                      });
                    } else {
                      const resp = await axios.post(
                        `http://127.0.0.1:5000/api/get-migraine-prediction`,
                        {
                          Age: age,
                          Duration: duration,
                          Frequency: frequency,
                          Location: location,
                          Character: character,
                          Intensity: intensity,
                          Nausea: nausea,
                          Vomit: vomit,
                          Phonophobia: phonophobia,
                          Photophobia: photophobia,
                          Visual: visual,
                          Sensory: sensory,
                          Dysphasia: dysphasia,
                          Dysarthria: dysarthria,
                          Vertigo: vertigo,
                          Tinnitus: tinnitus,
                          Hypoacusis: hypoacusis,
                          Diplopia: diplopia,
                          Defect: defect,
                          Ataxia: ataxia,
                          Conscience: conscience,
                          Paresthesia: paresthesia,
                          DPF: dpf,
                        }
                      );
                      setLoading(false);
                      resp.data.result === "Migraine without aura"
                        ? Swal.fire({
                            title: "Migraine Check Result",
                            text: "You have migraine without aura. Consult your doctor if headaches are frequent or severe.",
                            icon: "info",
                          })
                        : resp.data.result === "Typical aura with migraine"
                        ? Swal.fire({
                            title: "Migraine Check Result",
                            text: "You have a typical aura with migraine. Keep track of triggers and seek medical advice if needed.",
                            icon: "info",
                          })
                        : resp.data.result === "Basilar-type aura"
                        ? Swal.fire({
                            title: "Migraine Check Result",
                            text: "You have basilar-type aura. This type can affect balance and vision — please consult a doctor.",
                            icon: "info",
                          })
                        : resp.data.result === "Familial hemiplegic migraine"
                        ? Swal.fire({
                            title: "Migraine Check Result",
                            text: "You may have familial hemiplegic migraine, which is rare. Medical evaluation is recommended.",
                            icon: "info",
                          })
                        : resp.data.result === "Sporadic hemiplegic migraine"
                        ? Swal.fire({
                            title: "Migraine Check Resulte",
                            text: "You may have sporadic hemiplegic migraine. Please consult a neurologist for proper assessment",
                            icon: "info",
                          })
                        : resp.data.result === "Typical aura with migraine"
                        ? Swal.fire({
                            title: "Migraine Check Result",
                            text: "You have a typical aura with migraine. Keep track of triggers and consult your doctor if needed.",
                            icon: "info",
                          })
                        : Swal.fire({
                            title: "Migraine Check Result",
                            text: "Unable to determine your migraine type. Please review your inputs.",
                            icon: "info",
                          });
                    }
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
              What is Migraine?
            </label>
            <p className="text-white text-center sm:text-justify">
              Migraine is a neurological condition that causes intense,
              throbbing headaches, often on one side of the head. These
              headaches can last from a few hours to several days and are
              commonly accompanied by nausea, vomiting, and extreme sensitivity
              to light or sound.
            </p>
            <p className="text-white text-center sm:text-justify">
              Triggers for migraines can include stress, lack of sleep, certain
              foods, hormonal changes, or environmental factors. Some people
              experience an “aura” before a migraine, which may involve visual
              disturbances, tingling sensations, or difficulty speaking.
            </p>
            <p className="text-white text-center sm:text-justify">
              While there is no cure for migraines, treatments such as
              medications, lifestyle changes, and trigger management can help
              reduce their frequency and severity. Our tool aims to assess your
              risk and help you understand potential patterns based on your
              health and lifestyle data.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default MigraineCheck;
