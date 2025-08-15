
let arr = [2,1,3,-5,4,3,8,]

let Subarrsum =(arr)=>{
  let sum = 0
  let maxsum = 0

   for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
       if(sum>maxsum){
        maxsum = sum
       }  
       if(sum < 0){
        sum = 0
       }
    
   }
   return maxsum;

}

console.log(Subarrsum(arr))



let scores = [10, -5, 20, 15, -10, 25, -2, 30];

// Function to find best scoring streak using Kadane's Algorithm
function bestScoringStreak(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i; // Start new streak
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxPoints: maxSum,
        streakGames: arr.slice(start, end + 1),
        fromGame: start + 1,
        toGame: end + 1
    };
}

let result = bestScoringStreak(scores);
console.log(`Best Streak Points: ${result.maxPoints}`);
console.log(`Games in streak: ${result.streakGames}`);
console.log(`From Game ${result.fromGame} to Game ${result.toGame}`);
