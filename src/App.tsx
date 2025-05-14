import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import "./App.css";
import Navbar from "./components/Navbar";
const LandingPage = React.lazy(() => import("./Landing Page/LandingPage"));
const ChatFinal = React.lazy(() => import("./Chat/ChatFinal"));
const Citatebi = React.lazy(() => import("./Citatebi/Citatebi"));
const Login = React.lazy(() => import("./Login/Login"));
const Signup = React.lazy(() => import("./Signup/Signup"));
const Nats = React.lazy(() => import("./NatsarmoebaniPage/Nats"));
const StudyPlan = React.lazy(() => import("./StudyPlan/Studyplan"));
const DasawyisiQuiz = React.lazy(() => import("./Tests/DasawysiQuiz"));
const IItavi = React.lazy(() => import("./Tests/IItavi"));
const IIItavi = React.lazy(() => import("./Tests/IIItavi"));
const IVtavi = React.lazy(() => import("./Tests/IVtavi"));
const Vtavi = React.lazy(() => import("./Tests/Vtavi"));
const Tutors = React.lazy(() => import("./Tutors/Tutors"));
const SpellCorrector = React.lazy(() => import("./EssaystAI/FrontendAI"));
import FooterOfTerg from "./components/Footer/Footer";
const TutorDetail = React.lazy(() => import("./Tutors/TutorDetailed"));
import MaleDaemateba from "./MaleDaemateba/MaleDaemateba";
import RedaqtirebaPage from "./Redaqtireba/RedaqtirebaPage";
import Redaqtireba from "./Redaqtireba/Redaqtrieba";
const PeriphrazedV = React.lazy(() => import("./Periphrazed/PeriphrazedV"));
const Game = React.lazy(() => import("./Game/Game"));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div style={{ marginBottom: "100px" }}>
        <Navbar />
      </div>

      <Suspense fallback={<div>იტვირთება...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/შესვლა" element={<Login />} />
          <Route path="/რეგისტრაცია" element={<Signup />} />
          <Route path="/სიმპოზიუმი" element={<ChatFinal />} />
          <Route path="/რეპეტიტორები" element={<Tutors />} />
          <Route path="/რეპეტიტორები/:id" element={<TutorDetail />} />
          <Route path="/ესეისტი AI" element={<SpellCorrector />} />
          <Route path="/ნაწარმოებანი/აფორიზმები" element={<Citatebi />} />
          <Route path="/ნაწარმოებანი" element={<Nats />} />
          <Route path="/ნაწარმოებანი/გეგმა" element={<StudyPlan />} />
          <Route path="/რედაქტირება" element={<RedaqtirebaPage/>}/>
          <Route path="/რედაქტირება/ტესტი1" element={<Redaqtireba/>}/>
          <Route path="/თამაში" element={<Game />} />
          <Route path="/ნაწარმოებანი/პერიფრაზი" element={<PeriphrazedV />} />
          <Route path="/მალედაემატება" element={<MaleDaemateba />} />
          <Route
            path="/ნაწარმოებანი/პერიფრაზი/ტესტი/დასაწყისი"
            element={<DasawyisiQuiz />}
          />
          <Route
            path="/ნაწარმოებანი/პერიფრაზი/ტესტი/ამბავი როსტევან არაბთა მეფისა"
            element={<IItavi />}
          />
          <Route
            path="/ნაწარმოებანი/პერიფრაზი/ტესტი/როსტევან მეფისგან და ავთანდილისგან ნადირობა"
            element={<IIItavi />}
          />
          <Route
            path="/ნაწარმოებანი/პერიფრაზი/ტესტი/ნახვა არაბთა მეფისაგან მის ყმისა ვეფხისტყაოსნისა"
            element={<IVtavi />}
          />
          <Route
            path="/ნაწარმოებანი/პერიფრაზი/ტესტი/თინათინისაგან ავთანდილის გაგზავნა მის ყმის საძებრად"
            element={<Vtavi />}
          />
        </Routes>
      </Suspense>
      <FooterOfTerg />
    </AuthProvider>
  );
};

export default App;