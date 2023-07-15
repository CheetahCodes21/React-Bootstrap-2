import React from "react";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

const home = () => {
  return (
    <div>
      <h1 className='text-center text-danger text-capitalize my-5'>Home page</h1>
      <div className="container text-center">
      <div className="row">
        <div className="col"><div class="card" style={{ width: '18'}}>
       <img src="https://picsum.photos/200/300" class="card-img-top"  alt="..." height="200px"/>
      <div class="card-body">
      <h5 class="card-title text-warning">Card One</h5>
      <p class= "card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a class="btn btn-secondary">Explore</a>
     </div>
    </div>
       </div>
        <div className="col"><div class="card" style={{ width: '18'}}>
       <img src="https://picsum.photos/201/300" class="card-img-top"  alt="..." height="200px"/>
       <div class="card-body">
       <h5 class="card-title text-warning">Card Two</h5>
       <p class= "card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a class="btn btn-secondary">Next</a>
      </div>
     </div>
     </div>
        <div className="col"><div class="card" style={{ width: '18'}}>
  <img src="https://picsum.photos/202/300" class="card-img-top"  alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title text-warning">Card Three</h5>
    <p class= "card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a class="btn btn-secondary">Enter</a>
      </div>
     </div>
    </div>
        <div className="col"><div class="card" style={{ width: '18'}}>
        <img src="https://picsum.photos/203/300" class="card-img-top"  alt="..." height="200px"/>
        <div class="card-body">
        <h5 class="card-title text-warning">Card Four</h5>
        <p class= "card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a class="btn btn-secondary">Go</a>
        </div>
        </div>
       </div>
        </div>
       </div>
    </div>
  );
};

export default home;


