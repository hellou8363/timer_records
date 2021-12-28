let records = "";

document.getElementById("record").onclick = function () {
  records += document.getElementById("time").innerText + "\n";
  document.getElementById("recordList").innerText = records;
};
