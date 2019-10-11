import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import gql from "graphql-tag";

import { HackersNews, Query, topStories } from "../types";

@Component({
  selector: "app-newslist",
  templateUrl: "./newslist.component.html",
  styleUrls: ["./newslist.component.css"]
})
export class NewslistComponent implements OnInit {
  news: HackersNews[];
  constructor(private apollo: Apollo) {}

  stripURL(url) {
    return new URL(url).host;
  }

  timeAgo(time) {
    let nowHour = new Date().getHours();
    let postTime = new Date(time);
    let postHour = postTime.getHours();
    let extraTime = postTime.getMinutes();

    let final = nowHour - postHour + (extraTime ? 1 : 0);
    return final;
  }

  ngOnInit() {
    this.apollo
      .watchQuery<Query>({
        query: gql`
          query hn {
            hn {
              topStories {
                id
                title
                text
                time
                score
                url
                by {
                  id
                  about
                }
                kids {
                  id
                }
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.hn))
      .subscribe(<topStories>(result) => {
        this.news = result.topStories;
        console.log(result);
      });
  }
}
