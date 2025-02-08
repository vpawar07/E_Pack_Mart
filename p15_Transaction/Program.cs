
namespace p15_Transaction
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            //builder.Services.AddDbContext<p15Transaction>();
            builder.Services.AddControllers().
                AddJsonOptions(op =>
                {
                    //op.JsonSerializerOptions.Converters.Add(new TimeOnlyJsonConverter());
                    //op.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
                    op.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
                    //op.JsonSerializerOptions.WriteIndented = true;
                });

            //builder.Services.AddCors(policybuilder => policybuilder.AddDefaultPolicy(policy =>
            //policy.WithOrigins("*").AllowAnyHeader().AllowAnyHeader()));

            var app = builder.Build();

            app.UseCors(builder =>
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
