const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    // prevent it from submitting to server
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    //isNaN() to check whether height is a number or not
    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `${height} Is not a valid height !`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight !";
    }

    else {
       const bmi =  (weight / ((height * height)/10000)).toFixed(2);

       results.innerHTML = `<span>${bmi}</span>`

       if(bmi<18.6){
        const under = document.querySelector('.under');
        under.style.backgroundColor = 'cyan'
       }
       else if(bmi>=18.6 && bmi <= 24.9){
        const normal = document.querySelector('.normal');
        normal.style.backgroundColor = 'cyan'
       }
       else {
        const over = document.querySelector('.over');
        over.style.backgroundColor = 'cyan'
       }
       
    }
});