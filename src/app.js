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
    doc.calcButton.addEventListener('click', () =>{
        console.log('működik')
        startCalc();
    });
}

function startCalc(){
    let weight = doc.weightInput.value;
    let height = doc.heightInput.value;
    state.index = calcBodyindex(weight,height);
    doc.indexInput.value = state.index;

}

function calcBodyindex(weight, height){
    return weight / Math.pow(height, 2);
}


