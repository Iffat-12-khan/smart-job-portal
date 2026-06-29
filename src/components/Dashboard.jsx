import "../styles/Dashboard.css";

function Dashboard({jobs,applicants}){

const interview=

applicants.filter(

item=>item.status==="Interview"

).length;

const selected=

applicants.filter(

item=>item.status==="Selected"

).length;

return(

<div className="dashboard">

<div className="box">

<h2>{jobs.length}</h2>

<p>Total Jobs</p>

</div>

<div className="box">

<h2>{applicants.length}</h2>

<p>Total Applicants</p>

</div>

<div className="box">

<h2>{interview}</h2>

<p>Interview</p>

</div>

<div className="box">

<h2>{selected}</h2>

<p>Selected</p>

</div>

</div>

)

}

export default Dashboard;