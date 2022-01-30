for (let i=1; i<= 60 ; i++){
    if(i%3===0 && i%5!==0){
        console.log( i + ' :Hello');

    }else if(i%5===0 && i%15!==0){
        console.log( i + ' :World');
        

    }
    else if(i%15===0){
        console.log( i + ' :Hello World');
        

    }else{
        console.log(i);
        
    }
}