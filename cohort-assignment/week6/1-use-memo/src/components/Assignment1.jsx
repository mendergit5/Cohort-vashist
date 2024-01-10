import { useState, useMemo  } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else if (x>0) {
        return x * factorial(x - 1);
    }
    else{
        return -1;
    }
}


export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here

    const expensiveValue = useMemo(() => factorial(input),[input]); 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}