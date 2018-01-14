package com.bve.testspa4;

import com.bve.testspa4.domain.Bank;
import com.bve.testspa4.domain.BankRepository;
import com.bve.testspa4.domain.User;
import com.bve.testspa4.domain.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TestSpa4Application {

	public static void main(String[] args) {
		SpringApplication.run(TestSpa4Application.class, args);
	}

	@Bean
	public CommandLineRunner studentDemo(UserRepository userRepositoryrepository, BankRepository bankRepository) {
		return (args) -> {
			User user1 = new User("user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", "ROLE_USER");
			User user2 = new User("admin", "$2a$10$0MMwY.IQqpsVc1jC8u7IJ.2rT8b0Cd3b3sfIBGV2zfgnPGtT4r0.C", "ROLE_ADMIN");
			userRepositoryrepository.save(user1);
			userRepositoryrepository.save(user2);

			Bank bank1 = new Bank("ABR", "8-812-335-85-00","Moscow" );
			Bank bank2 = new Bank("RNCB", "8-800-234-27-27", "Simferopol");
			Bank bank3 = new Bank("Genbank","8-800-333-55-45","Simferopol");
			Bank bank4 = new Bank("DD", "8-800-555-35-35","Moscow" );
			bankRepository.save(bank1);
			bankRepository.save(bank2);
			bankRepository.save(bank3);
			bankRepository.save(bank4);
		};
	}
}
