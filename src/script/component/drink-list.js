import './drink-item.js';

class DrinkList extends HTMLElement {
    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }

    renderError(message) {

        this.innerHTML = `
        <h2 class="placeholder">${message}</h2>
    `;
    }

    render() {
        this.innerHTML = "";
        this._drinks.forEach(drink => {
            const drinkItemElement = document.createElement("drink-item");
            drinkItemElement.drink = drink
            this.appendChild(drinkItemElement);
        })
    }
}

customElements.define("drink-list", DrinkList);