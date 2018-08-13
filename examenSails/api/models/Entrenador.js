/**
 * Entrenador.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreEntrenador:{
      type:'string'
    },
    apellidoEntrenador:{
      type:'string'
    },
    fechaNacimiento:{
      type:'string'
    },
    numeroMedallas:{
      type:'number'
    },
    campeonActual:{
      type:'boolean'
    },
    imagenUrl:{
      type:'string'
    },
    pokemon:{
      collection: 'pokemon',
      via:'entrenadorId'
    }
  },

};

