import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions:{
        logguear: function(){
            var correo = this.get('correo');
            var pass = this.get('pass');
            if(this.get('session').entrar(correo, pass)){
                return this.transitionToRoute('principal');
            } else{
                console.log('Hubo error');
            }
        }
    }

});
