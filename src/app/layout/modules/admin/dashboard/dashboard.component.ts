import { Component, OnInit } from '@angular/core';
type MessageStatus = 'read' | 'unread' | 'draft' | 'spam';

interface IMessage {
  sender: string;
  date: string;
  text: string;
  status: MessageStatus;
};

interface GroupAnnouncement {
  title: string;
  createdAt: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public messages: IMessage[] = [];
  public groupAnnouncements: GroupAnnouncement[] = [];

  constructor() { }

  ngOnInit() {
    this.getMessages();
    this.getGroupAnnouncements();
  }



  private getMessages() {
    this.messages = [
      {
        sender: 'Alex Jordan',
        date: '15 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'unread'
      },
      {
        sender: 'Sylvain Guiheneuc',
        date: '12 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'read'
      },
      {
        sender: 'Ales Krivec',
        date: '14 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'draft'
      },
      {
        sender: 'Greg Rakozy',
        date: '10 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'spam'
      }
    ];
  }

  private getGroupAnnouncements() {
    this.groupAnnouncements = [
      {
        title: 'BMI 4-Continent Executive MBA Class XIX officially ‘baptized’ into the BMI Family of 750 executives',
        createdAt: '30 mins ago'
      },
      {
        title: 'Finance experts share insights with BMI EMBA participants',
        createdAt: '1 hour ago'
      },
      {
        title: '"Why Profits are not Enough" Session',
        createdAt: '3 hours ago'
      }
    ];
  }

}
