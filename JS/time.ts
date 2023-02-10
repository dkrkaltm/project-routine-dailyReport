
const Time = new class{

    #Edate = document.querySelector('#time-date') as HTMLElement;
    #Ehour = document.querySelector('#time-hour') as HTMLElement;


    #date: string = new Intl.DateTimeFormat('ko',{
        dateStyle: 'short',
    }).format(new Date());
    

    #WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    #hour: number | string = 0;
    #minute: number | string= 0;
    #second: number | string= 0;

    #arr: (string | number)[] =[];
   
    constructor(){
        this.#Edate.innerHTML = `${this.#date} ${this.#WEEKDAY[new Date().getDay()]}`;

        setInterval(() =>{
            
            this.#hour =  new Date().getHours();
            this.#minute = new Date().getMinutes();
            this.#second = new Date().getSeconds();
            
            this.#arr = [this.#hour, this.#minute,this.#second].map((v:number | string, i,arr:(number|string)[])=>{
                    
                    if(v<10){
                       
                        arr[i]= '0'+ String(v);
                    }

                    return arr[i];
                    
           });
                        
            this.#Ehour.innerHTML = this.#arr.join(':');
            
        
        }, 1000);
    }

    setEhour(value:string):void{
        this.#Ehour.innerHTML = value; 
    }
    
  
}
