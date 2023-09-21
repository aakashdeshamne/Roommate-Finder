const container=document.querySelector('.blogs')
const searchForm=document.querySelector('.search')
// const deleteButon=document.querySelector()
const renderPosts = async (term)=>{
    let uri= 'http://localhost:3000/posts?';
    if(term){
        uri+=`&q=${term}`
    }
    const res = await fetch(uri);
    const posts = await res.json();
   let templates='';
   posts.forEach(post => {
       templates +=`
       <div class="post">
       <h2>${post.name}</h2>
       <p><small>${post.profession}</small></p>
       <p><a href="/details.html?id=${post.id}" style:"text-align:center">know more... </a>
       </div>`
   });
container.innerHTML = templates;
}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
})
window.addEventListener('DOMContentLoaded',()=> renderPosts())