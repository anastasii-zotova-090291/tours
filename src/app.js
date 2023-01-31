import { format, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
function renderTour(tour) {
  return ` <div class="bg-white shadow-lg rounded-lg overflow-hidden">
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
        <button class="btn-opt">Подробнее</button>
        <div class="favorite-container">
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
}

async function makeTest() {
  let response = await fetch(
    "https://www.bit-by-bit.ru/api/student-projects/tours"
  );
  const data = await response.json();
  console.log(data, "data");

  const tourContainer = document.getElementById("tours");
  tourContainer.innerHTML = "";
  data.forEach((tour) => {
    tour.duration = differenceInDays(
      new Date(tour.endTime),
      new Date(tour.startTime)
    );

    const option = {
      locale: ru,
    };
    const pattern = "dd MMMM";
    tour.startDate = format(new Date(tour.startTime), pattern, option);
    tour.endDate = format(new Date(tour.endTime), pattern, option);
    console.log(tour, "tour");
    tourContainer.innerHTML += renderTour(tour);
  });
}

makeTest();
