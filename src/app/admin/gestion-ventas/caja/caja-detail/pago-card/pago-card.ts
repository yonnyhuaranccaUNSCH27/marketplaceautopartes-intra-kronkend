import { ChangeDetectorRef, Component, inject, input, signal, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../material/material.module';
@Component({
  selector: 'pago-card',
  imports: [MaterialModule, CommonModule,],
  templateUrl: './pago-card.html',
  styles: `
   
  `,
})
export class PagoCardComponent implements OnChanges {
  // numeroHabitacion = input.required();
  // tipoHabitacion = input.required();
  // ventaItem = input<Venta.Producto | null>();
  // idEmpresa = input.required<number>();
  // tipoComprobanteService = inject(TipocomprobanteService);
  // tipoIdentidadService = inject(TipoidentidadService);
  // carritoService = inject(CarritoService);
  // empresaService = inject(EmpresaService);
  // personaService = inject(PersonaService);
  // clienteService = inject(ClienteService);
  // serieService = inject(SerieService);
  // diaolog = inject(MatDialog);
  // formattersService = inject(FormattersService);
  // formaPagoService = inject(FormaPagoService);
  // codigoMonedaService = inject(CodigoMonedaService);
  // router = inject(Router);
  // comprobantes: TipoComprobante[] = [];
  // series: Serie[] = [];
  // tipoDocumentos: Tipoidentidad[] = [];
  // formaPagos: FormaPago[] = [];
  // codigosMoneda: CodigoMoneda[] = [];
   bookingForm: FormGroup;
  // //para manejar si ya existe un cliente
  // idCliente = signal<number>(null);

  constructor(
    private fb: FormBuilder,
    // private confirmationService: ConfirmationService,
    // private ventaService: VentaService,
    private cdr: ChangeDetectorRef
  ) {
    this.bookingForm = this.fb.group({
      comprobante: [1, Validators.required],
      series: [null, Validators.required],
      correlative: [{ value: null, disabled: true }, Validators.required],
      emissionDate: [new Date(), Validators.required],
      currency: [1, Validators.required],
      docType: [1, [Validators.required]],
      docNumber: [null, [Validators.minLength(8), Validators.maxLength(11)]],
      businessName: [null,],
      address: [null, Validators.required],
      payment: [0, Validators.required],
      paymentMethod: [null, Validators.required],
      vuelto: [{ value: 0, disabled: true }],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges detectado:', changes);
    if (changes['ventaItem']) {
      if (changes['ventaItem'].currentValue) {
        this.updateFormWithVentaItem();
        this.cdr.markForCheck(); // Forzar detección de cambios
      }
    }
  }

  ngOnInit() {
    // this.tipoComprobanteService.findAll().subscribe((data) => {
    //   this.comprobantes = data;
    //   this.bookingForm.get('comprobante').setValue(data[0].idTipoComprobante);
    // });

    // this.formaPagoService.findAll().subscribe((data) => {
    //   this.formaPagos = data;
    //   this.bookingForm.get('paymentMethod').setValue(data[0].idFormaPago);
    // });

    // this.codigoMonedaService.findAll().subscribe((data) => {
    //   this.codigosMoneda = data;
    //   this.bookingForm.get('currency').setValue(data[0].idCodigoMoneda);
    // });

    // this.tipoIdentidadService.findAll().subscribe((data) => {
    //   this.bookingForm.get('docType').setValue(data[0].idTipoidentidad);
    //   this.tipoDocumentos = data;
    // });
    // combineLatest([
    //   this.bookingForm.get('payment').valueChanges,
    //   this.carritoService.total$
    // ]).subscribe(([pago, total]) => {
    //   this.bookingForm.get('vuelto').setValue(pago - Number(total));
    // });
    // this.bookingForm
    //   .get('comprobante')
    //   .valueChanges.subscribe((idComprobante) => {
    //     this.serieService
    //       .findAllByIdTipoComprobante(idComprobante)
    //       .subscribe((data) => {
    //         this.series = data;
    //         this.bookingForm.get('series').reset();
    //         setTimeout(() => {
    //           this.bookingForm.get('series').setValue(data[0]);
    //         });
    //       });
    //   });

    // this.bookingForm.get('series').valueChanges.subscribe((serie) => {
    //   if (serie) {
    //     this.ventaService
    //       .findLastCorrelativobySerie(serie.serie)
    //       .subscribe((data) => {
    //         if (data == null) {
    //           this.bookingForm
    //             .get('correlative')
    //             .setValue(parseInt(serie.correlativo) + 1);
    //         } else {
    //           this.bookingForm.get('correlative').setValue(parseInt(data) + 1);
    //         }
    //       });
    //   }
    // });
  }

  private updateFormWithVentaItem() {
  //   const ventaData = this.ventaItem();
  //   if (!ventaData) return;

  //   console.log('Actualizando formulario con ventaItem:', ventaData);

  //   // Actualizar valores en el formulario basados en ventaItem
  //   this.bookingForm.patchValue({
  //     comprobante: ventaData.idTipoComprobante || this.bookingForm.get('comprobante').value,
  //     emissionDate: ventaData.femision ? new Date(ventaData.femision) : new Date(),
  //     currency: ventaData.idCodigoMoneda || this.bookingForm.get('currency').value,
  //     docType: ventaData.cliente?.persona?.tipoidentidad.idTipoidentidad ||
  //       (ventaData.cliente?.empresa ? 2 : this.bookingForm.get('docType').value),
  //     docNumber: ventaData.cliente?.persona?.perNumdocumento ||
  //       ventaData.cliente?.empresa?.numDoc ||
  //       this.bookingForm.get('docNumber').value,
  //     businessName: this.getBusinessName(ventaData),
  //     address: ventaData.cliente?.persona?.perDireccion ||
  //       ventaData.cliente?.empresa?.direccion ||
  //       this.bookingForm.get('address').value,
  //     payment: ventaData.pago || this.bookingForm.get('payment').value,
  //     paymentMethod: ventaData.idFormaPago || this.bookingForm.get('paymentMethod').value
  //   });

  //   // Actualizar idCliente si existe
  //   if (ventaData.cliente?.idCliente) {
  //     this.idCliente.set(ventaData.cliente.idCliente);
  //   }

  //   // Si hay serie en ventaData, buscar la serie correspondiente
  //   if (ventaData.serie && this.series.length > 0) {
  //     const matchingSerie = this.series.find(s => s.serie === ventaData.serie);
  //     if (matchingSerie) {
  //       this.bookingForm.get('series').setValue(matchingSerie);
  //     }
  //   }

  //   this.cdr.detectChanges(); // Forzar detección de cambios
  // }

  // private getBusinessName(ventaData: Venta.Producto): string {
  //   if (ventaData.cliente?.persona) {
  //     const { perNombres, apePaterno, apeMaterna } = ventaData.cliente.persona;
  //     if (perNombres && apePaterno) {
  //       return `${perNombres} ${apePaterno} ${apeMaterna || ''}`.trim();
  //     }
  //   } else if (ventaData.cliente?.empresa?.nombreComercial) {
  //     return ventaData.cliente.empresa.nombreComercial;
  //   }

  //   return this.bookingForm.get('businessName').value || '';
  // }
  }
  async search() {
  //   const docType = this.bookingForm.get('docType').value;
  //   const docNumber = this.bookingForm.get('docNumber').value;

  //   const isValidLength =
  //     docType === 1 ? docNumber?.length === 8 : docNumber?.length === 11;

  //   if (!isValidLength) {
  //     this.bookingForm.get('docNumber').setErrors({
  //       [docType === 1 ? 'minlength' : 'maxlength']: true,
  //     });
  //     return;
  //   }

  //   docType === 1
  //     ? await this.searchCliente(docNumber)
  //     : await this.searchEmpresa(docNumber);
  }

  private async searchCliente(documento: string) {
    // try {
    //   const cliente = await firstValueFrom(
    //     this.clienteService.getClienteByDocumento(documento)
    //   );

    //   if (cliente) {
    //     this.idCliente.set(cliente.idCliente);
    //     console.log(cliente);

    //     const { perNombres, apePaterno, apeMaterna, perDireccion } =
    //       cliente.persona;
    //     this.updateFormWithPersonData(
    //       perNombres,
    //       apePaterno,
    //       apeMaterna,
    //       perDireccion
    //     );
    //     return;
    //   }

    //   const persona = await firstValueFrom(
    //     this.personaService.findPersonaByDni(documento)
    //   );
    //   this.updateFormWithPersonData(
    //     persona.nombres,
    //     persona.apellidoPaterno,
    //     persona.apellidoMaterno
    //   );
    // } catch {
    //   this.confirmationService.notFound(
    //     'No se encontró la persona con el DNI especificado'
    //   );
    // }
  }

  private async searchEmpresa(ruc: string) {
  //   try {
  //     const cliente = await firstValueFrom(
  //       this.clienteService.getClienteByDocumento(ruc)
  //     );

  //     if (cliente) {
  //       this.idCliente.set(cliente.idCliente);
  //       this.updateFormWithCompanyData(
  //         cliente.empresa.nombreComercial,
  //         cliente.empresa.direccion
  //       );
  //       return;
  //     }

  //     const empresa = await firstValueFrom(
  //       this.empresaService.findEmpresa(ruc)
  //     );
  //     this.updateFormWithCompanyData(empresa.razonSocial, empresa.direccion);
  //   } catch {
  //     this.confirmationService.notFound(
  //       'No se encontró la empresa con el RUC especificado'
  //     );
  //   }
  // }

  // private updateFormWithPersonData(
  //   nombres: string,
  //   apePaterno: string,
  //   apeMaterna: string,
  //   direccion?: string
  // ) {
  //   this.bookingForm.patchValue({
  //     businessName: `${nombres} ${apePaterno} ${apeMaterna}`.trim(),
  //     address: direccion || null,
  //   });
  // }

  // private updateFormWithCompanyData(nombre: string, direccion: string) {
  //   this.bookingForm.patchValue({
  //     businessName: nombre,
  //     address: direccion,
  //   });
  }

  private createBaseVenta(){
    // const nombreDividido = this.formattersService.cortarNombres(
    //   this.bookingForm.get('businessName').value
    // );
    // const docType = this.bookingForm.get('docType').value;
    // const formValues = this.bookingForm.getRawValue();
    // if(this.bookingForm.get('businessName').value === null||this.bookingForm.get('businessName').value === "") return {
    //   cliente:null,
    //   serie: formValues.series.serie,
    //   idCodigoMoneda: formValues.currency,
    //   femision: this.formattersService.toLocalDateTimeString(),
    //   idEmpresa: this.idEmpresa(),
    //   idFormaPago: formValues.paymentMethod,
    //   idTipoComprobante: formValues.comprobante,
    //   pago: formValues.payment,
    //   detallesVenta: [],
    // };
    // return {
    //   cliente: {
    //     idCliente: this.idCliente(),
    //     fregistro: this.formattersService.toLocalDateTimeString(),
    //     empresa: docType === 2 ? {
    //       nombreComercial: formValues.businessName,
    //       correo: '',
    //       direccion: formValues.address,
    //       numDoc: formValues.docNumber,
    //       tipoidentidad: {
    //         idTipoidentidad: docType
    //       },
    //       telefono: '',
    //     } : null,
    //     persona: docType === 1 ? {
    //       perNombres: nombreDividido.nombres,
    //       apePaterno: nombreDividido.apePaterno,
    //       apeMaterna: nombreDividido.apeMaterna,
    //       perNumdocumento: formValues.docNumber,
    //       perDireccion: formValues.address,
    //       tipoidentidad: { idTipoidentidad: docType },
    //     } : null,
    //   },
    //   serie: formValues.series.serie,
    //   idCodigoMoneda: formValues.currency,
    //   femision: this.formattersService.toLocalDateTimeString(),
    //   idEmpresa: this.idEmpresa(),
    //   idFormaPago: formValues.paymentMethod,
    //   idTipoComprobante: formValues.comprobante,
    //   pago: formValues.payment,
    //   detallesVenta: [],
    // };
  }

  confirmVenta() {
    // const venta: Venta.DTO = {
    //   ...this.createBaseVenta(),
    //   correlativo: this.bookingForm.get('correlative').value,
    //   estado: 'pagado',
    //   vuelto: this.bookingForm.get('vuelto').value,
    //   //Todo: Cambiar a esto
    //   idEmpresa: 1,
    //   idVenta: this.ventaItem()?.idVenta ?? null
    // } as Venta.DTO;

    // this.ventaService.saveVenta(venta);
    // this.router.navigate(['/admin/hotel/recepcion-caja']);

  }

  postVenta() {
    // const venta: Venta.DTO = {
    //   ...this.createBaseVenta(),
    //   correlativo: null,
    //   estado: 'postventa',
    //   idVenta: this.ventaItem()?.idVenta ?? null
    // } as Venta.DTO;

    // this.ventaService.savePostVenta(venta);

    // this.router.navigate(['/admin/hotel/recepcion-caja']);
  }
  confirmReserva() {
    // const venta: Venta.DTO = {
    //   ...this.createBaseVenta(),
    //   correlativo: null,
    //   estado: 'reservado',
    //   idVenta: this.ventaItem()?.idVenta ?? null
    // } as Venta.DTO;

    // this.ventaService.saveReserva(venta)

    // this.router.navigate(['/admin/hotel/recepcion-caja']);
  }

  //Para los reportes
  openTicket() {
    // this.ventaService.getGeneratePdfTicket(this.ventaItem()?.idVenta).subscribe((data) => {
    //   // Crear un Blob con el tipo MIME correcto para PDF
    //   const file = new Blob([data], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);

    //   // Abrir en nueva pestaña y forzar la visualización del PDF
    //   const pdfWindow = window.open();
    //   if (pdfWindow) {
    //     pdfWindow.location.href = fileURL;
    //     // Opcional: limpiar el objeto URL cuando ya no se necesite
    //     pdfWindow.onload = () => {
    //       URL.revokeObjectURL(fileURL);
    //     };
    //   } else {
    //     // Fallback en caso de que el popup esté bloqueado
    //     alert('El navegador ha bloqueado la apertura de la ventana. Por favor, permita las ventanas emergentes para este sitio.');
    //   }
    // });
  }

  openA4() {
    // this.ventaService.getGeneratePdfA4(this.ventaItem()?.idVenta).subscribe((data) => {
    //   // Crear un Blob con el tipo MIME correcto para PDF
    //   const file = new Blob([data], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);

    //   // Abrir en nueva pestaña y forzar la visualización del PDF
    //   const pdfWindow = window.open();
    //   if (pdfWindow) {
    //     pdfWindow.location.href = fileURL;
    //     // Opcional: limpiar el objeto URL cuando ya no se necesite
    //     pdfWindow.onload = () => {
    //       URL.revokeObjectURL(fileURL);
    //     };
    //   } else {
    //     // Fallback en caso de que el popup esté bloqueado
    //     alert('El navegador ha bloqueado la apertura de la ventana. Por favor, permita las ventanas emergentes para este sitio.');
    //   }
    // });
  }
}