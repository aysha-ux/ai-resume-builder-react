import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-tems-center '>
        <h3>Downloaded Resume History</h3>
        <Link to={'/resume-details'}> <FaArrowLeft/> Back</Link>

      </div>
      <div className='row my-5'>
      {/* duplicate the row according to resume count */}
      <div className='col-lg-4'>
        <div style={{height:'350px'}} className='rounded shadow p-3'>
          <h6>Review at:Time stamp</h6>
          <div className='mt-4 text-center'>
            <Link to={'/resume/:id'} >  <img className='w-50' src="https://tse4.mm.bing.net/th/id/OIP.zsuU8XswcDF8MpJFxaX5lQHaKa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="resume-image" /></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Download
