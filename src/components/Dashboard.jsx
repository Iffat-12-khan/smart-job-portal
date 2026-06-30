import "../styles/Dashboard.css";

function Dashboard({ jobs, applicants }) {

  const totalJobs = jobs.length;

  const totalApplicants = applicants.length;

  const applied = applicants.filter(
    (applicant) => applicant.status === "Applied"
  ).length;

  const interview = applicants.filter(
    (applicant) => applicant.status === "Interview"
  ).length;

  const selected = applicants.filter(
    (applicant) => applicant.status === "Selected"
  ).length;

  const rejected = applicants.filter(
    (applicant) => applicant.status === "Rejected"
  ).length;

  return (

    <div className="dashboard">

      <h2>HR Dashboard</h2>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Jobs</h3>
          <p>{totalJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Total Applicants</h3>
          <p>{totalApplicants}</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <p>{applied}</p>
        </div>

        <div className="stat-card">
          <h3>Interview</h3>
          <p>{interview}</p>
        </div>

        <div className="stat-card">
          <h3>Selected</h3>
          <p>{selected}</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>

      </div>

    </div>

  );

}

export default Dashboard;