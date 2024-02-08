document.getElementById('download-cv-btn').addEventListener('click', function() {
    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text('Curriculum Vitae', 10, 10);
    doc.text('Nombre: Nombre Apellido', 10, 20);
    doc.text('Profesión: Desarrollador Web', 10, 30);
    doc.text('Experiencia Laboral:', 10, 40);
    doc.text('- Descripción de la experiencia laboral.', 20, 50);
    doc.text('Educación:', 10, 60);
    doc.text('- Detalles de la educación.', 20, 70);
    doc.text('Habilidades:', 10, 80);
    doc.text('- Lista de habilidades.', 20, 90);

    // Guardar el documento PDF
    doc.save('CV.pdf');
});