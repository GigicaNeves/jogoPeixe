var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {

    // Carregar: fundo, logo, peixe e concha
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixe', 'assets/peixes/peixe_amarelo.png');

    this.load.image('concha', 'assets/peixes/concha.png');
}

function create() {

    // Adicionar: fundo, logo, peixe e concha
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5); // setScale - alterações no tamanho da imagem

    // Guardando o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false); // setOrigin - determina a origem da imagem e setFlip - indica o espelhamento da imgem (horizontal ou vertical)

    // Transformando a variável
    peixinho.setFlip(true, false);

    this.add.image(400, 525, 'concha').setOrigin(5.0, 0); 
}

function update() {

    // Adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}