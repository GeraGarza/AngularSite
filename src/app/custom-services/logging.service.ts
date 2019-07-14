

export class LoggingService{
    logStatusChange(status: string){
        console.log('The status is: ' + status);
    }


}

/*
Dont create an instance of a service manually : ex
const service = new LoggingService();
servie.logStatusChange(status);




*/