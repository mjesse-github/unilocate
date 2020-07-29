function alusta()
  {
    document.getElementById("kyssa").innerHTML  = "Skaalal 1-5 kui väga meeldivad sulle humanitaarained? 1 tähendab, et mitteüldse ehk oled reaalinimene ja 5 tähendab, et meeldivad väga";
    document.getElementById("alusta").style.display = 'none';
    document.getElementById("n11").style.display = 'inline';
    document.getElementById('n12').style.display = 'inline';
    document.getElementById('n13').style.display = 'inline';
    document.getElementById('n14').style.display = 'inline';
    document.getElementById('n15').style.display = 'inline';
  }

function n1()
  {
    document.getElementById("kyssa").innerHTML  ="Kui sul oleks päevik, siis kas sa kirjutaksid või joonistaksid sinna??";
    document.getElementById("n11").style.display = 'none';
    document.getElementById('n12').style.display = 'none';
    document.getElementById('n13').style.display = 'none';
    document.getElementById('n14').style.display = 'none';
    document.getElementById('n15').style.display = 'none';
    document.getElementById('n21').style.display = 'inline';
    document.getElementById('n22').style.display = 'inline';
  }

function n2()
  {
    document.getElementById("kyssa").innerHTML  ="Kas sa peale väsitavat päeva veedaksid aega sõpradega või üksi?";
    document.getElementById("n21").style.display = 'none';
    document.getElementById('n22').style.display = 'none';
    document.getElementById('n31').style.display = 'inline';
    document.getElementById('n32').style.display = 'inline';
  }

function n3()
  {
    document.getElementById("kyssa").innerHTML  ="Kas sa suudad pikka aega järjest keskenduda?";
    document.getElementById("n31").style.display = 'none';
    document.getElementById('n32').style.display = 'none';
    document.getElementById('n41').style.display = 'inline';
    document.getElementById('n42').style.display = 'inline';
  }

function n4()
  {
    document.getElementById("kyssa").innerHTML  ="Kas pead ennast heaks kuulajaks?";
    document.getElementById("n41").style.display = 'none';
    document.getElementById('n42').style.display = 'none';
    document.getElementById('n51').style.display = 'inline';
    document.getElementById('n52').style.display = 'inline';
  }

function n5()
  {
    document.getElementById("kyssa").innerHTML  ="Kas sa tunned, et oled tõeline tiimimängija või oled üksik hunt?";
    document.getElementById("n51").style.display = 'none';
    document.getElementById('n52').style.display = 'none';
    document.getElementById('n61').style.display = 'inline';
    document.getElementById('n62').style.display = 'inline';
  }

  function n6()
    {
      document.getElementById("kyssa").innerHTML  ="Kas sa oled valmis rikkuma seadusi?";
      document.getElementById("n61").style.display = 'none';
      document.getElementById('n62').style.display = 'none';
      document.getElementById('n71').style.display = 'inline';
      document.getElementById('n72').style.display = 'inline';
    }
