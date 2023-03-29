var form= document.getElementById('form');
var parentdiv=document.getElementById('result');

form.addEventListener('submit', function(event){
    event.preventDefault()
    const reader= new FileReader()
    let  name=document.getElementById('image').files[0].name
    console.log(name);
    reader.addEventListener('load', function(){
        if(this.result && localStorage){
            window.localStorage.setItem(name,this.result)
            parentdiv.innerHTML=''
            showImages();
        }else{
            alert("Error Not sucessfull")
            
        }
    })
    reader.readAsDataURL(document.getElementById('image').files[0])
    console.log(name);
})
function showImages(){
    for(let i=0; i<window.localStorage.length; i++){
        let res=window.localStorage.getItem(window.localStorage.key(i))
        var image= new Image()
        image.src=res;
        let outer= document.createElement('div');
        outer.classList.add("outer");
        let inner= document.createElement('div');
        inner.classList.add("inner");
        let inner2= document.createElement('div');
        
        inner.appendChild(image)
        outer.appendChild(inner)
        outer.appendChild(inner2)
        parentdiv.appendChild(outer)

               // let val=window.localStorage.getItem(window.localStorage.key(price));
        // let val=document.getElementById('price').value
        // inner2.files[0].price=val;
        const hello={name:'Ayush',age:23};
        
            inner2.innerText=hello.name;
        
        
        //==========================================
        // let x=document.createElement('p');
        // let y=document.createElement('p');
        // let z=document.createElement('p');
        
        // let a=document.getElementById('price').value;
        // // localStorage.setItem("price",a)
        // x.innerHTML=`price :${a}`;
        // let b=document.getElementById('category').value;
        // // localStorage.setItem("category",b)
        // y.innerHTML=`category  :${b}`;
        // let c=document.getElementById('age').value;
        // z.innerHTML=`Purchase year :${c}`;
        // inner2.appendChild(x);
        // inner2.appendChild(y);
        // inner2.appendChild(z);
    }

}
showImages();
function remove(){
    window.localStorage.clear();
    parentdiv.innerHTML=''
}