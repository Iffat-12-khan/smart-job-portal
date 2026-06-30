import { useState } from "react";
import Home from "./components/Home";
import HRPortal from "./components/HRPortal";
import ApplicantPortal from "./components/ApplicantPortal";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import ApplicantForm from "./components/ApplicantForm";
import ApplicantList from "./components/ApplicantList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Login from "./components/Login";

import sampleJobs from "./data/sampleData";

function App() {
  
  const [jobs, setJobs] = useState(sampleJobs);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [applicants, setApplicants] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [portal, setPortal] = useState("home");
  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || job.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      {portal === "home" && <Login setPortal={setPortal} />}

      {portal === "hr" && (
        <HRPortal
          jobs={jobs}
          setJobs={setJobs}
          applicants={applicants}
          setApplicants={setApplicants}
          filteredJobs={filteredJobs}
          setPortal={setPortal}
        />
      )}

      {portal === "applicant" && (
        <ApplicantPortal
          jobs={jobs}
          filteredJobs={filteredJobs}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          applicants={applicants}
          setApplicants={setApplicants}
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          setPortal={setPortal}
        />
      )}
    </>
  );
}

export default App;
