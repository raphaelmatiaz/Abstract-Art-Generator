
// 'layer-instance'Web Component
const layerTemplate = document.createElement("template");
layerTemplate.innerHTML = `
<style>

    .layer {
        border: 1px solid var(--color-secondary);
        border-collapse: collapse;
        min-width: 20vw;
        box-shadow: 0px 0px 1px var(--color-box-shadow-primary);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 4px;
        margin-top: 4px
    }

    .layer:hover, button:hover {
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    .delete-layer {
        border-radius: 50%;
        border: 1px solid var(--color-secondary);
        padding: 2px;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }


</style>

<div id="div" class="layer flex-row">
    <p id="p">New Layer</p>
    <button id="button" class="delete-layer" title="Delete layer">X</button>
</div>
`;

class Layer extends HTMLElement {

    shadowRoot;
    layer;
    deleteBtn;
    name;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: "closed"});
        this.shadowRoot.append(layerTemplate.content.cloneNode(true));

        this.layer = this.shadowRoot.getElementById('#div');
        this.deleteBtn = this.shadowRoot.getElementById('#button')
        this.name = this.shadowRoot.getElementById('#p')
    }
}
customElements.define('layer-instance', Layer);


// === CREATE AN INSTANCE OF LAYER ===

// Constants
const layersContainer = document.querySelector('#layers-container')
const addLayerBtn = document.querySelector('#add-layer');
const layers = ['1', '2']

// Event Listner
addLayerBtn.addEventListener('click', () => {

    const newLayer = document.createElement('layer-instance');
    layersContainer.appendChild(newLayer);
})