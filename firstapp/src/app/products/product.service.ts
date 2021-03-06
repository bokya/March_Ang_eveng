import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }
}
