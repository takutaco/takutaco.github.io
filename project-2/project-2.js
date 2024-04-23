document.querySelectorAll('.hover-text').forEach(textElement => {
    let interval = null;

    textElement.addEventListener('mouseenter', function() {
        interval = setInterval(function() {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = textElement.dataset.color;

            // this calculates the position, for readjusting window
            square.style.left = (Math.random() * 100) + '%';
            square.style.bottom = (Math.random() * 90) + '%';

            document.body.appendChild(square);
        }, 100);
    });

    textElement.addEventListener('mouseleave', function() {
        clearInterval(interval); // Stop generating squares
    });
});

let BodyParts = ["Arms", "Body", "Legs", "Flesh", "Skin", "Bone", "Sinew"];
let currentBodyParts = 0; 

function cycleBodyParts() {
    document.getElementById('change-text').innerHTML = BodyParts[currentBodyParts];
    currentBodyParts = (currentBodyParts + 1) % BodyParts.length; 
}

setInterval(cycleBodyParts, 2000);
cycleBodyParts(); 

document.querySelectorAll('.hover-text').forEach(textElement => {
    textElement.addEventListener('mouseenter', function() {
        let color = textElement.dataset.color;
        textElement.style.color = color;
    });

    textElement.addEventListener('mouseleave', function() {
        textElement.style.color = '';
    });
});