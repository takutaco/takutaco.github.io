function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(1000);
    translate(width / 2, height / 2);

    // Get current time
    let hr = hour() % 12;
    let min = minute();
    let sec = second();

    // Draw hour hand
    strokeWeight(1);
    let hrAngle = map(hr, 0, 12, 0, TWO_PI) - HALF_PI;
    line(0, 0, cos(hrAngle) * 50, sin(hrAngle) * 50);

    // Draw minute hand
    strokeWeight(1);
    let minAngle = map(min, 0, 60, 0, TWO_PI) - HALF_PI;
    line(0, 0, cos(minAngle) * 70, sin(minAngle) * 70);

    // Draw second hand
    strokeWeight(1);
    let secAngle = map(sec, 0, 60, 0, TWO_PI) - HALF_PI;
    line(0, 0, cos(secAngle) * 90, sin(secAngle) * 90);
}
