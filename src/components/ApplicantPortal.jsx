import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import JobList from "./JobList";
import ApplicantForm from "./ApplicantForm";

function ApplicantPortal({

    jobs,

    filteredJobs,

    search,
    setSearch,

    category,
    setCategory,

    applicants,
    setApplicants

}) {

    return (

        <>

            <Navbar portal="applicant" />

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

            <section id="jobs">

                <JobList
                    jobs={filteredJobs}
                    jobs={jobs}
                    portal="applicant"
                />

            </section>

            <section id="apply">

                <ApplicantForm
                    jobs={jobs}
                    applicants={applicants}
                    setApplicants={setApplicants}
                />

            </section>

        </>

    );

}

export default ApplicantPortal;