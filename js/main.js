const firstPlayer = {
  name: 'SCORPION',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['меч', 'топор', 'нож', 'лук'],
  attack: function () {
    //console.log(firstPlayer.name + 'fight()' + 'Fight...');
    console.log(`${firstPlayer.name}fight(${firstPlayer.name}Fight...)`);
  }
}

const secondPlayer = {
  name: 'SUB-ZERO',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['меч', 'топор', 'нож', 'лук'],
  attack: function () {
    //console.log(firstPlayer.name + 'fight()' + 'Fight...');
    console.log(`${firstPlayer.name}fight(${firstPlayer.name}Fight...)`);
  }
}

firstPlayer.attack();

const arenas = document.querySelector('.arenas');

const createPlayer = (classPlayer, obj) => {
  const player1 = document.createElement('div');
  const progressbar = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const character = document.createElement('div');
  const image = document.createElement('img')
  image.src = obj.img;

  player1.classList.add(classPlayer);
  progressbar.classList.add('progressbar');
  life.className = 'life';
  life.style.width = '100%';
  name.classList.add('name');
  character.classList.add('character');

  arenas.appendChild(player1);
  player1.appendChild(progressbar);
  player1.appendChild(character);
  progressbar.append(life);
  progressbar.append(name);
  name.innerHTML = obj.name;
  life.innerHTML = obj.hp;
  //progressbar.insertAdjacentHTML('beforeend', '<div class="name">SCORPION</div>');
  character.append(image);

}

createPlayer('player1', firstPlayer);
createPlayer('player2', secondPlayer);

//console.log(p);

// console.log(arenas);
// arenas.appendChild(p);
// console.log(arenas);
// arenas.classList.add('arenas');
//arenas.appendChild(createPlayer('player1', 'SCORPION', 50));