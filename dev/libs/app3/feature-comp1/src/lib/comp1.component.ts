import { Component, OnInit} from '@angular/core';
import { Comp1Facade } from '@dev/app3/domain';

@Component({
  selector: 'app3-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
    


    constructor(private comp1Facade: Comp1Facade) {
    }


    ngOnInit() {
    }

}

