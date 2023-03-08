import CreateProjectCard from "./CreateProjectCard";
import ProjectList from "./ProjectList";
import Search from "./Search";
import { projects } from "../../constant";
import { useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const search = searchParams.get("search") ?? "";

  function changeSearchParams(search) {
    setSearchParams({ search });
  }

  const filteredProject = projects.filter((project) => {
    return project.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex flex-col pt-5 px-32 w-full h-full bg-slate-100">
      <Search handleChange={changeSearchParams} search={search} />
      <CreateProjectCard />
      <ProjectList filteredProject={filteredProject} />
    </div>
  );
}

export default Dashboard;
