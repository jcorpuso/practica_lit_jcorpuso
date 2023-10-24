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

    static properties = {
        seleccion: {type: String}
    };

    constructor() {
        super();
        this.pokemons = pokemons;
        this.seleccion = '';
    }

    render() {
        return html`
        ${console.log(this.pokemons)}
        <div class="pokeCont">
            <div class="filters">
                <button class="filter" @click="${this.InicioList}">Inicio</button>
                <button class="filter" @click="${this.alfaList}">Ordenar A - Z</button>
                <button class="filter" @click="${this.reverseList}">Ordenar Z - A</button>
                <select class="filter" @change="${this.handleChange}">
                    <option value="opcion1" >Normal</option>
                    <option value="opcion2" >Mítico</option>
                    <option value="opcion3" >Legendario</option>
                </select>
                <p>Seleccionaste: ${this.seleccion}</p>
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

    handleChange(e) {
        this.seleccion = e.target.value;

        switch(this.seleccion){
            case "opcion1":
                let normal = pokemons.filter( poke => {
                    return poke['pokemon-rarity'] === "normal";
                });
                console.log(normal);
                break;
            case "opcion2":
                let mitico = pokemons.filter( poke => {
                    return poke['pokemon-rarity'] === "mythic";
                });
                console.log(mitico);
                break;
            case "opcion3":
                let legendario = pokemons.filter( poke => {
                    return poke['pokemon-rarity'] === "legendary";
                });
                console.log(legendario);
                break;
            default:
                break;
        }
        this.requestUpdate();
            
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

    handleEventInicioList(e) {
        if (e.type === 'click') {
            this.InicioList(e);
        }
    }

    InicioList(e) {
        const listaInicial = pokemons.sort((v1, v2) => {
            return v1.num.localeCompare(v2.num);
        }).map( poke => html`
        <div class="pokeCard">
            <img src="${poke.img}" alt="${poke.name}">
            <h3>#${poke.num} ${poke.name}</h3>
        </div>
        `);
        this.requestUpdate();
    };

    RaritySelected() {

    }


}
customElements.define('poke-component', PokeComponent);
