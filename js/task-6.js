const inputEl = document.querySelector("#validation-input");


const handleInputFocus = (event) => {
    event.preventDefault();

    if(`${event.currentTarget.value.length}` === `${inputEl.getAttribute("data-length")}`){
        return inputEl.setAttribute("id", "validation-input.valid"); 
    }
        return inputEl.setAttribute("id", "validation-input.invalid");

}


inputEl.addEventListener("blur", handleInputFocus);