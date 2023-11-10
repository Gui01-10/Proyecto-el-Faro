function cargar(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours() + ":" + data.getMinutes() +":"+ data.getSeconds()
    msg.innerHTML = `${hora}`
    setTimeout(() => {cargar(), 1000})   
}

noticias = []

function cargarNoticias(){
    noticias = JSON.parse(localStorage.getItem('noticias'));
    if (noticias == null){
        noticias = [
            {
                imagen: src = "imagenes/emprendedores.png",
                titulo: "Escuelas para emprendedoras: cómo inscribirse a las capacitaciones de Sercotec",
                texto: "El Servicio de Cooperación Técnica (Sercotec), dependiente del Ministerio de Economía, cuenta con postulaciones abiertas para las Escuelas de Fortalecimiento Empresarial Femenino, dirigido a emprendedoras y dueñas de negocios de todo el país."
            },
            {
                imagen: src = "imagenes/vinicius-llorando.jpeg",
                titulo: "Vinicius Jr. Sufre con Racistas en España",
                texto: "Siete personas relacionadas con los incidentes de insultos racistas dirigidos a la estrella del Real Madrid, Vinícius Júnior, fueron detenidas en España. Este no es un hecho aislado. Por ello, Brasil se solidarizó con él y condenó los actos de racismo. Abajo uno de los gritos de hinchas rivales."
            },
            {
                
                titulo: "Confirman muerte de Cristián Rodríguez, vocalista del grupo Garras de Amor",
                imagen: src = "imagenes/garras de amor.png",
                texto: "El músico permaneció varias semanas en estado crítico a causa de un accidente cerebrovascular.Durante la jornada de este viernes 2 de junio se comunicó el fallecimiento del vocalista de Garras de Amor, Cristián Rodríguez.",
                
            },

        ];
    }
    total = document.getElementById('total')
    total.innerText = noticias.length;
    
}
    


function ponerNoticias(){
    noticiashtml = window.document.getElementById('noticias')
    noticiashtml.innerHTML = "";
    for(let i = noticias.length - 1; i >= 0; i--){ 
        
        titulo = document.createElement("h5");
        titulo.className = "card-title alto-titulo";
        titulo.innerHTML= noticias[i].titulo;
        texto = document.createElement("div")
        texto.className = "card-text alto-normal"
        texto.innerHTML = noticias[i].texto;

        cardBody = document.createElement("div");
        cardBody.className = "class-body alto-body"
        cardBody.appendChild(titulo);
        cardBody.appendChild(texto);

        imagen = document.createElement('img')
        imagen.className = "class-body alto-imagen"
        imagen.src = noticias[i].imagen

        card = document.createElement("div")
        card.className = "card"
        card.appendChild(imagen) 
        card.appendChild(cardBody)

        contenedor = document.createElement("div")
        contenedor.className = "alto-forma"
        contenedor.appendChild(card)


        noticiashtml.appendChild(contenedor);
    }

    
}

/*<div class="container">
            <div class="row" id="noticias">
               <div class="col-12 col-md-6 col-lg-3 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-tittle">Mi noticia</h5>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum? Soluta sint aliquam odit neque voluptates non, similique modi aperiam libero assumenda consequuntur necessitatibus corrupti quo, consequatur illo at possimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/


function agregarNoticia() {
    noticianueva = {
        titulo: document.getElementById('titulo_noticia').value,
        texto:  document.getElementById('contenido_noticia').value,
        imagen: src = "https://picsum.photos/200"
    }
    noticias.push(noticianueva);
    localStorage.setItem('noticias', JSON.stringify(noticias));
    ponerNoticias();   
}


cargarNoticias();
ponerNoticias();