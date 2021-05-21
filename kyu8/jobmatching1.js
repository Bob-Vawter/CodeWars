//kyu 8
//Job Matching #1
function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary){
    throw 'Error'
  }
  return candidate.minSalary*.90<=job.maxSalary
}
