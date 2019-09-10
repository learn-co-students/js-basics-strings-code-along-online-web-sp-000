// Write your code in this file!
const currentUser = 'Kelly Dobbins';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//how i originally done it:
// const shortGreeting = 'Welcome, ' + currentUser[0] + '!';
//this passed the test but to make the code more flexible for future use. Need to use the slice() method$.ajax({
 
const slicedUser = currentUser.slice(0,1)
const shortGreeting = `Welcome, ${slicedUser}!`

//that returns: "Welcome, K!"