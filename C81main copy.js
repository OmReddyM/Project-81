canvas = document.getElementById("myCanvas");
cnv = canvas.getContext("2d");
cnv.beginPath();
cnv.lineWidth = 7;
cnv.strokeStyle = "blue";
cnv.arc(250, 200, 60, 0, 2 * Math.PI);
cnv.stroke();

cnv.beginPath();
cnv.lineWidth = 7;
cnv.strokeStyle = "yellow";
cnv.arc(330, 250, 60, 0, 2 * Math.PI);
cnv.stroke();

cnv.beginPath();
cnv.lineWidth = 7;
cnv.strokeStyle = "black";
cnv.arc(410, 200, 60, 0, 2 * Math.PI);
cnv.stroke();

cnv.beginPath();
cnv.lineWidth = 7;
cnv.strokeStyle = "green";
cnv.arc(480, 250, 60, 0, 2 * Math.PI);
cnv.stroke();

cnv.beginPath();
cnv.lineWidth = 7;
cnv.strokeStyle = "red";
cnv.arc(560, 200, 60, 0, 2 * Math.PI);
cnv.stroke();

function clearCanvas() {
    cnv.clearRect(0, 0, canvas.width, canvas.height);
}