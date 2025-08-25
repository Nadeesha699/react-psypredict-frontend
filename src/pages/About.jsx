import { BsArrowLeftCircle } from "react-icons/bs";
import AboutImage from "../images/about-image.jpg";
import { useNavigate } from "react-router";
import { FaGithub, FaGlobe, FaLinkedin} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-900 h-full flex flex-col sm:flex-row 2xl:h-dvh">
      <div className="flex flex-col gap-20 p-10">
        <div className="flex flex-row gap-10 justify-start items-center">
          <BsArrowLeftCircle  className="text-white hover:text-indigo-600 transition duration-300 ease-in-out text-4xl" onClick={()=>{navigate('/')}}/>
          <label className="font-bold text-3xl sm:text-5xl text-indigo-600">About</label>
        </div>
        <div className="flex flex-col gap-10">
          <label className="text-white font-bold text-center sm:text-justify">
            Welcome to our AI-powered health prediction tool, designed to
            provide quick, accessible, and reliable insights about your
            well-being. Using advanced machine learning, our system processes
            the information you share such as symptoms, lifestyle habits, and
            medical history to estimate the likelihood of certain conditions,
            including migraine, diabetes, lung cancer, and depression
          </label>
          <label className="text-white font-bold text-center sm:text-justify">
            For migraines, the tool identifies the possibility of recurring
            headaches based on triggers, frequency, and intensity. For diabetes,
            it evaluates glucose levels, BMI, and lifestyle choices to estimate
            your risk. In the case of lung cancer, it considers smoking habits,
            environmental exposure, and medical history to detect early warning
            signs. For depression, it assesses emotional, behavioral, and
            lifestyle patterns to gauge mental well-being.
          </label>
          <label className="text-white font-bold text-center sm:text-justify">
            Our mission is to help you become more aware of potential health
            concerns at an early stage, so you can take preventive measures or
            seek timely medical advice. While the tool can guide you, it is not
            a substitute for professional diagnosis or treatment. Using it is
            simple: enter your health details and symptoms, let our AI analyze
            the data, and receive a risk estimate for each condition along with
            recommendations to consult a healthcare professional if needed.
          </label>
        </div>
        <div className="flex flex-col justify-between bg-black/50 p-5 rounded-md gap-10 md:flex-row md:rounded-full">
          <div className="flex flex-row justify-center items-center gap-1">
            <FaLinkedin className="text-blue-500"/>
            <a className="text-blue-500 text-xs font-bold hover:text-white transition duration-300 ease-in-out" href="https://www.linkedin.com/in/nadeesha-ruwandima-b5a356259/">Nadeesha Ruwandima</a>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <FaGithub className="text-purple-500"/>
            <a className="text-purple-500 text-xs font-bold hover:text-white transition duration-300 ease-in-out" href="https://github.com/Nadeesha699">Nadeesha699</a>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <FaGlobe className="text-cyan-500"/>
            <a className="text-cyan-500 text-xs font-bold hover:text-white transition duration-300 ease-in-out" href="https://nadeesha699.github.io/nadeesha-ruwandima/">Nadeesha Ruwandima</a>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <FiMail className="text-red-500"/>
            <a className="text-red-500 text-xs font-bold hover:text-white transition duration-300 ease-in-out" href="mailto:nadeesharuwandima@gmail.com">nadeesharuwandima@gmail.com</a>
          </div>
        </div>
      </div>
      <img src={AboutImage} alt="about-image" className="sm:w-1/2" />
    </div>
  );
};

export default About;
