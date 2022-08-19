const navToggle = document.querySelector(`.nav-toggle`);
const opens = document.querySelector(`.open`);
const closed = document.querySelector(`.close`);
const arrows = document.querySelectorAll(`.arrows`);
const logoreg = document.querySelector(`.logo-reg`);
const allMenu = document.querySelector(`.all-menu`);

navToggle.addEventListener(`click`, function () {
  if (allMenu.classList.contains(`show-all`)) {
    allMenu.classList.remove(`show-all`);
    opens.classList.remove(`hide-all`);
    closed.classList.remove(`show-all`);
    document.body.style.background = `white`;
  } else {
    allMenu.classList.add(`show-all`);
    opens.classList.add(`hide-all`);
    closed.classList.add(`show-all`);
    document.body.style.background = ` rgba(0, 0, 0, 0.6)`;
  }
});

arrows.forEach(function (arrow) {
  arrow.addEventListener(`click`, function (e) {
    const target = e.currentTarget.parentElement.nextSibling.nextSibling;
    if (target.classList.contains(`show-sm1`)) {
      target.classList.remove(`show-sm1`);
    } else {
      target.classList.add(`show-sm1`);
      logoreg.classList.add(`slr`);
    }
    if (target.classList.contains(`show-sm2`)) {
      target.classList.remove(`show-sm2`);

      logoreg.classList.remove(`slr`);
    } else {
      target.classList.add(`show-sm2`);
    }

    const targ = e.currentTarget.lastChild;
    console.log(targ);
    const gett = e.currentTarget.lastChild.previousSibling.previousSibling;
    console.log(gett);

    if (!targ.classList.contains(`hid-all`)) {
      targ.classList.add(`hid-all`);
      gett.classList.add(`sho-all`);
    } else {
      targ.classList.remove(`hid-all`);
      gett.classList.remove(`sho-all`);
    }
  });
});
