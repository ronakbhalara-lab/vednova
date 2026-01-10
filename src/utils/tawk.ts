declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export const loadTawkTo = () => {
  if (document.getElementById("tawk-script")) return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const script = document.createElement("script");
  script.id = "tawk-script";
  script.async = true;
  script.src = "https://embed.tawk.to/6961f23de4ca97197dcdc909/1jej9kh7g";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);
};
