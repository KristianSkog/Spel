<!doctype html>
<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <title>Spel</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <!-- Styles -->
    <link rel="stylesheet" href="dist/css/style.css">
</head>
<body>
    <header>
        <div class="wrapper">
            <div class="header--left">
                <h3>Mistakes: <span id="mistakes"></span></h3>
            </div>
            <div class="header--right">
                <h3>Time: <span id="minutes">00</span>:<span id="seconds">00</spanh></h3>
            </div>
        </div>        
    </header>
    <div class="wrapper">
        <button id="startGame">Start game</button>
        <Button id="restBoard">Remove board</button>
        <Button id="leaderBoard">Leader board</button>
    </div> 
    <div id="board">

    </div>
    
    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="js/script.min.js"></script>
</body>
</html>
