import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import JobForm from "./JobForm";
import JobList from "./JobList";
import ApplicantList from "./ApplicantList";

function HRPortal({
  jobs,

  setJobs,

  applicants,

  setApplicants,

  filteredJobs,

  setPortal,
}) {
  return (
    <>
      <Navbar portal="HR" />
      <div style={{ margin: "20px" }}>
        <button className="back-home-btn" onClick={() => setPortal("home")}>
          🏠 Back to Home
        </button>
      </div>

      <section id="dashboard">
        <Dashboard jobs={jobs} applicants={applicants} />
      </section>

      <section id="jobs">
        <JobForm jobs={jobs} setJobs={setJobs} />

        <JobList
          jobs={filteredJobs}
          setJobs={setJobs}
          applicants={applicants}
          setApplicants={setApplicants}
          portal="hr"
        />
      </section>

      <section id="applicants">
        <ApplicantList applicants={applicants} setApplicants={setApplicants} />
      </section>
    </>
  );
}

export default HRPortal;
