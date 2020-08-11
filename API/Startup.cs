using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Logging;
using Microsoft.Net.Http.Headers;
using Microsoft.IdentityModel.Tokens;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddMicrosoftWebApi(options =>
                    {
                        options.MetadataAddress= Configuration["MetadataAddress"];
                        options.Audience = Configuration["TokenAudience"];
                        options.TokenValidationParameters = new TokenValidationParameters 
                        {
                            ValidateAudience = true, 
                            ValidateIssuer = false 
                        };
                        Configuration.Bind("AzureAdB2C", options);

                        options.TokenValidationParameters.NameClaimType = "name";
                    },
                    options => { Configuration.Bind("AzureAdB2C", options); });

            services.AddControllers();           
            services.AddAuthorization(options =>
            {
                options.AddPolicy("AccessAsUser",
                    policy => policy.Requirements.Add(new ScopesRequirement("access_as_user")));
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                IdentityModelEventSource.ShowPII = true;
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors(policy => 
                policy.WithOrigins("http://localhost:5000", "https://localhost:5001")
                .AllowAnyMethod()
                .WithHeaders(HeaderNames.ContentType, HeaderNames.Authorization)
                .AllowCredentials());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
