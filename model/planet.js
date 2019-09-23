import System from './system.js';
import Building from './building.js';
import ResourceProduction from './resource_production.js';

export default class Planet {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.player = data.player;
        this.system = (data.system !== null) ? new System(data.system) : null;
        this.population = data.population;
        this.buildings = (data.buildings !== null) ? data.buildings.map(b => new Building(b)): [];
        this.nbBuildings = data.nb_buildings;
        this.orbit = data.orbit;
        this.availableBuildings = data.available_buildings;
        this.settings = data.settings;
        this.relations = data.relations;
        this.resources = data.resources;
        this.resourcesProduction = (data.resources_production) ? Object.values(data.resources_production).map(rp => new ResourceProduction(rp)) : [];
        this.storage = (data.storage !== null) ? data.storage : { resources: [] };
        this.ships = new Array();
        this.shipGroups = new Array();
        this.constructingShips = null;
    }

    updateShipGroups(shipGroup, nbShips) {
        let index = -1;
        for (const sg of this.shipGroups) {
            if (sg.id === shipGroup.id) {
                index = this.shipGroups.indexOf(sg);
                sg.quantity += nbShips;
                break;
            }
        }
        if (index === -1 && nbShips > 0) {
            this.shipGroups.push(Object.assign({}, shipGroup, { quantity: nbShips }));
        } else if (index >= 0 && this.shipGroups[index].quantity === 0) {
            this.shipGroups.splice(index, 1);
        }
    }

    canConstruct() {
        return this.planet.nbBuildings > this.planet.buildings.length;
    }

    toJSON() {
        return Object.assign({}, this);
    }
};