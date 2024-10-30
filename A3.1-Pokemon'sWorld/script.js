document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('miAudio');
    audio.play();
});

class header extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = /*html*/`
            <header>
                    <div class="logo">
                    <img src="logo.png" alt="Logo de Pokémon" class="logo">
                </div>
                <div class="titulo">
                    <h4>
                        <span>P</span>
                        <span>O</span>
                        <span>K</span>
                        <span>E</span>
                        <span>M</span>
                        <span>O</span>
                        <span>N</span>
                    </h4>
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
            <img src="logoAdd.png" alt="Logo del Campeonato Mundial de Pokémon" style="width: 100%;" />
            <h2>¡Campeonato Mundial de Pokémon!</h2>
            <p>Únete a los mejores entrenadores de todo el mundo en la competencia más emocionante del año. ¡Demuestra tu habilidad, estrategia y amor por Pokémon en este evento épico!</p>
            <p>Escanea el QR para más información y detalles de inscripción:</p>
            <img src="qr.png" alt="Código QR" style="width: 100%;" />
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
                <li>Inicio</li>
                <li>Bulbasaur</li>
                <li>Charmander</li>
                <li>Squirtle</li>
                <li>Pikachu</li>
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

customElements.define('x-header', header);
customElements.define('x-aside', aside);
customElements.define('x-nav', nav);
customElements.define('x-footer', footer);