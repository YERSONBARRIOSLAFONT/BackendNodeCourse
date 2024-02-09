const fs = require('fs')

fs.readFile(`${process.cwd()}/prueba.txt`, "utf-8", (err, content) => {
    if (err) {
        console.log(err);
    } else {
        console.log("content", content);
    }
});

fs.writeFile(`${process.cwd()}/prueba3.txt`, `Hola, estoy escribiendo usando fs Dia ${new Date().toLocaleDateString()}`,
(err) => {
    if (err) {
        console.log('err:', err);
    } 
}
);