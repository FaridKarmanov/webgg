const dropdown = document.querySelector (".footer__container")



if(dropdown) {
        dropdown.addEventListener("click", (event) => {
          if(event.target.tagName === "IMG" )   {
            const id = event.target.id
            const description = document.getElementById(`${id + '' + id}`)

            if(description) {
if(getComputedStyle(description).display === 'none') {
    description.style.display = "block"
} else     description.style.display = "none"

                
                
            }

          } 

    }) 
}

