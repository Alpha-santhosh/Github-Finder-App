const key = document.getElementById("key")
const content = document.getElementById("content")

async function go(params) {
    content.innerHTML = ""
    const respones = await fetch("https://api.github.com/users")
    const data = await respones.json()
    data.map((e)=>{
        console.log(e.login)
        console.log(e.avatar_url)
        console.log(e.html_url)
        content.innerHTML += `
            <div class="card">
                <img class="avatar_log" src="${e.avatar_url}" />
                <div class="detail">
                    ${e.login} 
                    <a href="${e.html_url}">Visit Profile</a>
                </div>
            </div>
        `
    })
}

go()

async function search(params) {
    console.log(key.value);
    content.innerHTML = ""
    if(key.value == "")
    {
        content.innerHTML = `<h1 style = "color:white;width:100%;text-align:center;"> No Input </h1>`
    }else{
        const respones = await fetch(`https://api.github.com/search/users?q=${key.value}`)
        const data = await respones.json()
        console.log(data.items);
        data.items.map((e)=>{
            console.log(e.login)
            console.log(e.avatar_url)
            console.log(e.html_url)
            content.innerHTML += `
                <div class="card">
                    <img class="avatar_log" src="${e.avatar_url}" />
                    <div class="detail">
                        ${e.login} 
                        <a href="${e.html_url}">Visit Profile</a>
                    </div>
                </div>
            `
        })
    }
}

function btn_clear() {
    key.value = ""
    go()
}