(() => {
  function changeValue(input, delta) {
    const current = Number.parseFloat(input.value) || 0;
    const next = Math.max(0, Math.round((current + delta) * 100) / 100);
    input.value = String(next);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function addStepper(input, decreaseBy, increaseBy, label) {
    if (!input || input.parentElement?.classList.contains("eo-number-control")) return;
    const wrapper = document.createElement("span");
    wrapper.className = "eo-number-control";
    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.className = "eo-step";
    decrease.setAttribute("aria-label", `Уменьшить ${label || (input.id === "calcPrice" ? "цену" : "вес")}`);
    decrease.textContent = "−";
    decrease.addEventListener("click", () => changeValue(input, decreaseBy));
    const increase = document.createElement("button");
    increase.type = "button";
    increase.className = "eo-step";
    increase.setAttribute("aria-label", `Увеличить ${label || (input.id === "calcPrice" ? "цену" : "вес")}`);
    increase.textContent = "+";
    increase.addEventListener("click", () => changeValue(input, increaseBy));
    input.parentNode.insertBefore(wrapper, input);
    wrapper.append(decrease, input, increase);
  }

  function init() {
    addStepper(document.getElementById("calcPrice"), -1, 1);
    addStepper(document.getElementById("calcWeight"), -0.5, 0.5);
    document.querySelectorAll("[data-eo-qty]").forEach((input) => addStepper(input, -1, 1, "количество"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  new MutationObserver(init).observe(document.documentElement, { childList: true, subtree: true });
})();
