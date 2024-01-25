let dataTable;
let dataTableIsInitialized = false;
const dataTableOption= {
    
   // "scrollX": '3000px',
    
    "select": false,
    "destroy": true,
    "paging": true,
    "columnDefs": [
        {orderable: false, targets: [5,6,7]},
        {searchable: false, targets: [0,4,5,6,7]},        
    ],
    "pageLength": 7,
    "lengthChange": false,
    "language": {
        "url": "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"
    },

}

const initDataTable = async()=>{
    if(dataTableIsInitialized == true){
    dataTable.destroy();
    }
    dataTable = $('#miTabla').DataTable(dataTableOption);
    dataTableIsInitialized = true;
    
    
    
}
window.addEventListener("load", async()=>{
    await initDataTable();
    dataTable.on('search.dt', function () {
        var btnAgregar = document.getElementById('agregar');
        var data = dataTable.rows( {search: 'applied'} ).data().toArray();
        if(data[0]==null){
            btnAgregar.disabled = false;
        }
        else {
            btnAgregar.disabled = true;
        }
        console.log(data);
      })
});



/* function ocultar(id){
    let tab = document.getElementById(id);
    if(tab.style.display == "none"){
        tab.style.display = "block"
    } else{
        tab.style.display = "none"
    }
} */


/* 
    var searchPhrase = dataTable.search();
        console.log('searchPhrase', searchPhrase);
*/