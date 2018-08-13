/**
 * Pokemon.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombrePokemon:{
      type:'string'
    },
    numeroPokemon:{
      type:'number'
    },
    poderEspecialUno:{
      type:'string'
    },
    poderEspecialDos:{
      type:'string'
    },
    fechaCaptura:{
      type:'string'
    },
    nivel:{
      type:'number'
    },
    imagenUrl:{
      type:'string'
    },
    entrenadorId:{
      model:'entrenador'
    }
  },

};

