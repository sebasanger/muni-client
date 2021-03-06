import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class ImportacionService {
  constructor(private http: HttpClient) {}

  importarLiquidaciones(conceptos: File, maestro: File) {
    const formData = new FormData();
    formData.append('conceptos', conceptos);
    formData.append('maestro', maestro);
    return this.http.post<any>(
      `${base_url}importacion/uploadLiquidaciones`,
      formData
    );
  }
}
