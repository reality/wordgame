$(document).ready(function() { initialise(); })
const G1 = '🦆';
const G2 = '🏳️‍⚧️'
const LET = [ 'A', 'F', 'Z', 'B', 'K', 'D' ]
const MID = 'O'
const EMP = 'NULL'

var table

function initialise() {
  fillTable()
}

function fillTable() {
  if(table) { clearGuess(); }
  table = new Array(8).fill(EMP)
 
  table.forEach((y, i) =>
    $('#c'+i).off('click')
  )

  $('#middle').off('click')
  $('#middle').text(MID);
  $('#middle').click(select)

  LET.forEach(i => {
    console.log(i)
    var position
    while(position == null) {
      const proposed = Math.ceil(Math.random() * 8) - 1
      position = table[proposed] == EMP ? proposed : null
    }
    $('#c'+position).text(i);
    $('#c'+position).click(select)
    $('#c'+position).addClass('unsel-cell')
    table[position] = i;
  })

  console.log(table)
  var used1 = false;
  table.forEach((y, i) => {
    if(y == EMP) {
      $('#c'+i).text(!used1 ? G1 : G2)
      $('#c'+i).addClass('unsel-cell')
      used1 = true;
    }
  })
}

var guess = '';
function select() {
  var id = '#'+event.target.id;
  //$(event.target).addClass('sel-cell')
 $(id).animate({
   backgroundColor: '#202A25'
  }, 300, function(){
   $(id).animate({
     backgroundColor: '#86A5D9'
   }, 300);
 });

  var gl
  if(event.target.id == 'middle') {
    gl = MID
  } else {
    gl = table[event.target.id.split('')[1]]
  }

  guess += gl
  renderGuess()
}
function renderGuess() {
  $('#guess').html('')
  var html = ''
  guess.split('').forEach(c => {
    console.log(c)
    html += '<div class="cell small-cell mid-col">'+c+'</div>'
  })
  $('#guess').html(html)
}
function clearGuess() {
  guess = '';
  renderGuess();
  table.forEach((y, i) => { $('#c'+i).removeClass('sel-cell'); })
}
