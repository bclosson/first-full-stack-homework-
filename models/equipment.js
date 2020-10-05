const Equipment = [
    {
        name: 'oven',
        power: 'gas',
        injury: ['burn'],
        SOP: true,
     }, 
     {
         name: 'immersion-blender', 
         power: 'electricity',
         injury: ['cut', 'burn'],
         SOP: true,
     },
     {
         name: 'food-processor',
         power: 'electricity',
         injury: ['cut', 'burn'],
         SOP: false,
     }, 
     {
         name: 'fryer',
         power: ['gas', 'electricity'],
         injury: ['burn'],
         SOP: true,
     },
];

module.exports = Equipment;