const id = new URLSearchParams(window.location.search).get('id');
  const container=document.querySelector('.detail')
  const renderDetails=async()=>{
    const res= await fetch('http://localhost:3000/posts/'+id)
    const post=await res.json();
    const templates=`
    <div class="roommate-container">
  <img class="roommate-image" src="roommate.png" alt="Roommate Image">
  <div class="roommate-details">
    <h1>${post.name}</h1>
    <p>Gender: ${post.gender}</p>
    <p>Age: ${post.age}</p>
    <p>Location: ${post.location}</p>
    <p>Email: ${post.email}</p>
    <p>Profession: ${post.profession}</p>
  </div>
</div>
    `
    container.innerHTML=templates;
  }   
  window.addEventListener('DOMContentLoaded',()=>renderDetails());
  