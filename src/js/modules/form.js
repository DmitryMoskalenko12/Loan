export default class Form {
  constructor(forms, url){
    this.forms = document.querySelectorAll(forms);
    this.message = {
      loading: 'Loading... please wait!',
      success: 'Data sent successfully!',
      failure: 'An error has occurred!'
    };
    this.url = url;
  }
async postData(url, data){
    let res = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: data
    })
    return await res.json();
}

mask() {
  let setCursorPosition = (pos, elem) =>{
   elem.focus();

   if (elem.setSelectionRange) {
    elem.setSelectionRange(pos, pos);
   }else if(elem.createTextRange){
    let range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
   }
  }
  function numMask(event) {
    let matrix = '+1(___) __-___',
    i = 0,
    def = matrix.replace(/\D/g, ''),
    val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    })

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = ''
      }else{
        setCursorPosition(this.value.length, this)
      }
    }
  }
  let inputs = document.querySelectorAll('[name="phone"]');
  inputs.forEach(input=>{
    input.addEventListener('input', numMask);
    input.addEventListener('focus', numMask);
    input.addEventListener('blur', numMask)
  })
}
  checkMailInputs(){
    const inputs = document.querySelectorAll('[type="email"]');
    inputs.forEach(input =>{
      input.addEventListener('keypress', (e)=>{
        if(e.key.match(/[^a-z 0-9 @ \.]/ig)){
          e.preventDefault();
        }
      })
    });
  }
  init(){
    this.checkMailInputs();
    this.mask();
    this.forms.forEach(form => {
    form.addEventListener('submit', (e) => {
    e.preventDefault();

    let div = document.createElement('div');
    div.style.cssText = `
    margin-top: 15px;
    font-size: 18px;
    color: grey;`
    form.parentNode.appendChild(div);
    div.textContent = this.message.loading;

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    this.postData(this.url, json)
    .then(()=>{
      div.textContent = this.message.success;
    })
    .catch(() => {
      div.textContent = this.message.failure;
    })
    .finally(
      form.reset(),
      setTimeout(() =>{
        div.remove();
      }, 6000)
    )
    });
    });


  }
}