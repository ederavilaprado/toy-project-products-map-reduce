const _ = require('lodash');

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

let attributes = {};


let x = _.chain(product.variations).map((v) => (v.attributes))
.flattenDeep()
.groupBy('name')
.mapValues((att) => {
  return _.chain(att)
  .map((v) => ({ value: v.value }))
  .uniqBy('value')
  .value();
})
.value();

console.log('->', x);
