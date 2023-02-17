const form = document.querySelector("form")

function handleHighlightLable (value) {
  // Clear the class from any other element
  document.querySelectorAll(".highlight").forEach(element => {
    element.classList.contains("highlight") && element.classList.remove("highlight")
  })

  // Get the element alan is reading and highlight
  const elem = document.querySelector(`[data-name=${value}]`);
  elem.classList.add("highlight");

  elem.scrollIntoView()
}

function handleSetValue (label, value) {
  const elem = document.querySelector(`#${label}`);
  elem.value = value
}

// Clicks on the submit button
function handleSubmit () {
  // Clear the class from any other element
  document.querySelectorAll(".highlight").forEach(element => {
    element.classList.contains("highlight") &&  element.classList.remove("highlight")
  })
  
  const btn = document.querySelector("button#submit")
  btn.focus()
  btn.click()

  btn.disabled = true
  btn.innerHTML = "Submitting..."
}

// Converts formData object to normal objects
function convertDataToObject(data) {
  const obj = {}
  data.entries(item => {
    obj[item[0]] = item[1]
  })
  return obj
}

// Save the form informatio to localstorage
function saveData (data) {
  let store = localStorage.getItem("DATA_STORE")
  if(!store) {
    store = []
  }
  else {
    store = JSON.parse(store)
  }

  store.push(data)
  localStorage.setItem("DATA_STORE", JSON.stringify(store))
}

function handleFormSubmit(e) {
  e.preventDefault()


  setTimeout(() => {
    const data = new FormData(form)
    const result = convertDataToObject(data)
    saveData(result)

    // Change the button back
    const btn = document.querySelector("button#submit")
    btn.disabled = false
    btn.innerHTML = "Register"


    // Clear form
    form.reset()
  
    alanBtnInstance.playText("Form submitted!, Thanks for using our system")
  }, 2000)
}

form.addEventListener("submit", handleFormSubmit)

window.addEventListener("load", () => {
  const interval = setInterval(() => {
    const alanBtn = document.querySelector(".alanBtn")
    if(alanBtn) {
      alanBtn.click()
      alanBtnInstance.playText("Hello there");
      clearInterval(interval)
    } 
  }, 2000)
})