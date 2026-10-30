import React, { useState,useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllDownloadResumeApi } from '../service/apiService'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const [downloadList,setDownloadList] =useState([])
 const [label,setLabel]=useState([])
  const [value,setValue]=useState([])
  const colorPalette=['#E8460C','#0C76E8','#BC0CE8','#E8C00C','#0CE8AD','#AAE80C']
const backgroundColor = label.map((value, index) => colorPalette[index % colorPalette.length])

const data = {
    labels: label,
    datasets: [
        {
            label: 'Download Count',
            data: value,
            backgroundColor
        }
    ]
}



 useEffect(()=>{
  getAllDownloads()
},[])

 const getAllDownloads = async () => {
    const result = await getAllDownloadResumeApi()
    setDownloadList(result.data)

    const output = {}
    result.data.forEach(item => {
        const currentJob = item.jobRole

        if (currentJob in output) {
            output[currentJob] += 1
        } else {
            output[currentJob] = 1
        }
    })
setLabel(Object.keys(output))
setValue(Object.values(output))


}

return (
    <div className='container my-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h1>Downloaded Resume History</h1>
                <Link to={'/resume-details'}><FaArrowLeft /> Back</Link>

            <button onClick={handleOpen} className='btn text-light' style={{backgroundColor:"#421c03"}}> view in chart</button>
        </div>

        <p className='mt-3 fs-3 fw-semibold text-primary'>
            Total downloaded resumes from our site is <span className='fw-bolder text-danger'>
                {downloadList.length}
            </span>
        </p>
        <div className='row my-5'>
            {/* Duplicate the row according to the resume count */}
            {
                downloadList?.length > 0 ?
                    downloadList?.map(resume => (
<div className='col-lg-4'>                            <div style={{ height: '350px' }} className='rounded shadow p-3'>
                                <h6>Review at : {resume?.timeStamp}</h6>
                                <div className='mt-4 text-center'>
                                    <Link to={`/resume/${resume?.resumeId}`}>
                                        <img
                                            className='w-100' style={{height:"300px"}}
                                            src={resume?.resumeImg}
                                            alt="resume image"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div>No resumes downloaded yet</div>
            }
        </div>
      <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
        <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ backgroundColor: "#421c03", width: "100%", padding: "10px", color: "white" }}
        >
            CV Count by Job role
        </Typography>

        <div className='text-center'>
    <Pie data={data} />
        </div>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This chart provides an overview of the number of CV downloads associated with different jobs on the website. It helps visualize the demand and engagement for CV's across various jobs on the website. It helps visualize the demand and engagement for CV's across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing downloads counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform
        </Typography>
    </Box>
</Modal>
    </div>
)
  }
export default Download
