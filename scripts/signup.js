let details_arr = JSON.parse(localStorage.getItem("details")) || [];
let form = document.querySelector('form')
form.addEventListener('submit', myfun)
function myfun(event) {
    event.preventDefault()
    let name = document.querySelector('#name').value;
    let phoneno = document.querySelector('#phoneno').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (name !== "" &&  phoneno !== "" && email !== "" && password !== "") {
        let flag = "yes"
        for (let i = 0; i < details_arr.length; i++) {
            if (email == details_arr[i].email) {
                flag = "no"
            }
        }
        if (flag == "no") {
            alert("email already taken❌")
        } else {
            let details_obj = {
                name,phoneno,email,password
            }
            details_arr.push(details_obj)
            localStorage.setItem("details", JSON.stringify(details_arr))
            alert("sign-up successful👍")
            form.reset();
            window.location.assign("./signin.html");
        }

    }
    else {
        alert("Please fill Details first")
    }
};

