import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() {}

  ngOnInit() {
    // @ts-ignore
    jwplayer('jwplayerid').setup({
      // autostart: this.autoPlay,
      autostart: false,
      controls: true,
      file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      width: 400,
      stretching: 'uniform',
      aspectratio: '16:9',
      sdkplatform: 'true',
    });
  }

}
