import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export interface AccessInfo {
  accessToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  singIn(data) {
    return this.http.post(`${environment.apiUrl}/user/singin`, data)
  }

  singUp(data) {
    return this.http.post(`${environment.apiUrl}/user/singup`, data)
  }

  test(data) {
    return this.http.post(`${environment.apiUrl}/user/test`, data)
  }



  // loginByPhone(data) {
  //   return this.http.post<AccessInfo>(environment.apiUrl + '/auth/phone/local', data)
  // }

  // verify(data) {
  //   return this.http.post<AccessInfo>(environment.apiUrl + '/api/users/verify', data)
  // }

  // getAllCustomers() {
  //   return this.http.get(environment.apiUrl + '/api/users/customers')
  // }

  // getEmployes() {
  //   return this.http.get(environment.apiUrl + '/api/users/employes')
  // }

  // getPartner() {
  //   return this.http.get(environment.apiUrl + '/api/users/partners')
  // }

  // getOneCustomer(id) {
  //   return this.http.get(environment.apiUrl + `/api/users/${id}`)
  // }

  // getCustomerById(id) {
  //   return this.http.get(environment.apiUrl + `/api/users/customerInfos/${id}`)
  // }

  // getAllUsers() {
  //   return this.http.get(environment.apiUrl + '/api/users')
  // }

  

  // getMyInfos() {
  //   return this.http.get(environment.apiUrl + '/api/users/myinfos/me')
  // }

  // getRegistrants(data) {
  //   return this.http.post(environment.apiUrl + '/api/users/registrants', data)
  // }

  // resetPassword(tokenEmail, newpassword) {
  //   return this.http.get(environment.apiUrl + `/api/users/verifyToken/${tokenEmail}/${newpassword}`)
  // }

  // update(userData, id) {
  //   return this.http.post(environment.apiUrl + `/api/users/updateaccount/${id}`, userData);
  // }

  // update(userData, id) {
  //   return this.http.put(environment.apiUrl + `/api/users/${id}`, userData);
  // }

  // reset(email, data) {
  //   return this.http.post(environment.apiUrl + `api/users/resetpassword/${email}`, data);
  // }



}
