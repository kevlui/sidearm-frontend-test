function showCards()
{
    let screenWidth = window.innerWidth;
    let card = document.querySelector('.card');

    let cardElement =  `<div class="card">
            <img class="card-image" src="assets/mountain.PNG" width="282" height="158.63">
            <div class="card-content">
                <p> Adipisicing unde vel so dolore, consequatur.</p>
                <button class="card-button"> <i class="fa fa-link"></i> Ipsum Lorem</button>
            </div> 
    </div>`;

    let phantomElement = `<div class="card phantom"></div>`

    document.querySelector('.card-container').innerHTML = "";

    //DESKTOP
    if(screenWidth > 970)
    {
        for(let i = 0; i < 8; i++)
        {
            document.querySelector('.card-container').innerHTML += cardElement;
        }
    }
    else if ((screenWidth <= 970) && (screenWidth > 630))
    {
        for(let i = 0; i < 6; i++)
        {
            document.querySelector('.card-container').innerHTML += cardElement;
        }

    }
    else if (screenWidth <= 630)
    {
        for(let i = 0; i < 4; i++)
        {
            document.querySelector('.card-container').innerHTML += cardElement;
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    showCards()
});

window.addEventListener("resize", function(event) {
    showCards()
});