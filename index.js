function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return ('This one is on me!');
  } else if (someValue > 2000, someValue < 2500) {
      return ('I will gladly take your thirty bucks.');
  } else if (someValue > 2500) {
    return ('No can do.');
  }
}
scuberGreetingForFeet(199);

scuberGreetingForFeet(2001);

scuberGreetingForFeet(2501);


function ternaryCheckCity(city) {
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';

    case 'not as generous':
      return 'Thank you.';

    default:
      return 'Bye.'
  }
}

//function switchOnCharmFromTip(tip){
//  switch (tip) {
//    case 'generous':
//      tip >= 10;
//      break;
//    case 'not as generous'
//      tip >= 5;
//      break;
//    default:
//      case 'thanks for everything'
//  }
//}