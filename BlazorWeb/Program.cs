using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace BlazorWeb
{
    public class Program
    {
        private static string scope = @"https://cmatdevb2c.onmicrosoft.com/80978f9b-a2f9-44bf-8ae7-3c5099ff12b2/access_as_user";
        //private static string scope = @"api://335f13f1-d1e5-4dcc-906b-29490177bd46/access_as_user";
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");
            
            builder.Services.AddScoped<CustomAuthorizationMessageHandler>();

            builder.Services.AddHttpClient("ServerAPI", 
                client => client.BaseAddress = new Uri("http://localhost:8080"))
                .AddHttpMessageHandler<CustomAuthorizationMessageHandler>();

            builder.Services.AddScoped(sp => sp.GetRequiredService<IHttpClientFactory>()
                .CreateClient("ServerAPI"));
            
            builder.Services.AddMsalAuthentication(options =>
            {
                builder.Configuration.Bind("AzureAdB2C", options.ProviderOptions.Authentication);
                options.ProviderOptions.DefaultAccessTokenScopes.Add(scope);
            });

            await builder.Build().RunAsync();
        }
    }
}
