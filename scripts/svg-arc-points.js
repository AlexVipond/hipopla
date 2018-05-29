function rad(degrees) {
  return degrees * Math.PI / 180
}

function coords(angle, radius) {
  angle = rad(angle);
  var x = Math.cos(angle) * radius;
  var y = Math.sin(angle) * radius;
  return {'x': x, 'y': y};
}

function point(angle, radius) {
  var coord = coords(angle, radius);
  var dx = coord.x;
  var dy = radius - coord.y;
  return {'dx': dx, 'dy': dy};
}
