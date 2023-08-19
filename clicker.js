document.addEventListener("DOMContentLoaded", function(){
  var vm = new Vue({
    el: "#app",
    data:{
      coins: 0,
      modifier: 1,
      upgrade1name: "RoboMiner",
      upgrade2name: "RTX 4090TI",
      upgrade3name: "BotNetzwerk",
      upgrade4name: "Serverraum"
    },
    methods:{
      mineCrypto: function(){
        this.coins += this.modifier;
      },
      upgrade: function(upgradeName){
        switch(upgradeName){
          case(this.upgrade1name):
            if(this.coins >= 20) {
              this.modifier += 5;
              this.coins -= 20;
            }
            return;
          case(this.upgrade2name):
            if(this.coins >= 200) {
              this.modifier += 25;
              this.coins -= 200;
            }
            return;
          case(this.upgrade3name):
            if(this.coins >= 1500)
          {
            this.modifier += 150;
            this.coins -= 1500;
          }
            return;
          case(this.upgrade4name):
            if(this.coins >= 10000)
          {
            this.modifier += 750;
            this.coins -= 10000;
          }
            return;
        }
      }
    }
  });
});
