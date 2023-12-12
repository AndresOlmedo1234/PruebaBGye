using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication22.Models
{
    public partial class Usuario
    {
        public int UsuarioId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string UsuarioNombre { get; set; }
        public string Contraseña { get; set; }
        public int? PlanId { get; set; }

        public virtual Plane Plan { get; set; }
    }
}
