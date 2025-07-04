let datas = [
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-1.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-1.jpg",
      "Title": "Digitalisasi Manufaktur Cerdas untuk Lini Produksi",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-2.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-2.jpg",
      "Title": "Robot Barista Kolaboratif",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-3.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-3.jpg",
      "Title": "Sistem Kontrol Redundansi HVAC",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-5.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-5.jpg",
      "Title": "Mesin Demo Ukiran CNC",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-6.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-6.jpg",
      "Title": "Kawat potong berkinerja tinggi EDM MV-R Series",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-7.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-7.jpg",
      "Title": "Die-Sinker Berkinerja Tinggi EDM SG Series",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-8.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-8.jpg",
      "Title": "Pilih dan Tempatkan Permen Robot",
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
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-13.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-13.jpg",
      "Title": "Perbaikan CNC Internal",
    },
    {
      "URL": "/fa/id_id/events-seminars/showroom-cikarang/B-14.html",
      "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-14.jpg",
      "Title": "Robot Pick and Place dengan Aplikasi Sinkronisasi Rotary dan Linear",
    }
];

datas.sort(function (a, b) {
    return a.Title.localeCompare(b.Title);
});

$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const virtualAttr = params.get('virtual');

    if (virtualAttr) {
        const url = `/fa/id_id/events-seminars/virtual-space/virtual-${virtualAttr}.html`;
        const anchorElem = $("a.u-icons.u-icons--bulletLeft");
        anchorElem.attr("href", url);

        switch (virtualAttr) {
            case "1":
                anchorElem.text("Manufacturing Indonesia 2024 Exhibition");
                break;
            case "2":
                anchorElem.text("Indonesia 4.0 Expo & Conference 2024");
                break;
            case "3":
                anchorElem.text("Manufacturing Indonesia 2023 Exhibition");
                break;
            case "4":
                anchorElem.text("Indonesia 4.0 Expo & Conference 2023");
                break;
            default:
                anchorElem.text("Factory Automation Showroom");
                break;
        }
    }

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