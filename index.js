function scuberGreetingForFeet(number){
if (number <= 400) {
  return 'This one is on me!'
  }
else if (number <= 2499 ){
  return 'I will gladly take your thirty bucks.'

  }
else {
  return 'No can do.'
}

}
const city = 'NYC';
function ternaryCheckCity(place){
  return place ==='NYC' ? "Ok, sounds good." : "No go.";
  // Write your code here!
}

function switchOnCharmFromTip(amount){
  switch(amount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
  // Write your code here!
}