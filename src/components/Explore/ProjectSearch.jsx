import searchIcon from "../../assets/icons/search.svg";

const ProjectSearch = ({ handleChange, search }) => {
  return (
    <div className="flex justify-between items-center bg-white max-w-xs md:max-w-sm p-3 gap-4 rounded-full mb-5">
      <input
        type="text"
        placeholder="Search"
        className="outline-none w-[150%] bg-transparent"
        spellCheck="false"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img src={searchIcon} alt="search" className="mr-2" />
    </div>
  );
};

export default ProjectSearch;
