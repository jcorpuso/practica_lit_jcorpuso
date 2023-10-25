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
        selectedOption: { type: String }, //Opción de rareza seleccionada
        selectedType: { type: String}, //Opción de tipo seleccionada
        filteredResults: { type: Array } //Resultados de seleccionar el tipo de pokemon

    };

    constructor() {
        super();
        this.pokemons = pokemons;
        this.selectedOption = 'all';
        this.selectedType = 'all';
        this.filteredResults = pokemons;

        
        
    }

   
    

    Print() {
        return html`
        `;
    }

    handleChange(e) {
        this.selectedOption = e.target.value;
        this.requestUpdate();
        this.RaritySelected();

        this.selectedType = e.target.value;
        this.requestUpdate();
        this.TypeSelected();
    }

    RaritySelected() {
        if(this.selectedOption === "opcion1") {
            const normal = pokemons.filter( poke => {
                return poke['pokemon-rarity'] === "normal"
            });
            this.filteredResults = normal;
            console.log(normal);
            this.requestUpdate();

        } else if(this.selectedOption === "opcion2") {
            const mitico = pokemons.filter( poke => {
                return poke['pokemon-rarity'] === "mythic"
            });
            this.filteredResults = mitico;
            console.log(mitico)
            this.requestUpdate();
        } else if(this.selectedOption === "opcion3") {
            const legendario = pokemons.filter( poke => {
                return poke['pokemon-rarity'] === "legendary"
            });
            this.filteredResults = legendario;
            console.log(legendario);
            this.requestUpdate();

        } else {
            this.filteredResults = pokemons;
        }
        this.requestUpdate();
    }

    TypeSelected() {
        switch(this.selectedType) {
            case "normal":
                const normalType = pokemons.filter( poke => {
                    return poke.type == "normal" 
                });
                this.filteredResults = normalType;
                console.log(normalType);
                this.update();
                break;
            case "fire":
                const fire = pokemons.filter( poke => {
                    return poke.type == "fire"
                });
                this.filteredResults = fire;
                console.log(fire);
                this.update();
                break;
            case "water":
                const water = pokemons.filter( poke => {
                    return poke.type == "water"
                });
                this.filteredResults = water;
                console.log(water);
                this.update();
                break;
            case "electric":
                const electric = pokemons.filter( poke => {
                    return poke.type == "electric"
                });
                this.filteredResults = electric;
                console.log(electric);
                this.update();
                break;
            case "grass":
                const grass = pokemons.filter( poke => {
                    return poke.type == "grass"
                });
                this.filteredResults = grass;
                console.log(grass);
                this.update();
                break;
            case "ice":
                const ice = pokemons.filter( poke => {
                    return poke.type == "ice"
                });
                this.filteredResults = ice;
                console.log(ice);
                this.update();
                break;
            case "fire":
                const fighting = pokemons.filter( poke => {
                    return poke.type == "fighting"
                });
                this.filteredResults = fighting;
                console.log(fighting);
                this.update();
                break;
            case "poison":
                const poison = pokemons.filter( poke => {
                    return poke.type == "poison"
                });
                this.filteredResults = poison;
                console.log(poison);
                this.update();
                break;
            case "ground":
                const ground = pokemons.filter( poke => {
                    return poke.type == "ground"
                });
                this.filteredResults = ground;
                console.log(ground);
                this.update();
                break;
            case "flying":
                const flying = pokemons.filter( poke => {
                    return poke.type == "flying"
                });
                this.filteredResults = flying;
                console.log(flying);
                this.update();
                break;
            case "psychic":
                const psychic = pokemons.filter( poke => {
                    return poke.type == "psychic"
                });
                this.filteredResults = psychic;
                console.log(psychic);
                this.update();
                break;
            case "bug":
                const bug = pokemons.filter( poke => {
                    return poke.type == "bug"
                });
                this.filteredResults = bug;
                console.log(bug);
                this.update();
                break;
            case "rock":
                const rock = pokemons.filter( poke => {
                    return poke.type == "rock"
                });
                this.filteredResults = rock;
                console.log(rock);
                this.update();
                break;
            case "ghost":
                const ghost = pokemons.filter( poke => {
                    return poke.type == "ghost"
                });
                this.filteredResults = ghost;
                console.log(ghost);
                this.update();
                break;
            case "dragon":
                const dragon = pokemons.filter( poke => {
                    return poke.type == "dragon"
                });
                this.filteredResults = dragon;
                console.log(dragon);
                this.update();
                break;
            case "dark":
                const dark = pokemons.filter( poke => {
                    return poke.type == "dark"
                });
                this.filteredResults = dark;
                console.log(dark);
                this.update();
                break;
            case "steel":
                const steel = pokemons.filter( poke => {
                    return poke.type == "steel"
                });
                this.filteredResults = steel;
                console.log(steel);
                this.update();
                break;
            case "fairy":
                const fairy = pokemons.filter( poke => {
                    return poke.type == "fairy"
                });
                this.filteredResults = fairy;
                console.log(fairy);
                this.update();
                break;
            default:
                this.filteredResults = pokemons;
                break;
        }
    }

    handleEventAlfaList(e) {
        if (e.type === 'click') {
            this.alfaList(e);
        }
    }

    alfaList(e) {
        const alfalist = pokemons.sort((v1, v2) => {
            return v1.name.localeCompare(v2.name);
        });
        this.filteredResults = alfalist;
        console.log(alfalist);
        this.requestUpdate();



    };

    handleEventReverseList(e) {
        if (e.type === 'click') {
            this.reverseList(e);
        }
    }
    reverseList(e) {
        const reverseList = pokemons.reverse((v1, v2) => {
            return v1.name.localeCompare(v2.name);
        });
        this.filteredResults = reverseList;
        console.log(reverseList);
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
        });
        this.filteredResults = listaInicial;
        console.log(listaInicial);
        this.requestUpdate();
    };


    render() {
        return html`
        <div class="pokeCont">
            <div class="filters">
                <button class="filter" @click="${this.InicioList}">Reset</button>
                <h2>Selecciona un orden:</h2>
                <button class="filter" @click="${this.alfaList}">Ordenar A - Z</button>
                <button class="filter" @click="${this.reverseList}">Ordenar Z - A</button>
                <select class="filter" @change="${this.handleChange}" .value="${this.selectedOption}">
                    <option value="all">Rareza</>
                    <option value="opcion1" >Normal</option>
                    <option value="opcion2" >Mítico</option>
                    <option value="opcion3" >Legendario</option>
                </select>
                <select class="filter" @change="${this.handleChange}" .value="${this.selectedType}">
                    <option value="all">Tipo</>
                    <option value="normal" >Normal</option>
                    <option value="fire" >Fuego</option>
                    <option value="water" >Agua</option>
                    <option value="electric">Eléctrico</>
                    <option value="grass" >Planta</option>
                    <option value="ice" >Hielo</option>
                    <option value="fighting" >Lucha</option>
                    <option value="poison">Veneno</>
                    <option value="ground" >Tierra</option>
                    <option value="flying" >Volador</option>
                    <option value="psychic" >Psiquico</option>
                    <option value="bug">Insecto</>
                    <option value="rock" >Roca</option>
                    <option value="ghost" >Fantasma</option>
                    <option value="dragon" >Dragón</option>
                    <option value="dark" >Siniestro</option>
                    <option value="steel" >Acero</option>
                    <option value="fairy" >Hada</option>
                </select>
                <input class="filter" type="text" name="search" placeholder="Búsqueda por tipo">
                <button class="filter">🔍</button>
            </div>
            ${this.filteredResults.map(poke => html`
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
