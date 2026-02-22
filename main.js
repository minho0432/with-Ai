document.addEventListener('DOMContentLoaded', () => {
    const championGrid = document.querySelector('.champion-grid');

    const champions = [
        {
            name: 'Garen',
            image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg'
        },
        {
            name: 'Jinx',
            image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg'
        },
        {
            name: 'Lux',
            image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg'
        }
    ];

    champions.forEach(champion => {
        const card = document.createElement('div');
        card.classList.add('champion-card');

        const img = document.createElement('img');
        img.src = champion.image;
        img.alt = champion.name;

        const name = document.createElement('h3');
        name.textContent = champion.name;

        card.appendChild(img);
        card.appendChild(name);
        championGrid.appendChild(card);
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});