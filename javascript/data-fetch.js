

let product = document.getElementById("container");

function mainPage(){
    for (let i = 0; i < data.length; i++) {
    
        //inner box

        let box = document.createElement("div");
        box.classList.add("box");
        // box.setAttribute("onclick",`viewPage(${i})`);

    
        let img = document.createElement("img");
        img.classList.add("box-img");
        img.src = data[i].img;
    
        let years = document.createElement("div");
        let year = document.createTextNode(`Id:- ${data[i].year}`);
    
        let items = document.createElement("div");
        let item = document.createTextNode(`Item:- ${data[i].item}`);
    
        let prices = document.createElement("div");
        let price = document.createTextNode(`Price:- ${data[i].price}`);
        
        prices.classList.add("details");
        years.classList.add("details");
        items.classList.add("details");
        //append child
        years.append(year);
        items.append(item);
        prices.append(price);
        
    
        box.append(img);
        box.append(items);
        box.append(prices);
        box.append(years);
        
    
        product.append(box);

        
        box.addEventListener("click", (e) =>{
            product.style.display = "none";
            document.getElementById("load").style.display = "none";

            let viewProd = document.getElementById("viewProduct");
           
            let prodImg = document.createElement("img");
            prodImg.classList.add("viewProdImg");
            prodImg.src = e.target.parentElement.childNodes[0].src;

            let viewProdDetails = document.createElement("div");
            viewProdDetails.classList.add("viewProdDetails");

            let years = document.createElement("div");
            let year = document.createTextNode(` ${e.target.parentElement.childNodes[3].innerText}`);
        
            let items = document.createElement("div");
            let item = document.createTextNode(` ${e.target.parentElement.childNodes[2].innerText}`);
        
            let prices = document.createElement("div");
            let price = document.createTextNode(` ${e.target.parentElement.childNodes[1].innerText}`);

            years.append(year);
            items.append(item);
            prices.append(price);

            viewProdDetails.append(years);
            viewProdDetails.append(items);
            viewProdDetails.append(prices);

            viewProd.append(prodImg);
            viewProd.append(viewProdDetails);

        });
    
    }
}

mainPage();




