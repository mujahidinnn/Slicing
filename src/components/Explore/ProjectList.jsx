import ProjectCard from "./ProjectCard";

const ProjectList = ({ filteredProject }) => {
	const filtered = filteredProject.map((project) => (
		<ProjectCard
			key={project.id}
			{...project}
			project={project}
		/>
	));

	return (
		<div className='flex flex-col w-full mt-10 pb-10'>
			<h1 className='text-3xl font-semibold tracking-wide text-gray-900'>
				Explore!
			</h1>

			<div className='flex flex-wrap justify-between mt-10 gap-y-8'>
				{filteredProject.length !== 0 ? (
					filtered
				) : (
					<div className='w-full h-[260px]'>
						<p className='text-center text-xl font-semibold'>
							Project Tidak Ditemukan
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectList;
