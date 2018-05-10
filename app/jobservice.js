function JobService(cb){

//PRIVATE

    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/jobs"

    var jobs = []

    function Jobs(company, jobTitle, hours, rate, description){
        this.company = company,
        this.jobTitle = jobTitle,
        this.hours = hours,
        this.rate = rate,
        this.description = description || "No job description available at this time"
    }

    

    function loadJobs(){
        $.get(baseUrl)
        .then(res =>{
            cb(res.data)
        })
    }    

loadJobs()

//PUBLIC

this.addJob = function addJob(job){
    var newJob = new Job(job.company, job.jobTitle, job.hours, job.rate, job.description)
    $.post(baseUrl, newJob)
    .then (res =>{
        loadJobs()
    })
}

this.deleteJob = function deleteJob(id){
    $.ajax({
        method: 'DELETE',
        url: baseUrl + '/' + id
    }).then (res => {
        loadJobs()
    })
}


}