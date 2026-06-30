import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import JobList from "./JobList";
import ApplicantForm from "./ApplicantForm";

function ApplicantPortal({
  jobs,

  filteredJobs,

  search,

  setSearch,

  category,

  setCategory,

  applicants,

  setApplicants,

  selectedJob,

  setSelectedJob,

  setPortal,
}) {
  return (
    <>
      <Navbar portal="applicant" />
      <div style={{ margin: "20px" }}>
        <button className="back-home-btn" onClick={() => setPortal("home")}>
          🏠 Back to Home
        </button>
      </div>

      <section id="search">
        <SearchBar search={search} setSearch={setSearch} />

        <Filter category={category} setCategory={setCategory} />
      </section>

      <section id="jobs">
        <JobList
          jobs={filteredJobs}
          portal="applicant"
          setSelectedJob={setSelectedJob}
        />
      </section>

      <section id="apply">
        <ApplicantForm
          jobs={jobs}
          applicants={applicants}
          setApplicants={setApplicants}
          selectedJob={selectedJob}
        />
      </section>
    </>
  );
}

export default ApplicantPortal;
