import { format, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
import { renderPartTourInfoBookingForm } from "./renderBookingForm";
import { getHtmlModalForm, renderTour } from "./renderTour";

function getFavoriteIds() {
    const favoriteToursText = localStorage.getItem('favoriteTours');
    console.log(favoriteToursText, 'favoriteToursText');
    let favoriteIds = [];
    if (favoriteToursText !== null) {
      favoriteIds = JSON.parse(favoriteToursText);
    }
    return favoriteIds;
  }

export function toogleToFavorite(tourId, tours) {
    console.log(tourId, 'tourId');
    const favoriteIds = getFavoriteIds(); 
    const index = favoriteIds.indexOf(tourId);
    if (index === -1) {
      favoriteIds.push(tourId);
    } else {
      favoriteIds.splice(index, 1);
    }
    localStorage.setItem('favoriteTours', JSON.stringify(favoriteIds));
    renderTourList(tours);
  }

  export function renderTourList(tours) {
    const tourContainer = document.getElementById("tours");
    tourContainer.innerHTML = "";
    const favoriteIds = getFavoriteIds();
    tours.forEach((tour) => {
      tour.duration = differenceInDays(
        new Date(tour.endTime),
        new Date(tour.startTime)
      );
  
      const option = {
        locale: ru,
      };
      const pattern = "dd MMMM";
      console.log(tour.country);
      tour.startDate = format(new Date(tour.startTime), pattern, option);
      tour.endDate = format(new Date(tour.endTime), pattern, option);
      tour.isFavorite = favoriteIds.includes(tour.id);
      tourContainer.append(renderTour(tour, tours));
    });
  }

  async function requestTour() {
    const tourId = document.getElementById('booking-tour-info').dataset.tourId;
    const nameValue = document.getElementById("first-name").value
    const lastNameValue = document.getElementById("last-name").value
    const numberValue = document.getElementById("number").value
    const emailValue = document.getElementById("email").value
  
    if (nameValue.leght === 0 || numberValue === 0 || emailValue === 0) {
      alert("Заполните поля *")
      return
    }
    const info = {
      customerName: nameValue,
      phone: numberValue,
      email: emailValue,
    }
    console.log(info)
    try { 
    const url = `https://www.bit-by-bit.ru/api/student-projects/tours/${tourId}`
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info)
    })
    let data = await response.json()
  
    document.getElementById("modal-window-form").innerHTML =`
       <div class="flex flex-col items-center">
          <h3 class="text-gray-700 text-center">Запрос на бронирование успешно отправлен!</h3>
          <button id="btn-made" class="btn-opt">Готово</button>
        </div>
        `
    document.getElementById('btn-made').addEventListener('click', closeModal)
  } catch (error) {
    console.log(error, 'error');
    document.getElementById("modal-window-form").innerHTML = `
    <div class="flex flex-col items-center content-center justify-beetwen">
      <h3 class="text-center text-gray-900">Ошибка. Попробуйте снова.</h3>
      <button id="btn-exit" class="btn-opt">Выйти</button>
    </div>
    `
    document.getElementById("btn-exit").addEventListener("click", closeModal)
  
  }  
  }
  
  
  function closeModal() {
    const modalWindow = document.getElementById("modal_window");
    modalWindow.style.display = "none";
  }

  function openModal() {
    const modalWindow = document.getElementById("modal_window");
    modalWindow.style.display = "flex";
  }

  export function booking(tour) {
    const modalWindow = document.getElementById("modal_window");
    modalWindow.innerHTML = getHtmlModalForm();
    renderPartTourInfoBookingForm(tour);
    
    //Модальное окно
    const modalWindowClose = document.getElementById("modal-btn-close")
    modalWindowClose.addEventListener('click', closeModal)
    const btnSend = document.getElementById("btn-send")
    btnSend.addEventListener('click', requestTour)
    openModal();
  }