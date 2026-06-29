import JobCard from "./JobCard";
import "../styles/List.css";

function JobList({ jobs, setJobs, applicants, setApplicants }) {
  return (
    <div className="list-container">

      <h2>Available Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <div className="job-grid">

          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              jobs={jobs}
              setJobs={setJobs}
              applicants={applicants}
              setApplicants={setApplicants}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default JobList;