
/* flex direction*/
function Rowrev1() {
    document.getElementById("flexcontainer1").style.flexDirection = "row";
    document.getElementById("flexcontainer1").style.height = "150px";
  }

  function Rowrev2() {
    document.getElementById("flexcontainer1").style.flexDirection = "row-reverse";
    document.getElementById("flexcontainer1").style.height = "150px";
  }

  function Rowrev3() {
    document.getElementById("flexcontainer1").style.flexDirection = "column";
    document.getElementById("flexcontainer1").style.height = "500px";
  }

  function Rowrev4() {
    document.getElementById("flexcontainer1").style.flexDirection = "column-reverse";
    document.getElementById("flexcontainer1").style.height = "500px";
  }


/* flex wrap*/

  function Rowrap1() {
    document.getElementById("flexcontainer2").style.flexWrap = "nowrap";
    document.getElementById("flexcontainer2").style.height = "150px";
  }

  function Rowrap2() {
    document.getElementById("flexcontainer2").style.flexWrap = "wrap";
    document.getElementById("flexcontainer2").style.height = "300px";
  }

  function Rowrap3() {
    document.getElementById("flexcontainer2").style.flexWrap = "wrap-reverse";
    document.getElementById("flexcontainer2").style.height = "300px";
  }


/* align itmes*/

  function algit1() {
    document.getElementById("flexcontainer3").style.alignItems = "flex-start";
  }

  function algit2() {
    document.getElementById("flexcontainer3").style.alignItems = "flex-end";
  }

  function algit3() {
    document.getElementById("flexcontainer3").style.alignItems = "center";
  }


  function algit4() {
    document.getElementById("flexcontainer3").style.alignItems = "baseline";
  }

  function algit5() {
    document.getElementById("flexcontainer3").style.alignItems = "stretch";
  }



/* align Content*/

function algcn1() {
    document.getElementById("flexcontainer4").style.alignContent = "flex-start";
  }

  function algcn2() {
    document.getElementById("flexcontainer4").style.alignContent = "flex-end";
  }

  function algcn3() {
    document.getElementById("flexcontainer4").style.alignContent = "center";
  }


  function algcn4() {
    document.getElementById("flexcontainer4").style.alignContent = "space-between";
  }

  function algcn5() {
    document.getElementById("flexcontainer4").style.alignContent = "space-around";
  }

 function algcn6() {
    document.getElementById("flexcontainer4").style.alignContent = "stretch";
  }


/* justify content*/

function justc1() {
    document.getElementById("flexcontainer5").style.justifyContent = "flex-start";
  }

  function justc2() {
    document.getElementById("flexcontainer5").style.justifyContent = "flex-end";
  }

  function justc3() {
    document.getElementById("flexcontainer5").style.justifyContent = "center";
  }


  function justc4() {
    document.getElementById("flexcontainer5").style.justifyContent = "space-between";
  }

  function justc5() {
    document.getElementById("flexcontainer5").style.justifyContent = "space-around";
  }

/* Grid-template-col */

  function grow1() {
    document.getElementById("gridcontainer6").style.gridTemplateColumns = "100px 100px 100px 100px 100px";
  }

  function grow2() {
    document.getElementById("gridcontainer6").style.gridTemplateColumns = "150px 150px 150px 150px 150px";
  }

  function grow3() {
    document.getElementById("gridcontainer6").style.gridTemplateColumns = "200px 200px 200px 200px 200px";
  }



/* Grid-template-row */

function grow4() {
    document.getElementById("gridcontainer7").style.gridTemplateRows = "60px 60px 60px 60px 60px";
  }

  function grow5() {
    document.getElementById("gridcontainer7").style.gridTemplateRows = "70px 70px 70px 70px 70px";
  }

  function grow6() {
    document.getElementById("gridcontainer7").style.gridTemplateRows = "80px 80px 80px 80px 60px";
  }