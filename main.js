let longitud
let latitud
let temperatura = document.querySelector('#temperatura')

let ubicacion = document.querySelector('#ubicacion')
let icono = document.querySelector('#icono')
let apikey = '09ba420b28a1d290fd5aaf53c83369fb'
let kelvin = 273.15 //para pasarlo a grados centigrados


function busqueda() {


   let ingreso = document.getElementById('ingreso')

   let query = ingreso.value.toLowerCase()

   document.getElementById('locate').textContent = query


   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}`)
      .then(function (res) {
         res.json()

            .then(function (res) {

               mostrarinfo(res)


                  .catch(e => console.error(new Error(e)))


            })


      })
}


function mostrarinfo(res) {

   const icon = ` http://openweathermap.org/img/wn/${res.weather[0].icon}.png`;

   main = document.getElementById('main')


   let pais = main.getElementsByTagName('p')[1]
   pais.textContent = res.sys.country


   let ptemperatura = main.getElementsByTagName('p')[2]

   ptemperatura.textContent = Math.floor(res.main.temp - kelvin) + ' C°'


   let humedad = main.getElementsByTagName('p')[3]
   humedad.textContent = res.main.humidity


   let iconofin = main.getElementsByTagName('img')[0]

   iconofin.setAttribute('src', icon)


   let descripcion = main.getElementsByTagName('p')[4]

   descripcion.textContent = res.weather[0]['description']


}

