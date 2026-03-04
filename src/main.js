import "./style.css";
import "ui-foundations/core.css";
import "ui-foundations/ui.css";

document.querySelector("#app").innerHTML = `
  <main style="max-width: 480px; margin: 3rem auto; padding: 0 1rem;">
    <h1>UI Foundations Vanilla Starter</h1>
    <div style="display:grid; gap: 0.75rem;">
      <label class="ui-label" for="email">E-Mail</label>
      <input class="ui-input" id="email" type="email" placeholder="name@example.com" />
      <button class="ui-button">Absenden</button>
    </div>
  </main>
`;
