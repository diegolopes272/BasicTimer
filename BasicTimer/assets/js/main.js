
//simple timer with Date
//setInterval and clearInterval references

function localScope() {


    //select the objects
    const timer = document.querySelector('.timer');
    const startBt = document.querySelector('.start');
    const pauseBt = document.querySelector('.pause');
    const clearBt = document.querySelector('.clear');
    
    //control variables
    let tick = 0;
    let seconds = 0;

    //create time format
    function getTime(sec) {

        let data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function startTimer () {
        tick = setInterval(function(){
            seconds++;
            timer.innerHTML = getTime(seconds);
        }, 1000);
    }

    function pauseTimer () {
        clearInterval(tick);
    }

    function clearTimer () {
        clearInterval(tick);
        seconds = 0;
        timer.innerHTML = getTime(seconds);
    }

    
    //control events
    startBt.addEventListener('click', function(event) {
        timer.classList.remove('paused'); //red font
        clearInterval(tick);
        startTimer();
    });

    pauseBt.addEventListener('click', function(event) {
        timer.classList.add('paused');
        pauseTimer();
    });

    clearBt.addEventListener('click', function(event) {
        clearTimer();
    });


    // //other solutions:

    // //get all events inside only one listener
    // document.addEventListener('click', function(e){
    //     const elment = e.target;
    //     console.log(elment);    //print the clicked element 

    //     if(elment.classList.contains('clear')) {
    //         console.log("clear clicked");
    //         //clear instructions
    //         clearTimer();
    //     }
    //     //...to others buttons
        
    // });

}

//avoid global scope
localScope();