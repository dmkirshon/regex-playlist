// validation script here

const inputs = document.querySelectorAll('input');


const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    telephone: /^\d{11}$/,
    password:/^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/
}

function validate(field, regex) {
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        if(field.value){
            field.className = 'invalid';
        } else {
            field.className = "";
        }
        
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});