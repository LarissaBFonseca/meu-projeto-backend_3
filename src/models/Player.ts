/*a palvra chave export é usada para exportar a classe player, permitindo
que ela seja importada e utilizada em outros arquivos do projeto.
A palavra-chave "class" é usada para definir uma classe em TypeScript.*/

export class Player {
    /* a palavra-chave "public" é usada para definir propiedades públicas
    que podem ser acessadas de fora da classe. */

    /* ATRIBUTOS DA CLASSE PLAYER */

    public name: string; //Nome do player (texto)
    public health: number; //Saúde do player (número)
    public level: number; //Nível do player (número)

    /* CONSTRUTOR DA CLASSE PLAYER */
    
    /* O constructor é um método especial que é 
    chamado quando uma instância da classe é criada.*/

    constructor(name: string, health = 100, level = 1) {
        /* o construtor é usado para atribuir valores iniciais aos atributos da classe.*/

        /* a palavra-chave "this" é usada para se referir à instância atual da classe.
        Ou seja: "Pegue o atributo 'name' da classe
        player e atribua o valor de 'health' = 100 a ele."*/

        this.name = name; // inicializa o nome do player
        this.health = health; // inicializa a saúde do player
        this.level = level; // inicializa o nível do player
    }

    /* MÉTODOS DA CLASSE PLAYER */
    /* Métodos são funções que pertencem á uma classe e 
    podem ser chamadas em instâncias dessa classe. */

    /* O método "attack" é usado para atacar outro player reduzindo sua saúde */
    
    public attack(): string {
        /* calcula o dano com base no nível do player */
        const damage = this.level * 10; 
        /* A palavra-chave "return" é usada para 
        retornar um valor de uma função ou método */
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /* O método "takeDamage" é usado para receber dano de 
    outro player, reduzindo a saúde do player*/

    public takeDamage(damage: number): string {
        /* reduz a saúde do player com base no dano recebido */
        this.health -= damage;
        //verifica se a saúde do player é menor ou igual a 0, se for, o player foi derrotado
        if (this.health <= 0) {
            this.health = 0; // garante que a saúde não fique negativa
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} recebeu ${damage} de dano! e agora tem ${this.health} de saúde restante.`;

    }

    public healDamage(heal: number): string {
        /* aumenta a saúde do player com base na cura recebida */
        this.health += heal;
        //verifica se a saúde do player é maior que 100, se for, a saúde é limitada a 100
        if (this.health > 100) {
            this.health = 100; // garante que a saúde não ultrapasse 100
        }
        return `O player ${this.name} foi curado e agora tem ${this.health} de saúde.`;
    }

}
