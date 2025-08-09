import { BsArrowLeftCircle } from "react-icons/bs";
import AboutImage from "../images/about-image.jpg";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-900 h-dvh flex flex-row gap-10">
      <div className="flex flex-col gap-20 p-10">
        <div className="flex flex-row gap-10 justify-start items-center">
          <BsArrowLeftCircle size={40} color="white" onClick={()=>{navigate('/')}}/>
          <label className="font-bold text-5xl text-indigo-600">About</label>
        </div>
        <div className="flex flex-col gap-10">
          <label className="text-white font-bold">
            Welcome to our AI-powered health prediction tool, designed to
            provide quick, accessible, and reliable insights about your
            well-being. Using advanced machine learning, our system processes
            the information you share such as symptoms, lifestyle habits, and
            medical history to estimate the likelihood of certain conditions,
            including migraine, diabetes, lung cancer, and depression
          </label>
          <label className="text-white font-bold">
            For migraines, the tool identifies the possibility of recurring
            headaches based on triggers, frequency, and intensity. For diabetes,
            it evaluates glucose levels, BMI, and lifestyle choices to estimate
            your risk. In the case of lung cancer, it considers smoking habits,
            environmental exposure, and medical history to detect early warning
            signs. For depression, it assesses emotional, behavioral, and
            lifestyle patterns to gauge mental well-being.
          </label>
          <label className="text-white font-bold">
            Our mission is to help you become more aware of potential health
            concerns at an early stage, so you can take preventive measures or
            seek timely medical advice. While the tool can guide you, it is not
            a substitute for professional diagnosis or treatment. Using it is
            simple: enter your health details and symptoms, let our AI analyze
            the data, and receive a risk estimate for each condition along with
            recommendations to consult a healthcare professional if needed.
          </label>
        </div>
      </div>
      <img src={AboutImage} alt="about-image"/>
    </div>
  );
};

export default About;
