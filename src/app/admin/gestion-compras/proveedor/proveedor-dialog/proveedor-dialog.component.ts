import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../material/material.module';
import { Proveedor } from '../../../../model/proveedor';

@Component({
  selector: 'app-proveedor-dialog',
  imports: [MaterialModule],
  templateUrl: './proveedor-dialog.component.html',
  styles: ``
})
export class ProveedorDialogComponent {
accion: string;
  proveedorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private proveedorService:ProveedorService,
    public dialogRef: MatDialogRef<ProveedorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.accion = data.proveedor ? 'Editar' : 'Crear';
    console.log(data);
    
    this.proveedorForm = this.fb.group({
      nombre: [ data.proveedor!=null ? data.proveedor.empresa?.nombreComercial:"", Validators.required],
      documento: [data.proveedor!=null ? data.proveedor.empresa?.numDoc : '', Validators.required],
      celular: [data.proveedor!=null ? data.proveedor.empresa?.telefono : '', Validators.required],
      correo: [data.proveedor!=null ? data.proveedor.empresa?.correo : '', Validators.required],
      direccion: [data.proveedor!=null ? data.proveedor.empresa?.direccion : '', Validators.required],
      
    });
  }
  ngOnInit(): void {

  }

  onSubmit(): void {
    this.proveedorForm.markAllAsTouched();
    if (!this.proveedorForm.valid) return;
    // const proveedor:Proveedor = {
    //   idProveedor: this.data.proveedor.idProveedor,
//       empresa: {
//         correo:this.proveedorForm.get('correo')?.value,
// nombreComercial:this.proveedorForm.get('nombre').value,
// numDoc:this.proveedorForm.get('documento').value,
// telefono:this.proveedorForm.get('celular').value,
// direccion:this.proveedorForm.get('direccion').value,
      }
    };
    // if (proveedor.idProveedor) {
    //   proveedor.empresa.idEmpresa=this.data.proveedor.empresa.idEmpresa,
    //   this.proveedorService
    //     .updateReq(
    //       this.data.page,
    //       this.data.size,
    //       proveedor.idProveedor,
    //       proveedor
    //     )
    //     .subscribe(() => {
    //       this.dialogRef.close();
    //     });
    // } else {
    //   this.proveedorService
    //     .saveReq(this.data.size, proveedor)
    //     .subscribe(() => {
    //       this.dialogRef.close();
    //     });
    // }
  // }


 
