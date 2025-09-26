import { ChangeDetectorRef, Component, inject, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuOption } from './interfaces/menu-option';

import { DOCUMENT } from '@angular/common';
import { ItemMenuOptionComponent } from './components/item-menu-option/item-menu-option.component';
import { Usuario } from '../../model/usuario';

import { LoginService } from '../../services/login.service';
import { MaterialModule } from '../../material/material.module';
import { UsuarioService } from '../../services/usuario.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';




declare var pcoded: any;
declare var feather: any;

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    MaterialModule,
    RouterOutlet,
    ItemMenuOptionComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  isLoading = true;
  usuario?: Usuario;
  isAdmin: boolean = false;
  nombreConRol: string = '';
  totalProductos=signal(0);
  headerProfileImage: string = 'assets/img/user.jpg';

  menuOptions: MenuOption[] = [
    {
      href: "/admin/inventario",
      icono: "In",
      name: "Inventario",
    },
    {
      href: "/admin/transferencia-almacen",
      icono: "TA",
      name: "Transferencia de Almacén",
    },
    {
      href: "/admin/categoria-marca",
      icono: "CM",
      name: "Categoría y Marca",
    },
    {
      href: "/admin/unidad-medida",
      icono: "UM",
      name: "Unidad de Medida",
    },
  ];

  gestionDocumentoOptions: MenuOption[] = [
    {
      href: "/admin/documento/certificado",
      icono: "GC",
      name: "Generar certificado",
    },
    {
      href: "/admin/documento/constancia",
      icono: "GCT",
      name: "Generar constancia",
    }
  ];

  gestionOperacionOptions: MenuOption[] = [
    {
      href: "/admin/operacion/inscripcion",
      icono: "Ic",
      name: "Inscripción",
    },
    {
      href: "/admin/operacion/pago",
      icono: "Pg",
      name: "Pagos",
    },
    {
      href: "/admin/operacion/reserva",
      icono: "Re",
      name: "Reservas",
    },
  ];

  gestionEstudianteOptions: MenuOption[] = [
    {
      href: "/admin/estudiante",
      icono: "Es",
      name: "Estudiantes",
    },
  ];

  gestionPagoOptions: MenuOption[] = [
    {
      href: "/admin/pago",
      icono: "Pp",
      name: "Proceso de pago",
    },
    {
      href: "/admin/descuento",
      icono: "Pd",
      name: "Planes de descuento",
    },
  ];

  gestionCursosOptions: MenuOption[] = [
    {
      href: "/admin/cursos",
      icono: "MC",
      name: "Mis Cursos",
    },
    {
      href: "/admin/categorias",
      icono: "CC",
      name: "Categorías de Cursos",
    },
    {
      href: "/admin/resultados-tareas",
      icono: "RT",
      name: "Mis de Tareas",
    }
  ];

  gestionDocentesOptions: MenuOption[] = [
    {
      href: "/admin/docentes",
      icono: "LD",
      name: "Lista de Docentes",
    },
    {
      href: "/admin/horarios",
      icono: "LD",
      name: "Horarios de Docentes",
    },

  ];

  gestionProductoOptions: MenuOption[] = [
    {
      href: "/admin/productos",
      icono: "LP",
      name: "Lista de Productos",
    },
    {
      href: "/admin/tipoproducto",
      icono: "TP",
      name: "Tipo de Producto",
    },
    {
      href: "/admin/modulos",
      icono: "MD",
      name: "Modulos de Software",
    },

  ];

  gestionProductosOptions: MenuOption[] = [
    {
      href: "/admin/productos",
      icono: "LP",
      name: "Productos",
    },

  ];

  gestionRegistrosOptions: MenuOption[] = [
    {
      href: "/admin/planestudio",
      icono: "Pe",
      name: "Plan de estudios",
    },
  ]

  private usuarioService = inject(UsuarioService);
  // private productoService = inject(ProducgitoService);
  loginService: any;


  constructor(
    private renderer2: Renderer2,
    private cdRef: ChangeDetectorRef,
    // private loginService: LoginService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    const helper = new JwtHelperService();
        const token = sessionStorage.getItem(environment.TOKEN_NAME);
        if (token) {
          this.isLoading = true;
          this.cdRef.detectChanges(); // Forzar detección de cambios inmediatamente

          const username = helper.decodeToken(token).sub;
          //console.log(username);
          this.usuarioService.findByUsername(username).subscribe({
            next: (data: Usuario) => {
              this.usuario = data;

              this.isLoading = false;

              // Verifica si el usuario tiene el rol de administrador
              this.isAdmin = this.usuario?.roles?.some((role: { idRol: number; }) => role.idRol === 1) ?? false;
              const rolDescripcion = this.usuario.roles.length > 0 ? this.usuario.roles[0].descripcion : 'Sin Rol';
              this.nombreConRol = `${this.usuario.usernombres} (${rolDescripcion})`;
              this.cdRef.detectChanges(); // Forzar actualización de la vista
              this.headerProfileImage = data.urlFoto || 'assets/img/user.jpg';

            },

          });
        } else {
          this.isLoading = false;
          this.cdRef.detectChanges();
        }

    this.loadScript('./assets/admin/js/feather.min.js', () => {
      feather.replace();  // Inicializar Feather Icons después de cargar el script
    });


    this.setupSidebarToggle();
  }

  private loadScript(url: string, callback: () => void) {
    const script = this.renderer2.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = callback;
    this.renderer2.appendChild(this._document.body, script);
  }

  private setupSidebarToggle() {
    const toggleButton = this._document.querySelector('.sidebar-toggle');
    const sidebar = this._document.querySelector('.adminx-sidebar');

    if (toggleButton && sidebar) {
      toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }

  logout() {
    this.loginService.logout();
  }
}
