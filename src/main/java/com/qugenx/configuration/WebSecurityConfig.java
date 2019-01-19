package com.qugenx.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by adnenehamdouni on 14/01/2019.
 */
@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{


    @Override
    protected void configure(HttpSecurity http) throws Exception{
        // For example: Use only Http Basic and not form login.
        http.csrf().disable() // Invalid CSRF Token 'null' was found on the request parameter '_csrf' or header 'X-CSRF-TOKEN'
        .authorizeRequests()
                .antMatchers("/")
                .permitAll();

        http.headers().frameOptions().disable(); //H2-Console is not showing in browser
    }
}
