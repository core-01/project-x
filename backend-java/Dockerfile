# Use official OpenJDK image
FROM eclipse-temurin:17-jdk-jammy

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper and project files
COPY mvnw .
COPY .mvn/ .mvn/
COPY pom.xml .
COPY src/ ./src/

# Make mvnw executable (Linux container)
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Expose port Spring Boot runs on
EXPOSE 8080

# Start the application
CMD ["java", "-jar", "target/tower-management-0.0.1-SNAPSHOT.jar"]
