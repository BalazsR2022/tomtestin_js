const doc = {
    weightInput: document.querySelector('#weight'),
    heightInput: document.querySelector('#height'),
    indexInput: document.querySelector('#index'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index : 0
};

window.addEventListener('load', () => {
    init();
});

function init (){
    if (document.calcButton){
    doc.calcButton.addEventListener('click', () =>{
        console.log('működik')
        startCalc();
    });
}
    //checkInput(30);
}

function startCalc(){
    let weight = doc.weightInput.value;
    let height = doc.heightInput.value;
    state.index = calcBodyindex(weight,height);
    doc.indexInput.value = state.index;

}

function calcBodyIndex(weight, height){
    return weight / Math.pow(height, 2);
}

function checkInput(input){
    let inputStr = String(input);
    let inputNum = Number(input);
    if (inputStr.match(/^[0-9.]+$/)){
        if(inputNum > 0){
        return true;
    }else{
        return false;
    }
    
    }else{
        return false;
    }
   
    
}


