package fr.sncf.d2d.serversideapp.common.web;

import java.io.OutputStreamWriter;
import java.util.Locale;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.github.mustachejava.DefaultMustacheFactory;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebMvc
@RequiredArgsConstructor
public class WebConfiguration implements WebMvcConfigurer {

    private final MustacheViewResolver mustacheViewResolver;
    private final UserContextInterceptor userContextInterceptor;
    private final CsrfTokenInterceptor csrfTokenInterceptor;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/public/");
    }

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) { 
        registry.viewResolver(mustacheViewResolver());
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(this.csrfTokenInterceptor);
        registry.addInterceptor(this.userContextInterceptor);
    }

    @Bean
    public ViewResolver mustacheViewResolver(){
        return this.mustacheViewResolver;
    }
}
