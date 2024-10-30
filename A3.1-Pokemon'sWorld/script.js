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
            <p>Escanea el QR para más información y detalles de inscripción:</p>
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
            Pie de página
        </footer>
    `;
    }
}

customElements.define('x-head', head);
customElements.define('x-header', header);
customElements.define('x-aside', aside);
customElements.define('x-nav', nav);
customElements.define('x-footer', footer);