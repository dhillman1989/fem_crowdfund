const ThanksMessage = () => {
  const target = document.querySelector("#pledgePopup");
  target.innerHTML = `
  <div class="text-center"><i class="fas fa-check-circle fa-4x"></i></div>
  <h1 class="heading-tertiary text-center">Thanks for your support</h1>
  <p class="card__text text-center">
    Your pledge brings us one step closer to sharing
    Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our
    campaign is completed.
  </p>
  <button id="confirm" class="button button--cta m-auto">Got it!</button>
`;

  document.querySelector("#confirm").addEventListener("click", () => {
    const popup = document.querySelector("#popup");
    popup.parentElement.removeChild(popup);
  });
};

export default ThanksMessage;
