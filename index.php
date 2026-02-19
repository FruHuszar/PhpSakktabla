<?php
include "fuggvenyek.php";
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vezérlési szerkezetek</title>
    <link rel="stylesheet" href="style.css?v=3">
</head>
<body>
    <main>
        <h1>PHP Sakktábla generátor</h1>
        <div class="sakktabla">
            <?php
                $sakktabla = sakktablaRajzolas();
                echo $sakktabla;
            ?>
        </div>
        <button onclick="veletlenKarakter()">Feladvány</button>
    </main>

<script src="feladvany.js"></script>


<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>

</body>
</html>