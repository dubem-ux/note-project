const {notes,noteid} = require('./controller.js')

module.exports = [
    {
        path:'/notes',
        handlers:[notes]
    },
    {
        path:'/:id',
        handlers:[noteid]
    }
];