import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>(); 

    ngOnChanges(): void {
        this.starWidth = this.rating * 80 / 5;
    }
    OnClick() :void {
        this.ratingClicked.emit(`The Rating ${this.rating} was Clicked `);
    }
}