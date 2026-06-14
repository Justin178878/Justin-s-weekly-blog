async function loadData() {

    const response = await fetch("./data.json");
    const data = await response.json();
    
    document.querySelector("#output").innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Age: ${data.age}</p>
        <p>5th Blog: ${data["5th Blog"]}</p>
        <p>Course: ${data.Course}</p>
    `;
    
    console.log(data);
}

loadData();