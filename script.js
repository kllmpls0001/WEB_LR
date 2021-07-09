new Vue({
    el: '#app',
    data() {
        return {
			tasks:[{
				text:"High pri", priority:3, done: false
			},
			{
				text:"Med pri", priority:2, done: false
			},
			{
				text:"Low pri", priority:1, done: false
			}],
			taskText: '',
			picked: 3,
			shake: false,
        };
    },
    computed: {},
    mounted() {
    },
    watch: {
    },
    computed: {
    },
    methods: {
		deleteItem(item) {
            this.tasks.splice(this.tasks.indexOf(item), 1);
        },
		addItem()
        {
            if (this.taskText && this.picked) {
                this.tasks.unshift({
                    id: this.tasks.length,
                    text: this.taskText,
                    done: false,
                    priority: this.picked
                });
                this.taskText = '';
                this.picked = 3;
            }
			else {
				const self = this
                self.shake = true
                setTimeout(() =>
                {
                    self.shake = false
                }, 1000);
			}
			
            return true;
        },
    },
});