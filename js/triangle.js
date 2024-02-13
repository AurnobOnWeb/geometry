function calculateTriangle() {
  const triangleBase = document.getElementById("triangleBase").value;
  const triangleBaseFloat = parseFloat(triangleBase);

  const triangleHeight = document.getElementById("triangleHeight").value;
  const triangleHeightFloat = parseFloat(triangleHeight);

  const area = 0.5 * triangleBaseFloat * triangleHeightFloat;

  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = area;
}
