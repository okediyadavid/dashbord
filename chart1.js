var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings in $',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.createElement('button');
    toggleSwitch.textContent = 'Toggle Light/Dark Mode';
    toggleSwitch.style.position = 'fixed';
    toggleSwitch.style.top = '10px';
    toggleSwitch.style.right = '10px';
    toggleSwitch.style.padding = '10px';
    toggleSwitch.style.backgroundColor = '#299B63';
    toggleSwitch.style.color = '#fff';
    toggleSwitch.style.border = 'none';
    toggleSwitch.style.borderRadius = '5px';
    toggleSwitch.style.cursor = 'pointer';

    document.body.appendChild(toggleSwitch);

    toggleSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });

    // Set initial theme based on user's system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});