import "../styles/Home.css";

function Home({ setPortal }) {

    return (

        <div className="home">

            <h1>Smart Job Portal & ATS</h1>

            <p>Select your portal</p>

            <div className="portal-buttons">

                <button
                    onClick={() => setPortal("hr")}
                >
                    HR Portal
                </button>

                <button
                    onClick={() => setPortal("applicant")}
                >
                    Applicant Portal
                </button>

            </div>

        </div>

    );

}

export default Home;