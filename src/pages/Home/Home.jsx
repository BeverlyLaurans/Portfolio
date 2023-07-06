import Introduction from "../../components/Introduction/Introduction";
import ProjectList from "../../components/ProjectList/ProjectList";
import Skills from "../../components/Skills/Skills";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    const scrollIntoView = () => {
      const section = window.location.hash;
      
      if (section) {
        const sectionElement = document.querySelector(section);
        
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth'
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
        <ContactForm />
      </div>
    )
  }
  
  export default Home
