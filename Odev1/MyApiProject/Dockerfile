FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

RUN apt-get update && apt-get install -y curl

COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "MyApiProject.dll"]



