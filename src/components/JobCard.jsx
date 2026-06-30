import "../styles/Card.css";

function JobCard({
  job,
  jobs,
  setJobs,
  portal
}) {

  const deleteJob = () => {
    const updatedJobs = jobs.filter((item) => item.id !== job.id);
    setJobs(updatedJobs);
  };

  const applyJob = () => {

    document
      .getElementById("apply")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };

  return (

    <div className="job-card">

      <h3>{job.title}</h3>

      <p><strong>Company:</strong> {job.company}</p>

      <p><strong>Location:</strong> {job.location}</p>

      <p><strong>Salary:</strong> {job.salary}</p>

      <p><strong>Category:</strong> {job.category}</p>

      <p><strong>Experience:</strong> {job.experience}</p>

      <p>{job.description}</p>

      <div className="button-group">

        {portal === "applicant" && (

          <button
            className="apply-btn"
            onClick={applyJob}
          >
            Apply
          </button>

        )}

        {portal === "hr" && (

          <button
            className="delete-btn"
            onClick={deleteJob}
          >
            Delete
          </button>

        )}

      </div>

    </div>

  );
}

export default JobCard;