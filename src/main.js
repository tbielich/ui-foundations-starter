import "./style.css";
import "ui-foundations/core.css";
import "ui-foundations/ui.css";
import "ui-foundations/tokens/primitives.css";
import "ui-foundations/tokens/brand-a.css";
import "ui-foundations/tokens/brand-b.css";
import "ui-foundations/tokens/color-light.css";
import "ui-foundations/tokens/color-dark.css";
import "ui-foundations/tokens/semantic.css";
import "ui-foundations/tokens/components.css";

const root = document.documentElement;
root.dataset.brand = "a"; // "a" | "b"
root.dataset.mode = "light"; // "light" | "dark"

window.setBrand = (brand) => {
  root.dataset.brand = brand;
};

window.setMode = (mode) => {
  if (mode === "dark") root.dataset.mode = "dark";
  else root.dataset.mode = "light";
};

document.querySelector("#app").innerHTML = `
  <main class="page">
    <header class="hero">
      <h1>UI Foundations - Vanilla Example</h1>
      <p>Example page using your published package classes: <code>.button</code>, <code>.input</code>, <code>.field-label</code>, <code>.checkbox</code>.</p>
    </header>

    <section class="grid">
      <article class="card form">
        <h2>Newsletter Form</h2>
        <div class="stack">
          <label class="field-label" for="email">
            <span class="label-content">
              <span class="label-content__text">Email address</span>
            </span>
          </label>
          <input class="input" id="email" type="email" placeholder="you@example.com" />

          <label class="checkbox-field">
            <input class="checkbox" type="checkbox" />
            <span>I agree to receive product updates</span>
          </label>

          <div class="button-group" role="group" aria-label="Form actions">
            <button class="button" type="button">
              <span class="label-content"><span class="label-content__text">Submit</span></span>
            </button>
            <button class="button outline" type="button">
              <span class="label-content"><span class="label-content__text">Preview</span></span>
            </button>
            <button class="button ghost" type="button">
              <span class="label-content"><span class="label-content__text">Reset</span></span>
            </button>
          </div>
        </div>
      </article>

      <article class="card actions">
        <h2>Button States</h2>
        <div class="stack">
          <button class="button" type="button"><span class="label-content"><span class="label-content__text">Primary</span></span></button>
          <button class="button outline" type="button"><span class="label-content"><span class="label-content__text">Outline</span></span></button>
          <button class="button ghost" type="button"><span class="label-content"><span class="label-content__text">Ghost</span></span></button>
          <button class="button" type="button" disabled><span class="label-content"><span class="label-content__text">Disabled</span></span></button>
        </div>
        <p class="help">Run <code>npm run dev</code> to preview.</p>
      </article>
    </section>
  </main>
`;
