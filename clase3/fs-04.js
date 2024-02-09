const fs = require("fs");

const promiseWrite = new Promise((resolve, reject) => {
    const content = "Hola estoy usando promesas para escribir un archivo en node"
    fs.writeFile(`${process.cwd()}/fs-write_promise.txt`,
    content,
        (err) => {
            if (err) {
                reject("fallo la escritura del archivo")
            }
            resolve()
        });
})


promiseWrite.then(() => {
    console.log('Writing file using promises')
}).catch((err) => {
    console.log('err:', err);
});

const executeAsync = async () => {
    try {
        await promiseWrite;
    } catch (error) {
        console.log(error)
    }
}

executeAsync();