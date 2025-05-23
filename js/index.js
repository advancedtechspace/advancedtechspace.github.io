//
// Config.
const api_url =
  window.location.protocol === "https:"
    ? "https://api-master.onrender.com"
    : "http://localhost:8000";

$(document).ready(() => {
  const sectionHeight = innerHeight * 0.75;
  $("header nav a:nth-child(1), .arrow").click(() => {
    $("body, html").animate({ scrollTop: sectionHeight + 100 });
  });

  $("header nav a:nth-child(2)").click(() => {
    $("body, html").animate({ scrollTop: 2 * sectionHeight + 100 });
  });

  $("header nav a:nth-child(3)").click(() => {
    $("body, html").animate({ scrollTop: 3 * sectionHeight + 100 });
  });

  $(".gotop").click(() => {
    $("body, html").animate({ scrollTop: 0 });
  });

  $(window).scroll((e) => {
    if (scrollY > 60) {
      $(".gotop").css({ transform: "scale(1)" });
    } else {
      $(".header").css({ "box-shadow": "none" });
      $(".gotop").css({ transform: "scale(0)" });
    }
  });
});

$("#form-subscribe").submit(async (e) => {
  e.preventDefault();
  const inp = document.getElementById("inp-email");
  const sbmt = document.getElementById("inp-submit");

  if (inp.disabled) {
    return;
  }

  inp.disabled = true;
  sbmt.disabled = true;

  const email = inp.value;
  try {
    const res = await fetch(api_url + "/ats/email-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.status === 200) {
      alert("Obrigado pela sua subscrição.");
    }
  } catch (error) {
    console.log(error);
    alert("Houve um erro, tente novamente.");
  }

  inp.disabled = false;
  sbmt.disabled = false;
});
