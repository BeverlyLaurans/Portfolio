import Introduction from "../../components/Introduction/Introduction";
import ProjectList from "../../components/ProjectList/ProjectList";
import Skills from "../../components/Skills/Skills";
import ContactForm from "../../components/ContactForm/ContactForm";
// import Modal from "../../components/Modal/Modal";

function Home() {
    return (
      <div>
        <Introduction />
        <ProjectList />
        {/* <Modal /> */}
        <Skills />
        <ContactForm />
      </div>
    )
  }
  
  export default Home
