// to test: npx tsx 30-Days-Typescript.ts

// Closures
// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function 
// that always returns "Hello World".
 
function createHelloWorld() {
    
    return function(...args: any[]): string {
        return "Hello World"
    };
};

// Example 1:
const args: any[] = []
console.log(createHelloWorld()(...args))
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"
// The function returned by createHelloWorld should always return "Hello World".

// Example 2:
const args2 = [{},null,42]
console.log(createHelloWorld()(...args2))
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"
// Any arguments could be passed to the function but it should still always return "Hello World".

// 2620. Counter
// Given an integer n, return a counter function. This counter function 
// initially returns n and then returns 1 more than the previous value every 
// subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n: number): () => number {
    n = n-1
    return function() {
        n += 1
        return n
    }
}

// Example 1:
const n1 = 10;
const countn1 = createCounter(n1);
console.log(countn1());
console.log(countn1());
console.log(countn1());
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:
const n2 = -2
const countn2 = createCounter(n2);
console.log(countn2());
console.log(countn2());
console.log(countn2());
console.log(countn2());
console.log(countn2());
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// 2704. To Be Or Not To Be
// Write a function expect that helps developers test their code. It should take in any value
// val and return an object with the following two functions.
// - toBe(val) accepts another value and returns true if the two values === each other. 
// If they are not equal, it should throw an error "Not Equal".
// - notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".
 type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    function toBe(val2: any = null): boolean {
         if(val === val2) {
            return true;
            } else {
            throw new Error("Not Equal");
            }
    }
    function notToBe(val2: any = null): boolean {
        if (val === val2){
            throw new Error("Equal");
        } else {
            return true;
        }
    }
    
    return {
        toBe,
        notToBe
    };
};


// Example 1:
// func = () => expect(5).toBe(5)
console.log(expect(5).toBe(5))
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// Input: func = () => expect(5).toBe(null)


// console.log(expect(5).toBe(null))

// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// Input: func = () => expect(5).notToBe(null)
console.log(expect(5).notToBe(null))
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

