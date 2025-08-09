import BackgroundImage from "../images/background-image.jpg";

const About = () => {
  return (
    <div
      className="w-full h-dvh bg-no-repeat bg-center bg-cover "
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="h-dvh w-full bg-black/50">
     <label className="text-white">
        Welcome to our AI-powered health prediction tool — created to give you quick, accessible, and reliable insights about your health. By using advanced machine learning, our system analyzes the information you provide — such as your symptoms, lifestyle habits, and medical history — to estimate the likelihood of certain conditions, including:

Migraine – Identifies the possibility of recurring headaches based on your triggers, frequency, and intensity.

Diabetes – Looks at glucose levels, BMI, and lifestyle to estimate your risk.

Lung Cancer – Considers smoking habits, environmental exposure, and medical history to spot early warning signs.

Depression – Assesses emotional, behavioral, and lifestyle patterns to gauge mental well-being.

Our Goal
Our mission is to help you become more aware of potential health concerns early, so you can take steps toward prevention or timely medical advice. While our tool can guide you, it’s not a replacement for a professional diagnosis or treatment.

How It Works
Enter Your Information – Share basic health details and symptoms.

AI Analysis – Our trained models process the data using patterns learned from medical research.

Get Your Results – Receive a risk estimate for each condition, along with suggestions to seek professional help if needed.</label> 
      </div>
    </div>
  );
};

export default About;
