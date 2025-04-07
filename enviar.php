<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $destinatario = "tu-EIDERCOBOITSERVICES@outlook.com";
    $asunto = "Nuevo mensaje de contacto";
    $cuerpo = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
