// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).


function eqSumPowdig(hMax, exp) {

    let powerSumIsSame = []

    let counter = 2
    
    for (let i = 2; i <= hMax; i++){
        let counterString = counter.toString().split('')

        let power = counterString.map(num => Math.pow(num, exp))
        let sum = power.reduce((accumulator, currentValue) => accumulator + currentValue)

        if (sum === counter){
            powerSumIsSame.push(sum)
        }

        counter++
    }
    return powerSumIsSame;
  }
  
  console.log(eqSumPowdig(200, 3))
  console.log(eqSumPowdig(370, 3))