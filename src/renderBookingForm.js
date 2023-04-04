export function renderPartTourInfoBookingForm(tour) {
    const container = document.getElementById('booking-tour-info');
    if (!container) {
      return;
    }
    container.dataset.tourId = tour.id;
    container.innerHTML = `
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
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
    </div>
  </div>
    `;
}