let demokitVirtual1 = [
    {
        "URL": "B-1.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-1.jpg",
        "Title": "Digitalisasi Manufaktur Cerdas untuk Lini Produksi",
    },
    {
        "URL": "B-2.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-2.jpg",
        "Title": "Robot Barista Kolaboratif",
    },
    {
        "URL": "B-3.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-3.jpg",
        "Title": "Sistem Kontrol Redundansi HVAC",
    },
    {
        "URL": "B-5.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-5.jpg",
        "Title": "Mesin Demo Ukiran CNC",
    },
    {
        "URL": "B-13.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-13.jpg",
        "Title": "Perbaikan CNC Internal",
    },
];

let demokitVirtual2 = [
    {
        "URL": "B-1.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-1.jpg",
        "Title": "Digitalisasi Manufaktur Cerdas untuk Lini Produksi",
    },
    {
        "URL": "B-3.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-3.jpg",
        "Title": "Sistem Kontrol Redundansi HVAC",
    },
];

let demokitVirtual3 = [
    {
        "URL": "B-1.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-1.jpg",
        "Title": "Digitalisasi Manufaktur Cerdas untuk Lini Produksi",
    },
    {
        "URL": "B-2.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-2.jpg",
        "Title": "Robot Barista Kolaboratif",
    },
    {
        "URL": "B-3.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-3.jpg",
        "Title": "Sistem Kontrol Redundansi HVAC",
    },
    {
        "URL": "B-5.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-5.jpg",
        "Title": "Mesin Demo Ukiran CNC",
    },
    {
        "URL": "B-13.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-13.jpg",
        "Title": "Perbaikan CNC Internal",
    },
];

let demokitVirtual4 = [
    {
        "URL": "B-14.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-14.jpg",
        "Title": "Robot Pick and Place dengan Aplikasi Sinkronisasi Rotary dan Linear",
    }
];

let allDemokits = {
    1: demokitVirtual1,
    2: demokitVirtual2,
    3: demokitVirtual3,
    4: demokitVirtual4,
}

$(document).ready(function () {
    const virtualAttr = $('#data-demokit').data('virtual');

    if (typeof virtualAttr !== 'undefined' && allDemokits.hasOwnProperty(virtualAttr)) {
        let selectedDemokits = allDemokits[virtualAttr];

        // Sort by Title (alphabetically)
        selectedDemokits.sort((a, b) => a.Title.localeCompare(b.Title));

        // Render sorted items
        $.each(selectedDemokits, function (_, item) {
            const html = `
                <div class="l-grid__item l-grid__item-3 l-grid__item-6-md l-grid__item-6-sm">
                    <a class="c-linkWithImage" href="/fa/id_id/events-seminars/demokit/${item.URL}?virtual=${virtualAttr}">
                        <div class="c-linkWithImage__image">
                            <img src="${item.Image}" alt="${item.Title}" decoding="async" style="height: auto;">
                        </div>
                        <span class="c-linkWithImage__link u-icons u-icons--bulletRight">${item.Title}</span>
                    </a>
                </div>
            `;
            $('#data-demokit').append(html);
        });
    }
});