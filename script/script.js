
const formItems = document.querySelector('#formItems');
const contentContainer = document.querySelector('#contentContainer');
const productList = document.querySelector('#productList');
const loader = document.querySelector('#loader');
formItems.addEventListener("submit", (e) => {
    e.preventDefault()
    contentContainer.style.display = "none";
    const amount = e.target["form-amount"].value
    // while(productList.firstChild){
        //     productList.removeChild(productList.firstChild)
        // }
        //спрятали контейнер , если он не спрятан
        
        //очистили контейнер
        productList.innerHTML = "";
        formItems.reset()
        loader.style.display = "inline-block";
    
        
        fetch(`https://fakestoreapi.com/products?limit=${amount}`)
        .then(res => res.json())
        .then((data) => {
            loader.style.display = "none";
            contentContainer.style.display = "block";
        data.map((el) => {
            const newItem = document.createElement("li");
            newItem.textContent = el.title
            productList.append(newItem);

            const newImg = document.createElement('img')
            newImg.src = el.image;
            newImg.width = "200"
            productList.append(newImg)
            
        })
    })
})

