import { Footer, Header, ProjectForm } from "../../components";

function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectForm addProject={addProject}/>
      <Footer />
    </>                                   
  )
}

export default ProjectsPage;