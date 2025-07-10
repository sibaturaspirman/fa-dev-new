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
    {
        "URL": "B-15.html",
        "Image": "/fa/id_en/events-seminars/assets/img/showroom/B15/B15-1.png",
        "Title": "The Future of Excellence Productivity with Real-Time Data Visualization",
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
    {
        "URL": "NEW-B2.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/NEW-B2/0.png",
        "Title": "Digitalization of Real-Time Data Visualization with SCADA Genesis 64",
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
    {
        "URL": "NEW-B1.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/NEW-B1/0.png",
        "Title": "MES Interface System for Extensive Data Handling",
    },
    {
        "URL": "NEW-B2.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/NEW-B2/0.png",
        "Title": "Digitalization of Real-Time Data Visualization with SCADA Genesis 64",
    },
    {
        "URL": "NEW-B3.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/NEW-B3/0.png",
        "Title": "Innovation Solution by Device and Network System (CC-Link IE TSN)",
    },
    {
        "URL": "NEW-B4.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/NEW-B4/0.png",
        "Title": "Electric Discharge Machine",
    },
];

let demokitVirtual4 = [
    {
        "URL": "B-14.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/B-14.jpg",
        "Title": "Robot Pick and Place dengan Aplikasi Sinkronisasi Rotary dan Linear",
    },
    {
        "URL": "NEW-B5.html",
        "Image": "/fa/id_id/events-seminars/assets/img/showroom/NEW-B5/0.png",
        "Title": "iQ PLATFORM-COMPATIBLE PAC Process CPU/Redundant System",
    },
];

let allDemokits = {
    1: demokitVirtual1,
    2: demokitVirtual2,
    3: demokitVirtual3,
    4: demokitVirtual4,
}

$(document).ready(function () {
    let data = [];
    let selectedVirtual = 1;

    const virtualAttr = $('#data-demokit').data('virtual');
    if (virtualAttr) {
        let selectedDemokits = allDemokits[virtualAttr];

        // Sort by Title (alphabetically)
        selectedDemokits.sort((a, b) => a.Title.localeCompare(b.Title));

        data = selectedDemokits;
        selectedVirtual = virtualAttr;
    }

    const params = new URLSearchParams(window.location.search);
    const virtualAttrQuery = params.get('virtual');

    if (virtualAttrQuery) {
        const url = `/fa/id_id/events-seminars/virtual-space/virtual-${virtualAttrQuery}.html`;
        const anchorElem = $("a.u-icons.u-icons--bulletLeft");
        anchorElem.attr("href", url);

        switch (virtualAttrQuery) {
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

        let selectedDemokits = allDemokits[virtualAttrQuery];

        // Sort by Title (alphabetically)
        selectedDemokits.sort((a, b) => a.Title.localeCompare(b.Title));

        data = selectedDemokits;
        selectedVirtual = virtualAttrQuery;
    }

    // Render sorted items
    $.each(data, function (_, item) {
        const html = `
                <div class="l-grid__item l-grid__item-3 l-grid__item-6-md l-grid__item-6-sm">
                    <a class="c-linkWithImage" href="/fa/id_id/events-seminars/demokit/${item.URL}?virtual=${selectedVirtual}">
                        <div class="c-linkWithImage__image">
                            <img src="${item.Image}" alt="${item.Title}" decoding="async" style="height: auto;">
                        </div>
                        <span class="c-linkWithImage__link u-icons u-icons--bulletRight">${item.Title}</span>
                    </a>
                </div>
            `;
        $('#data-demokit').append(html);
    });
});