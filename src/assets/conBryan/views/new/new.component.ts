import { Component, OnInit } from '@angular/core';
import { New } from './new';
import { NewService } from '../../services/new.service';


@Component({
    selector: 'new-component',
    templateUrl: './new.component.html',
    providers: [NewService]
})
export class NewComponent implements OnInit {
    respuesta: any[];
    proyecto: New = {
        id: 'bpm001',
        name: 'BPM'
    }

    constructor(public configService:NewService){
        
    }
    
    ngOnInit(){
        this.configService.getDatos().then((data)=> {
            this.respuesta = data;
        }).catch(e => console.log(e));   
    }
}