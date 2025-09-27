import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';

import { forkJoin, of } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UbigeoService } from '../../../services/ubigeo.service';
import { Ubigeo } from '../../../model/ubigeo';

export interface SucursalFormData {
  idEmpresa?: number;
  idUbigeo?: number;
  numDoc: string;
  razonSociel: string;
  nombreComercial: string;
  telefono?: string;
  correo?: string;
  igv?: number;
  sitioWeb?: string;
  direccion?: string;
  fileLogo?: string;
  fileCertificado?: string;
  usuarioSol?: string;
  claveSol?: string;
  logoFile?: File | null;
  certificadoFile?: File | null;
}

@Component({
  selector: 'app-crud-tienda', // Cambia el selector para reflejar que es una vista de tienda
  imports: [MaterialModule, CommonModule],
  templateUrl: './crud-tienda.html',
  styles: `
  .logo-preview-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .logo-preview-container img {
    max-height: 120px; 
    max-width: 120px;
    object-fit: contain;
    border: 1px solid #ddd;
    padding: 5px;
    border-radius: 4px;
  }
  
  .logo-upload-card {
    padding: 10px;
    text-align: center;
  }
  `
})
export class CrudTiendaComponent {
  form: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
  selectedLogoFile: File | null = null;
  selectedCertFile: File | null = null;
  isLoading = false;
  isEditMode = false;

  // Location data arrays
  departamentos: Ubigeo[] = [];
  provincias: Ubigeo[] = [];
  distritos: Ubigeo[] = [];

  sucursalesTienda = ['Principal', 'Sucursal 1', 'Sucursal 2', 'Sucursal 3'];
  tiposDoc = [];

