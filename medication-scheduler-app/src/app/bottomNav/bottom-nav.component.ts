import { Component, OnInit } from "@angular/core";
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'bottom-nav',
    templateUrl: './bottom-nav.component.html'
})

export class BottomNavComponent implements OnInit {

    public faList = faList;
    public faUserAlt = faUserAlt;

    ngOnInit(): void {
    }

}
