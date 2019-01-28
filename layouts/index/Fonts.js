const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,500,700,900";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const josefinSans = new FontFaceObserver("Josefin Sans");

  josefinSans.load().then(() => {
    document.documentElement.classList.add("josefinSans");
  });
};

export default Fonts;
