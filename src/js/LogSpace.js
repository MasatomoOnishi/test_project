/******************************************/
/* LogSpace.js                            */
/*                                        */
/*                                        */
/******************************************/

function LogSpace ()
{
  this.log_in = [];
  this.log_res = [];
}

/* --------------------------------------- *
 * addLog: method of log_space             *
 * @data_in   [in]: store input data       *
 * @data_res [out]: store responsed data   *
 *                                         *
 * --------------------------------------- */

LogSpace.prototype.addLog = function (data_in, data_res)
{
  this.log_in.push(data_in);
  this.log_res.push(data_res);
  return;
}

/* --------------------------------------- *
 * deleteLog: method of log_space          *
 *                                         *
 * --------------------------------------- */
LogSpace.prototype.deleteLog = function ()
{
  this.log_in.pop();
  this.log_res.pop();
  return;
}

/* --------------------------------------- *
 * showLog: method of log_space            *
 *                                         *
 * --------------------------------------- */
LogSpace.prototype.showLog = function ()
{
  var element = document.getElementById("log_space");
  var element_t;
  var i, j;
  var input, reply;
  var new_row;
  element.innerHTML = "<table id=\"log_tab\">";
  element_t = document.getElementById("log_tab");
  for (i=0; i<this.log_in.length; i++)
  {
    new_row = "";
    new_row += "<tr>";
    new_row += "<td>";
    input = this.log_in[i];
    for (j=0; j<input.length; j++)
    {
      new_row += input[j];
    }
    new_row += "</td>";
    new_row += "<td>";
    reply = this.log_res[i];
    for (j=0; j<reply.length; j++)
    {
      new_row += reply[j];
    }
    new_row += "</td>";
    new_row += "</tr>";
    element_t.innerHTML += new_row;
  }
  element.innerHTML += "</table>";
  console.log(element.innerHTML);
  return;
}

