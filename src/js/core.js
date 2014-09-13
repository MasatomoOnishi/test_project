/******************************************/
/* core.js                                */
/*                                        */
/*                                        */
/******************************************/

var Core = function ()
{
  this.answer = [];
}

/* --------------------------------------- *
 * createAnswer: method of Core            *
 *                                         *
 * --------------------------------------- */

Core.prototype.createAnswer = function ()
{
  var i, j, rand;
  for (i=0; i<4; i++)
  {
    rand = Math.floor(Math.random()*(10-i));
    for (j=0; j<i; j++)
    {
      if (this.answer[j] == rand)
      {
        rand++;
      }
    }
    this.answer.push(rand);
  }
  return;
}

/* --------------------------------------- *
 * askNumber: method of Core               *
 * @value     [in]: integer array          *
 *                                         *
 * --------------------------------------- */
Core.prototype.askNumber = function (value)
{
  var i, j;
  var ret_array = [];
  ret_array.push(0);
  ret_array.push(0);
  if(value.length != 4)
  {
    // temporary error message
    // I will let navi say this message.
    console.error("Please input numbers correctly.");
  }
  else
  {
    for (i=0; i<4; i++)
    {
      for (j=0; j<4; j++)
      {
        if (value[i] == value[j] &&
            i != j)
          console.error("Please input numbers correctly.");
      }
      for (j=0; j<4; j++)
      {
        if (value[i] == this.answer[j])
        {
          if (i == j)
          {
            ret_array[0]++;
          }
          else
          {
            ret_array[1]++;
          }
        }
      }
    }
  }
  return ret_array;
}
