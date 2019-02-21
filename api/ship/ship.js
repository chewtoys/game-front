import Repository from '~/api/repository';
import Ship from '~/model/ship/ship';

export default class ShipRepository extends Repository
{
    async create(ship, quantity) {
        await ('POST', `/api/planets/${ship.hangar.id}/ships`, {
            model: ship.model,
            quantity: parseInt(quantity)
        });
    }

    async getConstructingShips(planetId) {
        const payload = await this.call('GET', `/api/planets/${planetId}/ships/constructing`);

        const ships = new Array();
        for (const data of payload.data) {
            ships.push(new Ship(data));
        }
        return ships;
    }
};