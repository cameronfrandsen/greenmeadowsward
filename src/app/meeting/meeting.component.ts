import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {

  constructor() { }

  handleClick(): boolean {
    if (this.validate === undefined) {
      window.open(this.meetingUrl);
      return false;
    }
    var d = new Date();
    var n = d.getDay();
    if(n === 0) {
      window.open(this.meetingUrl);
    } else {
      alert("The meeting does not start today, please check back when the meeting is supposed to start");
    }    
    return false;
  }

  @Input() meetingUrl: string;
  @Input() picture: string;
  @Input() title: string;
  @Input() info: string;
  @Input() validate: string;
}
