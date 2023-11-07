let dataTable;
let dataTableIsInitialized = false;
const dataTableOption= {
    
   // "scrollX": '3000px',
    "select": false,
    "destroy": true,
    "columnDefs": [
        {orderable: false, targets: [6,7]} 
    ],
    "pageLenght": 5,
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
})


/* function ocultar(id){
    let tab = document.getElementById(id);
    if(tab.style.display == "none"){
        tab.style.display = "block"
    } else{
        tab.style.display = "none"
    }
} */
