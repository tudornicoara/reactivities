﻿FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Reactivities/Reactivities.csproj", "Reactivities/"]
RUN dotnet restore "Reactivities/Reactivities.csproj"
COPY . .
WORKDIR "/src/Reactivities"
RUN dotnet build "Reactivities.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Reactivities.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Reactivities.dll"]
