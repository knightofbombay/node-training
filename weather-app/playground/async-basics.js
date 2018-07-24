console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback')
}, 2000);

setTimeout(() => {
    console.log("Inside 0 second callback")
}, 0);

console.log('Finishing up');