using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

public class CustomAuthorizationMessageHandler : AuthorizationMessageHandler
{
    private static string scope = @"https://cmatdevb2c.onmicrosoft.com/80978f9b-a2f9-44bf-8ae7-3c5099ff12b2/access_as_user";

    public CustomAuthorizationMessageHandler(IAccessTokenProvider provider, 
        NavigationManager navigationManager)
        : base(provider, navigationManager)
    {
        ConfigureHandler(
            authorizedUrls: new[] { "http://localhost:8080" },
            scopes: new[] { scope });
    }
}