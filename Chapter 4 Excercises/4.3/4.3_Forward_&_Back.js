function forward() {
  return history.forward();
}

function back() {
  return history.back();
}

function go(link) {
  location.href = link;
  return location.href;
}
