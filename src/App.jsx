import { useState } from "react";
import NewProject from "./components/NewProjcet";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
