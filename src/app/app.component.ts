import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  bugSplatHyperLink = "https://www.bugsplat.com/";
  bugSplatImgLink = "assets/img/bugsplat.PNG";
  bugSplatDescription = `I spent the last six months interning at BugSplat, the leader in crash reporting technology! 
  I worked closely with a team of developers to update their legacy php interface into a new Angular experience.`;
  bugSplat = new DescriptionBox(this.bugSplatHyperLink, this.bugSplatImgLink, "BugSplat", this.bugSplatDescription);

  intermuralLeagueLink = "https://cugaming.gg/blog/2018/08/25/bufflol-fall-2018-announcement/";
  intermuralLeagueImgLink = "assets/img/buffLoL.PNG";
  intermuralLeagueDescription = `I worked on a team of three to create an intermural league tournament for over 40 players at CU.
  We are making plans to continue this for upcoming seasons, and are really excited for our record signups!`
  intermuralLeagueTitle = "Intermural League of Legends"
  buffLOL = new DescriptionBox(this.intermuralLeagueLink, this.intermuralLeagueImgLink, this.intermuralLeagueTitle, this.intermuralLeagueDescription);

  courseAssistantLink = "https://www.colorado.edu/cs/current-students/courses/course-support";
  courseAssistantImgLink = 'assets/img/ca.jpg';
  courseAssistantDescription = `I had the opportunity to learn critical lessons in teaching and comminication, debugging C++ and Python as well as communication through extensive
  collaboration with professors!`
  courseAssistantTitle = "CU CSCI Course Assistant"
  courseAssistant = new DescriptionBox(this.courseAssistantLink, this.courseAssistantImgLink, this.courseAssistantTitle, this.courseAssistantDescription);

  interestsLink = "https://www.dropbox.com/sh/gxxhctfz5clgkfw/AAB8lgR0mfHjVVPFTHXRl4Gza?dl=0"
  interestsImg = "assets/img/team.jpg"
  interestsDescription = `In my freetime I love cosplaying, playing Varsity video games, watching terrible horror movies and
  playing DnD. If you share any of the same interests, please drop me a Discord message and I'd love to chat!`
  interestsTitle = "My Interests"
  interests = new DescriptionBox(this.interestsLink, this.interestsImg, this.interestsTitle, this.interestsDescription);
}

export class DescriptionBox {
  constructor(public hyperLink: string,
    public imgLink: string,
    public title: string,
    public description: string) {}
}
