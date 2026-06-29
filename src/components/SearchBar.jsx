import "../styles/Search.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search by Job Title or Company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;