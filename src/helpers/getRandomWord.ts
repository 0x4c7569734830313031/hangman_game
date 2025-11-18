let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'VEHICULO',
    'CYBERPUNK',
    'CELULAR',
    'VETERINARIO',
    'LAPTOP',
    'HACKER',
    'CIBERSEGURIDAD',
    'TELEFONO',
    'PORNO',
    'SEXO',
    'PENE',
    'PENTESTER'

];


export function getRamdonWord() {

    const randomIndex = Math.floor( Math.random() * words.length);




    return words[randomIndex];
}