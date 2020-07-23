import { Injectable } from '@angular/core';
import { User } from '../../classes/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static USER_URL = environment.baseUrl + 'users';

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${UserService.USER_URL}`);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${UserService.USER_URL}/${id}`);
  }
  postUser(user: User): Observable<User>{
    return this.http.post<User>(`${UserService.USER_URL}/sign-up`, user);
  }
  putUserByid(user: User): Observable<User>{
    return this.http.put<User>(`${UserService.USER_URL}/${user.userId}`, user);
  }
  deleteUserByid(user: User): Observable<void>{
    return this.http.delete<void>(`${UserService.USER_URL}/${user.userId}`);
  }
}
