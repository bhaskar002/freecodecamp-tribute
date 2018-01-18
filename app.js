let quotes = document.querySelectorAll('.quotes')
// console.log(quotes);
function init() {
  for(let i=1; i< quotes.length; i++)
    quotes[i].style.display = 'none'
}
init()
i=0;
setInterval(()=>{
  quotes[i].style.display = 'none'
  i = (i+1)%quotes.length;
  quotes[i].style.display = 'block'
}, 3000)
