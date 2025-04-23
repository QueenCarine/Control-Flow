// 1.A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".
let login = () => {
    loginAttempt = 1
    while (loginAttempt<=4) {
        if(loginAttempt==4){
            console.log('Account locked')
            break;
        }  
         console.log(`Login Attempt${loginAttempt}`)
        loginAttempt += 1;
    }
}
login()

//2. Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
let voting=(votes)=>{
    let x = 0;
    do{
        console.log(`${votes[x]}`)
        x++
    }
    while(x < votes.length)
}
 voting([2,3,4,5,6])

// 3.Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
let weekdays = (days) => {
    days.forEach(way => {
        switch (way) {
            case 1:
                console.log('Monday')
                break;
            case 2:
                console.log('Tuesday')
                break;
            case 3:
                console.log('Wednesday')
                break;
            case 4:
                console.log('Thursday')
                break;
            case 5:
                console.log('Friday')
                break;
            case 6:
                console.log('Saturday')
                break;
            case 7:
                console.log('Sunday')
                break;
            default:
                console.log('Is not a week day')
                break;
        }
    }
    )
}
weekdays([1,2,3,4,5,6,7,8])

// 4.Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.
let passwords=(password)=>{
    password.forEach(word=>{
        if(word.length>=8){
            console.log('Strong password')
        }
        else{
            console.log('Weak password')
        }
    })

}
passwords(['queen','carecare'])

// 5.You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
let languages=(language)=>{
    language.forEach(lang=>{
        switch(lang){
            case "French":
                console.log('Bonjour')
                break;
                case "English":
                    console.log('Hello')
                    break;
                    case "Swahili":
                        console.log('Habari')
                        break;
                        default:
                            console.log('Language not recognized')
                           
        }
    }
    )
}

languages(['French', 'English', 'Swahili'])


// 6.You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"
let weather=(temperature)=>{
    for(i=0;i<temperature.length;i++){
        if(temperature[i]>30){
            console.log('High heat alert')
        }
        else if(temperature[i]<15){
            console.log('Cold Alert')
        }
        else{
            console.log('Normal Conditions')
        }
    }
}
weather([23,65,43,66,9])

// 7.Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
const register=(users)=>{
    let user=0
    while(user<users.length){
        console.log(`User removed is ${users[user]}`)
        user++;
    }
}
register(['why','when','where'])

// 8.Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
const tests=(scores)=>{
    scores.map((score)=>{
        do{
            score+=10
            console.log(`Your score now is ${score}`)
        }
        while(score<50)
            score++
    })
}
tests([45,34,78,90])