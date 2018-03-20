import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    public title: string = 'Welcome';
    @Output() logoWasClicked: EventEmitter<string> = new EventEmitter<string>();

    logoClicked() {
        this.logoWasClicked.emit('The logo was clicked!');
    }
}
