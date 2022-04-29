const container = {
  width: "",
  height: "",
  setWidth: function (width) {
    this.width = width;
  },
  setHeight: function (height) {
    this.height = height;
  },
};
const element = document.getElementById("js");
container.setWidth(100);
container.setHeight(350);
element.innerHTML += ``;
element.classList.add("text-center");
element.classList.remove("fs-1");
element.innerHTML += "<br> Hello world";
