const banner = document.getElementById("cookie-banner");
const consent = localStorage.getItem("cookieConsent");

if(!consent){
    banner.style.display = "block";
}

document.getElementById("accept-cookies").onclick = function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadAnalytics();
};

document.getElementById("reject-cookies").addEventListener("click", reject());
    
function reject(){
    localStorage.setItem("cookieConsent", "rejected");
    banner.style.display = "none";
};

function loadAnalytics(){
    if (window.analyticsLoaded) return;
    window.analyticsLoaded = true;

    const script = document.createElement("script");


    script.async=true;
    script.src="https://www.googletagmanager.com/gtag/js?id=G-31XPC3ZMW5";

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-31XPC3ZMW5');
}