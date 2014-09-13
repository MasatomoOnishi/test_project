
var core = new Core();
var log_space = new LogSpace();

core.createAnswer();

function ask ()
{
  var num = parseInt(document.form_ask.elements[0].value, 10);
  var num_array = [];
  var res = [];
  var i;
  if (isNaN(num))
  {
    alert("Input numbers correctly.");
    return;
  }
  for (i=0; i<4; i++)
  {
    num_array[i] = Math.floor(num/Math.pow(10, (4-(i+1))));
    num %= Math.pow(10, (4-(i+1)));
  }
  res = core.askNumber(num_array);
  log_space.addLog(num_array, res);
  log_space.showLog();
  console.dir(log_space);
  return;
}
