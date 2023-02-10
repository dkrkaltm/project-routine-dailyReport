

class Weather{

    protected URL: URL | RequestInfo = '0';
    protected lon: any;
<<<<<<< HEAD
    protected lat: any;
    protected key: string;

    protected sky: string  = '0';
=======
    protected key: string = 'a854ccd67d3536e95247c8f926cff6a5';

    protected sky: string = '0';
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906
    protected temp: string = '0';
    protected name: string = '0';
    constructor(){

    }
    
    protected getLocation(): any{

        return new Promise((resolve, reject) =>{
          
            navigator.geolocation.getCurrentPosition((position) =>{
                
            
                this.lat =position.coords.latitude;
               
                this.lon = position.coords.longitude;

                resolve('성공');
                
            },()=>{
                alert('a');
                console.error('에러')});
    
        }); 

    }
}

const CurrentWeather =  new class extends Weather{

    #skyM: any =  new Map([['맑음','ADSXxZ2EjeM'],['비','lQ0fS2meTYQ'],['흐림','lQ0fS2meTYQ'],['구름','lQ0fS2meTYQ'],['눈','WacZouyU_Cs'],['안개','G_BYjnopO6U']]);
    
    #sourceM: any = new Map([['맑음','https://www.youtube.com/watch?v=ADSXxZ2EjeM'],['비','https://youtu.be/lQ0fS2meTYQ'],['흐림','https://youtu.be/lQ0fS2meTYQ'],['구름','https://youtu.be/lQ0fS2meTYQ'],['눈','https://youtu.be/WacZouyU_Cs'],['안개','https://youtu.be/WacZouyU_Cs']]);
  
<<<<<<< HEAD
    #source:string= '0' ; 
=======
    #source:string= '0'; 
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906

    #photoM:any = new Map([['맑음','sunny.png'],['비','rain.png'],['흐림','cloudy.png'],['구름','cloudy.png'],['눈','snow.png'],['안개','fog.png']]);

<<<<<<< HEAD
    #photo:string = '0';
=======
    #photo: string= '0';
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906

    #media:string = '0';
    
    constructor(){
       
        super();

<<<<<<< HEAD
    
=======
        this.setData();
        console.log(document.cookie);
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906
   
    }

    async setData(){


       
       try{
            await this.getLocation();

            console.log(this.lat, this.lon);
            this.URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&lang=kr&appid=${this.key}&units=metric`;

            await fetch(this.URL).then(response => response.json())
                .then(data =>{
                    
                    this.sky = data.weather[0].description;
                    
                    this.name = data.name;
                
                    this.#skyM.forEach((v:string,k:string,arr:[]) => {
                        
                        if(this.sky.includes(k)){
                            
                            this.#media = v;

                            this.#source =this.#sourceM.get(k);
                            

                            this.#photo = this.#photoM.get(k);
                            console.log('weatherData', this.sky, this.#source);
                        }
                       
                    });
            
            });     
            
        }catch(err){
          
            console.error(err);
        
        }
    }
    getMediaData(): string {

        return this.#media;
    }
    getSkyData(): string{
      
        return this.sky;
    }
    getSourceData(): string{

        return this.#source;
    }
    getPhotoData(): string{

        return this.#photo;
    }
} 


