// Write your code in this file!
const currentUser = 'Grace Hopper';

//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
//re-written below with updated js just enclose variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;