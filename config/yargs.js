const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('crear', 'crea un archivo', opts)
    .command('listar', 'crea un archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}