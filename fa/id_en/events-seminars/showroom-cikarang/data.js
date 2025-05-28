let datas = [
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-1.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-1.jpg",
      "Title": "Digitalization of Smart Manufacturing for Production Line"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-2.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-2.jpg",
      "Title": "Collaborative Robot Barista"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-3.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-3.jpg",
      "Title": "HVAC Redundancy Control System"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-4.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-4.jpg",
      "Title": "Induction Motor"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-5.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-5.jpg",
      "Title": "Engraving CNC Demo Machine"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-6.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-6.jpg",
      "Title": "High-performance Wire-cut EDM MV-R Series"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-7.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-7.jpg",
      "Title": "High-performance Die-Sinker EDM SG Series"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-8.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-8.jpg",
      "Title": "Pick and Place Robot Candy"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-9.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-9.jpg",
      "Title": "HVAC Application for Clean Room and Control Room with SCADA System"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-10.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-10.jpg",
      "Title": "Oil and Gas Solution"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-11.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-11.jpg",
      "Title": "HVAC Application for Social Infrastructure"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-12.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-12.jpg",
      "Title": "Carbon Neutral Solution (Energy Monitoring System)"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-13.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-13.jpg",
      "Title": "CNC Demokit No-2 In-house Repair"
    },
    {
      "URL": "/id_en/events-seminars/showroom-cikarang/B-14.html",
      "Image": "/id_en/events-seminars/assets/img/showroom/B-14.jpg",
      "Title": "Pick and Place Robot with Rotary and Linear Synchronize Application"
    }
];

$(document).ready(function () {
    $.each(datas, function (i, item) {
        const html = `
        <div class="l-grid__item l-grid__item-3 l-grid__item-6-md l-grid__item-6-sm">
            <a class="c-linkWithImage" href="${item.URL}">
            <div class="c-linkWithImage__image">
            <img src="${item.Image}" alt="${item.Title}" decoding="async" style="height: auto;">
            </div>
            <span class="c-linkWithImage__link u-icons u-icons--bulletRight">${item.Title}</span>
            </a>
        </div>
      `;
      $('#data-showroom').append(html);
    });
});