import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DataHeaderModel} from '../../shared/models/data-header.model';

@Injectable()
export class DataHeaderService {
  dataHeader: Subject<DataHeaderModel> = new Subject();
  constructor() { }

  setdata(data: DataHeaderModel) {
    this.dataHeader.next(data);
  }

  getData(): Observable<DataHeaderModel> {
    return this.dataHeader;
  }


}
