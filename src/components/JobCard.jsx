import "../styles/Card.css";

function JobCard({
  job,
  jobs,
  setJobs,
  applicants,
  setApplicants
}) {

  const deleteJob = () => {
    const updatedJobs = jobs.filter((item) => item.id !== job.id);
    setJobs(updatedJobs);
  };

  const applyJob = () => {

    const applicant = {
      id: Date.now(),
      name: "New Applicant",
      email: "example@gmail.com",
      phone: "9999999999",
      resume: "Resume.pdf",
      status: "Applied",
      jobTitle: job.title,
      company: job.company
    };

    setApplicants([...applicants, applicant]);

    alert("Application submitted successfully.");
  };

  return (

    <div className="job-card">

      <h3>{job.title}</h3>

      <p>
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Salary:</strong> {job.salary}
      </p>

      <p>
        <strong>Category:</strong> {job.category}
      </p>

      <p>
        <strong>Experience:</strong> {job.experience}
      </p>

      <p>{job.description}</p>

      <div className="button-group">

        <button
          className="apply-btn"
          onClick={applyJob}
        >
          Apply
        </button>

        <button
          className="delete-btn"
          onClick={deleteJob}
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default JobCard;