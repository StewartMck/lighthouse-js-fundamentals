function calculateRectangleArea(length, width) {
  let area = length * width;
  if (area > 0) return area;
}

function calculateTriangleArea(base, height) {
  let area = base * (height / 2);
  if (area > 0) return area;
}

function calculateCircleArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  if (radius > 0) return area;
}