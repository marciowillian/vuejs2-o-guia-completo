new Vue({
    el: '#app',
    data: {
        running: false,
        habilitarEspecial: true,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        },
        win(){
            return this.monsterLife <= 0 && this.playerLife > 0
        },
        lose(){
            return this.monsterLife > 0 && this.playerLife <= 0
        }
    },
    methods: {
        run() {
            this.playerLife = 100
            this.monsterLife = 100
            this.running = true
        },
        stop() {
            this.playerLife = 100
            this.monsterLife = 100
            this.running = false
        },
        attack(especial) {
            
            if(especial == true){
                this.playerLife = this.playerLife - this.getRandom(5, 10)
                if (this.playerLife < 0) this.playerLife = 0

                this.monsterLife = this.monsterLife - this.getRandom(10, 15)
                if(this.monsterLife < 0) this.monsterLife = 0

                this.isUseEspecialAttack();

                console.log('Usando espécial')
            }else {
                this.playerLife = this.playerLife - this.getRandom(5, 10)
                if (this.playerLife < 0) this.playerLife = 0

                this.monsterLife = this.monsterLife - this.getRandom(3, 5)
                if(this.monsterLife < 0) this.monsterLife = 0

            }
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        isUseEspecialAttack() {
            setTimeout(function() {
                if(this.habilitarEspecial == true){
                    this.habilitarEspecial = false
                }

            }, 10000)
        }
    },
    watch: {

    }
})