import { Component, OnInit } from "@angular/core";
import { Pill } from './model/pill.model';
import { PortionEnum } from './model/portionEnum.enum';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// <i class="fas fa-chevron-right"></i>

@Component({
    selector: 'medication-list',
    templateUrl: './medicationList.component.html',
    styleUrls: ['./medicationList.component.scss']
})
export class MedicationListComponent implements OnInit {

    public portionEnum = PortionEnum;
    public faChevronRight = faChevronRight;
    public faCircle = faCircle;

    pillList: Pill[] = [
        new Pill('Test 1', PortionEnum.FULL, [1, 0, 0]),
        new Pill('Test 2', PortionEnum.HALF, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
        new Pill('Test 2', PortionEnum.QUARTER, [0, 1, 0]),
    ]

    ngOnInit(): void {



    }

}
