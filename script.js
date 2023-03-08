var unntaksordpånor =  ["er", "kino", "testoni",];
var unntaksordpårus =  ["арь", "щино", "работает",];
var korektord;


function ad_del(user_id) {
  var input_val = document.getElementById(user_id).value;

  input_val = String(input_val);
  var lengstring = input_val.length;
  korektord = input_val.replace('.', '.');
  korektord = korektord.toLowerCase();

  for (let i = 0; i < unntaksordpånor.length; i++){
    if (korektord == unntaksordpånor[i]) {
      korektord = unntaksordpårus[i];
    }
  }

  for (let i = 0; i < lengstring; i++){
    korektord = korektord.replace('skj', ' Ш ');
    korektord = korektord.replace('sj', ' Ш ');
    korektord = korektord.replace('rs', ' Ш ');
    korektord = korektord.replace('sl', ' Ш l');

    korektord = korektord.replace('tj', ' Щ ');
    korektord = korektord.replace('kj', ' Щ ');

    korektord = korektord.replace('ski', ' Ш i');
    korektord = korektord.replace('sky', ' Ш y');
    korektord = korektord.replace('skøy', ' Ш øy');
    korektord = korektord.replace('skei', ' Ш ei');
    korektord = korektord.replace('ki', ' Х i');
    korektord = korektord.replace('ky', ' Х y');
    korektord = korektord.replace('køy', ' Х øy');
    korektord = korektord.replace('kei', ' Х ei');
    korektord = korektord.replace('gi', ' Й i');
    korektord = korektord.replace('gy', ' Й y');
    korektord = korektord.replace('gøy', ' Й øy');
    korektord = korektord.replace('gei', ' Й ei');
  }

  var element = document.getElementById("id01");
	element.innerHTML = korektord;

  // for (let i = 0; i < lengstring; i++) {
  
  //   korektord = korektord.replace('a', 'а');
  //   korektord = korektord.replace('b', 'б');
  //   korektord = korektord.replace('c', 'ц');
  //   korektord = korektord.replace('d', 'д');
  //   korektord = korektord.replace('e', 'е');
  //   korektord = korektord.replace('f', 'ф');
  //   korektord = korektord.replace('g', 'г');
  //   korektord = korektord.replace('h', 'х');
  //   korektord = korektord.replace('i', 'и');
  //   korektord = korektord.replace('j', 'й');
  //   korektord = korektord.replace('k', 'к');
  //   korektord = korektord.replace('l', 'л');
  //   korektord = korektord.replace('m', 'м');
  //   korektord = korektord.replace('n', 'н');
  //   korektord = korektord.replace('o', 'у');
  //   korektord = korektord.replace('p', 'п');
  //   korektord = korektord.replace('q', 'ку');
  //   korektord = korektord.replace('r', 'р');
  //   korektord = korektord.replace('s', 'с');
  //   korektord = korektord.replace('t', 'т');
  //   korektord = korektord.replace('u', 'ю');
  //   korektord = korektord.replace('v', 'в');
  //   korektord = korektord.replace('w', 'в');
  //   korektord = korektord.replace('x', 'екс');
  //   korektord = korektord.replace('y', 'и');
  //   korektord = korektord.replace('z', 'сет');
  //   korektord = korektord.replace('å', 'о');
  // }

  


  // console.log(lengstring);
  console.log(korektord);
  //console.log(input_val.replace('skj', 'щ'));


  // if (regExp == /skj|sj|rs|sl/gi) {
  //   console.log(ja);
  // }
}

// /skj|sj|rs|sl/gi

// if (input_val == /skj|sj|rs|sl/gi) {
//   console.log(ja);
// }