# XLSX to XML 

Convertir un xlsx a xml en Nodejs

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/camquipc/excel-to-xml.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd excel-to-xml
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Agregar el archivo a convertir:
 
 - Agregar el archivo xlsx a convertir en la carpeta dataExcel
 - Modificar datos de configuración en el archivo index.js

```bash
//RUTA DONDE ESTA EL ARCHIO EXCEL A CONVERTIR
const urlFile = './dataExcel/InformeDiario.xlsx';

//CARPETA DE SALIDA DONDE SE GUARDARA EL XML RESULTANTE
const urlFolderOutput = './dataXml/InformeDiario.xml';


//NOMBRE DEL XML RESULTANTE
const nameFileOutput = 'InformeDiario';
```

## Uso

Ejecutar el script

```bash
npm start
```
