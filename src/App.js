import "./App.css";
import NavigationBar from "./components/navigationBar";
import PersonalProfile from "./components/personalProfile";
import AboutMeSection from "./components/aboutmeSection";
import ProjectsSection from "./components/projectsSection";
import ContactSection from "./components/contactSection";
import FooterSection from "./components/footer";

function App() {
  return (
    <div className="px-4 sm:px-6 md:px-8 bg-white dark:bg-slate-900">
      <NavigationBar />
      <PersonalProfile />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
