const form=document.querySelector('form');
const createpost = async (e)=>{
    e.preventDefault();
 const doc={
    name: form.name.value,
    age: form.age.value,
    gender:form.gender.value,
    location:form.location.value,
    email:form.email.value,
    profession:form.profession.value
 }
 await fetch('http://localhost:3000/posts',{
    method:'POST',
    body:JSON.stringify(doc),
    headers:{'Content-Type':'application/json'}
 });
 window.location.replace('/index.html')
}


form.addEventListener('submit',createpost);