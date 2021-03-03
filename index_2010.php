<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>LOBLAST</title>
<link rel="stylesheet" type="text/css" href="style/loblast.css">
<script type="text/javascript" src="style/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="style/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="style/app_2010.js"></script>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="user-scalable=no, initial-scale=1.0">

</head>

<body>

  <div id="ttlCntrls">
    <div id="headBox">
      <img src="style/totalControls.png"/>
    </div>
  </div>
  <div id="fakeCntrls">
  </div>
  <ul id="hiddenCntrls">
    <li rel="Event">Events
    <li rel="About">About</li>
    <li rel="SoundSystem">Sound System</li>
  </ul>

  <div id="pages">
    <div id="pageEvent">
      <img src="style/loblast-logo1-600.png">
      <h1>Events</h1>
      Shows are typically the last Sunday of every month in the 8 Ball Saloon.
      <br/>
      Old event fliers and info coming soon...!
      <br/>
      Next showdate is probably Oct 24<sup>th</sup>
    </div>
    <div id="pageAbout">
      <img src="style/loblast-logo1-600.png">
      <h1>About</h1>

      <a href="http://b-knox.com/155/loblast-developing-a-regular-event-in-ann-arbor/">Read the original story here</a> ...for now...
    </div>
    <div id="pageSoundSystem">
      <img src="style/loblast-sondsystem600.jpg">
      <h1>LOBLAST SoundSystem&trade;</h1>

      4 channel DJ mixer - with single mic input
      <br>
      Left Channel - SWR Head + Klassic 4x10&quot; Cabinet (blasts mids)
      <br>
      Right Channel - Ampeg 2x10&quot; + 4&quot; (boom + sizzle)
    </div>
  </div>

  <div id="LOBLAST"><?
    if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone"))
      echo '<img src="style/loblast-logo-200.png"/>';
    else
      echo '<img src="style/loblast-logo1-600.png"/>';  ?>
  </div>

  <img id="dworgle" src="style/dworgle.gif"/>
  <img id="dwargle" src="style/dwargle.gif"/>

  <img id="heartNebula" <?
    if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone"))
      echo 'src="style/heartNebula-iphone.png"';
    else
      echo 'src="style/heartNebula.png"';  ?>/>

  <div id="starsNear"></div>

  <div id="BUTT">
    <div id="skyline"></div>
    <div id="grass"></div>
    <div id="f0" class="barr"></div>
    <div id="f1" class="barr"></div>
    <div id="f2" class="barr"></div>
    <div id="f3" class="barr"></div>
    <div id="f4" class="barr"></div>
  </div>

  <ul id="genres">
    <?php
      $genres = array('chiptune', 'glitch', 'breakcore', 'dubstep', 'wonky', 'circuit bent', 'noise', 'experimental', 'bedroom', 'bass', 'treble', 'melody', 'harmony', 'rhythm', 'community', 'party', 'synth pop', 'trip hop', 'beats', 'unbands', 'ambient', 'analog', 'digital', 'atmosphere', 'characters', 'vs.', 'bouts', 'dingles', 'as', 'for', 'and', 'forever', 'midnight', 'the', 'night', 'dank', '&amp;', 'LOBLAST', 'LOBLAST', 'LOBLAST', 'people', 'drink', 'be merry', 'listen', 'enjoy', 'collaborate', ';D', 'space', 'battle', 'open', 'ear', 'hear', 'movement', 'heart', 'skulls', 'boom', 'snap', 'mixes', 'layers', 'gravy', 'blips', 'clicky');
      shuffle($genres);
      shuffle($genres);
      shuffle($genres);
      $genres[] = 'xtra space';
      foreach ($genres as $g)
        echo '<li class="genre">'.$g.'</li>';
    ?>
  </ul>

</body>
</html>
