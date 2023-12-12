using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WebApplication22.Models
{
    public partial class TestContext : DbContext
    {
        public TestContext()
        {
        }

        public TestContext(DbContextOptions<TestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Plane> Planes { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=HOMERO;Initial Catalog=Test;Integrated Security=True;Trust Server Certificate=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Plane>(entity =>
            {
                entity.HasKey(e => e.PlanId)
                    .HasName("PK__Planes__755C22D7C801A1E6");

                entity.Property(e => e.PlanId)
                    .ValueGeneratedNever()
                    .HasColumnName("PlanID");

                entity.Property(e => e.TipoDePlan).HasMaxLength(50);
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.Property(e => e.ProductoId)
                    .ValueGeneratedNever()
                    .HasColumnName("ProductoID");

                entity.Property(e => e.Precio).HasColumnType("decimal(10, 2)");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.Property(e => e.UsuarioId)
                    .ValueGeneratedNever()
                    .HasColumnName("UsuarioID");

                entity.Property(e => e.Apellido).HasMaxLength(50);

                entity.Property(e => e.Contraseña).HasMaxLength(255);

                entity.Property(e => e.Nombre).HasMaxLength(50);

                entity.Property(e => e.PlanId).HasColumnName("PlanID");

                entity.Property(e => e.UsuarioNombre).HasMaxLength(50);

                entity.HasOne(d => d.Plan)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.PlanId)
                    .HasConstraintName("FK__Usuarios__PlanID__398D8EEE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
