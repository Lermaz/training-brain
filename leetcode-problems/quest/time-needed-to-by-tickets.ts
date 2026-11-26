/* This is how I do it */
// function timeRequiredToBuy(tickets: number[], k: number): number {
//     let seconds = 0;

//     while (tickets[k]) {
//         seconds++;
//         if (tickets[0] === 1) {
//             tickets.shift();
//             if (k === 0) break;
//         } else {
//             tickets.push(tickets.shift()! - 1);
//         }
//         k = k === 0 ? tickets.length - 1: k - 1;
//     }

//     return seconds;
// };
/* Apparently this is the most optimal way to do that */
function timeRequiredToBuy(tickets: number[], k: number): number {
    let seconds = 0;
    
    for (let i = 0; i < tickets.length; i++) {
        
        if (i <= k) {
            seconds += Math.min(tickets[k], tickets[i]);
        } else {
            seconds += Math.min(tickets[k] - 1, tickets[i]);
        }
        console.log("seconds", seconds)
    }
    
    return seconds;
};

const tickets: number[] = [2,3,2];
const k: number = 2;
console.log("Result:", timeRequiredToBuy(tickets, k));