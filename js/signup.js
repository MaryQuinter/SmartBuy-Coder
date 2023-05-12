const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistred = Users.find(user => user.email === email)

    if(isUserRegistred){
        return alert('El correo electrónico ya está registrado')
    }
    
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('¡Tu registro ha sido completado con éxito!')
    window.location.href = 'login.html'
})

