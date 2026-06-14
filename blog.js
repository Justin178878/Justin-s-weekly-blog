async function loadBlogPost() {
    const response = await fetch("./blog.json");

    const posts = await response.json();
    
    const params = new URLSearchParams(window.location.search);
    const postIndex = params.get("post") || 0;
    const selectedPost = posts[postIndex];
    
    document.querySelector("#blog-post").innerHTML = `
        <h2>${selectedPost.title}</h2>
        <p>${selectedPost.post}</p>
        <h2>What didn’t go well</h2>
        <p>${selectedPost["2. What didn’t go well"]}</p>
        <h2>What can be improved</h2>
        <p>${selectedPost["3. What can be improved"]}</p>
        <h2>What will I do today</h2>
        <p>${selectedPost["2.What will I do today?"]}</p>
        <h2>Are there any blockers?</h2>
        <p>${selectedPost["3.Are there any blockers? "]}</p>
    `;

}

loadBlogPost();