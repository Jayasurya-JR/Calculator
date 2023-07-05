let input = document.getElementById("input-text");

let calculate = (number) => {
  input.value += number;
};

const Result = () => {
  try {
    input.value = eval(input.value);
  } catch (err) {
    alert("SYNTAX ERROR");
  }
};

const clr = () => input.value = " ";


const del = () =>input.value = input.value.slice(0, -1);


//function
  //for(i=0;i<10;i++){
  //   doc.getSomething.append(<button onclick="calculate({i})" class="button button-{i}">{i}</button>)
  // }
  // const sym =['+','-']
  // for(i=0;i<sym.length();i++){
    //   curDiv = <div class="number num_{i}">{sym[i]}</div>
    // }

    //onLoad()
    //naming convention
    //eval
    //array method