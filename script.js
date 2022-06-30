function agregarFila(){
  document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td><textarea name="textarea" rows="3" cols="100">Descripción del incidente</textarea></td><td><input type="file" name="adjunto" accept=".jpg,.png" multiple /></td><td><input type="file" name="adjunto" accept=".jpg,.png" multiple /></td>';
}
  
  function eliminarFila(){
    var table = document.getElementById("tablaprueba");
    var rowCount = table.rows.length;
    //console.log(rowCount);
    
    if(rowCount <= 1)
      alert('No hay registros por eliminar');
    else
      table.deleteRow(rowCount -1);
  }

  function eliminarRegistro(i){
    var table = document.getElementById("tablaconsulta");
    var rowCount = table.rows.length;

    
    if(rowCount <= 1)
      alert('No hay registros por eliminar');
    else
      table.deleteRow(i+1);
  }
