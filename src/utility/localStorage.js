
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-Application')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
        
    }else
    {
        return[]
    }
}

const saveJobApplication = id => { 
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id)
    if(!exists){
        storedJobApplication.push(id); 
        localStorage.setItem('job-Application', JSON.stringify(storedJobApplication))
    }
}

export {saveJobApplication , getStoredJobApplication}