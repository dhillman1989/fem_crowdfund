import logoIcon from "../images/logo-mastercraft.svg";
import PledgePopup from "./PledgePopup";

const CTA = () => {
  const cta = document.createElement("section");
  cta.classList.add("card");
  cta.classList.add("cta-box");
  cta.innerHTML = `
  <img src=${logoIcon} class="card__logo"/>
    <h3 class="heading-primary">Mastercraft Bamboo Monitor Riser</h3>
    <p class="card__text">A beautiful &amp;
    handcrafted monitor stand to reduce neck and eye strain.</p>
    <div class="card__buttons">
      <button class="button button--cta"> Back this project</button>
      <button class="button button--bookmark">
        <div class="button--bookmark__icon">
          <i class="fas fa-bookmark"></i>
        </div>
        <span>Bookmark</span>
      </button>
    </div>`;

  document.querySelector("#container").appendChild(cta);

  const button = document.querySelector(".button--bookmark");

  button.addEventListener("click", () => {
    document.querySelector(".button--bookmark span").innerText = "Bookmarked";
    document.querySelector(".button--bookmark span").classList.add("active");
    document
      .querySelector(".button--bookmark__icon")
      .classList.add("button--bookmark__icon--active");
  });

  //CTA opens pledge popup
  document
    .querySelector(".cta-box .button--cta")
    .addEventListener("click", () => {
      PledgePopup();
    });
};

export default CTA;
