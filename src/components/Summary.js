const Summary = () => {
  const summary = document.createElement("section");
  summary.classList.add("card");
  summary.classList.add("summary");
  summary.innerHTML = `
    <ul>
        <li>
            <h3 class="summary__heading">$89,914</h3> <span>of $100,000 backed</span>
        </li>
        <li>
            <h3 class="summary__heading">5,007</h3> <span>total backers</span>
        </li>
        <li>
            <h3 class="summary__heading">56</h3> <span>days left</span>
        </li>
    </ul>
    <div class="summary__progress">
        <div class="summary__progress--fill"></div>
    </div>
    `;

  document.querySelector("#container").appendChild(summary);
};

export default Summary;
