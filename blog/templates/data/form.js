export const formData = {
    formTitle: "Crear nuevo post",
    campos: [
        {
            label: `<label for="titulo">Título:</label><br>`,
            input: `<input type="text" id="titulo" name="titulo" required><br><br>`,
        },
        {
            label: `<label for="descripcion">Descripción:</label><br>`,
            input: `<textarea id="descripcion" name="descripcion" rows="4" cols="50" required></textarea><br><br>`
        },
        {
            label: `<label for="imagen">URL de la imagen:</label><br>`,
            input: `<input type="url" id="imagen" name="imagen"><br><br>`
        },
        {
            label: `<label for="alternativo">Texto Alternativo para la Imagen:</label><br>`,
            input: `<input type="text" id="alternativo" name="alternativo"><br><br>`
        },
        {
            label: `<label for="cuerpo">Cuerpo del Artículo:</label><br>`,
            input: `<textarea id="cuerpo" name="cuerpo" required></textarea><br><br>`
        },
        {
            label: `<label for="autor">Autor:</label><br>`,
            input: `<input type="text" id="autor" name="autor" required><br><br>`
        }
    ],
    button: `<input type="submit" value="Enviar">`,
    footer: `&copy; Ejemplo para incluir la mayor cantidad posible de etiquetas HTML`
}
