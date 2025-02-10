import {createXmlFromExcel} from "./service.js";


//RUTA DONDE ESTA EL ARCHIO EXCEL A CONVERTIR
const urlFile = './dataExcel/InformeDiario.xlsx';
//CARPETA DE SALIDA DONDE SE GUARDARA EL XML RESULTANTE
const urlFolderOutput = './dataExcel/InformeDiario.xlsx';
//NOMBRE DEL XML RESULTANTE
const nameFileOutput = 'InformeDiario';



createXmlFromExcel(urlFile,urlFolderOutput,nameFileOutput);
