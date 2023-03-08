import CreateProjectCard from './CreateProjectCard'
import ProjectList from './ProjectList'
import ProjectSearch from './ProjectSearch'
import { projects } from '../../constant'
import { useSearchParams } from 'react-router-dom'

function DashboardExplore() {
	const [searchParams, setSearchParams] = useSearchParams('')
	const search = searchParams.get('search') ?? ''

	function changeSearchParams(search) {
		setSearchParams({ search })
	}

	const filteredProject = projects.filter((project) => {
		return project.title.toLowerCase().includes(search.toLowerCase())
	})

	return (
		<div className='flex flex-col pt-20 px-2 lg:px-10 w-full h-full bg-slate-100'>
			<ProjectSearch
				handleChange={changeSearchParams}
				search={search}
			/>
			<CreateProjectCard />
			<ProjectList filteredProject={filteredProject} />
		</div>
	)
}

export default DashboardExplore
