const form=document.querySelector('form');
const createpost = async (e)=>{
    e.preventDefault();
 const doc={
    email: form.email.value,
    password: form.password.value,
    
 }
 await fetch('http://localhost:3000/users',{
    .then(response => response.json())
    .then(data => {
      const user = data.users.find(u => u.email === email && u.password === password);
      if (user) {
        window.location.href = "/index.html";
      } else {
        alert("Invalid username or password!");
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  
 });
 window.location.replace('/index.html')
}


form.addEventListener('submit',createpost);