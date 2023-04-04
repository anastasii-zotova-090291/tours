import { toogleToFavorite, booking } from './common';

export function renderTour(tour, tours) {
    const element = document.createElement('div');
    element.innerHTML = ` <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="${tour.image}" alt="" class="w-full h-80" />
  
      <div class="p-4">
        <div>
            <div class="flex justify-between">
              <p class="text-yellow-600 font-medium hover:text-yellow-400">
                <a href="#">${tour.country}</a>
              </p>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 p-1 text-yellow-400">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>${tour.rating}
              </div>
            </div>
              <a href="#">
                <p class="font-semibold mt-1 text-xl text-gray-600">
                  ${tour.city ?? ""}
                </p>
                <p class="text-gray-500 mt-1">
                  ${tour.hotelName}
                </p>
              </a>
        </div>
        <div class="mt-1 text-yellow-600">${tour.startDate} - ${
      tour.endDate
    }</div>
        <div class="mt-1 text-gray-500 text-sm flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span aria-hiden="true" class="mx-1">&middot;</span>
          <div class="text-gray-500 text-sm">Кол-во дней: ${tour.duration} </div>
        </div> 
        
        <div class="mt-3 text-gray-600 text-sm flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span aria-hiden="true" class="mx-1">&middot;</span>
              <div class="underline font-semibold text-gray-500 text-base">Стоимость тура: ${
                tour.price
              } </div>
        </div>
        <div class="btn-active">
            <button class="btn-opt booking">Забронировать</button>
        
            <div class="favorite-container ${tour.isFavorite ? 'is-favorite' : ''}">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="favorite"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="favorite-hovered"
                >
                <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                />
                </svg>
            </div>
        </div>
      </div>
    </div>`;
    element.querySelector('.favorite-container').addEventListener('click', () => toogleToFavorite(tour.id, tours));
    element.querySelector('.booking').addEventListener('click', () => booking(tour));

    return element;
  }

  export const getHtmlModalForm = () => {
    const html = ` <div id="modal-window-form" class="bg-white w-6/9 border-gray-900 pb-12 py-3 px-10 rounded-lg flex flex-col gap-3  max-h-full my-16">
    <div id="modal-btn-close" class="flex justify-end pb-2"><button class="text-state-500 cursor text-xl">x</button></div>
    
    <div id="anketa" class="anketa flex justify-evenly">
      <div class="flex flex-col">
        <h3 class="text-xl font-semibold  text-gray-700">Личная информация</h3>
        <div class="mt-10 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
            <div class="sm:col-span-3 mt-2">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-800">Имя</label>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-yellow-600 sm:text-sm sm:leading-6">
            </div>
    
            <div class="sm:col-span-3 mt-2">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-800">Фамилия</label>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
            </div>
            
            <div class="sm:col-span-3 mt-2">
              <label for="number" class="block text-sm font-medium leading-6 text-gray-800">Телефон</label>
              <input type="number" name="number" id="number" autocomplete="number" class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
            </div>
            
            <div class="sm:col-span-3 mt-2">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-800">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
            </div>

            <div class="sm:col-span-6 mt-2">
              <label for="comment" class="block text-sm font-medium leading-6 text-gray-800">Коментарий</label>
              <input id="comment" name="comment" type="text" autocomplete="text" class="block w-full h-24 min-h-full rounded-md border-0 py-1.5 pl-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
            </div>
            
            <div class="sm:col-span-6 mt-8 flex justify-end gap-x-6">
              <button id="btn-send" type="submit" class="rounded-md bg-yellow-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline   focus-visible:outline-yellow-600">Отправить</button>
            </div>
        </div>
      </div>
      <div id="booking-tour-info" class="sm:col-span-3 w-1/3 pb-8"></div>
    </div>`;
    return html;
  }