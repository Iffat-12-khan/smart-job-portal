import { useState } from "react";
import "../styles/Form.css";

function JobForm({ jobs, setJobs }) {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    category: "",
    experience: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const addJob = (e) => {
    e.preventDefault();

    if (
      job.title === "" ||
      job.company === "" ||
      job.location === "" ||
      job.salary === "" ||
      job.category === "" ||
      job.experience === "" ||
      job.description === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newJob = {
      id: Date.now(),
      ...job
    };

    setJobs([...jobs, newJob]);

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      category: "",
      experience: "",
      description: ""
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Job</h2>

      <form onSubmit={addJob}>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />

        <select
          name="category"
          value={job.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option>IT</option>
          <option>Cloud</option>
          <option>Cyber Security</option>
          <option>AI</option>
        </select>

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={job.experience}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
        />

        <button type="submit">
          Add Job
        </button>

      </form>
    </div>
  );
}

export default JobForm;