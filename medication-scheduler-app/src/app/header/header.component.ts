import { Component, OnInit } from "@angular/core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    faCoffee = faCoffee;
    constructor() { }

    ngOnInit(): void {
    }

}
