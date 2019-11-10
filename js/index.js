


let navMenu = document.getElementById("nav-reveal");
let change = document.getElementById("nav-main");

navMenu.addEventListener('click',myFunction);

function myFunction(e) {
  navMenu.classList.toggle("change");
  change.classList.toggle("hidden");
}


// Lifestyle section change according to resiging of the screensize
window.addEventListener('resize', init);

function init(){
  let query = window.matchMedia("(max-width: 973px)");
 
  if(query.matches){
    let lifestyle = document.querySelector("#lifestyle");
    lifestyle.innerHTML = ` <div class="row">
   
                            <div class="col-lg-6 p-5">
                                <div class="detail-1">

                                    <h3>LIFESTYLES</h3>

                                    <h4>Lower Mill Estate brings people, ecology and award-winning
                                            architecture together in perfect harmony</h4>

                                    <p class="text-justify">Lower Mill Estate, an award-winning community of sustainable holiday homes, was born
                                    out of a passion to put nature first.</p>

                                    <p class="text-justify">Established 18 years ago by the Paxton family, their vision was to create a residential nature
                                    reserve that combined a sense of security with the freedom to escape the demands of
                                    urban life.</p>

                                    <p class="text-justify">The result is a place where like-minded people build their own beautiful homes and
                                    immerse themselves in the natural environment.</p>
                                </div>

                                <ul class="tile-nav">
                                  <li class="btn btn-secondary">
                                      <a href="vision/estate/">The Estate</a>
                                  </li>
                                  <li class="btn btn-secondary">
                                      <a href="vision/owners/">The Owners</a>
                                  </li>
                                  <li class="btn btn-secondary">
                                      <a href="film/">Play Film</a>
                                  </li>
                              </ul>
                            </div>
                            <div class="col-lg-6 p-0 " >
                            <img src="/assets/lifestyle.jpg" alt="Lifestyle" class="img-fluid"></div>

                        </div>`;
    

}else {
  lifestyle.innerHTML = `
  <div class="row">
      <div class="col-lg-6 p-0 " >
          <img src="/assets/lifestyle.jpg" alt="Lifestyle" class="img-fluid">
          </div>
      <div class="col-lg-6 p-5">
          <div class="detail-1">

              <h3>LIFESTYLES</h3>

              <h4>Lower Mill Estate brings people, ecology and award-winning
                      architecture together in perfect harmony</h4>

              <p class="text-justify">Lower Mill Estate, an award-winning community of sustainable holiday homes, was born
              out of a passion to put nature first.</p>

              <p class="text-justify">Established 18 years ago by the Paxton family, their vision was to create a residential nature
              reserve that combined a sense of security with the freedom to escape the demands of
              urban life.</p>

              <p class="text-justify">The result is a place where like-minded people build their own beautiful homes and
              immerse themselves in the natural environment.</p>
          </div>

          <ul class="tile-nav">
              <li class="btn btn-secondary">
                  <a href="vision/estate/">The Estate</a>
              </li>
              <li class="btn btn-secondary">
                  <a href="vision/owners/">The Owners</a>
              </li>
              <li class="btn btn-secondary">
                  <a href="film/">Play Film</a>
              </li>
          </ul>
      </div>
  
  </div>
  
`;
}

}
