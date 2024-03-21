        const button1 = documnt.querySector("button1");
        button1. addEventListener('click', changeText);
        console.log(button);

        const button2 = documnt.queryElementById("button2");
        button1. addEventListener('click', changeText);
        console.log(button);

       

        const heading = documnt.querySector("h1");

        function changeText(){
            const head = prompt("tell me a secret");
            heading.textContent = head;
        }
    

    