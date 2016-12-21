let toDateTimeString = function(inputDate)
{
  if(typeof inputDate === 'string')
  {
    inputDate = new Date(inputDate);
  }
  
  if(Object.prototype.toString.call(inputDate) !== '[object Date]')
  {
    return '';
  }
  let year = inputDate.getFullYear();
  let month = to2digit(inputDate.getMonth() + 1);
  let date = to2digit(inputDate.getDate());
  let hour = to2digit(inputDate.getHours());
  let minute = to2digit(inputDate.getMinutes());

  let dateString = `${year}-${month}-${date} ${hour}:${minute}`;
  return dateString;
};

function to2digit(digit)
{
  return ('0' + digit).slice(-2);
}

export default toDateTimeString;