import "../styles/Search.css";

function Filter({ category, setCategory }) {

  return (

    <div className="filter-container">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >

        <option value="All">All Categories</option>

        <option value="IT">IT</option>

        <option value="Cloud">Cloud</option>

        <option value="Cyber Security">
          Cyber Security
        </option>

        <option value="AI">
          AI
        </option>

      </select>

    </div>

  );

}

export default Filter;