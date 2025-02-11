using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace p15_Transaction.Models
{
    public partial class p15_epackmartContext : DbContext
    {
        public p15_epackmartContext()
        {
        }

        public p15_epackmartContext(DbContextOptions<p15_epackmartContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Carts { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Company> Companies { get; set; } = null!;
        public virtual DbSet<CompanyProduct> CompanyProducts { get; set; } = null!;
        public virtual DbSet<OrderItem> OrderItems { get; set; } = null!;
        public virtual DbSet<POrder> POrders { get; set; } = null!;
        public virtual DbSet<Payment> Payments { get; set; } = null!;
        public virtual DbSet<PaymentMethod> PaymentMethods { get; set; } = null!;
        public virtual DbSet<Product> Products { get; set; } = null!;
        public virtual DbSet<Review> Reviews { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<State> States { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=Vishal;database=p15_epackmart", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.34-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.HasIndex(e => e.CompProdId, "comp_prod_id");

                entity.HasIndex(e => e.UserId, "user_id");

                entity.Property(e => e.CartId).HasColumnName("cart_id");

                entity.Property(e => e.CartStatus).HasColumnName("cart_status");

                entity.Property(e => e.CompProdId).HasColumnName("comp_prod_id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.CompProd)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.CompProdId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cart_ibfk_2");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cart_ibfk_1");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PRIMARY");

                entity.ToTable("category");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.CatName)
                    .HasMaxLength(20)
                    .HasColumnName("cat_name");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.HasIndex(e => e.StateId, "city_ibfk_1");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.CityName)
                    .HasMaxLength(50)
                    .HasColumnName("city_name");

                entity.Property(e => e.StateId).HasColumnName("state_id");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Cities)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("city_ibfk_1");
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("company");

                entity.HasIndex(e => e.UserId, "user_id");

                entity.Property(e => e.CompanyId).HasColumnName("company_id");

                entity.Property(e => e.GstNo)
                    .HasMaxLength(20)
                    .HasColumnName("gst_no");

                entity.Property(e => e.MsmeCertNo)
                    .HasMaxLength(20)
                    .HasColumnName("msme_cert_no");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Companies)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("company_ibfk_1");
            });

            modelBuilder.Entity<CompanyProduct>(entity =>
            {
                entity.HasKey(e => e.CompProdId)
                    .HasName("PRIMARY");

                entity.ToTable("company_product");

                entity.HasIndex(e => e.CompanyId, "company_id");

                entity.HasIndex(e => e.ProductId, "product_id");

                entity.Property(e => e.CompProdId).HasColumnName("comp_prod_id");

                entity.Property(e => e.BoxCapacity).HasColumnName("box_capacity");

                entity.Property(e => e.ClosureType)
                    .HasMaxLength(30)
                    .HasColumnName("closure_type");

                entity.Property(e => e.CompanyId).HasColumnName("company_id");

                entity.Property(e => e.MaterialThickness).HasColumnName("material_thickness");

                entity.Property(e => e.MaterialType)
                    .HasMaxLength(30)
                    .HasColumnName("material_type");

                entity.Property(e => e.ProdColor)
                    .HasMaxLength(30)
                    .HasColumnName("prod_color");

                entity.Property(e => e.ProdDescription)
                    .HasMaxLength(255)
                    .HasColumnName("prod_description");

                entity.Property(e => e.ProdDesignType)
                    .HasMaxLength(30)
                    .HasColumnName("prod_design_type");

                entity.Property(e => e.ProdImage)
                    .HasMaxLength(255)
                    .HasColumnName("prod_image");

                entity.Property(e => e.ProdPrice)
                    .HasPrecision(10, 2)
                    .HasColumnName("prod_price");

                entity.Property(e => e.ProdShape)
                    .HasMaxLength(30)
                    .HasColumnName("prod_shape");

                entity.Property(e => e.ProdSize)
                    .HasMaxLength(30)
                    .HasColumnName("prod_size");

                entity.Property(e => e.ProdWeight)
                    .HasColumnType("float(6,2)")
                    .HasColumnName("prod_weight");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Stock).HasColumnName("stock");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CompanyProducts)
                    .HasForeignKey(d => d.CompanyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("company_id");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CompanyProducts)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("company_product_ibfk_1");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.ToTable("order_items");

                entity.HasIndex(e => e.CartId, "cart_id");

                entity.HasIndex(e => e.OrderId, "order_id");

                entity.Property(e => e.OrderItemId).HasColumnName("order_item_id");

                entity.Property(e => e.CartId).HasColumnName("cart_id");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.Price)
                    .HasPrecision(10, 2)
                    .HasColumnName("price");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_items_ibfk_2");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_items_ibfk_1");
            });

            modelBuilder.Entity<POrder>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PRIMARY");

                entity.ToTable("p_order");

                entity.HasIndex(e => e.UserId, "user_id");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.OrderDate)
                    .HasColumnType("timestamp")
                    .HasColumnName("order_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.OrderStatus).HasColumnName("order_status");

                entity.Property(e => e.TotalPrice)
                    .HasPrecision(10, 2)
                    .HasColumnName("total_price");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.POrders)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("p_order_ibfk_1");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasKey(e => e.PayId)
                    .HasName("PRIMARY");

                entity.ToTable("payment");

                entity.HasIndex(e => e.OrderId, "order_id");

                entity.HasIndex(e => e.PayMethodId, "pay_method_id");

                entity.Property(e => e.PayId).HasColumnName("pay_id");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.PayDate)
                    .HasColumnType("timestamp")
                    .HasColumnName("pay_date");

                entity.Property(e => e.PayMethodId).HasColumnName("pay_method_id");

                entity.Property(e => e.PayStatus).HasColumnName("pay_status");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("payment_ibfk_2");

                entity.HasOne(d => d.PayMethod)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.PayMethodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("payment_ibfk_1");
            });

            modelBuilder.Entity<PaymentMethod>(entity =>
            {
                entity.HasKey(e => e.PayMethodId)
                    .HasName("PRIMARY");

                entity.ToTable("payment_method");

                entity.Property(e => e.PayMethodId).HasColumnName("pay_method_id");

                entity.Property(e => e.PayMethodType)
                    .HasMaxLength(25)
                    .HasColumnName("pay_method_type");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("product");

                entity.HasIndex(e => e.CatId, "cat_id");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(30)
                    .HasColumnName("product_name");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("product_ibfk_1");
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.ToTable("reviews");

                entity.HasIndex(e => e.CompProdId, "comp_prod_id");

                entity.HasIndex(e => e.UserId, "user_id");

                entity.Property(e => e.ReviewId).HasColumnName("review_id");

                entity.Property(e => e.CompProdId).HasColumnName("comp_prod_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.ReviewDesc)
                    .HasColumnType("text")
                    .HasColumnName("review_desc");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.CompProd)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.CompProdId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("reviews_ibfk_2");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("reviews_ibfk_1");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleType)
                    .HasMaxLength(20)
                    .HasColumnName("role_type");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("state");

                entity.Property(e => e.StateId).HasColumnName("state_id");

                entity.Property(e => e.StateName)
                    .HasMaxLength(20)
                    .HasColumnName("state_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.Email, "email")
                    .IsUnique();

                entity.HasIndex(e => e.Pancard, "pancard")
                    .IsUnique();

                entity.HasIndex(e => e.CityId, "user_ibfk_1");

                entity.HasIndex(e => e.RoleId, "user_ibfk_2");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .HasColumnName("address");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Pancard)
                    .HasMaxLength(20)
                    .HasColumnName("pancard");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("user_ibfk_1");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("user_ibfk_2");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
