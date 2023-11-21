import laptop from "./laptop.jpeg"
function addImage() {
    const element = document.createElement("img");
    element.width = 300,
    element.src = laptop;
    const body = document.querySelector("body");
    body.appendChild(element);
}
export default addImage;