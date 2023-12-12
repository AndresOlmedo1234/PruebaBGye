using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication22.Models
{
    public partial class Plane
    {
        public Plane()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int PlanId { get; set; }
        public string TipoDePlan { get; set; }
        public string Detalles { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
