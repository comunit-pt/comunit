using Comunitpt.api.Modules.Manifest.Controllers;

namespace Comunitpt.api.Modules.Manifest;

public static class ManifestModule
{
    public static IServiceCollection RegisterManifestModule(this IServiceCollection services)
    {
        // services.AddSingleton(new OrderConfig());
        // services.AddScoped<IOrdersRepository, OrdersRepository>();
        // services.AddScoped<ICustomersRepository, CustomersRepository>();
        
        services.AddScoped<ManifestHandler>();
        return services;
    }
 
    public static IEndpointRouteBuilder MapManifestEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGet("/manifest", (ManifestHandler manifest) => manifest.GetManifest());
        return endpoints;
    }
}