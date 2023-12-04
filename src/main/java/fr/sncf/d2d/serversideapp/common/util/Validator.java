package fr.sncf.d2d.serversideapp.common.util;

import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import fr.sncf.d2d.serversideapp.common.exceptions.ValidationException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import lombok.RequiredArgsConstructor;
import lombok.val;

@Component
@RequiredArgsConstructor
public class Validator {

    public void validate(Object object) throws ValidationException {

        try (val factory = Validation.buildDefaultValidatorFactory()) {

            val validator = factory.getValidator();
            val errors = validator.validate(object);

            if (!errors.isEmpty())
                throw new ValidationException(
                    errors.stream()
                        .map(ConstraintViolation::getMessage)
                        .collect(Collectors.toUnmodifiableSet()
                ));
        }
    }
}
