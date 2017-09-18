import Ember from 'ember';

export default Ember.Service.extend({

    isLoggedIn: false,
    entrar: function (correo, pass){
        if(correo == 'kevin' && pass == '123'){
            this.set('isLoggedIn', true);
        }else{
            return this.get('isLoggedIn');
        }
    }
});
