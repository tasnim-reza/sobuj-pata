import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'video-post',
  templateUrl: './video-post.component.html',
  styleUrls: [
    './video-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoPostComponent {
  post = {
    title: 'About name',
    shortDesc: 'this is bascilly about your namming!!',
    link: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oUAMW2TvfQE" frameborder="0" allowfullscreen></iframe>',
    previewLink: undefined,
    tags: 't1, t2'
  }

  constructor(private sanitizer: DomSanitizer) {
    this.post.previewLink = this.sanitizer.bypassSecurityTrustHtml(this.post.link);
  }
}
