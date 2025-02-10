using Steeltoe.Discovery.Client;

namespace p15_Transaction
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // JSON Serialization Options
            builder.Services.AddControllers()
                .AddJsonOptions(op =>
                {
                    op.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
                });

            // Enable CORS
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
            });

            // Add Steeltoe Discovery Client (Eureka)
            builder.Services.AddDiscoveryClient(builder.Configuration);

            var app = builder.Build();

            // Use CORS
            app.UseCors();

            // Use Steeltoe Discovery Client Middleware
            app.UseDiscoveryClient();

            // Enable Swagger in Development mode
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Uncomment if you need HTTPS
            // app.UseHttpsRedirection();

            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
