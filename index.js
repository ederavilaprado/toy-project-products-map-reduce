const {map, mapValues, reduce} = require('lodash');

const product = {
  id: '001',
  name: 'Camiseta algodão',
  variations: [
    {
      id: '001',
      name: 'Camiseta algodão - Cor: preto; Tamanho: P',
      active: true,
      attributes: [
        { name: 'Tamanho', value: 'P' },
        { name: 'Cor', value: 'Preto' }
      ]
    },
    {
      id: '002',
      name: 'Camiseta algodão - Cor: branco; Tamanho: P',
      active: true,
      attributes: [
        { name: 'Tamanho', value: 'P' },
        { name: 'Cor', value: 'Branco' }
      ]
    }
  ]
}

// const products = [product];

const p = {
  id: product.id,
  name: product.name,
}

let attributes = {};

product.variations.forEach((variation) => {
  // console.log('->', variation.attributes);

  variation.attributes.forEach((att) => {
    let a = attributes[att.name];
    if (a) {
      if (a.values[att.value]) return;
    } else {
      a = {
        name: att.name,
        values: {}
      };
    }
    a.values[att.value] = {
      value: att.value
    };
    attributes[att.name] = a;
  })
})

console.log('->', JSON.stringify(attributes, null, 2));





// console.log('->', p);