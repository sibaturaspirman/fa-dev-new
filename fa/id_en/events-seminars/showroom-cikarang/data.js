let datas = [
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-1.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-1.jpg",
      "Title": "Digitalization of Smart Manufacturing for Production Line",
        "Virtuals": [1,2,3],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-2.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-2.jpg",
      "Title": "Collaborative Robot Barista",
        "Virtuals": [1,3],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-3.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-3.jpg",
      "Title": "HVAC Redundancy Control System",
        "Virtuals": [1,2,3],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-5.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-5.jpg",
      "Title": "Engraving CNC Demo Machine",
        "Virtuals": [1,3],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-6.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-6.jpg",
      "Title": "High-performance Wire-cut EDM MV-R Series",
        "Virtuals": [],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-7.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-7.jpg",
      "Title": "High-performance Die-Sinker EDM SG Series",
        "Virtuals": [],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-8.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-8.jpg",
      "Title": "Pick and Place Robot Candy",
        "Virtuals": [],
    },
    // {
    //   "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-9.html",
    //   "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-9.jpg",
    //   "Title": "HVAC Application for Clean Room and Control Room with SCADA System"
    // },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-10.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-10.jpg",
      "Title": "Oil and Gas Solution",
        "Virtuals": [],
    },
    // {
    //   "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-11.html",
    //   "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-11.jpg",
    //   "Title": "HVAC Application for Social Infrastructure"
    // },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-12.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-12.jpg",
      "Title": "Carbon Neutral Solution (Energy Monitoring System)",
        "Virtuals": [],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-13.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-13.jpg",
      "Title": "CNC In-house Repair",
        "Virtuals": [1,3],
    },
    {
      "URL": "/fa/id_en/events-seminars/showroom-cikarang/B-14.html",
      "Image": "/fa/id_en/events-seminars/assets/img/showroom/B-14.jpg",
      "Title": "Pick and Place Robot with Rotary and Linear Synchronize Application",
        "Virtuals": [],
    }
];

datas.sort(function (a, b) {
    return a.Title.localeCompare(b.Title);
});

$(document).ready(function () {
    const virtualAttr = $('#data-showroom').data('virtual');
    const filteredDatas = datas.filter(item => {
        if (typeof virtualAttr !== 'undefined') {
            return item.Virtuals.includes(virtualAttr);
        }
        return true; // if not exists data-virtual, show all
    });

    $.each(filteredDatas, function (i, item) {
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