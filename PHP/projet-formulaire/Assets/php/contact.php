<?php 

if(isset($_POST['submit'])){
  $option = array(
    'first_name' => FILTER_SANITIZE_STRING,
    'last_name' => FILTER_SANITIZE_STRING,
    'email' => FILTER_SANITIZE_EMAIL,
    'country_select' => FILTER_SANITIZE_STRING,
    'gender' => FILTER_SANITIZE_STRING,
    'subject' => FILTER_SANITIZE_STRING,
    'message' => FILTER_SANITIZE_STRING,
  );
  $result = filter_input_array(INPUT_POST, $option);
  
  echo "lol";
  if ($result != null AND $result != FALSE) {

    $honeyPot = $_POST['honeyPot'];
      if(empty($honeyPot)){
        $from = $result['email'];
        $subject = $result['subject'];
        $to = "vincent.bouton.dev@gmail.com";

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        $headers .= 'From: '.$from."\r\n".
                    'Reply-To: '.$from."\r\n" .
                    'X-Mailer: PHP/' . phpversion();

        $message = '<html><body>';
        $message .= '<h1 style="color:#f40;">From '.$result["last_name"].'</h1>';
        $message .= '<p style="color:#080; font-size:18px;">'.$result['message'].'</p>';
        $message .= '</body></html>';


        if(mail($to, $subject, $message, $headers)){
          echo 'Your mail has been sent successfully.';
      } else{
          echo 'Unable to send email. Please try again.';
      }
      }

  } else {
  
    $ok = "Un champ est vide ou n'est pas correct!";
    
  }
  
}
// echo 'lol';

?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="Formulaire de contact de Hackers Poulette, Site qui vend des kits et accessoires pour Raspberry Pi à monter sois-même">
    <link rel="stylesheet" href="../css/style.min.css" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="icon" href="../images/hackers-poulette-logo.png" />
    <link
      href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      rel="stylesheet"
    />
    <title>Hackers Poulette</title>
  </head>
  <body>
    <header>
      <div id="navbar">
        <nav>
          <div class="nav-wrapper">
            <a href="../../index.html" class="brand-logo center logos">
              Hackers Poulette
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul id="dropdown1" class="dropdown-content dropMargin">
              <li>
                <a href="../../views/sell.html#kits" class="text-secondary">
                  Kits
                </a>
              </li>
              <li>
                <a href="../../views/sell.html#accessories">Accessoires</a>
              </li>
            </ul>
            <div class=" left tabBar">
              <ul class="nav-mobile" >
                <li class="listTop"><a href="../../index.html">Accueil</a></li>
                <li class="listTop">
                  <a href="../../views/about.html">Qui sommes-nous ?</a>
                </li>
                <li class="listTop">
                  <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                    Que faisons-nous ?
                    <i class="material-icons right marginZ">
                      arrow_drop_down
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <ul class="sidenav hamNav" id="mobile-demo">
              <li><a href="../../index.html">Accueil</a></li>
              <li><a href="../../views/about.html">Qui sommes-nous ?</a></li>
              <li><a href="../../views/sell.html">Que faisons-nous ?</a></li>
              <li>
                <a href="contact.php">Contact</a>
              </li>
            </ul>
            <ul class="right hide-on-med-and-down">
              <li><a href="contact.php"> Contact </a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main class="white">
      <div class="container ">
        <h1 class="center">Nous contacter </h1>
        <div class="row z-depth-1">
          <form class="container" action="<?php $_SERVER['PHP_SELF']?>" method="POST">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix text-secondary">account_circle</i>
                <input  id="first_name" name="first_name" type="text" class="validate" required>
                <label for="first_name" class="grey-text text-darken-4">Prénom</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix text-secondary">account_circle</i>
                <input id="last_name" name="last_name" type="text" class="validate" required>
                <label for="last_name" class="grey-text text-darken-4">Nom</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix text-secondary">contact_mail</i>
                <input id="email" name="email" type="email" class="validate" required>
                <label for="email" class="grey-text text-darken-4">Email</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix text-secondary">flag</i>
                <select name="country_select" id="country_select">
                  <option value="Belgique">Belgique</option>
                  <option value="France">France</option>
                  <option value="Suisse">Suisse</option>
                </select >
                <label for="country_select" class="grey-text text-darken-4">Pays</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix text-secondary">people</i>
                <select name="gender" id="gender">
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autre">Autre</option>
                </select >
                <label for="gender" class="grey-text text-darken-4">Genre</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix text-secondary">people</i>
                <select name="subject" id="subject">
                  <option value="kits">Kits</option>
                  <option value="accessoires">Accessoires</option>
                  <option value="autre">Autre</option>
                </select >
                <label for="subject" class="grey-text text-darken-4">Sujet</label>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix text-secondary">border_color</i>
                  <textarea id="message" class="materialize-textarea" data-length="120" name="message" required></textarea>
                  <label for="message" class="grey-text text-darken-4">Message</label>
                </div>
              </div>
              <div style="display:none;">
                <input type="text" name="honeyPot" id="honeyPot">
                <label for="honeyPot"></label>
              </div>
              <div class="row ">
                <div class="col s12">
                  <button type="submit" class="btn center btnPlus waves" name="submit" > <i class="material-icons prefix ">border_color</i> Envoyer </button>
                </div>
              </div>
            </div>
          </form>
          
        </div>
      </div>
      
    </main>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l3 m6 s3">
            <h5 class="white-text">Hackers Poulette</h5>
            <p>
              Nous vendons des kits et des accessoires pour Raspberry Pi à
              assembler vous-mêmes.
            </p>
          </div>

          <div class="col l3 offset-l1 m4 s4">
            <h5 class="white-text">Produits</h5>
            <ul>
              <li class="icons">
                <a class="grey-text text-lighten-4" href="../../views/sell.html#kits">
                  <i class="tiny material-icons">chevron_right</i>
                  Kits
                </a>
              </li>
              <li class="icons">
                <a class="grey-text text-lighten-4" href="../../views/sell.html#accessories">
                  <i class="tiny material-icons">chevron_right</i>
                  Accessoires
                </a>
              </li>
            </ul>
          </div>

          <div class="col l3 m7 s5">
            <h5 class="white-text">Société</h5>
            <ul>
              <li class="icons">
                <a class="grey-text text-lighten-4" href="../../views/about.html">
                  <i class="tiny material-icons">chevron_right</i>
                  Qui sommes-nous?
                </a>
              </li>
              <li class="icons">
                <a class="grey-text text-lighten-4" href="../../views/sell.html">
                  <i class="tiny material-icons">chevron_right</i>
                  Que faisons-nous?
                </a>
              </li>
              <li class="icons">
                <a class="grey-text text-lighten-4" href="contact.php">
                  <i class="tiny material-icons">chevron_right</i>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="col l2 m5 s6">
            <h5 class="white-text">Suivez-nous</h5>
            <ul class="listSocial">
              <li>
                <a href="http://www.facebook.com">
                  <img
                    src="https://img.icons8.com/ios/26/000000/facebook.png  "
                    alt="facebook"
                    class="social"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com">
                  <img
                    src="https://img.icons8.com/ios/26/000000/instagram-new.png"
                    alt="instagram"
                    class="social"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com">
                  <img
                    src="https://img.icons8.com/ios/26/000000/twitter.png"
                    alt="Twitter"
                    class="social"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <script src="../materialize-src/js/bin/materialize.min.js"></script>
    <script src="../js/script.js"></script>
  </body>
</html>
