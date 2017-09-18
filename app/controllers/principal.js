import Ember from 'ember';

export default Ember.Controller.extend({

    actions:{
        createMovie: function(nameP, hola, soy, un, attr){
            let movie = {
                name: nameP
            }
            this.store.createRecord('movie', movie);
        },
        borrarMovie: function(movie){
            movie.destroyRecord();
        }
    }
});

