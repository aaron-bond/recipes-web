import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'r-shell',
    templateUrl: 'shell.component.html',
    styleUrls: ['shell.component.scss']
})

export class ShellComponent implements OnInit {

    public Title: string = "My Recipe Site";

    constructor() { }

    // Angular Change Cycle Hooks
    ngOnInit() { }
}