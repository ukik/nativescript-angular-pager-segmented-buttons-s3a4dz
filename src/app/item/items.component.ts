import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadEventData } from '@nativescript/core';
import { BehaviorSubject, sampleTime, startWith } from 'rxjs';
import { Pager } from '@nativescript-community/ui-pager';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit, OnDestroy {
  midfielders: Array<Item>;
  fowards: Array<Item>;
  defenders: Array<Item>;
  goalkeepers: Array<Item>;

  private pager: Pager;
  private _scrollListener;
  private _currentIndex = new BehaviorSubject(1);
  currentIndex$ = this._currentIndex.pipe(sampleTime(1000 / 60), startWith(1));

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.goalkeepers = this.itemService.getByRole('Goalkeeper');
    this.fowards = this.itemService.getByRole('Forward');
    this.midfielders = this.itemService.getByRole('Midfielder');
    this.defenders = this.itemService.getByRole('Defender');
  }

  ngOnDestroy(): void {
    this._scrollListener?.off();
  }

  onPagerLoaded(event: LoadEventData) {
    this.pager = event.object as Pager;

    this._scrollListener = this.pager.on('scroll', (args) => {
      this._currentIndex.next(args['currentPosition']);
    });
  }

  onSelectedIndexChanged(index: number) {
    this.pager.selectedIndex = index;
  }
}
