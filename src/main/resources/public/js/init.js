'use strict'

import { defineCustomElements, setNonce } from '/wcs-core/loader/index.js'
            
const nonce = document.head.querySelector('meta[name="nonce"]').content

setNonce(nonce)
defineCustomElements()

const wcsControls = [
    'wcs-input', 
    'wcs-textarea', 
    'wcs-select'
]

// les éléments <wcs-input> ne sont pas des <input> standards, donc les éléments <form> ne les prennent pas
// en compte par défaut.
// on peut customiser le comportement de HTMX pour supporter cela lors de la configuration des requêtes
// faites avec hx-<method>.
function bindWcsInputsToRequests(htmxConfigRequestEvent){
    const { target, parameters } = htmxConfigRequestEvent.detail
    
    for (const input of target.querySelectorAll(wcsControls.map(control => `${control}[name]`).join(',')))
        parameters[input.getAttribute('name')] = input.value
}

document.body.addEventListener('htmx:configRequest', event => {
    bindWcsInputsToRequests(event)
})

// le même traitement doit s'appliquer avec les messages WebSocket envoyés avec ws-send
function bindWcsInputsToWsMessages(htmxWsConfigSendEvent){
    const { elt: target } = htmxWsConfigSendEvent.detail

    htmxWsConfigSendEvent.detail.messageBody = JSON.stringify(Object.fromEntries(
        Array.from(target.querySelectorAll([...wcsControls, 'input'].map(control => `${control}[name]`).join(',')))
            .map(input => [input.getAttribute('name'), input.value])
    ))
}

document.body.addEventListener('htmx:wsConfigSend', event => {
    bindWcsInputsToWsMessages(event)
})

// Lorsque des noeuds WCS sont créés, Stencil utilise un mécanisme d'"hydratation" pour masquer les éléments dans le DOM
// avant que les styles soient appliqués. Pour cela, une classe "hydrated" est utilisée, elle est ajoutée à l'élément qui a subit des
// modifications lorsqu'il est prêt à être affiché. Un élément non hydraté a une propriété "visibility": "hidden".
// Stencil fait cela de manière asynchrone, probablement via des gestionnaires d'événéments.

// Quand HTMX écrase un élément existant, il insère le nouveau noeud et copie d'abord les anciens attributs, puis il invoque un setTimeout en fonction de htmx.config.defaultSettleDelay.
// C'est seulement après ce délai qu'il va mettre à jour le noeud avec d'éventuels nouveaux attributs. Seulement, il ne prend pas en compte les attributs qui auraient été rajoutés entre temps
// par Stencil. L'attribut "hydrated" est donc présent pendant quelques instants, puis disparaît lorsque les nouveaux attributs sont mis en place.

// Ce tour de magie sert au support des transitions CSS pour HTMX. Le délai par défaut est de 20ms.
// On peut désactiver totalement cela en mettant htmx.config.defaultSettleDelay à 0.
// Une autre solution est d'ajouter manuellement l'attribut "hydrated" lorsque HTMX ajoute un noeud WCS dans le DOM.
// https://htmx.org/docs/#details
// c'est ce que fait cette fonction.
function fixStencilHydratation(elt){

    if (!(elt instanceof Node) || elt.nodeType !== Node.ELEMENT_NODE)
        return

    if (elt.tagName.startsWith('WCS'))
        elt.classList.add('hydrated')

    for (const child of elt.children)
        fixStencilHydratation(child)
}

Object.assign(
    htmx.config, 
    {
        historyCacheSize: 0,
        inlineScriptNonce: nonce,
        includeIndicatorStyles: false,
        allowEval: false
    }
)

htmx.on(document.body, 'htmx:load', event => {
    fixStencilHydratation(event.detail.elt)
})