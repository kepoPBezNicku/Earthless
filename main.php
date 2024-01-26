<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Projekt GEEK</title>
    <link rel="stylesheet" href="style.css">
    <?php include 'zm.php' ?>
</head>
<body>
    <header>
        <section id="header-section">
            <nav id="headerNav">
                <section id="chapter-burger">
                    <i class="fa-solid fa-chart-simple" id="burger"></i>
                    <div id="chapter">
                        <h1>Z DŻEJ ESA CHAPTER</h1>
                        <h1>Z DŻEJ ESA OPIS</h1>
                    </div>
                </section>

                <section id="resources">
                    <ul id="left-header-container">
                        <li><i class="fa-regular fa-circle-question"></i></li>
                        <li><i class="fa-regular fa-circle-question"></i></li>
                        <li><i class="fa-regular fa-circle-question"></i></li>
                    </ul>
                    <ul id="right-header-container">
                        <li><i class="fa-solid fa-person"></i></li>
                        <li><i class="fa-solid fa-gas-pump"></i></li>
                        <li><i class="fa-solid fa-sack-dollar"></i></li>
                    </ul>
                </section>
            </nav>
        </section>
    </header>
    <main>
        <section id="main-section">
            <div class="choice">
                <div id="middlediv">Default</div>
                <div id="decision-button">
                    <input type="button" value="Left" id="left" />
                    <input type="button" value="Right" id="right" />
                </div>
            </div>
        </section>
    </main>
    <script src="app.js"></script>
</body>
</html>