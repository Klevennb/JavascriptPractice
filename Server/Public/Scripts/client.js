function disemvowel(str) {
    let arr = str.split("");
    let message= '';
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == 'a' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' || arr[i] == 'e') {
    //         arr.slice(i - 1);
    //     }
    // }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'i') {
            // arr.slice(i);
            message +=arr[i];
        } else if (arr[i] != 'o'){
            message += arr[i];
        } 
        // else if (arr[i] != 'u') {
        //     message += arr[i];
        // } else if (arr[i] != 'a') {
        //     message += arr[i];
        // } else if (arr[i] != 'e') {
        //     message += arr[i];
        // }
        
    }


    return message;
}

