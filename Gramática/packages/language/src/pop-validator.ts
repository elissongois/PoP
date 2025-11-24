import type { ValidationChecks } from 'langium';
import type { PortuguesPuroAstType } from './generated/ast.js';
import type { PortuguesPuroServices } from './pop-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: PortuguesPuroServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.PortuguesPuroValidator;
    const checks: ValidationChecks<PortuguesPuroAstType> = {
        // DeclaracaoGlobal check removed
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class PortuguesPuroValidator {

    // checkDeclaracaoGlobal removed as per user request
}
