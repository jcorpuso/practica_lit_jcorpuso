import { LitElement, html, css } from 'lit';
import { pokemons } from '../dataPokemon';

export class PokeComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    constructor() {
        super();
        this.pokemons = pokemons;
    }

    render() {
        return html`
        <div>

        ${this.pokemons.map( pokemon => html`

          <a>

            <div>

              <img src="${pokemon.img}" alt="${pokemon.name}">

              <h3>#HolaRaza${pokemon.num} ${pokemon.name}</h3>

            </div>

          </a>

        `)}

      </div>
        `;
    }
}
customElements.define('poke-component', PokeComponent);
