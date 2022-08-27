const Btn ={
    name: 'Btn',
    template: `<div v-html="genTextData" :id="this.id"></div>`,
	props: ['id','text'],
    data() {
        return {
            textData: this.text,
            iconData: this.id
        }
    },
    computed: {
		genTextData: function() {
            _setTextData(this.iconData, this.textData);
        }
    },
    watch: {
		textData: function(newText, oldText) {
			_setTextData(this.iconData, newText);
		},   
    },
    methods: {
        
    }
};

function _setTextData(icon, text) {
	setTimeout(function() { // HACK: Timeout need to wait for SVG to be build
		let element = document.getElementById(icon);
		if (element) {
			element.innerHTML=text;
		}
	}, 0);
}