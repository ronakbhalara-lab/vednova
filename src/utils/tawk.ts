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
  script.src = "https://embed.tawk.to/69621de7f9c7721976042da1/1jejk9l3q";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);
};
