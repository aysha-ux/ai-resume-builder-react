import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            {/* Landing */}
            <div style={{height: '100vh', background: 'url(/Landing.png)', backgroundSize: "cover", backgroundAttachment: "fixed"}} className='d-flex justify-content-center align-items-center'>
                <div style={{backgroundColor: "rgba(0,0,0,0.4)"}} className='text-center rounded p-5 w-50 text-light'>
                    <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
                    <Link to={'/resume'} style={{backgroundColor: '#130d09'}} className='btn text-light'>Make your RESUME with AI</Link>
                </div>
            </div>

{/* About */}
<div className="container my-5">
    <h1 className='text-center my-5'>What's AI rBuilder</h1>
    <div className="row align-items-center">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
            <p style={{textAlign:"justify",fontSize:"25px"}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:"justify",fontSize:"25px"}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

            <p style={{textAlign:"justify",fontSize:"25px"}}>
                The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.
            </p>

            <p style={{textAlign:"justify",fontSize:"25px"}}>
                This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.
            </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
            <img style={{height:"75%"}} className='img-fluid' src="/about.png" alt="About" />
        </div>
    </div>
</div>

{/* Image */}
<div style={{ height: '100vh', background: 'url(/meeting.png)', backgroundSize: "cover", backgroundAttachment: "fixed" }} className='d-flex justify-content-center align-items-center'>
</div>
                       {/* Testimony */}
{/* Testimony */}
<div className="container my-5">
    <h1 className='text-center my-5'>Testimony</h1>
    <div className="row align-items-center">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
            <h1>Trusted by professionals worldwide.</h1>
            <p style={{textAlign: "justify"}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

            <p style={{textAlign: "justify"}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

            <p style={{textAlign: "justify"}}>
                Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.
            </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
            <div className="row">
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="1.jpg" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="3.jpg"  alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="2.avif" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="4.avif" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="grid1.png" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="grid2.png" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="grid3.png" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="grid7.png" alt="About" />
                </div>
                 <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="1.jpg" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="3.jpg" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="4.avif" alt="About" />
                </div>
                <div className="col-md-3 p-3">
                    <img style={{ height: "75%" }} className='img-fluid' src="2.avif" alt="About" />
                </div>
                                </div>
                </div>

        </div>
        </div>

        </div>
    )
}

export default Home




// import React from 'react'
// import { Link } from 'react-router-dom'

// function Home() {
//     return (
//         <div>
//             {/* Landing */}
//             <div style={{height: '100vh', background: 'url(/landing.png)', backgroundSize: "cover", backgroundAttachment: "fixed"}} className='d-flex justify-content-center align-items-center'>
//                 <div style={{backgroundColor: "rgba(0,0,0,0.4)"}} className='text-center rounded p-5 w-50 text-light'>
//                     <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
//                     <Link to={'/resume'} style={{backgroundColor: '#130d09'}} className='btn text-light'>Make your RESUME with AI</Link>
//                 </div>
//             </div>

// {/* About */}
// <div className="container my-5">
//     <h1 className='text-center my-5'>What's AI rBuilder</h1>
//     <div className="row align-items-center">
//         <div className="col-lg-1"></div>
//         <div className="col-lg-5">
//             <p style={{textAlign:"justify",fontSize:"25px"}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

//             <p style={{textAlign:"justify",fontSize:"25px"}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

//             <p style={{textAlign:"justify",fontSize:"25px"}}>
//                 The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.
//             </p>

//             <p style={{textAlign:"justify",fontSize:"25px"}}>
//                 This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.
//             </p>
//         </div>
//         <div className="col-lg-1"></div>
//         <div className="col-lg-5">
//             <img style={{height:"75%"}} className='img-fluid' src="/about.png" alt="about" />
//         </div>
//     </div>
// </div> 
//             {/* Image */}

