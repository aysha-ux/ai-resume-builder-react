import axiosService from "../api/axiosService";

// save resume api:called by resumeinput component when finish button clicks

const saveResumeApi=async(resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}
