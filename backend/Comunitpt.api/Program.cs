using Comunitpt.api.Modules.Manifest;

var builder = WebApplication.CreateBuilder(args);


builder.Services.RegisterManifestModule();
var app = builder.Build();


app.MapGet("/", () => "Hello World!");

app.MapManifestEndpoints();

app.Run();
