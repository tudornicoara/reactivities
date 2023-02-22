using Reactivities.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to container
builder.Services.AddControllers(opt =>
{
    var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
    opt.Filters.Add(new AuthorizeFilter(policy));
});

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

// Configure the HTTP request pipeline

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
            
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Reactivities"));
}
else
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapHub<ChatHub>("/chat");

using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;

try
{
 var context = services.GetRequiredService<DataContext>();
 var userManager = services.GetRequiredService<UserManager<AppUser>>();
 await context.Database.MigrateAsync();
 await Seed.SeedData(context, userManager);
}
catch (Exception e)
{
 var logger = services.GetRequiredService<ILogger<Program>>();
 logger.LogError(e, "An error occured during migration");
}

await app.RunAsync();
