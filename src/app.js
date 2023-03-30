
import { renderTourList } from "./common";
 

//const selectCountry = document.getElementById('select-country')
  


//const modalBtn = document.getElementById("modal-btn")



async function getTours() {
  let response = await fetch(
    "https://www.bit-by-bit.ru/api/student-projects/tours"
  );
  const data = await response.json();
  return data;
}




function filterCountry(tours, country) {
  if (country) {
    tours = tours.filter((item) => {
      return item.country === country
    });
  }
  renderTourList(filterPrice(tours));
}
 
function filterPrice(tours) {
  const priceMin = document.getElementById('priceMin').value;
  const priceMax = document.getElementById('priceMax').value;
  console.log(priceMin, priceMax);

  const toursFiltered = tours.filter((tour) => {
    return tour.price >= priceMin && (tour.price <= priceMax || priceMax.length === 0);
  });
  return toursFiltered;
}

function filterByPriceAndRender(tours) {
  console.log('filterByPriceAndRender');
  renderTourList(filterPrice(tours));
}

function filterRating(tours) {
  const ratingTour = document.getElementById('ratingTour').value
  
  console.log(ratingTour)

  const filteredRatingTours = tours.filter((tour)=> {
    return tour.rating >= ratingTour;
  })
  return filterByPriceAndRender(filteredRatingTours);
}

const myFavoriteTour = document.getElementById('favoritesTours')
myFavoriteTour.addEventListener('click', favoritesTours)

const toursJSON = localStorage.getItem('tours')

if (toursJSON) {
  tours = JSON.parse(toursJSON)
}

async function init() {
    const tours = await getTours()
    renderTourList(tours);

    //Кнопки стран
    const countries = Array.from(document.querySelectorAll('.btn-opt:not(.all)'));

    document.getElementById('allCountry').addEventListener('click', () => filterCountry(tours));
    countries.forEach(countryButton => {
      countryButton.addEventListener("click", () => filterCountry(tours, countryButton.dataset.country))
    })
    
    //цена
    document.getElementById('priceMin').addEventListener("change", () => filterByPriceAndRender(tours));
    document.getElementById('priceMax').addEventListener("change", () => filterByPriceAndRender(tours));
    //Рейтинг
    document.getElementById('ratingTour').addEventListener('click', () => filterRating(tours))
    //Избранное

    //Модальное окно
    const modalWindow = document.getElementById("modal_window");
    const modalWindowClose = document.getElementById("modal-btn-close")

    function closeModal() {
      modalWindow.style.display = "none"
    }
    modalWindowClose.addEventListener('click', closeModal)

    const info = {
      firstName: " ",
      lastName: " ",
      number: " ",
      email: " "
    }
    
    const url ="https://www.bit-by-bit.ru/api/student-projects/tours/[id]"
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info)
    })
    let data = await response.json()

    //document.getElementById('select-country').addEventListener('click', () => filterCountry(tours))
    //document.getElementById('tailand').addEventListener('click', () => filterCountry(tours, 'Тайланд'))
    //document.getElementById('indonezia').addEventListener('click', () => filterCountry(tours, 'Индонезия'))
    //document.getElementById('maldives').addEventListener('click', () => filterCountry(tours, 'Мальдивы'))
    //document.getElementById('kipr').addEventListener('click', () => filterCountry(tours, 'Кипр'))
    //document.getElementById('egipt').addEventListener('click', () => filterCountry(tours, 'Египет'))
    //document.getElementById('tanzania').addEventListener('click', () => filterCountry(tours, 'Танзания'))
    //document.getElementById('mexico').addEventListener('click', () => filterCountry(tours, 'Мексика'))-->

    


}

init();
