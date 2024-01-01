


// document.write("el pep")
let mq_lg = matchMedia("min-width: 992px");

// let displayedSections = []

// addEventListener("scroll", ev=>{
//     // console.log(ev);
//     displayedSections.forEach(s=>{
//         s.dispatchEvent(new CustomEvent("disappear-order"))
//         console.log("a")
//     })

// })


// Nav Responsive-Btn and Nav Options
const nav__show_other_opts_button = document.getElementById("nav__show_other_opts_button");
const nav__other_opts = document.getElementById("nav__other_opts");
// nav__other_opts.addEventListener("disappear-order",(ev)=>{
//     ev.currentTarget.classList.add("collapse-other-opts");
// })

nav__show_other_opts_button.addEventListener("click",(ev)=>{
    nav__other_opts.classList.toggle("collapse_other_opts");
})



//----------

// Sites (Single-Page Multi-page)
const show_services = document.getElementById("show_services");
const ul_select_services = document.getElementById("ul_select_services");

// ul_select_services.addEventListener("disappear-order",(ev)=>{
//     ev.currentTarget.classList.add("d-none");
// })


show_services.addEventListener("click", (ev)=>{
    ul_select_services.classList.toggle("d-none")

})


// const redirect_to_sites_COLLECTION = document.querySelectorAll(".redirect_to_sites");
// redirect_to_sites_COLLECTION.forEach(e=>{
//     e.addEventListener("click", (ev)=>{
//         ev.stopPropagation();
//         console.log("ele")
//     })
// })

// Nav Anchors: 
const nav_anchor_COLLECTION = document.querySelectorAll(".nav_anchor");
nav_anchor_COLLECTION.forEach(e=>{
    e.addEventListener("click", (ev)=>{
        nav__show_other_opts_button.dispatchEvent(new Event("click"));
    })
})


//------------------------------------------------------------------------------------------------------
// Parser:
function parseAndReturnElement(htmlString, selector) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlString, 'text/html');
  
    // Utiliza el selector CSS para obtener el elemento deseado
    var selectedElement = doc.querySelector(selector);
  
    // Devuelve el elemento resultante
    return selectedElement;
}


//-----------------------------------------------------------------------------------------------------
// Modal Parser:
const modalDialog_MODEL = parseAndReturnElement(`
  <div class="modal-dialog overflow-y-scroll">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLongTitle">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="min-height: 1500px">
        <p>This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`
  ,".modal-dialog" );
function ModalConstructor({id, title, paragraph}){
    const modal = modalDialog_MODEL.cloneNode(true);
    modal.classList.add("position-absolute", "start-50", "right-50", "translate-middle", "z-3");

    modal.id = id;
    const modalTitle = modal.querySelector(".modal-title");
    modalTitle.innerHTML = title;
    const modalParagraph = modal.querySelector(".modal-body > p");
    modalParagraph.innerHTML = paragraph;

    return modal;

}



//-----------------------------------------------------------------------------------------
function manageFetch({url, method="GET", headers={"Content-Type" : "application/json"},body}){
  let status;
  let statusText;
  console.log("asd")
  let returnPromise = new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers,
      body : JSON.stringify(body)
    })
    .then(res=>{
      console.log("b")
      status = res.status;
      statusText = res.statusText;
      // console.log(res.headers);
      // console.log(Array.from(res.headers));
      if(res.headers.get("Content-Type") == "application/json; charset=utf-8"){
        console.log("c")
        res.json().then(res=>{

          console.log(res)
          if(status < 200){
      
          }
          else if(status < 300){
            resolve(res);
          }
          else if(status < 400){
            location.assign(`${origin}${res.redirectionInfo}`);
          }
          else{
            reject(res);
          }
          console.log(res);
        })

      }
      else{
        return;
      };
    })
   
    .catch(info=>{
      reject(info);
      console.log(info);
    })
  })
  

  return returnPromise;



}








