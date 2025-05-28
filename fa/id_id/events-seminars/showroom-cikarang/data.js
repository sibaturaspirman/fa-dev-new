let datas = [
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-1.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-1.jpg",
      "Title": "Digitalisasi Manufaktur Cerdas untuk Lini Produksi"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-2.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-2.jpg",
      "Title": "Robot Barista Kolaboratif"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-3.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-3.jpg",
      "Title": "Sistem Kontrol Redundansi HVAC"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-4.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-4.jpg",
      "Title": "Motor Induksi"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-5.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-5.jpg",
      "Title": "Mesin Demo Ukiran CNC"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-6.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-6.jpg",
      "Title": "Kawat potong berkinerja tinggi EDM MV-R Series"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-7.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-7.jpg",
      "Title": "Die-Sinker Berkinerja Tinggi EDM SG Series"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-8.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-8.jpg",
      "Title": "Pilih dan Tempatkan Permen Robot"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-9.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-9.jpg",
      "Title": "Aplikasi HVAC untuk Ruang Bersih dan Ruang Kontrol dengan Sistem SCADA"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-10.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-10.jpg",
      "Title": "Solusi Minyak dan Gas"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-11.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-11.jpg",
      "Title": "Aplikasi HVAC untuk Infrastruktur Sosial"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-12.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-12.jpg",
      "Title": "Solusi Netral Karbon (Sistem Pemantauan Energi)"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-13.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-13.jpg",
      "Title": "Perbaikan Internal CNC Demokit No-2"
    },
    {
      "URL": "/id_id/events-seminars/showroom-cikarang/B-14.html",
      "Image": "/id_id/events-seminars/assets/img/showroom/B-14.jpg",
      "Title": "Robot Pick and Place dengan Aplikasi Sinkronisasi Rotary dan Linear"
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