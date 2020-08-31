class DrinkItem extends HTMLElement {
    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this.classList.add("col-xl-3", "col-lg-4", "col-md-6", "mb-4");
        this.innerHTML = `
  
              <div class="bg-white rounded shadow-sm"><img src="${this._drink.strDrinkThumb}" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">${this._drink.strDrink}</a></h5>
                  <div id="collapse" style="display:none">
                  <p>${this._drink.strInstructions}</p>
              </div>
              <a href="#collapse" class="nav-toggle">Read More</a>
                  <div class="d-flex align-items-center justify-content-between"></div>
              </div>
              </div>
          
          `;
    }
}

customElements.define("drink-item", DrinkItem);