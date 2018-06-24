const getDensityVisualization = (density, picto) => Array((Math.ceil(density / 20) + 1)).join(picto);

var resourcesData;

fetch('/config/resources.json', {cache: "no-store"})
.then(response => response.json())
.then(resources => {
  resourcesData = resources;
});

const initPlanetResources = (list, data, storage) => {
    for (resource of data) {
        var resourceKey = resource.name;
        resource = Object.assign(resource, resourcesData[resource.name]);
        var info = document.createElement('li');
        info.innerHTML =
            `<h5>${resource.name}</h5>
            <div class="info">
                <div class="density">${getDensityVisualization(
                    resource.density,
                    `<img src="/static/images/resources/${resource.picto}" alt="${resource.name}"/>`
                )}</div>
                ${(typeof storage !== 'undefined' && storage !== null) ? `<div class="storage">${storage.resources[resourceKey]}</div>` : ''}
            </div>`
        ;
        list.appendChild(info);
    }
};
