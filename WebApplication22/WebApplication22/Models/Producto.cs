using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication22.Models
{
    public partial class Producto
    {
        public int ProductoId { get; set; }
        public string DetalleProducto { get; set; }
        public bool? Estado { get; set; }
        public decimal? Precio { get; set; }
    }
}
