import pkg from "xlsx";
const { utils, writeFile, readFile } = pkg;
import { create } from "xmlbuilder";
import fs from "fs";

function toCamelCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^./, (str) => str.toLowerCase());
}

// Función para crear un archivo Excel
export function createExcel(data, folderOuput, nameExcel) {
  if (!fs.existsSync(folderOuput)) {
    fs.mkdirSync(folderOuput);
  }
  // Crea una nueva hoja de cálculo
  const worksheet = utils.json_to_sheet(data);

  // Crea un nuevo libro de trabajo
  const workbook = utils.book_new();

  // Añade la hoja al libro
  utils.book_append_sheet(workbook, worksheet, "Empleados");

  // Escribe el archivo Excel
  writeFile(workbook, `./${folderOuput}/${nameExcel}`);
}

// Función para crear un archivo XML a partir de un archivo Excel
export function createXmlFromExcel(urlFileExcel, folderOuput, nameXml) {
  // Verifica y crea el directorio si no existe

  if (!fs.existsSync(folderOuput)) {
    fs.mkdirSync(folderOuput);
  }
  // Carga el archivo Excel
  const workbook = readFile(`${urlFileExcel}`);

  // Selecciona la primera hoja del libro
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convierte la hoja en un arreglo de objetos JSON
  const data = utils.sheet_to_json(worksheet);

  // Crea el elemento raíz
  const root = create(`${nameXml}`, {
    version: "1.0",
    encoding: "UTF-8",
    standalone: true,
  });

  // Itera sobre los datos y añade elementos al XML
  data.forEach((row) => {
    const item = root.ele("Content");
    Object.keys(row).forEach((key) => {
      //const newKey = key.replace(/\s/g, "");
      //const newKey = key.replace(/[\s_]+/g, '_');
      const newKey = toCamelCase(key);
      item.ele(newKey, row[key]);
    });
  });

  // Convertir el objeto XML a una cadena de texto
  //const xmlString = root.end({ pretty: true });

  const xmlString = root.end({ pretty: true, indent: "    ", newline: "\n" });

  console.log("Todo ok!...");
  // Guarda la cadena XML en un archivo
  fs.writeFileSync(`./${folderOuput}/${nameXml}.xml`, xmlString);
}
