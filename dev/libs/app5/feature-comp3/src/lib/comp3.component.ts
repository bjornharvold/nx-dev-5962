import { Component, OnInit} from '@angular/core';
import { Comp3Facade } from '@dev/app5/domain';

@Component({
  selector: 'app5-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
    


    constructor(private comp3Facade: Comp3Facade) {
    }


    ngOnInit() {
    }

}

