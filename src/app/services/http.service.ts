import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost/services/'

  constructor(private httpCli: HttpClient) { }

  Login(p_nombre: String, p_contraseña: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombre=' + p_nombre + '&p_contraseña=' + p_contraseña;
    return this.httpCli.post(this.url + 'ser_login.php', params, { headers });
  }

  Registro(p_nombre: String, p_contrasena: String, cbx_tipoUsuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombre=' + p_nombre + '&p_contrasena=' + p_contrasena + '&cbx_tipoUsuario=' + cbx_tipoUsuario;
    return this.httpCli.post(this.url + 'ser_registro.php', params, { headers });
  }
  Insertar(p_id_materia: any, p_id_maestro: any, p_dia_semana: any, p_hora_inicio: any, p_hora_fin: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_materia=' + p_id_materia + '&p_id_maestro=' + p_id_maestro + '&p_dia_semana=' + p_dia_semana + '&p_hora_inicio=' + p_hora_inicio + '&p_hora_fin=' + p_hora_fin;
    return this.httpCli.post(this.url + 'ser_AsignarAsuntoAlProfesor.php', params, { headers });
  }
  AsignarMateria(p_id_materia: any, p_id_maestro: any, p_dia_semana: any, p_hora_inicio: any, p_hora_fin: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_materia=' + p_id_materia + '&p_id_maestro=' + p_id_maestro + '&p_dia_semana=' + p_dia_semana + '&p_hora_inicio=' + p_hora_inicio + '&p_hora_fin=' + p_hora_fin;
    return this.httpCli.post(this.url + 'ser_AsignarMateriaAlMaestro.php', params, { headers });
  }

  getHorarios(id: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + id;
    return this.httpCli.post(this.url + 'ser_getHorarios.php', params, { headers });
  }
  materiasImpartir(id: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_maestro=' + id;
    return this.httpCli.post(this.url + 'ser_materiasImpartir.php', params, { headers });
  }
  LovHoras() {
    return this.httpCli.get(this.url + 'ser_LovHoras.php');
  }
  LisMaterias(p_id_maestro: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_maestro=' + p_id_maestro;
    return this.httpCli.post(this.url + 'ser_LisMaterias.php', params, { headers });
  }
  MateriaMaestro(p_id_materia: any, p_id_maestro: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_materia=' + p_id_materia + '&&p_id_maestro=' + p_id_maestro;
    return this.httpCli.post(this.url + 'ser_MateriaMaestro.php', params, { headers });
  }
  viewMateriasIm() {
    return this.httpCli.get(this.url + 'ser_viewMateriasIm.php');
  }
  getHorariosMaestro(id: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_maestro=' + id;
    return this.httpCli.post(this.url + 'ser_getHorariosMaestro.php', params, { headers });
  }
  MateriaAlumno(p_id_materia: any, p_id_alumno: any, p_id_maestro: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_materia=' + p_id_materia + '&&p_id_alumno=' + p_id_alumno + '&&p_id_maestro=' + p_id_maestro;
    return this.httpCli.post(this.url + 'ser_MateriaAlumno.php', params, { headers });
  }
  MostrarMaestros() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpCli.post(this.url + 'ser_mostrar_maestros.php', { headers });
  }
  getIdsMaterias(p_id_alumno: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_alumno=' + p_id_alumno;
    return this.httpCli.post(this.url + 'ser_getIdsMaterias.php', params, { headers });
  }


}