  ubigeoService = inject(UbigeoService);
  snackBar = inject(MatSnackBar);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      idTienda: [null],
      sucursalTienda: [this.sucursalesTienda[0], Validators.required],
      nombreComercial: ['', Validators.required],
      razonSociel: ['', Validators.required],
      tipoidentidad: [null, Validators.required],
      numDoc: ['', [Validators.required, Validators.minLength(8)]],
      igv: [18, [Validators.min(0), Validators.max(100)]],
      direccion: ['', Validators.required],
      telefono: [''],
      correo: ['', Validators.email],
      usuarioSol: [''],
      claveSol: [''],
      iddepartamento: [''],
      idprovincia: [''],
      iddistrito: [''],
      idUbigeo: [null],
      sitioWeb: [''],
    });

    // Determina si es modo edición
    this.isEditMode = false; // Cambiar según la lógica de la vista
  }

  ngOnInit(): void {
    // Cargar datos iniciales
    // this.ubigeoService.findAllDepartments().subscribe(data => {
    //   this.departamentos = data;
    //   if (this.departamentos.length > 0 && this.departamentos[this.departamentos.length - 1].denominacion === '') {
    //     this.departamentos.pop();
    //   }
    // });
  }

  private patchFormWithData(data:any): void {
    this.form.patchValue({
      idEmpresa: data.idEmpresa,
      nombreComercial: data.nombreComercial,
      razonSociel: data.razonSociel,
      numDoc: data.numDoc,
      tipoidentidad: data.tipoidentidad || (this.tiposDoc.length > 0 ? this.tiposDoc[0] : null),
      igv: data.igv,
      direccion: data.direccion,
      telefono: data.telefono,
      correo: data.correo,
      usuarioSol: data.usuarioSol,
      claveSol: data.claveSol,
      idUbigeo: data.idUbigeo,
      sitioWeb: data.sitioWeb
    });

    if (data.fileLogo) {
      this.logoPreview = data.fileLogo;
    }
    if (data.fileCertificado) {
      this.certificateFileName = data.fileCertificado.split('/').pop() || 'certificate.pem';
    }


    // if (data.idUbigeo) {
    //   this.ubigeoService.findById(data.idUbigeo).subscribe({
    //     next: (ubigeo) => {
    //       if (ubigeo) {
    //         this.form.patchValue({
    //           iddepartamento: ubigeo.ubidpto,
    //           idprovincia: ubigeo.ubiprovincia,
    //           iddistrito: ubigeo.idUbigeo
    //         });
    //         this.obtenerProvincias();
    //       }
    //     }
    //   });
    // }
  }

  obtenerProvincias() {
    // const departamento = this.form.value['iddepartamento'];
    // if (departamento) {
    //   this.ubigeoService.findProvinciasByDepartments(departamento)
    //     .subscribe(data => {
    //       this.provincias = data;

    //       if (this.isEditMode && this.form.get('idprovincia')?.value) {
    //         this.obtenerDistritos();
    //       }
    //     });
    // } else {
    //   this.provincias = [];
    //   this.distritos = [];
    // }
  }

  obtenerDistritos() {
    // const departamento = this.form.value['iddepartamento'];
    // const provincia = this.form.value['idprovincia'];
    // if (departamento && provincia) {
    //   this.ubigeoService.findAllDistritosByProvinciaAndDepartment(departamento, provincia)
    //     .subscribe(data => {
    //       this.distritos = data;
    //     });
    // } else {
    //   this.distritos = [];
    // }
  }

  hidePassword = true;
  certificateFileName: string | null = null;

  onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedLogoFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(this.selectedLogoFile);
    } else {
      this.selectedLogoFile = null;
      this.logoPreview = null;
    }
  }

  onCertificateSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedCertFile = input.files[0];
      this.certificateFileName = input.files[0].name;
    } else {
      this.selectedCertFile = null;
      this.certificateFileName = null;
    }
  }

  lookupRUC(): void {
    // const ruc = this.form.get('numDoc')?.value;
    // if (ruc && ruc.length === 11) {
    //   this.isLoading = true;
    //   this.empresaService.findEmpresa(ruc).pipe(
    //     finalize(() => this.isLoading = false)
    //   ).subscribe({
    //     next: (data) => {
    //       if (data) {
    //         this.form.patchValue({
    //           razonSociel: data.razonSocial,
    //           nombreComercial: data.nombreComercial || data.razonSocial,
    //           direccion: data.direccion || '',
    //              }  )     }}

       
    //   });
    // }
  }

  onSave(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const formValue = this.form.value;

    // Lógica para guardar la tienda
    console.log('Datos de la tienda:', formValue);
    this.isLoading = false;
  }

  onCancel(): void {
    // Lógica para cancelar (por ejemplo, navegar a otra vista)
    console.log('Edición cancelada');
  }
}
  // this.isLoading = true;
  // const formValue = this.form.value;
  
  // // Crear las tareas de subida de archivos
  // const logoTask = this.selectedLogoFile
  //   ? this.empresaService.uploadFile(this.selectedLogoFile).pipe(
  //       catchError(error => {
  //         console.error('Error uploading logo', error);
  //         this.snackBar.open('Error al subir el logo', 'Cerrar', { duration: 3000 });
  //         return of(null);
  //       })
  //     )
  //   : of(typeof this.logoPreview === 'string' ? this.logoPreview : null); 
  // const certTask = this.selectedCertFile
  //   ? this.empresaService.uploadFile(this.selectedCertFile).pipe(
  //       catchError(error => {
  //         console.error('Error uploading certificate', error);
  //         this.snackBar.open('Error al subir el certificado', 'Cerrar', { duration: 3000 });
  //         return of(null);
  //       })
  //     )
  //   : of(this.certificateFileName || null); 

  // forkJoin([logoTask, certTask]).pipe(
  //   switchMap(([logoUrl, certUrl]) => {
  //     const empresaData: Empresa.Req = {
  //       idEmpresa: formValue.idEmpresa,
  //       tipoidentidad: formValue.tipoidentidad,
  //       idUbigeo: formValue.iddistrito, 
  //       numDoc: formValue.numDoc,
  //       razonSociel: formValue.razonSociel,
  //       nombreComercial: formValue.nombreComercial,
  //       telefono: formValue.telefono,
  //       correo: formValue.correo,
  //       igv: formValue.igv,
  //       sitioWeb: formValue.sitioWeb,
  //       direccion: formValue.direccion,
  //       usuarioSol: formValue.usuarioSol,
  //       claveSol: formValue.claveSol,
  //       fileLogo: typeof logoUrl === 'string' ? logoUrl : (this.isEditMode ? this.data?.fileLogo : null),
  //       fileCertificado: certUrl || (this.isEditMode ? this.data?.fileCertificado : null)
  //     };

  //     console.log('Datos a enviar:', empresaData);
  //     if (this.isEditMode && empresaData.idEmpresa) {
  //       return this.empresaService.update(empresaData.idEmpresa, empresaData);
  //     } else {
  //       return this.empresaService.save(empresaData);
  //     }
  //   }),
  //   finalize(() => this.isLoading = false)
  // ).subscribe({
  //   next: (result) => {
  //     console.log('Empresa guardada exitosamente:', result);
  //     this.snackBar.open(
  //       this.isEditMode ? 'Empresa actualizada con éxito' : 'Empresa creada con éxito',
  //       'Cerrar',
  //       { duration: 3000 }
  //     );
  //     this.dialogRef.close(true);
  //   },
  //   error: (error) => {
  //     console.error('Error saving empresa:', error);
  //     this.snackBar.open(
  //       'Error al guardar la empresa. Intente nuevamente.',
  //       'Cerrar',
  //       {
  //         duration: 5000,
  //         panelClass: ['error-snackbar']
  //       }
  //     );
  //   }
  // });


