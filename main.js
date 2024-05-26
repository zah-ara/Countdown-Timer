// import { differenceInSeconds } from "date-fns";
// import inquirer from "inquirer"
// const res= await inquirer.prompt({
//     type: "input",
//     name: "userInput",
//     message: "Please enter the amount of second",
// });
// let input = res.userInput
// function startTime(val:number){
//      const intTime= new Date() .setSeconds(new Date() .getSeconds() + val);
//      const intervalTime = new Date(intTime);
//  setInterval(() => {
//     const currentTime = new Date()
//     const timeDiff = differenceInSeconds(intervalTime, currentTime);
//     if (timeDiff <= 0) {
//         console.log("Time has expired");
//     }
//     const min = Math.floor((timeDiff % (3600*24)) / 3600);
//     const sec = Math.floor(timeDiff % 60);
//     console.log(`${min}:${sec}`);
//  },1000)
// }
// startTime(input);
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "Please enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number";
        }
        else if (input > 60) {
            return "Seconds must be 60 or less";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
//const input = parseInt(res.userInput, 10); // Convert input to number
function startTime(val) {
    const endTime = new Date(new Date().getTime() + val * 1000); // Add seconds to current time
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(endTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            clearInterval(interval); // Clear the interval
            process.exit();
        }
        {
            const min = Math.floor(timeDiff / 60);
            const sec = (timeDiff % 60);
            console.log(`${String(min).padStart(2, '0')}: ${String(sec).padStart(2, '0')}`);
        }
    }, 1000);
}
startTime(input);
