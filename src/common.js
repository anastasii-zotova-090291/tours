import { format, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
import { renderPartTourInfoBookingForm } from "./renderBookingForm";
import { renderTour } from "./renderTour";

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

  function openModal() {
    const modalWindow = document.getElementById("modal_window");
    modalWindow.style.display = "flex";
  }

  export function booking(tour) {
    renderPartTourInfoBookingForm(tour);
    openModal();
  }