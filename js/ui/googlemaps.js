export async function googleMapsIframe() {

    const mapContainer = document.querySelector(".google-maps");

    if (mapContainer) {
        const iframe = document.createElement('iframe');
        iframe.className = 'map';
        iframe.style.border = '0';
        iframe.allowFullscreen = '';
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3514881766598!2d12.01261107733423!3d60.19146584171482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464248f04d05cc4f%3A0xa2b3522e28cb376c!2sTr%C3%A5stadhallen!5e0!3m2!1sno!2sno!4v1705919027887!5m2!1sno!2sno";
       
        mapContainer.append(iframe);
    }
}