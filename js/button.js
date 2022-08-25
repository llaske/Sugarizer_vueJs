const Btn ={
    name: 'Btn',
    template: `<div v-html="genlabel" :id="this.id"></div>`,
	props: ['id','text'],
    data() {
        return {
            label: this.text,
            iconId: this.id
        }
    },
    computed: {
		genlabel: function() {
            _setLabel(this.iconId, this.label);
        }
    },
    watch: {
		label: function(newText, oldText) {
			_setLabel(this.iconId, newText);
		},   
    },
    methods: {
        
    }
};

function _setLabel(icon, text) {
	setTimeout(function() { // HACK: Timeout need to wait for SVG to be build
		let element = document.getElementById(icon);
		if (element) {
			element.innerHTML=text;
		}
	}, 0);
}