// Put the apps
const apps = [
  {
    id: 0,
    label: "Cronus",
    img: "cronus-logo.svg",
    desc: "Deixe-nos cuidar da logística da sua empresa, gerindo colaboradores, clientes, stock e muito mais.",
    show: true,
  },
  {
    id: 1,
    label: "Isis",
    img: "robot-solid.svg",
    desc: "Crie um assistente virtual para auxiliar rapidamente com informações úteis por meio de texto ou comandos de voz.",
    show: false,
  },
  {
    id: 2,
    label: "Translator",
    img: "tanslator.svg",
    desc: "Um tradutor avançado com suporte à vários idiomas e múltiplas funcionalidades.",
    show: false,
  },
  {
    id: 3,
    label: "Notify",
    img: "broadcast-tower-solid.svg",
    desc: "Envie rapidamente um email ou uma mensagem de texto exportando uma lista de contactos do excel.",
    show: false,
  },
  {
    id: 4,
    label: "Panel",
    img: "tv-solid.svg",
    desc: "Dê visibilidade ao seu empreendimento.",
    show: true,
  },
  {
    id: 5,
    label: "Feedback",
    img: "feedback.svg",
    desc: "Melhore a sua organização com o feedback dos seus clientes ou colaboradores.",
    show: true,
  },
];

let _apps = new String();

for (const { id, label, img, desc, show } of apps) {
  if (show)
    _apps += `<a
        href="https://${label}.advancedtechspace.com"
        target="_blank"
        class="product"
      >
        <figure>
          <img
            width="50"
            src="assets/img/services/${img}"
            alt="${label}-logo"
          />
        </figure>
        <p class="title">${label} <i class="la la-external-link"></i></p>
        <p class="desc">
          ${desc}
        </p>
      </a>`;
}

document.getElementById("products").innerHTML = _apps;
