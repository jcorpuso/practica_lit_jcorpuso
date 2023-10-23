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

            .filters {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 100%;
                height: 100px;
            }
            .filter {
                width: 175px;
                height: 25px;
                margin: 5px;
            }
            
        `
    ];


    constructor() {
        super();
        this.pokemons = pokemons;
    }

    render() {
        return html`
       
        ${console.log(this.pokemons)}
        <div class="pokeCont">
            <div class="filters">
                <button class="filter" @click=${this.alfaList}>Ordenar A - Z</button>
                <button class="filter" @click=${this.reverseList}>Ordenar Z - A</button>
                <select class="filter">
                    <option>Normal</option>
                    <option>Mítico</option>
                    <option>Legendario</option>
                </select>
            </div>
            <div class="">
            </div>
            ${this.pokemons.map( poke => html`
                <div class="pokeCard">
                    <img src="${poke.img}" alt="${poke.name}">
                    <h3>#${poke.num} ${poke.name}</h3>
                </div>
            `)}
        </div>


        `;
    }

    handleEventAlfaList(e) {
        if (e.type === 'click') {
            this.alfaList(e);
        }
    }

    alfaList(e) {
        const alfalist = pokemons.sort((v1, v2) => {
            return v1.name.localeCompare(v2.name);
        }).map( poke => html`
        <div class="pokeCard">
            <img src="${poke.img}" alt="${poke.name}">
            <h3>#${poke.num} ${poke.name}</h3>
        </div>
        `);
        this.requestUpdate();
        console.log(alfalist)



    };

    handleEventReverseList(e) {
        if (e.type === 'click') {
            this.reverseList(e);
        }
    }
    reverseList(e) {
        const reverseList = pokemons.reverse((v1, v2) => {
            return v1.name.localeCompare(v2.name);
        }).map( poke => html`
        <div class="pokeCard">
            <img src="${poke.img}" alt="${poke.name}">
            <h3>#${poke.num} ${poke.name}</h3>
        </div>
        `);
        this.requestUpdate();
    };

    typeSelected() {
        
    }


}
customElements.define('poke-component', PokeComponent);
