function changeImage(buttonId){
    var img= document.getElementById("image");
    var img1= document.querySelector("img1")
    switch(buttonId){
        case 'button1':
            image.src = 'images/1.jpg';
            break;

            case 'button2':
            image.src = 'images/2.jpg';
            break;

            case 'button3':
            image.src = 'images/1.1.jpg';
            break;

            case 'button4':
            image.src = 'images/2.jpg';
            break;
            case 'button5':
            image.src = 'images/1.jpg';
            break;
 }

}
function changeText(buttonId){
    var para= document.getElementById("para");
    switch(buttonId){
        case 'button-1':
            para.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit dolore nam aspernatur quae similique impedit, quas atque quidem facilis quibusdam tempore quasi tenetur porro rem! Consequuntur rem ad enim quos vel fugiat. Quam inventore possimus magnam qui assumenda ea."
            paragraph.style.borderRadius = '5px';
            break;

            case 'button-2':
                para.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit dolore nam aspernatur quae similique impedit, quas atque quidem facilis quibusdam tempore quasi tenetur porro rem! Consequuntur rem ad enim quos vel fugiat. Quam inventore possimus magnam qui assumenda ea."
                break;

            case 'button-3':
                para.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit dolore nam aspernatur quae similique impedit, quas atque quidem facilis quibusdam tempore."
                break;
    }
    
 }      
