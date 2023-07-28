import { useEffect } from "react";
import Introduction from "../../components/Introduction/Introduction";
import ProjectList from "../../components/ProjectList/ProjectList";
import Skills from "../../components/Skills/Skills";
import ContactForm from "../../components/ContactForm/ContactForm";
import Formation from "../../components/Formation/Formation";

function Home() {
  
  // Redirection vers l'ancre demandée en arrivant sur la "page" Home (depuis les projets)
  useEffect(() => {
    const scrollIntoView = () => {
      const section = window.location.hash;

      if (section) {
        const sectionElement = document.querySelector(section);

        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    scrollIntoView();
  }, []);

  return (
    <div>
      <Introduction />
      <ProjectList />
      <Skills />
      <Formation />
      <ContactForm />
    </div>
  );
}

export default Home;