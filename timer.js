class Timer {
    constructor(durationInput, startButton, pauseButton,callback) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      if(callback){
        this.startTime=callback.startTime;
        this.oneTick=callback.oneTick;
        this.onComplete=callback.onComplete;
      }
    //   this.count=0;
    
      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click',this.pause);
    }
  
    start=()=> {
      if(this.startTime){
        this.startTime(this.timeRemaining);
      }
       this.intervalID=setInterval(this.tick,50);
    }
    tick=()=>{
       if (this.timeRemaining <= 0){
           this.pause();
           if(this.onComplete){
             this.onComplete();
           }
       }else
       {
         this.timeRemaining = (this.timeRemaining -0.05);
        if(this.oneTick){
          this.oneTick(this.timeRemaining);
        }
        }
        
    }
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value=time.toFixed(2);
    }
    pause=()=>{
        clearInterval(this.intervalID)
        
    }
  }
  
 