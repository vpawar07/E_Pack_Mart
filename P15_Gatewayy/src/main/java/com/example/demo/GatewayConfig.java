package com.example.demo;

import java.util.Arrays;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class GatewayConfig {

    @Bean
    public CorsWebFilter corsWebFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("http://localhost:3015")); // Adjust to match frontend
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        config.setExposedHeaders(Arrays.asList("Authorization"));

        source.registerCorsConfiguration("/**", config);
//        source.registerCorsConfiguration("/", config);


        return new CorsWebFilter(source);
    }

    
    @Bean
    public RouteLocator customRouterLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("p15Authentication", r -> r
                .path("/api/auth/**")  // Routes requests for authentication
                .uri("lb://p15Authentication"))  // Match the exact service name in Eureka

            .route("p15CRUD", r -> r
                .path("/api/crud/**")  // Routes requests for CRUD operations
                .uri("lb://p15CRUD"))  

            .route("p15Transaction", r -> r
                .path("/api/transaction/**")  // Routes requests for transactions
                .uri("lb://p15Transaction"))  

            .build();
    }
//    p15_Transaction
}
