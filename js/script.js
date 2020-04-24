function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  var link_1 = "This project is inspired by the failures of communication technologies as they are tied to human experiences of communication. All efforts are put in place to transport the listener into the grey areas of connection; a space where de-synchronized signals, dropped data packets, repetition and/or deterioration of information is observed. Young develops a magnetic soundscape in which Radford's voice transmits from. Produced using sine wave oscillators and physical interventions on amplified surfaces with saxophone (Vandal) and bass (St-Onge), Bur sting brea k’r evokes the sense that one can hear when the sounds, recognizable and unrecognizable, fall away into particles.";

  function test(link) {
      $("#content").html(link);
      closeNav();
  }
 