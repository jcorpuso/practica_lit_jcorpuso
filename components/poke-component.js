import { LitElement, html, css } from 'lit';
import { pokemons } from '../dataPokemon';

export class PokeComponent extends LitElement {
    static styles = [
        css`
            :host {
                width: 100%;
                margin: 5px;
                padding: 3px;
                border: 1px solid black;
            }

            .pokeCont {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
                border: 1px solid black;

            }

            .pokeCard {
                display:flex;
                flex-wrap: wrap;
                justify-content: center;
                width: 30%;
                margin: 1px auto;
                padding: 3px;
                border: 1px solid black;
            }

            img {
                width:100px;
                height: 100px;
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
       
        ${console.log(this.pokemons)}
        <div class="pokeCont">
            ${this.pokemons.map( poke => html`
                <div class="pokeCard">
                    <img src="${poke.img}" alt="${poke.name}">
                    <h3>#${poke.num} ${poke.name}</h3>
                </div>
            `)}
        </div>

        `;
    }
}
customElements.define('poke-component', PokeComponent);
