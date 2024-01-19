function calculate() {
  var p1 = parseFloat(document.getElementById("p1").value);
  var p2 = parseFloat(document.getElementById("p2").value);

  if (!isNaN(p1) && !isNaN(p2)) {
    var s1 = -12.0 + 2.38 * Math.log(p1) + 0.0626 * Math.log(p2);
    var s2 = -8.09 + 1.04 * Math.log(p1) + 0.732 * Math.log(p2);
    var r1 = (Math.exp(s1) / (1 + Math.exp(s1))) * 100;
    var r2 = (Math.exp(s2) / (1 + Math.exp(s2))) * 100;

    document.getElementById("resultR1").innerText =
      "Пременопауза: " + r1.toFixed(2) + "%";
    document.getElementById("resultR2").innerText =
      "Постменопауза: " + r2.toFixed(2) + "%";
  } else {
    alert("Please enter valid numbers for HE-4 and CA-125.");
  }
}
