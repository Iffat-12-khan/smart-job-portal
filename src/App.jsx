import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import ApplicantForm from "./components/ApplicantForm";
import ApplicantList from "./components/ApplicantList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

import sampleJobs from "./data/sampleData";

function App() {

  const [jobs, setJobs] = useState(sampleJobs);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [applicants, setApplicants] = useState([]);

  const filteredJobs = jobs.filter((job) => {

    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || job.category === category;

    return matchSearch && matchCategory;

  });

  return (

    <>
      <Navbar />

      <section id="dashboard">
        <Dashboard
          jobs={jobs}
          applicants={applicants}
        />
      </section>

      <section id="jobs">
        <JobForm
          jobs={jobs}
          setJobs={setJobs}
        />

        <JobList
          jobs={filteredJobs}
          setJobs={setJobs}
          applicants={applicants}
          setApplicants={setApplicants}
        />
      </section>

      <section id="search">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          category={category}
          setCategory={setCategory}
        />
      </section>

      <section id="applicants">
        <ApplicantForm
          jobs={jobs}
          applicants={applicants}
          setApplicants={setApplicants}
        />

        <ApplicantList
          applicants={applicants}
          setApplicants={setApplicants}
        />
      </section>

    </>

  );

}

export default App;