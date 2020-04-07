/* var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'hello there'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        'seen': true
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'the time now is ' + new Date().toLocaleString()
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'item 1' },
            { text: 'item 2' },
            { text: 'item 3' }
        ]
    },
    methods: {
        add: function() {
            app4.todos.push({ text: this.item })
        }
    }

})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello daniel'
    },

})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'hellow'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        clickThis: function() {
            alert('hello')
        }
    }
}) */

function show() {
    day = new Date()
    document.getElementById('tim').innerHTML = day.toLocaleString();
    window.print()
}

prompt('what\'s you name')