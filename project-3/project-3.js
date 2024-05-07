fetch("https://opensheet.elk.sh/1QJU3YoO1RFbPN6CKKUDofSfkaOxs5kBCgAlt2Q7GNZA/Open_Hours")
    .then((res) => res.json())
    .then((data) => {

        console.log(data)
        let firstRow = data[0];
        let secondRow = data[1];
        let thirdRow = data[2];
        let fourthRow = data[3];
        let fifthRow = data[4];

        let today = new Date();
        let thisWeekday = today.getDay();
        let todayHour = today.getHours();
        let todayMinute = today.getMinutes();
        let weekdays = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", "Saturday"]
        let thisWeekdayName = weekdays[thisWeekday];

        let mediaLabElement = document.getElementById('media-lab');
        mediaLabElement.innerHTML = `<span class="bold">${firstRow.Shop}:</span> `;
        mediaLabElement.innerHTML += `<span class="underline">${firstRow[thisWeekdayName]}</span> `

        let archLabElement = document.getElementById('arch-lab');
        archLabElement.innerHTML = `<span class="bold">${secondRow.Shop}:</span> `;
        archLabElement.innerHTML += `<span class="underline">${secondRow[thisWeekdayName]}</span> `

        let aaceLabElement = document.getElementById('aace-lab');
        aaceLabElement.innerHTML = `<span class="bold">${thirdRow.Shop}:</span> `;
        aaceLabElement.innerHTML += `<span class="underline">${thirdRow[thisWeekdayName]}</span> `

        let woodLabElement = document.getElementById('wood-shop');
        woodLabElement.innerHTML = `<span class="bold">${fourthRow.Shop}:</span> `;
        woodLabElement.innerHTML += `<span class="underline">${fourthRow[thisWeekdayName]}</span> `

        let typeLabElement = document.getElementById('type-shop');
        typeLabElement.innerHTML = `<span class="bold">${fifthRow.Shop}:</span> `;
        typeLabElement.innerHTML += `<span class="underline">${fifthRow[thisWeekdayName]}</span> `
    })

function updateStatus() {
    let now = new Date();
    let dayOfWeek = now.getDay();
    let hour = now.getHours();
    let minute = now.getMinutes();

    let openingHours = [
        { start: 9, end: 24 },
        { start: 7.5, end: 24 },
        { start: 9, end: 21 }
    ];

    if (
        (hour > openingHours[dayOfWeek].start || (hour === openingHours[dayOfWeek].start && minute >= 30)) &&
        (hour < openingHours[dayOfWeek].end || (hour === openingHours[dayOfWeek].end && minute === 0))
    ) {
        document.getElementById('status').textContent = 'Cooper is Open';
        document.getElementById('status').style.color = 'green';
        document.body.style.backgroundColor = FFF500;
    } else {
        document.getElementById('status').textContent = 'Cooper is Closed';
        document.getElementById('status').style.color = 'red';
        document.body.style.backgroundColor = '#161032';

    }
}

updateStatus();

setInterval(updateStatus, 60000);
