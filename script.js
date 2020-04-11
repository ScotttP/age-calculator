const calculate = document.querySelector('#submit');

const currDate = new Date();
const userBirthday = new Date(userBirthday.value);

calculate.addEventListener('click', () => {
    
})

function totalTimeAge (currDate,userBirthday) {
    let ageInMiliseconds = Math.abs(currDate - userBirthday);
    let ageInHours = Math.ceil(ageInMiliseconds / 3600000)
    console.log(ageInHours)

}

/*
    let currDate = new Date();
    let bday = new Date(userBirthday.value);
    let diffTime = Math.abs(currDate - bday); //time in miliseconds old
    let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //total days old
    let diffMonths = Math.ceil(diffDay / 30); // total months old
    let diffYears = (diffMonths / 12)
    console.log(diffYears)
*/