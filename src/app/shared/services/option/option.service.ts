import { Injectable } from '@angular/core';
import { Option } from '../../classes/option';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private static OPTION_URL = environment.baseUrl + 'options';

  constructor(
    private http: HttpClient,
  ) { }

  getAllOptions(): Observable<Option[]> {
    return this.http.get<Option[]>(`${OptionService.OPTION_URL}`);
  }
  getOptionById(id: number): Observable<Option> {
    return this.http.get<Option>(`${OptionService.OPTION_URL}/${id}`);
  }
  postOptionByid(option: Option): Observable<Option> {
    return this.http.post<Option>(`${OptionService.OPTION_URL}`, option);
  }
  putOptionByid(option: Option): Observable<Option> {
    return this.http.put<Option>(`${OptionService.OPTION_URL}/${option.carOptionId}`, Option);
  }
  deleteOptionByid(option: Option): Observable<void> {
    return this.http.delete<void>(`${OptionService.OPTION_URL}/${option.carOptionId}`);
  }
}
