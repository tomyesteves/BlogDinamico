export const formData = {
    formTitle: "Crear nuevo post",
    campos: [
        {
            label: `<label for="titulo">Título:</label>`,
            input: `<input type="text" id="titulo" name="titulo" required><br><br>`,
        },
        {
            label: `<label for="contenido">Contenido:</label><br>`,
            input: `<textarea id="contenido" name="contenido" rows="4" cols="50" required></textarea><br><br>`
        },
        {
            label: `<label for="imagen">URL de la imagen:</label>`,
            input: `<input type="url" id="imagen" name="imagen" required><br><br>`
        },
        {
            label: `<label for="autor">Autor:</label>`,
            input: `<input type="text" id="autor" name="autor" required><br><br>`
        }
    ],
    button: `<input type="submit" value="Enviar">`,
    footer: `&copy; Ejemplo para incluir la mayor cantidad posible de etiquetas HTML`
}
