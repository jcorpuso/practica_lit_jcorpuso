import { LitElement, html, css } from 'lit';
import { pokemons } from '../dataPokemon';

export class PokeComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
                margin: 5px;
                padding: 3px;
                border: 1px solid black;
            }

            .prueba {
                width: 100%;

            }
        `
    ];

    // static properties = {
    //     pokemon: {type: Object}
    // };

    constructor() {
        super();
        this.pokemons = pokemons;
    }

    render() {
        return html`
        <p>Este es el poke-component. Aquí debería de pintar</p>${console.log(this.pokemons)}

        
        ${this.pokemons.map( pokemon => html`
        <a>
        <div class="prueba">
            ${pokemon.pokemon.map(poke => html`
                <div>
                    ${poke.name}
                </div>
            `
            )}
        </div>
        </a>
      `)}
        
        `;
    }
}
customElements.define('poke-component', PokeComponent);
