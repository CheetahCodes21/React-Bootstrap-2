import React from 'react'

const about = () => {
  return (
    <div>
        <h1 className='text-center text-danger text-capitalize my-5'>About page</h1>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What are you looking for ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Sports News Geopolitics</strong> The topic of sports is very broad. It can serve as a form of therapy and a tool in different aspects of life, which can help change the world. Through sports, children develop physical skills, exercise, be team players, and improve their self-esteem. Sports play a significant role in advancing education and in enhancing knowledge.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Help and Support
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Facing any issues</strong> Throughout our life, it is bound that there are periods of challenges that we must face, but the real challenge is how we grow and learn from overcoming them. Being naive, innocent children, we ignorantly believed that life was going to be simple and effortless. Oh, we were far from correct, we can only dream for life to be that easy. My life, in particular, has been filled with countless, tiring ups and downs. It felt like I was in an endless roller coaster of obstacles. As we mature from being children into adults, we will continue to face countless hurdles that only get bigger and more consequential. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Settings
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Logout/Close</strong> Will let you go back out of site
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default about