let hour = 14;

if (hour >= 0 && hour < 12) {
  console.log("Buen día");
} else if (hour >= 12 && hour < 19) {
  console.log("Buenas tardes");
} else if (hour >= 19 && hour < 23) {
  console.log("Buenas noches");
} else {
  console.log("Hora no válida");
}
