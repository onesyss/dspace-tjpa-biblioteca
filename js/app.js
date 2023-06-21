
let anoFooter = document.getElementById('ano-atual');

year = new Date();
anoFooter.innerText = year.getFullYear();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// const collpases = document.querySelectorAll('.collapse')

// for (const coll of collpases) {
//   coll.addEventListener('click', () => {
//     console.log(coll.classList)
//   })
// }

const leads = document.querySelectorAll('.lead')
const collapses = document.querySelectorAll('.card-collapse .collapse')


console.log(collapses)




for (const i in leads) {
  const lead = leads[i]




  lead.onclick = () => {


    for (let a = 0; a < 7; a++) {
      if (collapses[a] !== collapses[i]) {
        collapses[a].classList.remove('show')

      }


    }



  }
}