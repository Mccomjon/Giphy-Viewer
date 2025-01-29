let CurrentPage = 1;
const limit = 30;
function handleSubmit(x = 1, y = 0) {
    document.getElementById("startText").style.display = "none";
    if(y == 1){
        CurrentPage = 1;
        document.getElementById('prevButton').disabled = true;
    }
    //Variable Declarations
    let searchVal = document.getElementById('searchVal');
    let search = searchVal.value;
    let pagenumber = x;
    let offset = (pagenumber-1)*limit;
    let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=cqGXYwt8ZYFAOolvYC8V5lzy6VJzZ96J&limit=${limit}&offset=${offset}`;
    // Resets all 6 Columns to default
    for (let i = 0; i<6; i++) {
        document.getElementById(`outputColumn${i+1}`).innerHTML = "";
    }
    //URL Request and Json Config.  Container creation and filling.
    fetch(url)  //fetches data from url
        .then ( (response) => response.json())  //converts string response to JSON object
        .then ( (json) => {  
            //Creates Containers for each of the GIFS and appends them to outputContainer
            let c= 1;
            let ParentContainer = document.getElementById('outputContainer');
            for (let i =0; i<(limit-1); i++) {
                let img = json.data[i].images.fixed_height.url;
                if(c==1){
                    c++;
                    ParentContainer = document.getElementById('outputColumn1');
                }else if(c==2){
                    c++;
                    ParentContainer = document.getElementById('outputColumn2');
                }else if(c==3){
                    c++;
                    ParentContainer = document.getElementById('outputColumn3');
                }else if(c==4){
                    c++;
                    ParentContainer = document.getElementById('outputColumn4');
                }else if(c==5){
                    c++;
                    ParentContainer = document.getElementById('outputColumn5');
                }else if(c==6){
                    c=1;
                    ParentContainer = document.getElementById('outputColumn6');
                }
                let newGifContainer = `<div class="gifContainer"><img src="${img}" alt="GIF"></div>`;
                $(ParentContainer).append(newGifContainer);
            }
        });
}
function movePage(x){

    CurrentPage = CurrentPage + x;
    if(CurrentPage == 1){
        document.getElementById('prevButton').disabled = true;
    } else {
        document.getElementById('prevButton').disabled = false;
    }
    handleSubmit(CurrentPage);
}

function bgStyle(x){
    //Enable all bg Buttons
    document.getElementById('bgButtonl').disabled = false;
    document.getElementById('bgButtonm').disabled = false;
    document.getElementById('bgButtond').disabled = false;
    
    if(x == 1){
        document.body.style.backgroundColor = '#cccccc';
        document.getElementById('bgButtonl').disabled = true;
        
    }else if(x == 2){
        document.body.style.backgroundColor = '#8c8c8ccc';
        document.getElementById('bgButtonm').disabled = true;
        
    } else if(x == 3){
        document.body.style.backgroundColor = '#232323';
        document.getElementById('bgButtond').disabled = true;
    }
}