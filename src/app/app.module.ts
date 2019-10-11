import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewslistComponent } from "./newslist/newslist.component";

@NgModule({
  declarations: [AppComponent, NewslistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: "https://www.graphqlhub.com/graphql"
      }),
      cache: new InMemoryCache()
    });
  }
}
