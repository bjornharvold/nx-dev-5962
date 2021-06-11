import { Component, OnInit} from '@angular/core';
import { Comp2Facade } from '@dev/app4/domain';

@Component({
  selector: 'app4-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
    


    constructor(private comp2Facade: Comp2Facade) {
    }


    ngOnInit() {
    }

}

