import ApplicantCard from "./ApplicantCard";
import "../styles/List.css";

function ApplicantList({
  applicants,
  setApplicants
}) {

  return (

    <div className="list-container">

      <h2>Applicants</h2>

      {applicants.length === 0 ? (

        <p>No Applicants Yet.</p>

      ) : (

        <div className="job-grid">

          {applicants.map((applicant) => (

            <ApplicantCard
              key={applicant.id}
              applicant={applicant}
              applicants={applicants}
              setApplicants={setApplicants}
            />

          ))}

        </div>

      )}

    </div>

  );

}

export default ApplicantList;