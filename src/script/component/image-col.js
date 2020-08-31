class ImageCol extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="py-5">
        <div class="container">    
          <div class="row">
          
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">Red paint cup</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                </div>
              </div>
            </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/1048/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">Blorange</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                  </div>
                </div>
              </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/1059/7360/4912.jpg?hmac=vVWk1qyiXN_VgPhpNqFm3yl2HUPW6fHqYOjTHYO2bHQ" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">And She Realized</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                   <div class="d-flex align-items-center justify-content-between"></div>
                  </div>
                </div>
              </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">DOSE Juice</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                </div>
              </div>
            </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/163/2000/1333.jpg?hmac=htdHeSJwlYOxS8b0TTpz2s8tD_QDlmsd3JHYa_HGrg8" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">Pineapple</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                  </div>
                </div>
              </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">Yellow banana</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                  </div>
                </div>
              </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/625/2507/1674.jpg?hmac=ZuCWygmEqFbv5q0hlD-jimDTtYWRwgAebHLepuXaUUk" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">Teal Gameboy</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                  </div>
                </div>
              </div>
            <!-- End -->
      
            <!-- Gallery item -->
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm"><img src="https://i.picsum.photos/id/248/3872/2592.jpg?hmac=_F3LsKQyGyWnwQJogUtsd_wyx2YDYnYZ6VZmSMBCxNI" alt="" class="img-fluid card-img-top">
                <div class="p-4">
                  <h5> <a href="#" class="text-dark">Color in Guatemala.</a></h5>
                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div class="d-flex align-items-center justify-content-between"></div>
                  </div>
                </div>
              </div>
            <!-- End -->
          </div>
        </div>
       </div>
    `;
    }
}

customElements.define("image-col", ImageCol);