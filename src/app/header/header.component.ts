import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.scss']
})

export class HeaderComponent {
  @Output() pageEmitter = new EventEmitter<string>()

  onSelect = (page: string) => {
    this.pageEmitter.emit(page)
  }

}
