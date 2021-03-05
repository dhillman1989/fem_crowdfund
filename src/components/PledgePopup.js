import ThanksMessage from "./ThanksMessage";

const PledgePopup = () => {
  const pledgePopup = document.createElement("section");
  pledgePopup.classList.add("pledgePopup");
  pledgePopup.id = "popup";
  pledgePopup.innerHTML = `
        <div class="card" id="pledgePopup">

            <i id="popupCloseIcon" class="fas fa-times  pledgePopup__close"></i>

            <h1 class="card__title heading-secondary">Back this project</h1> 
            <p class="card__text">
                Want to support us in bringing Mastercraft Bamboo Monitor
                Riser out in the world?
            </p> 
            
            <input id = "no_reward" type="radio" name="pledge-selection"/>
            <label for = "no_reward" class="ml-md">
                <div id="card-no-reward" class="card card--pledge">
                    <div class="flex-row mb-md">
                    <div class="checkbox"></div>
                        <div class="flex-col">
                            <h1 class="heading-tertiary ml-md">Pledge with no reward</h1>
                        </div>
                    </div>
                    <p class="card__text">
                        Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                    </p>
                    <form class="pledgePopup__pledge-form">
                        
                        <p class="card__text">Enter your pledge</p>
                        <div class="card__buttons">
                            <input type="text" class="pledgePopup__input"/><button class="button button--cta pledgePopup__button">Continue</button>
                        </div>
                    </form>                   
                </div> 
            </label>

            <input id = "bamboo" type="radio" name="pledge-selection"/>
            <label for = "bamboo" class="ml-md">
                <div id="bamboo-card" class="card card--pledge">
                    <div class="flex-row mb-md">
                        <div class="checkbox"></div>
                        <div class="flex-col ml-md">
                            <h1 class="heading-tertiary">Bamboo Stand</h1>
                            <h2 class="heading-light mb-xs"> Pledge $25 or more</h2>
                        </div>
                    </div>
                    <p class="card__text">
                        You get an ergonomic stand made of natural bamboo. You've helped us launch our
                        promotional campaign, and you’ll be added to a special Backer member list.
                    </p>
                    <div class="flex-row pledgePopup__remaining">
                        <span class="span-md">101</span> left
                    </div>
                    <form class="pledgePopup__pledge-form">
                        
                        <p class="card__text">Enter your pledge</p>
                        <div class="card__buttons">
                            <input type="text" class="pledgePopup__input"/><button class="button button--cta pledgePopup__button">Continue</button>
                        </div>
                    </form>            
                </div> 
            </label>

            <input id = "blackEdition" type="radio" name="pledge-selection"/>
            <label for = "blackEdition" class="ml-md">
                <div id="card-black" class="card card--pledge">
                    <div class="flex-row mb-md">
                    <div class="checkbox"></div>
                        <div class="flex-col ml-md">
                            <h1 class="heading-tertiary">Black Edition Stand </h1>
                            <h2 class="heading-light mb-xs"> Pledge $75 or more</h2>
                        </div>
                    </div>
                    <p class="card__text">
                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. 
                    </p>
                    <div class="flex-row pledgePopup__remaining">
                    <span class="span-md">64</span> left
                    </div>
                    <form class="pledgePopup__pledge-form">
                        
                    <p class="card__text">Enter your pledge</p>
                    <div class="card__buttons">
                        <input type="text" class="pledgePopup__input"/><button class="button button--cta pledgePopup__button">Continue</button>
                    </div>
                </form>            
                </div> 
            </label>

            <input id = "mahoganyEdition" name="pledge-selection" type="radio"/>
            <label for = "mahoganyEdition" class="ml-md">
                <div id="card-mahogany" class="card card--pledge card--disabled">
                    <div class="flex-row mb-md">
                    <div class="checkbox"></div>
                        <div class="flex-col ml-md">
                            <h1 class="heading-tertiary">Mahogany Edition Stand </h1>
                            <h2 class="heading-light mb-xs"> Pledge $200 or more</h2>
                        </div>
                    </div>
                    <p class="card__text">
                        You get two  Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. 
                        You’ll be added to our Backer member list. Shipping is included. 
                    </p>
                    <div class="flex-row pledgePopup__remaining">
                        <span class="span-md">0</span> left
                    </div>
                    <form class="pledgePopup__pledge-form">
                        
                        <p class="card__text">Enter your pledge</p>
                        <div class="card__buttons">
                            <input type="text" class="pledgePopup__input"/><button class="button button--cta pledgePopup__button">Continue</button>
                        </div>
                    </form>                               
                </div>   
            </label>
        </div>
      `;

  document.querySelector("#container").appendChild(pledgePopup);

  document.querySelectorAll(".pledgePopup__button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      ThanksMessage();
    });
  });

  document.querySelector("#popupCloseIcon").addEventListener("click", () => {
    const popup = document.querySelector("#popup");
    popup.parentElement.removeChild(popup);
  });
};

export default PledgePopup;
