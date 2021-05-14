 
let arraySelect=//crea el select con las opciones
fetch(`https://fakestoreapi.com/products/categories`)
    .then(res=>res.json())
    .then(productos=>{//para que sólo aparezca una vez "todas las categorías" hay que hacerlo fuera del .map
        let opt2 = document.createElement("option");
        let txt2 = document.createTextNode("Todas las categorías")  
        opt2.appendChild(txt2);
        document.getElementById("seleccion").appendChild(opt2); 
        productos.map(producto =>{//recorre el array entero con la url de todas las categorías
        let opt1 = document.createElement("option");
        opt1.setAttribute("value",producto)//le damos el value a cada producto para que tengan un valor diferente
        let txt = document.createTextNode(producto);
        opt1.appendChild(txt);  
        document.getElementById("seleccion").appendChild(opt1);  
    })})

    function getCategory(cat){
        document.querySelector(".container").innerHTML = "";
        fetch(`https://fakestoreapi.com/products/category/${cat}`) 
                .then(res=>res.json())//se convierte el objeto json
                .then(data=>{ 
                    data.map(producto =>{//devuelve todo el objeto
                        let sect = document.createElement("section");
                        let parr= document.createElement("p");
                        let imagen = document.createElement("img");
                        let txt = document.createTextNode(producto.title);
                        parr.appendChild(txt);
                        imagen.setAttribute("src",producto.image);
                        document.querySelector(".container").appendChild(sect);
                        sect.appendChild(imagen);
                        sect.appendChild(parr);
                        //imagen.style=("width:200px");
                        })
                })          
    }
 
    document.getElementById("seleccion").addEventListener("change",(event)=>{
        getCategory(event.target.value)
        })


     document.getElementById("togglePrice").addEventListener("click",(e)=>{
      let btnPrice =  document.getElementById("togglePrice").innerHTML 
        if(btnPrice == 'Precio ascendente'){
            document.getElementById("togglePrice").innerHTML = 'Precio descendente'  
           }else{
               document.getElementById("togglePrice").innerHTML = 'Precio ascendente' 
           }
        })
        
        

        
        fetch(`https://fakestoreapi.com/products`)
.then(res=>res.json())
.then(data=>{data.map((x)=>console.log(x.id))})
//let btn =  document.createElement("button")


document.getElementById("abc").addEventListener("click",(x)=>{
    
    if(document.getElementById("abc").innerText=="A al Z"){document.getElementById("abc").innerText="Z al A"}
else{document.getElementById("abc").innerText="A al Z"}
}
)

                /*fetch(`https://fakestoreapi.com/products/${num}`) 
                        .then(res=>res.json())//se convierte el objeto json
                        .then(data=>{ 
                            data.map(producto =>{//devuelve todo el objeto
                                let sect = document.createElement("section");
                                let parr= document.createElement("p");
                                let imagen = document.createElement("img");
                                let txt = document.createTextNode(producto.title);
                                parr.appendChild(txt);
                                imagen.setAttribute("src",producto.image);
                                document.querySelector(".container").appendChild(sect);
                                sect.appendChild(imagen);
                                sect.appendChild(parr);
                                //imagen.style=("width:200px");
                                })
                        })  */        
            
        
            document.getElementById("seleccion").addEventListener("change",(event)=>{
                getCategory(event.target.value)
                })
                

