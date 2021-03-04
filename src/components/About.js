import PledgePopup from "./PledgePopup";

const About = () => {
  const about = document.createElement("section");
  about.classList.add("card");
  about.classList.add("about");
  about.innerHTML = `
  <h3 class="heading-secondary">About this project</h3>
    <p class="card__text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
        platform that elevates your screen to a more comfortable viewing height.
        Placing your monitor at eye level has the potential to improve your posture
        and make you more comfortable while at work, helping you stay focused on the
        task at hand.
    </p>
    <p class="card__text">
        Featuring artisan craftsmanship, the simplicity of design
        creates extra desk space below your computer to allow notepads, pens, and
        USB sticks to be stored under the stand.
    </p>
  
    <div class="card card--pledge">
        <div class="card__title-box">
            <h3 class="heading-tertiary">Bamboo Stand</h3> 
            <h4 class="heading-light">Pledge $25 or more</h4> 
        </div>
        <div class="card__text">
            Black Special Edition computer stand and a personal thank you. You’ll be
            added to our Backer member list. Shipping is included.
        </div>
        <div class="pledge__cta-flex">
            <p class="card__text flex-row">
                <span class="span-lg">101</span> left
            </p>  
            <button class="button button--cta">Select Reward</button>
        </div>
    </div>

    <div class="card card--pledge">
        <div class="card__title-box">
            <h3 class="heading-tertiary">Black Edition</h3> 
            <h4 class="heading-light">Pledge $75 or more</h4> 
        </div>
        <div class="card__text">
            Black Special Edition computer stand and a personal thank you. You’ll be
            added to our Backer member list. Shipping is included.
        </div>
        <div class="pledge__cta-flex">
            <p class="card__text flex-row">
                <span class="span-lg">64</span> left
            </p>  
            <button class="button button--cta">Select Reward</button>
        </div>
    </div>

    
    <div class="card card--pledge card--disabled">
        <div class="card__title-box">
            <h3 class="heading-tertiary">Mahogany Special Edition</h3> 
            <h4 class="heading-light">Pledge $200 or more</h4> 
        </div>
        <div class="card__text">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
            to our Backer member list. Shipping is included.
        </div>
        <div class="pledge__cta-flex">
            <p class="card__text flex-row">
                <span class="span-lg">0</span> left
            </p>  
            <button class="button button--cta button--disabled">Out of Stock</button>
        </div>
    </div>
  `;

  document.querySelector("#container").appendChild(about);

  document.querySelectorAll(".about .button--cta").forEach((btn) =>
    btn.addEventListener("click", () => {
      PledgePopup();
    })
  );
};

export default About;
