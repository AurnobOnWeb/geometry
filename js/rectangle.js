function calculateRectangle() {
  const length = document.getElementById("length").value;
  const lengthFloat = parseFloat(length);

  const width = document.getElementById("width").value;
  const widthFloat = parseFloat(width);

  const area = length * width;
  const rectangle = document.getElementById("rectangle-area");
  rectangle.innerText = area;
}
