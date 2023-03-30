
let product = document.getElementById("product");

for(let i=0; i<sample.length; i++)
{
    let outer= document.createElement('div');
    outer.classList.add("outer");

    let img = document.createElement('img');
    img.classList.add("image");
    // img.src = sample[i].img;
    img.src = sample[i].img;

    let pric= document.createElement('div');
    let price= document.createTextNode(`Price:- ${sample[i].price}`);
    pric.classList.add("price");
    // price = sample[0].price;

    let cat= document.createElement('div');
    let category= document.createTextNode(`category:- ${sample[i].category}`);
    cat.classList.add("category");
    // category = sample[0].category;

    let years= document.createElement('div');
    let year= document.createTextNode(`year:- ${sample[i].year}`);
    years.classList.add("year");
    // year = sample[0].year;

    years.appendChild(year);
    cat.appendChild(category);
    pric.appendChild(price);

    product.appendChild(outer);
    outer.appendChild(img);
    outer.appendChild(pric);
    outer.appendChild(cat);
    outer.appendChild(years);
}