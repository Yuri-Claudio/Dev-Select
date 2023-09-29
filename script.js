const reviews = [
    {
        id: 1,
        nome: 'Ezra Stone',
        job: 'Dev Back-End',
        img: 'imgs/bac.jpg',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi eos veritatis itaque, libero animi ipsam dolor deleniti modi blanditiis illo consequatur aspernatur distinctio dolorem aliquid quo, officia, laudantium magni?",
    },

    {
        id: 2,
        nome: 'Yukihiro Oda',
        job: 'Dev Mobile',
        img: 'imgs/mob.jpg',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi eos veritatis itaque, libero animi ipsam dolor deleniti modi blanditiis illo consequatur aspernatur distinctio dolorem aliquid quo, officia, laudantium magni?",

    },
    {
        id: 3,
        nome: 'Justin Smiles',
        job: 'UI/UX Designer',
        img: 'imgs/ui.jpg',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi eos veritatis itaque, libero animi ipsam dolor deleniti modi blanditiis illo consequatur aspernatur distinctio dolorem aliquid quo, officia, laudantium magni?",

    },
    {
        id: 4,
        nome: 'Akira Kenshi',
        job: 'Web Developer',
        img: 'imgs/web.jpg',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi eos veritatis itaque, libero animi ipsam dolor deleniti modi blanditiis illo consequatur aspernatur distinctio dolorem aliquid quo, officia, laudantium magni?",

    },
];

    const img  = document.getElementById('person-img')
    const author = document.getElementById('author')
    const job = document.getElementById('job')
    const info = document.getElementById('info')
    const prevbtn = document.querySelector('.prev-btn')
    const nextbtn = document.querySelector('.next-btn')
    const randombtn = document.querySelector('.random-btn')

    let currentItem = 0;

    window.addEventListener('DOMContentLoaded', function(){
        const item = reviews[currentItem];
         img.src = item.img;
         author.textContent = item.nome;
         job.textContent = item.job;
         info.textContent = item.text; 

    })

    function showPerson(person){
        const item = reviews[person]
         img.src = item.img;
         author.textContent = item.nome;
         job.textContent = item.job;
         info.textContent = item.text; 

    }

    nextbtn.addEventListener('click', function(){
        currentItem++;
        if(currentItem > reviews.length - 1){
            currentItem = 0;
        }

        showPerson(currentItem);
    });

    prevbtn.addEventListener('click', function(){
        currentItem--;
        if(currentItem < 0){
            currentItem = reviews.length -1;
        }
        showPerson(currentItem);

    });

    randombtn.addEventListener('click', function(){
        console.log('working...');

        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
    });