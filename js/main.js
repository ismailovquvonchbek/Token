const elButon = document.querySelector('.btn')
const token = window.localStorage.getItem('token')

if(!token) {
    window.location.replace('login.html')
}

elButon.addEventListener('click', () => {
    window.localStorage.removeItem('token')
    window.location.replace('login.html')
})
