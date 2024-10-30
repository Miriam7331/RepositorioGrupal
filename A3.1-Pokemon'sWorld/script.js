document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('miAudio');
    audio.play();
});

class head extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = /*html*/ `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>A3.1 Pokemon's World</title>
            <link rel="stylesheet" href="../styles.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        </head>
        `;
    }
}

class header extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = /*html*/`
            <header>
                    <div class="logo">
                    <img src="../media/logo.png" alt="Logo de Pokémon" class="logo">
                </div>
                <div class="titulo">
                    <h4>POKEMON</h4>
                </div>
            </header >
        `;
    }
}

class aside extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = /*html*/ `
        <aside>
            <img src="../media/logoAdd.png" alt="Logo del Campeonato Mundial de Pokémon" style="width: 100%;" />
            <h2>¡Campeonato Mundial de Pokémon!</h2>
            <p>Únete a los mejores entrenadores de todo el mundo en la competencia más emocionante del año. ¡Demuestra tu habilidad, estrategia y amor por Pokémon en este evento épico!</p>
            <p>Clica en este <a href="https://unite.pokemon.com/es-es/championship/"> enlace</a> o escanea el QR para más información y detalles de inscripción:</p>
            <img src="../media/qr.png" alt="Código QR" style="width: 100%;" />
        </aside>
    `;
    }
}

class nav extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = /*html*/ `
        <nav>
            <ul>
                <li><a href="main.html">Inicio</a></li>
                <li><a href="bulbasaur.html">Bulbasaur</a></li>
                <li><a href="charmander.html">Charmander</a></li>
                <li><a href="squirtle.html">Squirtle</a></li>
                <li><a href="pikachu.html">Pikachu</a></li>
            </ul>
        </nav>
    `;
    }
}

class footer extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = /*html*/ `
        <footer>
        <p>&copy; 2024 Pokedex. Todos los derechos reservados.</p>
        <div class="social-media">
        <a href="https://www.instagram.com/pokemonesp/" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/user/PokemonOficialES" target="_blank" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.twitter.com/pokemon_es_esp" target="_blank" aria-label="X (Twitter)">
            <i class="fab fa-x"></i>
        </a>
    </div>
        </footer>
    `;
    }
}

customElements.define('x-head', head);
customElements.define('x-header', header);
customElements.define('x-aside', aside);
customElements.define('x-nav', nav);
customElements.define('x-footer', footer);