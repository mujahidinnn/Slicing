import ProjectCard from "./ProjectCard";

const ProjectList = ({ filteredProject }) => {
  const filtered = filteredProject.map((project) => (
    <ProjectCard key={project.id} {...project} project={project} />
  ));

  return (
    <div className="flex flex-col w-full mt-10 pb-10">
      <h1 className="text-3xl font-semibold tracking-wide text-gray-900  pl-4 lg:pl-0">
        Explore!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center place-content-center justify-items-center">
        {filteredProject.length !== 0 ? (
          filtered
        ) : (
          <div className="w-full h-[260px]">
            <p className="text-center text-xl font-semibold">
              Project Tidak Ditemukan
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
