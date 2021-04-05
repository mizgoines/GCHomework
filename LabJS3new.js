let submissions = [

  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  
  {
    name: "Joe",  
    score: 77, 
    date: "2018-05-14",
    passed: true,
  },
  
  {
  name: "Jack",
  score: 59,
  date: "2019-07-05",
  passed: false,
  },
  
  {
  name: "Jill",
  score: 88,
  date: "2020-04-22",
  passed: true, 
  }
  
]
  

  // ADD SUBMISSION
  function addSubmission (array, newName, newScore, newDate) {
  
  let student ={
      name: newName,
      score: newScore,
      date: newDate,  
      passed: true,
  }
  
      if (newScore>= 60)
      { student.passed= true} else{
        student.passed= false
          }
          array.push(student)
  }

addSubmission(submissions, 'Brandon', 2, '2020-04-22')
console.log(submissions)


// EDIT SUBMISSION
function editSubmission (array, index, score) {
  array[index].score = score

  if (score>= 60) {
    array[index].passed= true
  } else{
    array[index].passed= false
  }
}

editSubmission(submissions, 0, 10)
console.log(submissions)


// FIND SUBMISSION BY NAME
// function findSubmissionByName (array, name) {
//   array.find(object => name == object.name)
// }

// console.log(findSubmissionByName(submissions, 'Brandon'))


// FIND LOWEST SCORE
function findLowestScore(array) {
  let lowestNumber = array[0]; //best to start with a real value from the array and the first value is the best 

  array.forEach(object => {
    if(object.score < lowestNumber.score) {
      lowestNumber = object
    }
  })

  return lowestNumber
}
//instructions ask for the whole object to be returned, not just the score
//also, theres a BIG difference in having your function use a console.log() vs a return statement 
//and on the test it will be considered wrong if its one and not the other. 
findLowestScore(submissions)


  // FIND AVERAGE SCORE
  function findAverageScore(array) {
    let total = 0;

    for(object of array) {
      total = total + object.score
    }

    let average = total / array.length
    return average
  }

findAverageScore(submissions)


  // DELETE SUBMISSION BY INDEX
  function deleteSubmissionByIndex (array, index) {
      array.splice(index, 1) 
  }

deleteSubmissionByIndex(submissions, 4)
console.log(submissions)


// DELETE SUBMISSION BY NAME
function deleteSubmissionByName (array, name) {

  
  function findPerson(person) {
    
      return(person.name === name)
    // array.forEach(object => {
    //   if( object.name === name) {
    //     console.log(name)
    //     return true;
    //   }
    // })
  }

  //findPerson(name)
  let index = array.findIndex(findPerson)  
    array.splice(index, 1) //confirm teacher
}

  deleteSubmissionByName(submissions, 'Joe')
  console.log(submissions)

  // function findSubmissionByName (array,name)
  // function findPerson(name){
  //   return name.Joe === Joe;
  // }
  
  /*let index = array.findIndex(findPerson) 
    array.splice(index,1) //confirm teacher*/
  
  // function findLowestScore (array)
  // submissions.forEach(function() {
  // }
  
  /*let student ={
    name: newName,
    score: newScore,
    date: newDate,
    passed: true,
    }
  
    if (newScore>= 60)
    { student.passed= true} else{
      student.passed= false
        }
        array.push(student)*/
  
   
    function filterPassing (array) {
//         function isStudentPassing(student) {
//             return student.passed 
//         } //having two return statements wont work here because it exits the funcntion before the second part can run 
        let result = array.filter(student => student.passed);
        return result
    }

    let studentsWhoPassed = filterPassing(submissions);
    console.log(studentsWhoPassed);

  // function filter90AndAbove(array)
  function filter90AndAbove(array) {
//     function studentExcels(student) {
//         return student.passed 
//     }
    let result = array.filter(student => student.score >= 90);
    return result
}

let studentsWhoPassed = filterPassing(submissions);
console.log(studentsWhoPassed);
  
