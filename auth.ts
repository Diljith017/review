import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Auth {

    getIsloggedin()<boolean>{
        return this.localstorage('token')
    }
}

