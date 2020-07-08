new Vue({
    el: '#app',
    data: {
        playerLife: 0,
        monsterLife: 0,
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

    },
    watch: {

    }
})