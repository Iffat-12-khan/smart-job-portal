import { useState } from "react";
import "../styles/Form.css";

function ApplicantForm({ jobs, applicants, setApplicants }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    jobTitle: "",
    status: "Applied"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitApplication = (e) => {
    e.preventDefault();

    if (
      form.name === "" ||
      form.email === "" ||
      form.phone === "" ||
      form.resume === "" ||
      form.jobTitle === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newApplicant = {
      id: Date.now(),
      ...form
    };

    setApplicants((prevApplicants) => [
  ...prevApplicants,
  newApplicant
]);

    setForm({
      name: "",
      email: "",
      phone: "",
      resume: "",
      jobTitle: "",
      status: "Applied"
    });

    alert("Application Submitted Successfully!");
  };

  return (
    <div className="form-container">

      <h2>Apply for a Job</h2>

      <form onSubmit={submitApplication}>

        <input
          type="text"
          name="name"
          placeholder="Applicant Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="resume"
          placeholder="Resume Link"
          value={form.resume}
          onChange={handleChange}
        />

        <select
          name="jobTitle"
          value={form.jobTitle}
          onChange={handleChange}
        >
          <option value="">Select Job</option>

          {jobs.map((job) => (
            <option
              key={job.id}
              value={job.title}
            >
              {job.title}
            </option>
          ))}

        </select>

        <button type="submit">
          Submit Application
        </button>

      </form>

    </div>
  );
}

export default ApplicantForm;