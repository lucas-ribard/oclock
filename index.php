<!DOCTYPE html>

<html>

<head>
    <link href="index.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <script src="Scripts/Horloge.js"></script>
    <script src="Scripts/Minuteur.js"></script>
    <script src="Scripts/Chronometre.js"></script>
    <title>O'Clock</title>
</head>

<body>
    <header>
        <p id="time">Chargement de l'horloge</p>
        <p id="date">Chargement de la Date</p>
    </header>

    <section id="Menu">
        <!--
        <button onclick="Afficher('Minuteur')" class="BT_Selection">Minuteur</button>
        <button onclick="Chronomètre()" class="BT_Selection">Chronomètre</button>
        <button onclick="Réveil()" class="BT_Selection">Réveil</button>
        -->
    </section>

    <section id="Minuteur">
        <!-- changer num div -->
        <div class="Box">
            <h2>Minuteur</h2>
            <p id="minuteur">Erreur</p>
            <button onclick="AddMinute()" class="BT_Minuteur">+1m</button>
            <button onclick="AddSeconds()" class="BT_Minuteur">+1s</button>

            &ensp;<button onclick="StartMinuteur()" class="BT_Start_Minuteur">Start</button>
            <button onclick="StopMinuteur()" class="BT_Start_Minuteur">Stop</button>
            <button onclick="InitMinuteur()" class="BT_Start_Minuteur">Reset</button>&ensp;

            <button onclick="SubSeconds()" class="BT_Minuteur">-1s</button>
            <button onclick="SubMinute()" class="BT_Minuteur">-1m</button>
        </div>
    </section>

    <br>

    <section id="Chronometre">
        <div class="Box">
            <h2>Chronometre</h2>
            <p id="Chrono">Erreur</p>
            <button onclick="StartChrono()" class="BT_Chronometre">Start / Stop</button><br>
            <button onclick="InitChrono()" class="BT_Chronometre">Reset</button>
        </div>
    </section>

    <br>
<!--
    <section id="Reveil">
        <div class="Box">
            <h2>Reveil</h2>
            <p id="Chrono">Heure</p>
            <p id="Chrono">Message</p>
   
        </div>
    </section>
    -->  
</body>

</html>