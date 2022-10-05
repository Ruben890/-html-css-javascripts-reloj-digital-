let hora = document.querySelector(".hora");
let fecha = document.querySelector(".fecha");

const Hora = () => {
  let hours = new Date();
  let H = hours.getHours();
  let M = hours.getMinutes();
  let S = hours.getSeconds();
  let timpo = `${H}:${M}:${S}`;
  hora.innerHTML = timpo;
};

setInterval(Hora, 1000);
const Fecha = () => {
  let D = new Date().getDay();
  let Ms = new Date().getMonth();
  let Y = new Date().getFullYear();
  let tiempo = `${D}/${Ms}/${Y}`;
  fecha.innerHTML = tiempo;
};
