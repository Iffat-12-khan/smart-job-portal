import "../styles/Navbar.css";

function Navbar({ portal }) {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">

      <h1>Smart Job Portal ATS</h1>

      <ul>

        {portal === "hr" && (
          <>
            <li onClick={() => scrollToSection("dashboard")}>
              Dashboard
            </li>

            <li onClick={() => scrollToSection("jobs")}>
              Jobs
            </li>

            <li onClick={() => scrollToSection("applicants")}>
              Applicants
            </li>
          </>
        )}

        {portal === "applicant" && (
          <>
            <li onClick={() => scrollToSection("jobs")}>
              Jobs
            </li>

            <li onClick={() => scrollToSection("search")}>
              Search
            </li>

            <li onClick={() => scrollToSection("apply")}>
              Apply
            </li>
          </>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;