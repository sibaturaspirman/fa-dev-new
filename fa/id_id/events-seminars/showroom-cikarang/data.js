let datas = [
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-1.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-1.jpg",
      "Title": "Digitalisasi Manufaktur Cerdas untuk Lini Produksi",
        "Virtuals": [1,2,3],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-2.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-2.jpg",
      "Title": "Robot Barista Kolaboratif",
        "Virtuals": [1,3],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-3.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-3.jpg",
      "Title": "Sistem Kontrol Redundansi HVAC",
        "Virtuals": [1,2,3],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-5.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-5.jpg",
      "Title": "Mesin Demo Ukiran CNC",
        "Virtuals": [1,3],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-6.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-6.jpg",
      "Title": "Kawat potong berkinerja tinggi EDM MV-R Series",
        "Virtuals": [],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-7.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-7.jpg",
      "Title": "Die-Sinker Berkinerja Tinggi EDM SG Series",
        "Virtuals": [],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-8.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-8.jpg",
      "Title": "Pilih dan Tempatkan Permen Robot",
        "Virtuals": [],
    },
    // {
    //   "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-9.html",
    //   "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-9.jpg",
    //   "Title": "Aplikasi HVAC untuk Ruang Bersih dan Ruang Kontrol dengan Sistem SCADA"
    // },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-10.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-10.jpg",
      "Title": "Solusi Minyak dan Gas",
        "Virtuals": [],
    },
    // {
    //   "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-11.html",
    //   "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-11.jpg",
    //   "Title": "Aplikasi HVAC untuk Infrastruktur Sosial"
    // },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-12.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-12.jpg",
      "Title": "Solusi Netral Karbon (Sistem Pemantauan Energi)",
        "Virtuals": [],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-13.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-13.jpg",
      "Title": "Perbaikan CNC Internal",
        "Virtuals": [1,3],
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-14.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-14.jpg",
      "Title": "Robot Pick and Place dengan Aplikasi Sinkronisasi Rotary dan Linear",
        "Virtuals": [4],
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