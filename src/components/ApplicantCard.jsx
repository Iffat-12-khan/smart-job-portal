import "../styles/Card.css";

function ApplicantCard({
  applicant,
  applicants,
  setApplicants
}) {

  const deleteApplicant = () => {

    const updatedApplicants =
      applicants.filter(
        (item) => item.id !== applicant.id
      );

    setApplicants(updatedApplicants);

  };

  const updateStatus = (status) => {

    const updatedApplicants =
      applicants.map((item) => {

        if (item.id === applicant.id) {

          return {
            ...item,
            status: status
          };

        }

        return item;

      });

    setApplicants(updatedApplicants);

  };

  return (

    <div className="job-card">

      <h3>{applicant.name}</h3>

      <p>
        <strong>Email:</strong> {applicant.email}
      </p>

      <p>
        <strong>Phone:</strong> {applicant.phone}
      </p>

      <p>
        <strong>Job:</strong> {applicant.jobTitle}
      </p>

      <p>
        <strong>Resume:</strong> {applicant.resume}
      </p>

      <p>
        <strong>Status:</strong> {applicant.status}
      </p>

      <select
        value={applicant.status}
        onChange={(e) =>
          updateStatus(e.target.value)
        }
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>

      <div className="button-group">

        <button
          className="delete-btn"
          onClick={deleteApplicant}
        >
          Delete
        </button>

      </div>

    </div>

  );

}

export default ApplicantCard;