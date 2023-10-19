import { LitElement, html, css } from './lit';
import dataPokemon from './dataPokemon.js';

export class PokeCard extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    constructor() {
        super();
        this.dataPokemon = dataPokemon.pokemon;
    }

    firstUpdated() {
        console.log(this.dataPokemon);
    }

    render() {
        return html`
      
        `;
    }
}
customElements.define('poke-card', PokeCard);
