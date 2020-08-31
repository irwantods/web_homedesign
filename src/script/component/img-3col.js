class Img3Col extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="gallery" class="py-5">
        <div class="container">
            <h2 class="display-4">Create your dream home</h2>
            <hr class="mt-2 mb-2">
            <div class="row">
                <div class="col-sm-4">
                    <div class="img-hover-zoom img-hover-zoom">
                        <div class="item">
                            <img src="https://i.picsum.photos/id/691/3000/2000.jpg?hmac=B9BXndbcKwwI497q7VntEkQJLSoVAp0moaUvNb4wbiQ" class="img-thumbnail img-res">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="img-hover-zoom img-hover-zoom">
                        <div class="item">
                            <img src="https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" class="img-thumbnail img-res">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="img-hover-zoom img-hover-zoom">
                        <div class="item">
                            <img src="https://i.picsum.photos/id/882/4896/3264.jpg?hmac=k8TP78rWgv5867y7lPCEWOqAjl55VFLs6Uspgi40_ak" class="img-thumbnail img-res">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    }
}

customElements.define("img-3col", Img3Col);