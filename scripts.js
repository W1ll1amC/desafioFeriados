//tomaar el elemento a modificar//
//llamar a la API//
//recorrer los datos//
//inscrustar en tabla//
let tableichon = document.getElementById('tablaCuerpo')
fetch('https://www.feriadosapp.com/api/holidays.json')
.then(Response => Response.json)
.then(function(data){
    console.log(data)
    let texto ='';
    texto = data.data.map(e=>{
        return `<tr><td>${e.id}</`
        join

    })
}
