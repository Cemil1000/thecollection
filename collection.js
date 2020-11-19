//--------------------Category List--------------------//
const categories = [
    {
        name: 'Action',
        class: 'badge badge-pill badge-danger'
    },
    {
        name: 'Comédie',
        class: 'badge badge-pill badge-success'
    },
    {
        name: 'Animation',
        class: 'badge badge-pill badge-info'
    },
    {
        name: 'Horreur',
        class: 'badge badge-pill badge-warning'
    },
]
//--------------------All Film List--------------------//
const collection = [
    // {
    //     img: '',
    //     title: '',
    //     author: '',
    //     category: ['', ''],
    //     link: '',
    //     description: ''
    // },
    {
        img: 'images/avenger.jpg',
        title: 'Avengers Endgame',
        author: 'Joe Russo, Anthony Russo',
        category: [categories[0]],
        link: 'https://www.youtube.com/watch?v=wV-Q0o2OQjQ&ab_channel=MarvelFR',
        description: 'Thanos ayant anéanti la moitié de l’univers, les Avengers restants resserrent les rangs dans ce vingt-deuxième film des Studios Marvel.'
    },
    {
        img: 'images/pacificrim.jpg',
        title: 'Pacific Rim',
        author: 'Guillermo del Toro, Steven S.',
        category: [categories[0]],
        link: 'https://www.youtube.com/watch?v=qOX_O118N7k&ab_channel=WarnerBros.France',
        description: 'Des hordes de créatures monstrueuses venues d’ailleurs, ont déclenché une guerre. Pour les combattres, de gigantesques robots ont été fabriquer.'
    },
    {
        img: 'images/Charlie.jpg',
        title: 'Charlie la chocolaterie',
        author: 'Tim Burton',
        category: [categories[1]],
        link: 'https://www.youtube.com/watch?v=xjZihSC42HI&ab_channel=TimBurtonFR',
        description: 'Willy Wonka ouvre les portes de sa fabirque de chocolat à cinq enfants qui découvrent les secrets de ses extraordinaires créations gustatives.'
    },
    {
        img: 'images/moimoche.jpg',
        title: 'Moi moche et mechant',
        author: 'Pierre Coffin, Chris Renaud',
        category: [categories[2]],
        link: 'https://www.youtube.com/watch?v=OPf1YYSKxBs&ab_channel=UniversalPicturesFrance',
        description: 'Gru, un méchant vilain, entouré de sous-fifres et armé jusqu’aux dents, qui complote le plus gros casse de tous les temps : voler la lune (Oui, la lune !)...'
    },
    {
        img: 'images/dragon.jpg',
        title: 'Dragon',
        author: 'Dean DeBlois, Chris Sanders',
        category: [categories[2] , categories[0]],
        link: 'https://www.youtube.com/watch?v=rsj6Iv2jE1I&ab_channel=3DmaniaTV',
        description: 'Harold, jeune Viking, dans sa tribu combattre les dragons est le sport national. Sa vie va être bouleversée par sa rencontre avec un dragon.'
    },
    {
        img: 'images/ted.jpg',
        title: 'Ted',
        author: 'Seth MacFarlane',
        category: [categories[1]],
        link: 'https://www.youtube.com/watch?v=esfilNg464I&ab_channel=FilmsActu',
        description: 'Le souhait de John Bennett donne vie à son ami ours en peluche Ted. À l’âge adulte, Ted empêche John et son amour Lori Collins de poursuivre leur vie.'
    },
    {
        img: 'images/worldwarz.jpg',
        title: 'World War Z',
        author: 'Marc Forster',
        category: [categories[3] , categories[0]],
        link: 'https://www.youtube.com/watch?v=jTrmqThqpK8&ab_channel=FilmsActu',
        description: 'Un agent des Nations Unies se lance dans une course contre la montre pour mettre fin à la prolifération d’un virus mortel menaçant l espèce humaine.'
    },
    {
        img: 'images/conjuring.jpg',
        title: 'Conjuring',
        author: 'James Wan',
        category: [categories[3]],
        link: 'https://www.youtube.com/watch?v=Mkf9rGLXeuE&ab_channel=LesCin%C3%A9masPath%C3%A9Gaumont',
        description: 'Cette histoire abominable, mais vraie, est celle d’une famille qui aurait préféré ne pas rencontrer les esprits qui hantent sa ferme isolée.'
    },
    {
        img: 'images/sanandreas.jpg',
        title: 'San Andreas',
        author: 'Brad Peyton',
        category: [categories[0]],
        link: 'https://www.youtube.com/watch?v=HGpwaIf3ZKk&ab_channel=WarnerBros.France',
        description: 'Lorsque la Faille de San Andreas s’ouvre, un pilote d’hélicoptère et la femme quittent Los Angeles pour San Francisco dans l’espoir de sauver leur fille unique.'
    },
    {
        img: 'images/kirikou.jpg',
        title: 'Kirikou et la sorcière',
        author: 'Michel Ocelot',
        category: [categories[2]],
        link: 'https://www.youtube.com/watch?v=3EA4xnPpZhk&ab_channel=SortieDvdBluRay',
        description: 'Kirikou naît dans un village d’Afrique sur lequel la sorcière Karaba a jeté un terrible sort. Kirikou veut délivrer le village de l’emprise maléfique de Karaba.'
    },
]


