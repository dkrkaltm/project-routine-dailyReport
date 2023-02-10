
console.log('a');
const Target = new class{

    #Button = document.querySelector('#target-button') as HTMLElement;
    
    #Container1 = document.querySelector('.container1') as HTMLElement;

    #Container2 = document.querySelector('.container2') as HTMLElement;



    
    constructor(){
        console.log(this.#Container1);
        this.#Button.onclick = (e) => {
            
            e.preventDefault();

            this.#Container1.classList.toggle('container1');

            this.#Container1.classList.toggle('hidden');

            this.#Container2.classList.toggle('hidden');



            
        }
    }

    componentChange():void{

     

       

    }

}
