function calculateParallelogram() {
  const base = getValues("parallelogramBase");
  const height = getValues("parallelogramHeight");

  const area = base * height;

  setValues("parallelogram-area", area);
}

function getValues(input) {
  const inputFiled = document.getElementById(input).value;
  const values = parseFloat(inputFiled);
  return values;
}
function setValues(id, area) {
  document.getElementById(id).innerText = area;
}