document.querySelector('.myCard').innerHTML=''
const mainContainer = document.querySelector('.myCard');

const sectionfirst = document.createElement('section');
        sectionfirst.className = 'row my-2';
        mainContainer.appendChild(sectionfirst);

for (let element of collection) {

    const colonnes = document.createElement('div');
        colonnes.className = 'col-12 col-sm-6 col-md-4 col-xl-3 mb-4';
        sectionfirst.appendChild(colonnes);

    const carte = document.createElement('section');
        carte.className = 'card bg-dark text-white';
        colonnes.appendChild(carte);

    //--------------------Image--------------------//

    const lien = document.createElement('a');
        lien.href = '';
        carte.appendChild(lien);

    const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = element.img;
        lien.appendChild(image);

    //--------------------Card Body--------------------//

    const cartebody = document.createElement('div');
        cartebody.className = 'card-body';
        carte.appendChild(cartebody);

    //--------------------Category--------------------//

    for (let badge of element.category) {
        const category = document.createElement('span');
        category.textContent = badge.name;
        category.className = badge.class;
        cartebody.appendChild(category);
    }

    //--------------------Titre Film--------------------//

    const grandTitre = document.createElement('h3');
        grandTitre.className = 'h5 card-title';
        grandTitre.textContent = element.title;
        cartebody.appendChild(grandTitre);

    //--------------------Auteur--------------------//

    const petitTitre = document.createElement('h4');
        petitTitre.className = 'h6 card-subtitle mb-2 text-muted';
        petitTitre.style = 'font-size: small';
        petitTitre.textContent = element.author;
        cartebody.appendChild(petitTitre);

    //--------------------Description Film--------------------//

    const carteTexte = document.createElement('p');
        carteTexte.className = 'card-text';
        carteTexte.style = 'font-size: 0.9rem;';
        carteTexte.textContent = element.description;
        cartebody.appendChild(carteTexte);

    //--------------------Youtube--------------------//

    const divYtb = document.createElement('div');
        divYtb.className = 'd-block d-sm-none';
        cartebody.appendChild(divYtb);
    
    const ligne = document.createElement('hr');
        divYtb.appendChild(ligne);

    const lienYtb = document.createElement('a');
        lienYtb.href = element.link;
        divYtb.appendChild(lienYtb);

    const logoYtb = document.createElement('i');
        logoYtb.className = 'fab fa-2x fa-youtube';
        logoYtb.style = 'color: red;'
        lienYtb.appendChild(logoYtb);
}



//-------------------------SEARCH-------------------------//

function filterGames(pattern){
	const results = []
  
  for(let game of collection){
  	if(game.title.toLowerCase().match(pattern))
    	results.push(game)
  }
  
  const resultsDiv = document.querySelector('#results')
  resultsDiv.innerHTML = ''
  mainContainer.innerHTML = ''

  for(let element of results) {
    const colonnes = document.createElement('div');
        colonnes.className = 'col-12 col-sm-6 col-md-4 col-xl-3 mb-4 mx-auto';
        resultsDiv.appendChild(colonnes);
    
    const carte = document.createElement('section');
        carte.className = 'card bg-dark text-white';
        colonnes.appendChild(carte);
        
    //--------------------Image--------------------//

    const lien = document.createElement('a');
        lien.href = '';
        carte.appendChild(lien);

    const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = element.img;
        lien.appendChild(image);

    //--------------------Card Body--------------------//

    const cartebody = document.createElement('div');
        cartebody.className = 'card-body';
        carte.appendChild(cartebody);

    //--------------------Category--------------------//

    for (let badge of element.category) {
        const category = document.createElement('span');
        category.textContent = badge.name;
        category.className = badge.class;
        cartebody.appendChild(category);
    }

    //--------------------Titre Film--------------------//

    const grandTitre = document.createElement('h3');
        grandTitre.className = 'h5 card-title';
        grandTitre.textContent = element.title;
        cartebody.appendChild(grandTitre);

    //--------------------Auteur--------------------//

    const petitTitre = document.createElement('h4');
        petitTitre.className = 'h6 card-subtitle mb-2 text-muted';
        petitTitre.style = 'font-size: small';
        petitTitre.textContent = element.author;
        cartebody.appendChild(petitTitre);
        
    //--------------------Description Film--------------------//

    const carteTexte = document.createElement('p');
        carteTexte.className = 'card-text';
        carteTexte.style = 'font-size: 0.9rem;';
        carteTexte.textContent = element.description;
        cartebody.appendChild(carteTexte);

    //--------------------Youtube--------------------//

    const divYtb = document.createElement('div');
        divYtb.className = 'd-block d-sm-none';
        cartebody.appendChild(divYtb);
    
    const ligne = document.createElement('hr');
        divYtb.appendChild(ligne);

    const lienYtb = document.createElement('a');
        lienYtb.href = element.link;
        divYtb.appendChild(lienYtb);

    const logoYtb = document.createElement('i');
        logoYtb.className = 'fab fa-2x fa-youtube';
        logoYtb.style = 'color: red;'
        lienYtb.appendChild(logoYtb);
    }
}

document.querySelector('#RechercheBar')
.addEventListener('keyup', input => {
	filterGames(input.target.value.toLowerCase())
})
