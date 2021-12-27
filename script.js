function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num
}


function clean() {
    document.form.textview.value = "";
}


function back() {
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
z

//
// const title = document.querySelector(".title")
// title.addEventListener("click", (event) => {
//     console.log(event)
// })
//
// window.addEventListener("click", (e) => {
//     console.log(e.target)
// })